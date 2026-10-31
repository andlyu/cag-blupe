"""Load the pinned shared CAG application; do not vendor the runner."""
import json
import os
from pathlib import Path
import subprocess
import sys


def create_app():
    lock=json.loads(Path(__file__).with_name('dependency.lock.json').read_text())
    checkout=Path(os.environ['CAG_SHARED_CHECKOUT']).resolve()
    revision=subprocess.check_output(['git','-C',str(checkout),'rev-parse','HEAD'],text=True).strip()
    if revision != lock['shared_revision']:
        raise RuntimeError('CAG shared source revision differs from dependency.lock.json')
    sys.path.insert(0,str(checkout/'codex-runner'))
    sys.path.insert(0,str(checkout/'codex-runner/src'))
    from cag_molmoact_playground import create_app as shared_app
    return shared_app()
