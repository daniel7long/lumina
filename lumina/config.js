import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Load .env if present (Node >= 20.12 / 22 built-in). Real environment variables win.
const envFile = path.join(ROOT, '.env');
if (fs.existsSync(envFile) && typeof process.loadEnvFile === 'function') {
  process.loadEnvFile(envFile);
}

const num = (v, d) => {
  const n = Number(v);
  return Number.isFinite(n) && v !== '' && v != null ? n : d;
};

/** Build config from an env object. Exported as a function so tests can override. */
export function loadConfig(env = process.env) {
  const port = num(env.PORT, 4317);
  const publicUrl = env.PUBLIC_URL || `http://localhost:${port}`;
  return Object.freeze({
    env: env.NODE_ENV || 'development',
    isProd: env.NODE_ENV === 'production',
    port,
    publicUrl,
    secureCookies: publicUrl.startsWith('https://'),
    trustProxy: env.TRUST_PROXY === '1',
    rateLimitScale: num(env.RATE_LIMIT_SCALE, 1), // multiplies every per-IP limit (tests use a big number)
    databaseUrl: env.DATABASE_URL || 'sqlite:./data/lumina.db',
    adminEmail: (env.ADMIN_EMAIL || 'admin@lumina.local').toLowerCase(),
    adminPassword: env.ADMIN_PASSWORD || 'ChangeMe!2026',
    googleClientId: env.GOOGLE_CLIENT_ID || '',
    openaiKey: env.OPENAI_API_KEY || '',
    openaiModel: env.OPENAI_MODEL || 'gpt-4o-mini',
    dropoutDays: num(env.DROPOUT_DAYS, 14),
    sessionDays: num(env.SESSION_DAYS, 30),
    distDir: path.join(ROOT, 'dist'),
    brand: { name: 'Lumina Learning' },
    // Rating bands (percent score >= min). Learners pass at B or higher.
    ratingBands: [
      { rating: 'A+', min: 95 },
      { rating: 'A', min: 90 },
      { rating: 'B+', min: 85 },
      { rating: 'B', min: 80 },
      { rating: 'C', min: 0 },
    ],
    passRating: 'B',
  });
}

export const config = loadConfig();
