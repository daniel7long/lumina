// HTTP plumbing: router, auth, rate limiting, security headers, JSON helpers, static files.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { promisify } from 'node:util';
import { HttpError, bad, unauthorized, forbidden, nowIso, sha256 } from '../lib/util.js';

const gzip = promisify(zlib.gzip);
const COOKIE = 'lumina_sid';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.map': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
};

export function createRouter() {
  const routes = [];
  const add = (method) => (pattern, opts, handler) => {
    if (typeof opts === 'function') [handler, opts] = [opts, {}];
    const keys = [];
    const regex = new RegExp(
      '^' + pattern.replace(/:([A-Za-z]+)/g, (_, k) => (keys.push(k), '([^/]+)')) + '/?$',
    );
    routes.push({ method, regex, keys, opts, handler });
  };
  return {
    routes,
    get: add('GET'),
    post: add('POST'),
    put: add('PUT'),
    patch: add('PATCH'),
    delete: add('DELETE'),
    match(method, pathname) {
      let pathMatched = false;
      for (const r of routes) {
        const m = r.regex.exec(pathname);
        if (!m) continue;
        pathMatched = true;
        if (r.method !== method) continue;
        const params = {};
        r.keys.forEach((k, i) => (params[k] = decodeURIComponent(m[i + 1])));
        return { route: r, params };
      }
      return { route: null, pathMatched };
    },
  };
}

/** Fixed-window in-memory limiter. Use Redis (or the load balancer) when running several instances. */
function createLimiter() {
  const hits = new Map();
  const timer = setInterval(() => {
    const now = Date.now();
    for (const [k, v] of hits) if (v.reset < now) hits.delete(k);
  }, 60_000);
  timer.unref();
  return (key, max, windowMs) => {
    const now = Date.now();
    let h = hits.get(key);
    if (!h || h.reset < now) {
      h = { count: 0, reset: now + windowMs };
      hits.set(key, h);
    }
    h.count += 1;
    return { ok: h.count <= max, retryAfter: Math.ceil((h.reset - now) / 1000) };
  };
}

async function readBody(req, limit) {
  const chunks = [];
  let size = 0;
  for await (const c of req) {
    size += c.length;
    if (size > limit) throw new HttpError(413, 'Request is too large.');
    chunks.push(c);
  }
  if (!size) return {};
  const ct = req.headers['content-type'] || '';
  if (!ct.includes('application/json')) throw bad('Send JSON with Content-Type: application/json.');
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw bad('Request body is not valid JSON.');
  }
}

function parseCookies(header = '') {
  const out = {};
  for (const part of header.split(';')) {
    const i = part.indexOf('=');
    if (i > 0) out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim());
  }
  return out;
}

export function createApp({ db, config, router }) {
  const limiter = createLimiter();
  const staticCache = new Map();

  const csp = [
    "default-src 'self'",
    "script-src 'self' https://accounts.google.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://accounts.google.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "media-src 'self' https:",
    "frame-src https://accounts.google.com https://www.youtube-nocookie.com https://player.vimeo.com",
    "connect-src 'self' https://accounts.google.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ');

  function securityHeaders(res) {
    res.setHeader('Content-Security-Policy', csp);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('X-Frame-Options', 'DENY');
    // Google Identity Services popup needs window.opener access.
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    if (config.secureCookies) res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }

  async function sendJson(req, res, status, data, extraHeaders = {}) {
    const body = Buffer.from(JSON.stringify(data));
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    for (const [k, v] of Object.entries(extraHeaders)) res.setHeader(k, v);
    if (body.length > 1024 && /\bgzip\b/.test(req.headers['accept-encoding'] || '')) {
      const z = await gzip(body);
      res.setHeader('Content-Encoding', 'gzip');
      res.setHeader('Vary', 'Accept-Encoding');
      res.end(z);
    } else {
      res.end(body);
    }
  }

  const clientIp = (req) =>
    (config.trustProxy && req.headers['x-forwarded-for']?.split(',')[0].trim()) || req.socket.remoteAddress || 'unknown';

  async function authenticate(req) {
    const sid = parseCookies(req.headers.cookie)[COOKIE];
    if (!sid) return null;
    const row = await db.get(
      `SELECT u.id, u.email, u.name, u.role, u.status, s.token_hash
         FROM sessions s JOIN users u ON u.id = s.user_id
        WHERE s.token_hash = ? AND s.expires_at > ?`,
      [sha256(sid), nowIso()],
    );
    if (!row || row.status !== 'active') return null;
    return row;
  }

  function setSessionCookie(res, token, maxAgeSec) {
    const attrs = [`${COOKIE}=${token}`, 'Path=/', 'HttpOnly', 'SameSite=Lax', `Max-Age=${maxAgeSec}`];
    if (config.secureCookies) attrs.push('Secure');
    res.setHeader('Set-Cookie', attrs.join('; '));
  }

  async function serveStatic(req, res, pathname) {
    const root = config.distDir;
    let rel = decodeURIComponent(pathname);
    if (rel.endsWith('/')) rel += 'index.html';
    let file = path.normalize(path.join(root, rel));
    if (!file.startsWith(root)) return false;
    const isAsset = path.extname(rel) !== '';
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      if (isAsset) return false;
      file = path.join(root, 'index.html'); // SPA fallback
      if (!fs.existsSync(file)) return false;
    }
    const ext = path.extname(file);
    const stat = fs.statSync(file);
    let entry = staticCache.get(file);
    if (!entry || entry.mtime !== stat.mtimeMs) {
      const raw = fs.readFileSync(file);
      const compressible = ['.html', '.js', '.css', '.json', '.svg', '.txt', '.map'].includes(ext);
      entry = { mtime: stat.mtimeMs, raw, gz: compressible ? await gzip(raw) : null };
      staticCache.set(file, entry);
    }
    res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
    res.setHeader(
      'Cache-Control',
      /\/assets\//.test(file.replace(/\\/g, '/')) ? 'public, max-age=31536000, immutable' : 'no-cache',
    );
    if (entry.gz && /\bgzip\b/.test(req.headers['accept-encoding'] || '')) {
      res.setHeader('Content-Encoding', 'gzip');
      res.setHeader('Vary', 'Accept-Encoding');
      res.end(entry.gz);
    } else res.end(entry.raw);
    return true;
  }

  async function handle(req, res) {
    securityHeaders(res);
    const url = new URL(req.url, 'http://localhost');
    const pathname = url.pathname;
    try {
      if (!pathname.startsWith('/api/')) {
        if (req.method !== 'GET' && req.method !== 'HEAD') throw new HttpError(405, 'Method not allowed.');
        if (await serveStatic(req, res, pathname)) return;
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return void res.end('Not found. Have you run `npm run build`?');
      }

      const { route, params, pathMatched } = router.match(req.method, pathname);
      if (!route) throw new HttpError(pathMatched ? 405 : 404, pathMatched ? 'Method not allowed.' : 'Unknown API route.');

      const ip = clientIp(req);
      const lim = route.opts.limit || { max: 300, windowMs: 60_000 };
      const verdict = limiter(`${ip}:${route.opts.bucket || 'api'}`, lim.max * config.rateLimitScale, lim.windowMs);
      if (!verdict.ok) {
        res.setHeader('Retry-After', String(verdict.retryAfter));
        throw new HttpError(429, 'Too many requests. Please wait a moment and try again.');
      }

      const mutating = !['GET', 'HEAD', 'OPTIONS'].includes(req.method);
      if (mutating && req.headers['x-requested-with'] !== 'lumina') throw forbidden('Missing request header.');

      const user = await authenticate(req);
      if (route.opts.auth && !user) throw unauthorized();
      if (route.opts.auth === 'admin' && user.role !== 'admin') throw forbidden('Administrator access required.');

      const body = mutating ? await readBody(req, route.opts.bodyLimit || 256 * 1024) : {};
      const query = Object.fromEntries(url.searchParams);
      const ctx = {
        req,
        res,
        db,
        config,
        params,
        query,
        body,
        user,
        ip,
        setSessionCookie: (token, maxAge) => setSessionCookie(res, token, maxAge),
        clearSessionCookie: () => setSessionCookie(res, '', 0),
        currentSessionHash: parseCookies(req.headers.cookie)[COOKIE] ? sha256(parseCookies(req.headers.cookie)[COOKIE]) : null,
        limiter,
      };
      const out = await route.handler(ctx);
      await sendJson(req, res, 200, out ?? { ok: true });
    } catch (err) {
      if (res.headersSent) return void res.end();
      if (err instanceof HttpError) {
        return void (await sendJson(req, res, err.status, { error: { message: err.message, details: err.details } }));
      }
      console.error(`[error] ${req.method} ${pathname}`, err);
      await sendJson(req, res, 500, { error: { message: 'Something went wrong on our side. Please try again.' } });
    }
  }

  return { handle };
}
