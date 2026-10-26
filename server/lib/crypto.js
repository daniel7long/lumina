import crypto from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify(crypto.scrypt);
// scrypt parameters (N=2^15, r=8, p=1) ≈ OWASP guidance; memory ≈ 32 MiB per hash.
const N = 32768;
const KEYLEN = 64;

export async function hashPassword(password) {
  const salt = crypto.randomBytes(16);
  const key = await scrypt(password, salt, KEYLEN, { N, r: 8, p: 1, maxmem: 128 * 1024 * 1024 });
  return `scrypt$${N}$${salt.toString('base64')}$${key.toString('base64')}`;
}

export async function verifyPassword(password, stored) {
  if (!stored) return false;
  const [scheme, n, salt, key] = stored.split('$');
  if (scheme !== 'scrypt') return false;
  const expected = Buffer.from(key, 'base64');
  const actual = await scrypt(password, Buffer.from(salt, 'base64'), expected.length, {
    N: Number(n),
    r: 8,
    p: 1,
    maxmem: 128 * 1024 * 1024,
  });
  return crypto.timingSafeEqual(actual, expected);
}

export const newSessionToken = () => crypto.randomBytes(32).toString('base64url');
