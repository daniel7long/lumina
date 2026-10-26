// Turns pasted rich text (from Word, Google Docs, web pages) into the Markdown that lessons use.
// Handles headings, bold/italic, bullet and numbered lists, tables, quotes and rules. Everything else becomes plain text.
const SKIP = new Set(['STYLE', 'SCRIPT', 'META', 'HEAD', 'TITLE', 'LINK', 'IMG', 'SVG']);
const BLOCK = new Set(['P', 'DIV', 'LI', 'UL', 'OL', 'TABLE', 'TR', 'TD', 'TH', 'BLOCKQUOTE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SECTION', 'ARTICLE']);

function mark(inner, m) {
  const x = /^(\s*)([\s\S]*?)(\s*)$/.exec(inner);
  return x[2] ? `${x[1]}${m}${x[2]}${m}${x[3]}` : inner;
}

function inl(node) {
  let s = '';
  for (const c of node.childNodes) {
    if (c.nodeType === 3) { s += c.nodeValue.replace(/\s+/g, ' '); continue; }
    if (c.nodeType !== 1 || SKIP.has(c.tagName)) continue;
    const t = c.tagName;
    const inner = inl(c);
    const weight = c.style?.fontWeight;
    if (t === 'STRONG' || t === 'B' || weight === 'bold' || Number(weight) >= 600) s += mark(inner, '**');
    else if (t === 'EM' || t === 'I' || c.style?.fontStyle === 'italic') s += mark(inner, '*');
    else if (t === 'CODE') s += `\`${inner.trim()}\``;
    else if (t === 'BR') s += ' ';
    else s += inner + (BLOCK.has(t) ? ' ' : '');
  }
  return s;
}

function table(t) {
  const rows = [...t.querySelectorAll('tr')].map((tr) => [...tr.children].filter((c) => /^T[DH]$/.test(c.tagName)).map((c) => inl(c).replace(/\s+/g, ' ').replace(/\|/g, '/').trim()));
  const width = Math.max(0, ...rows.map((r) => r.length));
  if (!rows.length || !width) return '';
  const pad = (r) => [...r, ...Array(width - r.length).fill('')];
  const line = (r) => `| ${pad(r).join(' | ')} |`;
  return `\n\n${line(rows[0])}\n| ${Array(width).fill('---').join(' | ')} |\n${rows.slice(1).map(line).join('\n')}\n\n`;
}

function blocks(node) {
  let out = '';
  for (const c of node.childNodes) {
    if (c.nodeType === 3) { out += c.nodeValue.replace(/\s+/g, ' '); continue; }
    if (c.nodeType !== 1 || SKIP.has(c.tagName)) continue;
    const t = c.tagName;
    if (/^H[1-6]$/.test(t)) out += `\n\n${t <= 'H2' ? '##' : '###'} ${inl(c).trim()}\n\n`;
    else if (t === 'P') out += `\n\n${inl(c).trim()}\n\n`;
    else if (t === 'UL' || t === 'OL') {
      const items = [...c.children].filter((li) => li.tagName === 'LI').map((li) => inl(li).replace(/\s+/g, ' ').trim()).filter(Boolean);
      out += `\n\n${items.map((x, i) => `${t === 'OL' ? `${i + 1}.` : '-'} ${x}`).join('\n')}\n\n`;
    } else if (t === 'TABLE') out += table(c);
    else if (t === 'BLOCKQUOTE') out += `\n\n${inl(c).trim().split(/\n+/).map((l) => `> ${l}`).join('\n')}\n\n`;
    else if (t === 'HR') out += '\n\n---\n\n';
    else if (c.querySelector('p,h1,h2,h3,h4,h5,h6,ul,ol,table,blockquote,div')) out += blocks(c);
    else if (BLOCK.has(t)) out += `\n\n${inl(c).trim()}\n\n`;
    else out += inl({ childNodes: [c] });
  }
  return out;
}

/** True when the clipboard HTML carries structure worth converting. */
export const hasStructure = (html) => /<(h[1-6]|table|ul|ol|li|strong|b|em|i|blockquote)[\s>]/i.test(html);

export function htmlToMarkdown(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return blocks(doc.body).replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').replace(/[ \t]{2,}/g, ' ').trim();
}
