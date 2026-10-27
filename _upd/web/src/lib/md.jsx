// Small, safe Markdown renderer for lesson text. It builds React elements (never raw HTML),
// so authored content cannot inject scripts. Supports: ## / ### headings, paragraphs,
// bullet and numbered lists, > quotes, | tables |, --- rules, **bold**, *italic*, `code`,
// and ``` fenced code blocks.
import { Fragment } from 'react';

function inline(text, key = 'i') {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`)/g;
  let last = 0, m, n = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const t = m[0];
    if (t.startsWith('**')) out.push(<strong key={`${key}${n++}`}>{inline(t.slice(2, -2), `${key}${n}b`)}</strong>);
    else if (t.startsWith('`')) out.push(<code key={`${key}${n++}`}>{t.slice(1, -1)}</code>);
    else out.push(<em key={`${key}${n++}`}>{inline(t.slice(1, -1), `${key}${n}e`)}</em>);
    last = m.index + t.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const cells = (line) => line.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());

export function Markdown({ text = '', className = '' }) {
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (/^```/.test(line.trim())) {
      const code = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i].trim())) code.push(lines[i++]);
      i++;
      blocks.push(<pre className="codeblock" key={i}><code>{code.join('\n')}</code></pre>);
      continue;
    }
    if (/^---+$/.test(line.trim())) { blocks.push(<hr key={i} />); i++; continue; }
    let m;
    if ((m = /^(#{1,4})\s+(.*)$/.exec(line))) {
      const level = Math.min(m[1].length + 1, 5);
      const H = `h${level}`;
      blocks.push(<H key={i}>{inline(m[2])}</H>);
      i++; continue;
    }
    if (line.trim().startsWith('|') && lines[i + 1]?.includes('---')) {
      const head = cells(line);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(cells(lines[i++]));
      blocks.push(
        <div className="table-wrap" key={i}>
          <table>
            <thead><tr>{head.map((h, k) => <th key={k}>{inline(h)}</th>)}</tr></thead>
            <tbody>{rows.map((r, k) => <tr key={k}>{r.map((c, j) => <td key={j}>{inline(c)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }
    if (line.startsWith('>')) {
      const q = [];
      while (i < lines.length && lines[i].startsWith('>')) q.push(lines[i++].replace(/^>\s?/, ''));
      blocks.push(
        <blockquote key={i}>
          {q.join('\n').split(/\n\n+/).map((p, k) => (
            <p key={k}>{p.split('\n').map((l, j) => <Fragment key={j}>{j > 0 && <br />}{inline(l)}</Fragment>)}</p>
          ))}
        </blockquote>,
      );
      continue;
    }
    if (/^\s*([-*•☐✔✘])\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*([-*•☐✔✘])\s+/.test(lines[i])) {
        const mm = /^\s*([-*•☐✔✘])\s+(.*)$/.exec(lines[i++]);
        items.push({ mark: /[☐✔✘]/.test(mm[1]) ? mm[1] : null, text: mm[2] });
      }
      blocks.push(<ul key={i}>{items.map((it, k) => <li key={k} className={it.mark ? 'mark' : ''}>{it.mark && <span className="mk">{it.mark}</span>}{inline(it.text)}</li>)}</ul>);
      continue;
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      const start = parseInt(line, 10);
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*\d+\.\s+/, ''));
      blocks.push(<ol key={i} start={start}>{items.map((t, k) => <li key={k}>{inline(t)}</li>)}</ol>);
      continue;
    }
    // paragraph (consecutive plain lines)
    const p = [];
    while (i < lines.length && lines[i].trim() && !/^(```|#{1,4}\s|>|\||---+$|\s*[-*•☐✔✘]\s|\s*\d+\.\s)/.test(lines[i])) p.push(lines[i++]);
    if (!p.length) { p.push(lines[i++]); }
    blocks.push(<p key={i}>{p.map((l, j) => <Fragment key={j}>{j > 0 && <br />}{inline(l)}</Fragment>)}</p>);
  }
  return <div className={`prose ${className}`}>{blocks}</div>;
}
