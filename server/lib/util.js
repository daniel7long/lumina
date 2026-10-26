import crypto from 'node:crypto';

export const nowIso = () => new Date().toISOString();
export const dayOf = (iso) => iso.slice(0, 10);
export const today = () => dayOf(nowIso());
export const uid = () => crypto.randomUUID();

export function addDays(day, n) {
  const d = new Date(`${day}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

/** Monday of the ISO week containing `day`. */
export function weekStart(day) {
  const d = new Date(`${day}T00:00:00Z`);
  const dow = (d.getUTCDay() + 6) % 7; // Mon=0
  d.setUTCDate(d.getUTCDate() - dow);
  return d.toISOString().slice(0, 10);
}

export function daysBetween(a, b) {
  return Math.round((Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`)) / 86400000);
}

export function dayRange(from, to) {
  const out = [];
  for (let d = from; d <= to; d = addDays(d, 1)) out.push(d);
  return out;
}

export const sha256 = (s) => crypto.createHash('sha256').update(s).digest('hex');

export class HttpError extends Error {
  constructor(status, message, details) {
    super(message);
    this.status = status;
    this.details = details;
  }
}
export const bad = (m, d) => new HttpError(400, m, d);
export const unauthorized = (m = 'Please sign in.') => new HttpError(401, m);
export const forbidden = (m = 'You do not have access to this.') => new HttpError(403, m);
export const notFound = (m = 'Not found.') => new HttpError(404, m);

export const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
export const safeJson = (s, fallback) => {
  try {
    return JSON.parse(s);
  } catch {
    return fallback;
  }
};
export const round = (n, d = 1) => {
  const f = 10 ** d;
  return Math.round(n * f) / f;
};
