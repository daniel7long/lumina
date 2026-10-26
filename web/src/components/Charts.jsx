import { useRef, useState } from 'react';

/** Categorical colours, assigned in fixed order. Validated for colour-blind separation (see README). */
export const SERIES = ['#2a78d6', '#eb6834', '#1baf7a', '#6250d6'];

export function ChartCard({ title, sub, tools, table, children, wide }) {
  const [view, setView] = useState('chart');
  return (
    <section className="chartcard" style={wide ? { gridColumn: '1 / -1' } : undefined} aria-label={title}>
      <header>
        <div><h3>{title}</h3>{sub && <p className="sub">{sub}</p>}</div>
        <div className="charthead-tools">
          {tools}
          {table && <button className="viewtoggle" onClick={() => setView(view === 'chart' ? 'table' : 'chart')} aria-pressed={view === 'table'}>{view === 'chart' ? 'View as table' : 'View as chart'}</button>}
        </div>
      </header>
      {view === 'chart' || !table ? children : (
        <div className="tblcard" style={{ marginTop: 8 }}>
          <table className="tbl"><thead><tr>{table.columns.map((c, i) => <th key={i} className={i ? 'num' : ''}>{c}</th>)}</tr></thead>
            <tbody>{table.rows.map((r, i) => <tr key={i}>{r.map((v, j) => <td key={j} className={j ? 'num' : ''}>{v}</td>)}</tr>)}</tbody></table>
        </div>
      )}
    </section>
  );
}

export function Legend({ items }) {
  if (items.length < 2) return null;
  return <div className="legend">{items.map((s) => <span key={s.name}><i style={{ background: s.color }} />{s.name}</span>)}</div>;
}

const niceMax = (v) => {
  if (v <= 0) return 1;
  const p = 10 ** Math.floor(Math.log10(v));
  const n = v / p;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * p;
};
const fmt = (n) => (Math.abs(n) >= 1000 ? `${(n / 1000).toFixed(n % 1000 ? 1 : 0)}k` : `${Math.round(n * 10) / 10}`);

const W = 640, H = 250, M = { l: 40, r: 14, t: 12, b: 28 };

/** series: [{name, color?, points:[{label, value, tip?}]}]; all series share the x labels of the first. */
export function LineChart({ series, unit = '', max, height = H, area = false }) {
  const wrap = useRef(null);
  const [hover, setHover] = useState(null);
  const s = series.map((x, i) => ({ ...x, color: x.color || SERIES[i % SERIES.length] }));
  const n = s[0]?.points.length || 0;
  const top = max ?? niceMax(Math.max(1, ...s.flatMap((x) => x.points.map((p) => p.value ?? 0))));
  const iw = W - M.l - M.r, ih = height - M.t - M.b;
  const X = (i) => M.l + (n <= 1 ? iw / 2 : (i / (n - 1)) * iw);
  const Y = (v) => M.t + ih - (v / top) * ih;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => top * f);
  const step = Math.ceil(n / 7);
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * W;
    setHover(Math.max(0, Math.min(n - 1, Math.round(((x - M.l) / iw) * (n - 1)))));
  };
  const tipLeft = hover == null ? 0 : (X(hover) / W) * 100;
  return (
    <div className="chartwrap" ref={wrap}>
      <Legend items={s} />
      <svg className="chart" viewBox={`0 0 ${W} ${height}`} role="img" aria-label={s.map((x) => x.name).join(', ')} onPointerMove={move} onPointerLeave={() => setHover(null)}>
        {ticks.map((t, i) => <g key={i}><line className="grid" x1={M.l} x2={W - M.r} y1={Y(t)} y2={Y(t)} /><text x={M.l - 8} y={Y(t) + 4} textAnchor="end">{fmt(t)}{unit}</text></g>)}
        {s[0]?.points.map((p, i) => i % step === 0 && <text key={i} x={X(i)} y={height - 8} textAnchor="middle">{p.label}</text>)}
        {s.map((x) => {
          const d = x.points.map((p, i) => `${i ? 'L' : 'M'}${X(i).toFixed(1)},${Y(p.value ?? 0).toFixed(1)}`).join('');
          return (
            <g key={x.name}>
              {area && <path d={`${d}L${X(n - 1)},${Y(0)}L${X(0)},${Y(0)}Z`} fill={x.color} opacity="0.12" />}
              <path d={d} fill="none" stroke={x.color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
              {n <= 14 && x.points.map((p, i) => <circle key={i} cx={X(i)} cy={Y(p.value ?? 0)} r="3" fill={x.color} stroke="#fff" strokeWidth="2" />)}
            </g>
          );
        })}
        {hover != null && (
          <g>
            <line className="xhair" x1={X(hover)} x2={X(hover)} y1={M.t} y2={M.t + ih} />
            {s.map((x) => <circle key={x.name} cx={X(hover)} cy={Y(x.points[hover].value ?? 0)} r="5" fill={x.color} stroke="#fff" strokeWidth="2" />)}
          </g>
        )}
        <rect className="hit" x="0" y="0" width={W} height={height} />
      </svg>
      {hover != null && (
        <div className="tip" style={{ left: `${tipLeft}%`, top: 40 }}>
          <b>{s[0].points[hover].tip || s[0].points[hover].label}</b>
          {s.map((x) => <span key={x.name} style={{ display: 'block' }}><i style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: x.color, marginRight: 6 }} />{s.length > 1 ? `${x.name}: ` : ''}{x.points[hover].value ?? 0}{unit}</span>)}
        </div>
      )}
    </div>
  );
}

/** Vertical bars. data: [{label, value, tip?}] */
export function BarChart({ data, color = SERIES[0], unit = '', height = H }) {
  const [hover, setHover] = useState(null);
  const top = niceMax(Math.max(1, ...data.map((d) => d.value)));
  const iw = W - M.l - M.r, ih = height - M.t - M.b;
  const slot = iw / Math.max(1, data.length), bw = Math.min(46, slot * 0.6);
  const Y = (v) => M.t + ih - (v / top) * ih;
  const step = Math.ceil(data.length / 9);
  return (
    <div className="chartwrap">
      <svg className="chart" viewBox={`0 0 ${W} ${height}`} role="img" aria-label="Bar chart">
        {[0, 0.25, 0.5, 0.75, 1].map((f) => <g key={f}><line className="grid" x1={M.l} x2={W - M.r} y1={Y(top * f)} y2={Y(top * f)} /><text x={M.l - 8} y={Y(top * f) + 4} textAnchor="end">{fmt(top * f)}{unit}</text></g>)}
        {data.map((d, i) => {
          const x = M.l + i * slot + (slot - bw) / 2, y = Y(d.value), h = M.t + ih - y;
          return (
            <g key={i} onPointerEnter={() => setHover(i)} onPointerLeave={() => setHover(null)}>
              <rect x={M.l + i * slot} y={M.t} width={slot} height={ih} fill="transparent" />
              {h > 0 && <path d={`M${x},${M.t + ih}V${y + 4}Q${x},${y} ${x + 4},${y}H${x + bw - 4}Q${x + bw},${y} ${x + bw},${y + 4}V${M.t + ih}Z`} fill={color} opacity={hover == null || hover === i ? 1 : 0.55} />}
              {i % step === 0 && <text x={x + bw / 2} y={height - 8} textAnchor="middle">{d.label}</text>}
            </g>
          );
        })}
      </svg>
      {hover != null && <div className="tip" style={{ left: `${((M.l + hover * slot + slot / 2) / W) * 100}%`, top: 30 }}><b>{data[hover].tip || data[hover].label}</b>{data[hover].value}{unit}</div>}
    </div>
  );
}

/** Horizontal bars with labels; data: [{label, value, note?}], percent -> axis 0–100 */
export function HBars({ data, color = SERIES[0], unit = '', percent = false, empty = 'No data yet.' }) {
  if (!data.length || data.every((d) => !d.value)) return <p className="muted" style={{ margin: '12px 0' }}>{empty}</p>;
  const top = percent ? 100 : Math.max(1, ...data.map((d) => d.value));
  return (
    <div className="hbars">
      {data.map((d, i) => (
        <div className="hbar" key={i} title={d.note}>
          <span className="lab" title={d.label}>{d.label}</span>
          <span className="track"><span className="fill" style={{ display: 'block', width: `${Math.max(0, (d.value / top) * 100)}%`, background: d.color || color }} /></span>
          <span className="val">{d.value}{unit}</span>
        </div>
      ))}
    </div>
  );
}

export function Granularity({ value, onChange }) {
  return (
    <div className="seg" role="group" aria-label="Time period">
      {[['day', 'Daily'], ['week', 'Weekly'], ['month', 'Monthly']].map(([k, l]) => <button key={k} className={value === k ? 'on' : ''} aria-pressed={value === k} onClick={() => onChange(k)}>{l}</button>)}
    </div>
  );
}

export function Kpi({ value, label, sub, accent }) {
  return <div className={`kpi ${accent ? 'accent' : ''}`}><div className="v">{value}</div><div className="l">{label}</div>{sub && <div className="s">{sub}</div>}</div>;
}
