// Database access layer.
//
// One tiny async interface over two drivers so the rest of the code never knows which is in use:
//   db.all(sql, params)  -> rows[]
//   db.get(sql, params)  -> row | undefined
//   db.run(sql, params)  -> { changes }
//   db.tx(async (t) => …) -> runs t.all/get/run inside one transaction
//
// SQL is written once with "?" placeholders in a portable subset (see migrations/001_init.sql).
// - sqlite: Node's built-in `node:sqlite` (zero install; ideal for development and pilots)
// - postgres: the `pg` package (production). The Postgres adapter is a thin pass-through but has
//   NOT been exercised in the build sandbox — run the test-suite against a staging Postgres first.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROOT } from '../config.js';

function toPg(sql) {
  let i = 0;
  return sql.replace(/\?/g, () => `$${++i}`);
}

async function openSqlite(url) {
  let DatabaseSync;
  try {
    ({ DatabaseSync } = await import('node:sqlite'));
  } catch {
    throw new Error('This project needs Node.js 22.13 or newer (built-in node:sqlite). Run `node -v` to check.');
  }
  const file = url.replace(/^sqlite:/, '');
  const target = file === ':memory:' ? file : path.resolve(ROOT, file);
  if (target !== ':memory:') fs.mkdirSync(path.dirname(target), { recursive: true });
  const raw = new DatabaseSync(target);
  raw.exec('PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 5000; PRAGMA synchronous = NORMAL;');

  const exec = {
    all: (sql, p = []) => raw.prepare(sql).all(...p).map((r) => ({ ...r })),
    get: (sql, p = []) => {
      const r = raw.prepare(sql).get(...p);
      return r ? { ...r } : undefined;
    },
    run: (sql, p = []) => ({ changes: Number(raw.prepare(sql).run(...p).changes) }),
  };

  // The driver is synchronous, so transactions are serialised with a simple queue.
  let chain = Promise.resolve();
  const db = {
    dialect: 'sqlite',
    all: async (s, p) => exec.all(s, p),
    get: async (s, p) => exec.get(s, p),
    run: async (s, p) => exec.run(s, p),
    exec: async (sql) => raw.exec(sql),
    tx(fn) {
      const job = chain.then(async () => {
        raw.exec('BEGIN IMMEDIATE');
        try {
          const out = await fn({
            all: async (s, p) => exec.all(s, p),
            get: async (s, p) => exec.get(s, p),
            run: async (s, p) => exec.run(s, p),
          });
          raw.exec('COMMIT');
          return out;
        } catch (e) {
          raw.exec('ROLLBACK');
          throw e;
        }
      });
      chain = job.catch(() => {});
      return job;
    },
    close: async () => raw.close(),
  };
  return db;
}

async function openPostgres(url) {
  let pg;
  try {
    pg = (await import('pg')).default;
  } catch {
    throw new Error('PostgreSQL selected but the "pg" package is missing. Run `npm install pg`.');
  }
  pg.types.setTypeParser(20, (v) => Number(v)); // bigint (COUNT)
  pg.types.setTypeParser(1700, (v) => Number(v)); // numeric (SUM/AVG)
  const pool = new pg.Pool({ connectionString: url, max: Number(process.env.PG_POOL_MAX || 20) });
  const wrap = (client) => ({
    all: async (s, p = []) => (await client.query(toPg(s), p)).rows,
    get: async (s, p = []) => (await client.query(toPg(s), p)).rows[0],
    run: async (s, p = []) => ({ changes: (await client.query(toPg(s), p)).rowCount }),
  });
  return {
    dialect: 'postgres',
    ...wrap(pool),
    exec: async (sql) => pool.query(sql),
    async tx(fn) {
      const client = await pool.connect();
      try {
        await client.query('BEGIN');
        const out = await fn(wrap(client));
        await client.query('COMMIT');
        return out;
      } catch (e) {
        await client.query('ROLLBACK');
        throw e;
      } finally {
        client.release();
      }
    },
    close: () => pool.end(),
  };
}

export async function openDb(url) {
  if (url.startsWith('postgres://') || url.startsWith('postgresql://')) return openPostgres(url);
  if (url.startsWith('sqlite:')) return openSqlite(url);
  throw new Error(`Unsupported DATABASE_URL "${url}". Use sqlite:./file.db or postgres://…`);
}

/** Apply any new .sql files in migrations/ in filename order. Safe to call on every boot. */
export async function migrate(db) {
  await db.exec('CREATE TABLE IF NOT EXISTS schema_migrations (name TEXT PRIMARY KEY, applied_at TEXT NOT NULL)');
  const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'migrations');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.sql')).sort();
  const done = new Set((await db.all('SELECT name FROM schema_migrations')).map((r) => r.name));
  for (const f of files) {
    if (done.has(f)) continue;
    const sql = fs.readFileSync(path.join(dir, f), 'utf8').replace(/^\s*--.*$/gm, '');
    await db.tx(async (t) => {
      for (const stmt of sql.split(/;\s*$/m).map((s) => s.trim()).filter(Boolean)) await t.run(stmt);
      await t.run('INSERT INTO schema_migrations (name, applied_at) VALUES (?, ?)', [f, new Date().toISOString()]);
    });
  }
}
