import test from 'node:test';
import assert from 'node:assert/strict';
import worker, {runnerHeaders} from './index.js';

test('forwards runner credentials while excluding Sites and provider credentials', () => {
  const result = runnerHeaders(new Request('https://site.test/api/state', {headers:{
    Cookie:'openai-session=private; __Host-yam-visitor-cag-443=runner; other=hidden',
    Authorization:'Bearer private', 'X-YAM-Runner-Token':'csrf', Origin:'https://site.test',
  }}));
  assert.equal(result.get('cookie'),'__Host-yam-visitor-cag-443=runner');
  assert.equal(result.get('authorization'),null);
  assert.equal(result.get('x-yam-runner-token'),'csrf');
  assert.equal(result.get('origin'),'https://site.test');
});

test('preserves run request method, body, query and independent visitor cookie', async () => {
  const original=globalThis.fetch;
  globalThis.fetch=async (url,options) => {
    assert.equal(String(url),'https://playground.blupe.io/cag-site/api/run?test=1');
    assert.equal(options.method,'POST');
    assert.equal(options.headers.get('x-cag-edge-key'),'test-edge-key');
    assert.equal(await new Response(options.body).text(),'{"mode":"guided"}');
    return new Response('{"ok":true}',{headers:{'Set-Cookie':'__Host-yam-visitor-cag-443=new; Secure; Path=/; HttpOnly'}});
  };
  try {
    const result=await worker.fetch(new Request('https://site.test/api/run?test=1',{
      method:'POST',body:'{"mode":"guided"}',headers:{'Content-Type':'application/json'},
    }),{CAG_EDGE_KEY:'test-edge-key'});
    assert.match(result.headers.get('set-cookie'),/HttpOnly/);
    assert.equal(result.headers.get('cache-control'),'no-store');
  } finally { globalThis.fetch=original; }
});

test('unconfigured edge rejects before contacting the backend', async () => {
  const result=await worker.fetch(new Request('https://site.test/'),{});
  assert.equal(result.status,503);
});

test('known signed-in identity becomes editable defaults without forwarding account headers', async () => {
  const original=globalThis.fetch;
  globalThis.fetch=async (_url,options) => {
    assert.equal(options.headers.get('oai-authenticated-user-email'),null);
    return new Response('{"csrf":"test"}',{headers:{'Content-Type':'application/json'}});
  };
  try {
    const result=await worker.fetch(new Request('https://site.test/api/session', {headers:{
      'oai-authenticated-user-email':'participant@example.com',
      'oai-authenticated-user-full-name':'Test%20Participant',
      'oai-authenticated-user-full-name-encoding':'percent-encoded-utf-8',
    }}),{CAG_EDGE_KEY:'test'});
    assert.deepEqual((await result.json()).research_identity_defaults,{
      runner_name:'Test Participant',email:'participant@example.com',
    });
  } finally { globalThis.fetch=original; }
});
