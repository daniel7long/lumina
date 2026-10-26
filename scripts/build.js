// Bundles the React app with esbuild into dist/ (hashed filenames, minified in production).
import * as esbuild from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(ROOT, 'dist');

export const options = (production) => ({
  entryPoints: { app: path.join(ROOT, 'web/src/main.jsx') },
  bundle: true,
  outdir: path.join(dist, 'assets'),
  entryNames: '[name]-[hash]',
  format: 'esm',
  jsx: 'automatic',
  target: ['es2022', 'chrome110', 'safari16', 'firefox110'],
  minify: production,
  sourcemap: production ? false : 'linked',
  metafile: true,
  logLevel: 'info',
  define: { 'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development') },
  loader: { '.css': 'css' },
});

export function writeHtml(meta) {
  const outs = Object.keys(meta.outputs).map((f) => path.basename(f));
  const js = outs.find((f) => f.endsWith('.js'));
  const css = outs.find((f) => f.endsWith('.css'));
  const html = fs.readFileSync(path.join(ROOT, 'web/index.html'), 'utf8').replace(
    '<!--ASSETS-->',
    `${css ? `<link rel="stylesheet" href="/assets/${css}" />` : ''}\n    <script type="module" src="/assets/${js}"></script>`,
  );
  fs.writeFileSync(path.join(dist, 'index.html'), html);
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  fs.rmSync(dist, { recursive: true, force: true });
  fs.mkdirSync(dist, { recursive: true });
  const res = await esbuild.build(options(true));
  writeHtml(res.metafile);
  console.log('Built → dist/');
}
