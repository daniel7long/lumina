// Development: rebuild the frontend on change and restart the API when server files change.
import * as esbuild from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { options, writeHtml } from './build.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(ROOT, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const ctx = await esbuild.context({
  ...options(false),
  plugins: [{ name: 'html', setup: (b) => b.onEnd((r) => r.metafile && writeHtml(r.metafile)) }],
});
await ctx.watch();

const api = spawn(process.execPath, ['--no-warnings', '--watch', '--watch-path=server', 'server/index.js'], { cwd: ROOT, stdio: 'inherit' });
const stop = () => { ctx.dispose(); api.kill(); process.exit(0); };
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
console.log('Dev mode: edit files in web/ and server/; refresh the browser to see changes.');
