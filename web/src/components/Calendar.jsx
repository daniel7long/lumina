import { useState } from 'react';
import { Icon } from './ui.jsx';

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

/** Month grid; days with learning activity are highlighted. activity: [{day:'YYYY-MM-DD', minutes, items}] */
export function Calendar({ activity = [] }) {
  const now = new Date();
  const [cursor, setCursor] = useState(new Date(now.getFullYear(), now.getMonth(), 1));
  const byDay = new Map(activity.map((a) => [a.day, a]));
  const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
  const lead = (first.getDay() + 6) % 7; // week starts Monday
  const count = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < lead; i++) cells.push(null);
  for (let d = 1; d <= count; d++) cells.push(new Date(cursor.getFullYear(), cursor.getMonth(), d));
  const todayIso = iso(now);
  const atCurrent = cursor.getFullYear() === now.getFullYear() && cursor.getMonth() === now.getMonth();
  const label = cursor.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
  return (
    <div>
      <div className="row between" style={{ marginBottom: 6 }}>
        <strong>{label}</strong>
        <span className="row" style={{ gap: 0 }}>
          <button className="icon-btn" onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))} aria-label="Previous month"><Icon name="chevronLeft" size={18} /></button>
          <button className="icon-btn" disabled={atCurrent} onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))} aria-label="Next month"><Icon name="chevronRight" size={18} /></button>
        </span>
      </div>
      <div className="cal" role="grid" aria-label={`Learning days in ${label}`}>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <div key={i} className="dow" aria-hidden="true">{d}</div>)}
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const k = iso(d);
          const a = byDay.get(k);
          const future = k > todayIso;
          const cls = ['d', a && (a.minutes > 0 || a.items > 0) ? 'act' : '', a && a.minutes >= 20 ? 'big' : '', k === todayIso ? 'today' : '', future ? 'off' : ''].join(' ');
          return <div key={i} className={cls} role="gridcell" title={a ? `${a.minutes} min, ${a.items} steps done` : undefined}>{d.getDate()}</div>;
        })}
      </div>
    </div>
  );
}
