import { config } from '../config.js';
import { openDb, migrate } from '../db/index.js';

const db = await openDb(config.databaseUrl);
await migrate(db);
console.log('Database is up to date.');
await db.close();
