// The Python runner owns visitors, CSRF checks, robot leases and model credentials.
// Forward only runner headers; never relay Sites account credentials upstream.
const ORIGIN = 'https://playground.blupe.io';
const PREFIX = '/cag-site';
const FORWARDED = ['accept', 'content-type', 'origin', 'range', 'if-range',
  'sec-fetch-site', 'x-yam-runner-token', 'x-blupe-robot'];

export function runnerHeaders(request) {
  const headers = new Headers();
  for (const name of FORWARDED) {
    const value = request.headers.get(name);
    if (value !== null) headers.set(name, value);
  }
  const cookies = (request.headers.get('cookie') || '').split(';')
    .map(value => value.trim()).filter(value => value.startsWith('__Host-yam-visitor-cag-443='));
  if (cookies.length) headers.set('cookie', cookies.join('; '));
  return headers;
}

export default {
  async fetch(request, env) {
    if (!env?.CAG_EDGE_KEY) return new Response('Website connection is not configured.', {status:503});
    const incoming = new URL(request.url);
    const target = new URL(ORIGIN);
    target.pathname = PREFIX + incoming.pathname;
    target.search = incoming.search;
    const headers = runnerHeaders(request);
    headers.set('X-CAG-Edge-Key', env.CAG_EDGE_KEY);
    const upstream = await fetch(target, {
      method: request.method, headers, redirect: 'manual',
      body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
    });
    let body = upstream.body;
    if (incoming.pathname === '/api/session' && upstream.ok) {
      const session = await upstream.json();
      let name = request.headers.get('oai-authenticated-user-full-name') || '';
      if (request.headers.get('oai-authenticated-user-full-name-encoding') === 'percent-encoded-utf-8') {
        try { name = decodeURIComponent(name); } catch (_) { name = ''; }
      }
      session.research_identity_defaults = {
        runner_name: name,
        email: request.headers.get('oai-authenticated-user-email') || '',
      };
      body = JSON.stringify(session);
    }
    const response = new Response(body, upstream);
    response.headers.delete('content-length');
    response.headers.set('Cache-Control', 'no-store');
    response.headers.set('Referrer-Policy', 'no-referrer');
    return response;
  },
};
