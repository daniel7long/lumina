import { bad, HttpError, nowIso, dayOf, uid, sha256, unauthorized } from '../lib/util.js';
import { hashPassword, verifyPassword, newSessionToken } from '../lib/crypto.js';

export const publicUser = (u) => ({ id: u.id, email: u.email, name: u.name, role: u.role });

async function startSession(ctx, user) {
  const token = newSessionToken();
  const days = ctx.config.sessionDays;
  const at = new Date();
  await ctx.db.run('INSERT INTO sessions (token_hash, user_id, created_at, expires_at, user_agent) VALUES (?,?,?,?,?)', [
    sha256(token),
    user.id,
    at.toISOString(),
    new Date(at.getTime() + days * 86400000).toISOString(),
    String(ctx.req.headers['user-agent'] || '').slice(0, 200),
  ]);
  await ctx.db.run('UPDATE users SET last_login_at = ?, login_count = login_count + 1 WHERE id = ?', [at.toISOString(), user.id]);
  ctx.setSessionCookie(token, days * 86400);
  // Opportunistic cleanup keeps the table small without a cron job.
  if (Math.random() < 0.02) await ctx.db.run('DELETE FROM sessions WHERE expires_at < ?', [nowIso()]);
}

export async function signUp(ctx, { name, email, password }) {
  const existing = await ctx.db.get('SELECT id FROM users WHERE email = ?', [email]);
  if (existing) throw new HttpError(409, 'An account with this email already exists. Try signing in instead.');
  const at = nowIso();
  const user = { id: uid(), email, name, role: 'learner' };
  await ctx.db.run(
    'INSERT INTO users (id, email, name, password_hash, role, status, created_at, created_day) VALUES (?,?,?,?,?,?,?,?)',
    [user.id, email, name, await hashPassword(password), 'learner', 'active', at, dayOf(at)],
  );
  await startSession(ctx, user);
  return publicUser(user);
}

export async function logIn(ctx, { email, password }) {
  const key = `login:${email}`;
  const v = ctx.limiter(key, 10, 15 * 60_000);
  if (!v.ok) throw new HttpError(429, 'Too many sign-in attempts. Please wait a few minutes.');
  const user = await ctx.db.get('SELECT * FROM users WHERE email = ?', [email]);
  // Always run a hash comparison so response time does not reveal whether the email exists.
  const ok = await verifyPassword(password, user?.password_hash || 'scrypt$32768$AAAAAAAAAAAAAAAAAAAAAA==$' + 'A'.repeat(86) + '==');
  if (!user || !ok) throw unauthorized('Email or password is incorrect.');
  if (user.status !== 'active') throw new HttpError(403, 'This account has been suspended. Please contact support.');
  await startSession(ctx, user);
  return publicUser(user);
}

export async function logInWithGoogle(ctx, profile) {
  let user = await ctx.db.get('SELECT * FROM users WHERE google_sub = ?', [profile.sub]);
  if (!user) {
    user = await ctx.db.get('SELECT * FROM users WHERE email = ?', [profile.email]);
    if (user) {
      // Link the Google identity to the existing (email-verified by Google) account.
      await ctx.db.run('UPDATE users SET google_sub = ? WHERE id = ?', [profile.sub, user.id]);
    } else {
      const at = nowIso();
      user = { id: uid(), email: profile.email, name: profile.name, role: 'learner', status: 'active' };
      await ctx.db.run(
        'INSERT INTO users (id, email, name, google_sub, role, status, created_at, created_day) VALUES (?,?,?,?,?,?,?,?)',
        [user.id, user.email, user.name, profile.sub, 'learner', 'active', at, dayOf(at)],
      );
    }
  }
  if (user.status !== 'active') throw new HttpError(403, 'This account has been suspended. Please contact support.');
  await startSession(ctx, user);
  return publicUser(user);
}

export async function logOut(ctx) {
  if (ctx.currentSessionHash) await ctx.db.run('DELETE FROM sessions WHERE token_hash = ?', [ctx.currentSessionHash]);
  ctx.clearSessionCookie();
}

export function requireFields(body, fields) {
  for (const f of fields) if (body[f] == null) throw bad(`${f} is required.`);
}
