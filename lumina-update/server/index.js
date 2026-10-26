import http from 'node:http';
import { pathToFileURL } from 'node:url';
import { config as defaultConfig } from './config.js';
import { openDb, migrate } from './db/index.js';
import { createApp, } from './http/app.js';
import { buildRouter } from './routes/index.js';

/** Build a fully wired server. Tests call this with their own config / in-memory database. */
export async function createServer(config = defaultConfig, opts = {}) {
  const db = opts.db || (await openDb(config.databaseUrl));
  await migrate(db);
  const router = buildRouter({ googleKeys: opts.googleKeys });
  const app = createApp({ db, config, router });
  const server = http.createServer((req, res) => {
    app.handle(req, res).catch((e) => {
      console.error('[fatal]', e);
      if (!res.headersSent) res.statusCode = 500;
      res.end();
    });
  });
  server.requestTimeout = 60_000;
  server.keepAliveTimeout = 65_000; // slightly above common load-balancer idle timeouts
  return { server, db, config };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { server, db, config } = await createServer();
  server.listen(config.port, () => {
    console.log(`\n  ${config.brand.name} is running at http://localhost:${config.port}`);
    console.log(`  Database: ${config.databaseUrl.replace(/:\/\/[^@]*@/, '://***@')}`);
    console.log(`  Google sign-in: ${config.googleClientId ? 'enabled' : 'not configured (set GOOGLE_CLIENT_ID)'}`);
    console.log(`  AI assistant: ${config.openaiKey ? `OpenAI (${config.openaiModel})` : 'built-in lesson helper (set OPENAI_API_KEY for OpenAI)'}\n`);
  });
  const stop = async () => {
    server.close(async () => {
      await db.close();
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10_000).unref();
  };
  process.on('SIGINT', stop);
  process.on('SIGTERM', stop);
}
