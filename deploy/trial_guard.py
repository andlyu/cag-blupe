"""Disable this exact RunPod trial at its fixed deadline, then pause its website."""
import argparse
from datetime import datetime, timezone
import json
from pathlib import Path
import subprocess
import time
from urllib.request import Request, urlopen


def api(path, key, payload=None):
    request = Request('https://api.runpod.io/v2/' + path,
        data=None if payload is None else json.dumps(payload).encode(),
        method='GET' if payload is None else 'PATCH',
        headers={'Authorization': 'Bearer ' + key, 'Content-Type': 'application/json'})
    with urlopen(request, timeout=20) as response:
        return json.load(response)


def disable(state, key):
    endpoint=api('serverless/' + state['endpoint'], key)
    volumes=set(endpoint.get('networkVolumes', [])) | {
        mount['volumeId'] for mount in endpoint.get('mounts', {}).get('network', [])}
    if (endpoint['id'] != state['endpoint'] or endpoint['name'] != state['name']
            or endpoint['image'] != state['image'] or state['volume'] not in volumes
            or endpoint['type'] != 'LOAD_BALANCER'):
        raise RuntimeError('Trial resource identity changed')
    result=api('serverless/' + state['endpoint'], key,
        {'workers': {'min': 0, 'max': 0, 'idleTimeout': 300}})
    if any(result['workers'][field] != 0 for field in ('min', 'max')):
        raise RuntimeError('Provider did not disable this endpoint')
    return {'endpoint': result['id'], 'workers': result['workers']}


def pause_website(path, endpoint):
    source=path.read_text()
    if 'CAG_MODEL_ENDPOINT=https://' + endpoint + '.api.runpod.ai' not in source:
        return False  # A later trial owns the website now.
    lines=[line for line in source.splitlines() if not line.startswith('CAG_RUNS_ENABLED=')]
    temporary=path.with_suffix('.guard-tmp')
    temporary.write_text('\n'.join(lines + ['CAG_RUNS_ENABLED=0']) + '\n')
    temporary.chmod(0o600)
    temporary.replace(path)
    subprocess.run(['sudo', 'systemctl', 'restart', 'blupe-cag.service'], check=True)
    return True


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--state', type=Path, required=True)
    parser.add_argument('--key-file', type=Path, required=True)
    parser.add_argument('--website-env', type=Path, required=True)
    args=parser.parse_args()
    state=json.loads(args.state.read_text())
    key=args.key_file.read_text().strip()
    while time.time() < state['deadline']:
        time.sleep(max(0, min(15, state['deadline'] - time.time())))
    # Retry disabling only this owned endpoint after transient network failures.
    while True:
        try:
            result=disable(state, key)
            receipt={'stopped_at': datetime.now(timezone.utc).isoformat(), **result}
            args.state.with_suffix('.stopped.json').write_text(json.dumps(receipt, indent=2)+'\n')
            pause_website(args.website_env, state['endpoint'])
            print(json.dumps(receipt), flush=True)
            return
        except Exception as error:
            print(json.dumps({'event':'deadline_retry','error_type':type(error).__name__}),flush=True)
            time.sleep(5)


if __name__ == '__main__':
    main()
