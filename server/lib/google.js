// Verifies a Google Sign-In ID token (JWT, RS256) using Google's published public keys.
// No SDK needed: signature check via node:crypto + the standard claim checks.
import crypto from 'node:crypto';
import { bad } from './util.js';

const CERTS_URL = 'https://www.googleapis.com/oauth2/v3/certs';
let cache = { keys: null, until: 0 };

async function fetchKeys() {
  if (cache.keys && Date.now() < cache.until) return cache.keys;
  const res = await fetch(CERTS_URL);
  if (!res.ok) throw new Error(`Could not fetch Google keys (${res.status})`);
  const maxAge = /max-age=(\d+)/.exec(res.headers.get('cache-control') || '')?.[1];
  const body = await res.json();
  cache = { keys: body.keys, until: Date.now() + (Number(maxAge) || 3600) * 1000 };
  return cache.keys;
}

const b64json = (s) => JSON.parse(Buffer.from(s, 'base64url').toString('utf8'));

/**
 * @param {string} idToken
 * @param {string} clientId expected audience
 * @param {() => Promise<object[]>} [getKeys] injectable for tests
 */
export async function verifyGoogleIdToken(idToken, clientId, getKeys = fetchKeys) {
  if (!clientId) throw bad('Google sign-in is not configured on this server.');
  const parts = typeof idToken === 'string' ? idToken.split('.') : [];
  if (parts.length !== 3) throw bad('Invalid Google credential.');
  let header, claims;
  try {
    header = b64json(parts[0]);
    claims = b64json(parts[1]);
  } catch {
    throw bad('Invalid Google credential.');
  }
  if (header.alg !== 'RS256') throw bad('Invalid Google credential.');
  const jwk = (await getKeys()).find((k) => k.kid === header.kid);
  if (!jwk) throw bad('Google credential was signed with an unknown key.');
  const ok = crypto.verify(
    'RSA-SHA256',
    Buffer.from(`${parts[0]}.${parts[1]}`),
    crypto.createPublicKey({ key: jwk, format: 'jwk' }),
    Buffer.from(parts[2], 'base64url'),
  );
  if (!ok) throw bad('Google credential signature is invalid.');
  const now = Math.floor(Date.now() / 1000);
  if (!['accounts.google.com', 'https://accounts.google.com'].includes(claims.iss)) throw bad('Invalid Google credential issuer.');
  if (claims.aud !== clientId) throw bad('Google credential was issued for a different app.');
  if (!claims.exp || claims.exp < now - 30) throw bad('Google credential has expired. Please try again.');
  if (!claims.sub || !claims.email) throw bad('Google credential is missing account details.');
  if (claims.email_verified !== true && claims.email_verified !== 'true') throw bad('Your Google email is not verified.');
  return { sub: String(claims.sub), email: String(claims.email).toLowerCase(), name: claims.name || claims.email.split('@')[0] };
}
