import crypto from 'node:crypto';
import { loadConfig } from '../server/config.js';
import { createServer } from '../server/index.js';
import { seed } from '../server/scripts/seed.js';

export async function startTestServer(overrides = {}) {
  const config = loadConfig({
    NODE_ENV: 'test', DATABASE_URL: 'sqlite::memory:', ADMIN_EMAIL: 'admin@test.local', ADMIN_PASSWORD: 'AdminPass!234',
    GOOGLE_CLIENT_ID: 'test-client-id.apps.googleusercontent.com', DROPOUT_DAYS: '14', RATE_LIMIT_SCALE: '1000', ...overrides.env,
  });
  const { server, db } = await createServer(config, overrides);
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const base = `http://127.0.0.1:${server.address().port}`;
  const info = await seed(db, config, { quiet: true, only: ['english'] });
  return { base, db, config, info, close: () => new Promise((r) => server.close(() => db.close().then(r))) };
}

/** Minimal client with a cookie jar. */
export function client(base) {
  let cookie = '';
  const call = async (method, path, body) => {
    const res = await fetch(base + path, {
      method,
      headers: { 'content-type': 'application/json', 'x-requested-with': 'lumina', ...(cookie ? { cookie } : {}) },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    const set = res.headers.get('set-cookie');
    if (set) cookie = set.split(';')[0].endsWith('=') ? '' : set.split(';')[0];
    const data = await res.json().catch(() => ({}));
    return { status: res.status, data };
  };
  return { get: (p) => call('GET', p), post: (p, b = {}) => call('POST', p, b), put: (p, b) => call('PUT', p, b), patch: (p, b) => call('PATCH', p, b), del: (p) => call('DELETE', p), raw: () => cookie };
}

export function makeGoogleKeypair(kid = 'k1') {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
  const jwk = { ...publicKey.export({ format: 'jwk' }), kid, alg: 'RS256', use: 'sig' };
  const sign = (claims) => {
    const b = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
    const head = b({ alg: 'RS256', kid, typ: 'JWT' });
    const body = b(claims);
    const sig = crypto.sign('RSA-SHA256', Buffer.from(`${head}.${body}`), privateKey).toString('base64url');
    return `${head}.${body}.${sig}`;
  };
  return { jwk, sign };
}
