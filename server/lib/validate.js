// Minimal, explicit validators. Each returns the cleaned value or throws HttpError(400).
import { bad } from './util.js';

export const str = (v, name, { min = 0, max = 2000, trim = true } = {}) => {
  if (typeof v !== 'string') throw bad(`${name} must be text.`);
  const s = trim ? v.trim() : v;
  if (s.length < min) throw bad(`${name} is too short.`);
  if (s.length > max) throw bad(`${name} is too long (max ${max} characters).`);
  return s;
};

export const optStr = (v, name, opts) => (v == null || v === '' ? '' : str(v, name, opts));

export const email = (v) => {
  const s = str(v, 'Email', { max: 254 }).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) throw bad('Please enter a valid email address.');
  return s;
};

export const password = (v) => {
  const s = str(v, 'Password', { min: 8, max: 200, trim: false });
  return s;
};

export const oneOf = (v, name, allowed) => {
  if (!allowed.includes(v)) throw bad(`${name} must be one of: ${allowed.join(', ')}.`);
  return v;
};

export const int = (v, name, { min = -Infinity, max = Infinity, def } = {}) => {
  if ((v === undefined || v === null || v === '') && def !== undefined) return def;
  const n = Number(v);
  if (!Number.isInteger(n) || n < min || n > max) throw bad(`${name} must be a whole number between ${min} and ${max}.`);
  return n;
};

export const obj = (v, name) => {
  if (!v || typeof v !== 'object' || Array.isArray(v)) throw bad(`${name} must be an object.`);
  return v;
};

export const arr = (v, name, { max = 1000 } = {}) => {
  if (!Array.isArray(v)) throw bad(`${name} must be a list.`);
  if (v.length > max) throw bad(`${name} has too many entries.`);
  return v;
};
