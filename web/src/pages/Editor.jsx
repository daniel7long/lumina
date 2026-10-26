import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, navigate, useLocation } from '../lib/router.jsx';
import { api } from '../lib/api.js';
import { Markdown } from '../lib/md.jsx';
import { AdminLayout } from './Admin.jsx';
import { ErrorBox, Icon, Spinner, useAsync, useToast } from '../components/ui.jsx';
import { plainTitle } from '../lib/format.js';
import { hasStructure, htmlToMarkdown } from '../lib/htmlToMd.js';

const CATEGORIES = ['Language and Speech', 'Arts & Humanities', 'Business', 'Computer Science & Programming', 'Data Science and Causal Reasoning', 'Life Sciences', 'Mathematics and Logic'];
const THEMES = ['blue', 'teal', 'amber', 'violet', 'rose', 'slate'];
const rid = (p) => `${p}_${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(-4)}`;
const lines = (a) => (a || []).join('\n');
const toLines = (s) => s.split('\n');

const CHECK_TYPES = {
  minWords: 'Has at least N words', maxWords: 'Has at most N words', anyOf: 'Uses at least N of these phrases',
  allOf: 'Uses all of these phrases', question: 'Asks at least N questions', sentences: 'Has at least N full sentences',
};

const newOptions = (type) => (type === 'tf'
  ? [{ id: 'true', text: 'True', explanation: '' }, { id: 'false', text: 'False', explanation: '' }]
  : ['a', 'b', 'c'].map((id) => ({ id, text: '', explanation: '' })));
const newQuestion = (type = 'mcq') => ({ id: rid('q'), type, prompt: '', options: newOptions(type), answer: type === 'tf' ? 'true' : 'a' });
const newUnit = () => ({
  id: rid('unit'), title: 'New unit', summary: '', objectives: [], lessons: [],
  assessment: { id: rid('assess'), title: 'Unit assessment', estMinutes: 20, body: { instructions: 'Answer every task. You need a rating of B or higher to pass.', tasks: [{ ...newQuestion(), points: 10 }] } },
});
const newItem = (kind) => ({
  id: rid(kind), kind, title: kind === 'video' ? 'New video' : kind === 'reading' ? 'New reading' : 'Check your understanding', estMinutes: kind === 'quiz' ? 3 : 8,
  body: kind === 'video' ? { url: '', durationSec: 0, transcript: '', caption: '' } : kind === 'reading' ? { markdown: '' } : { questions: [newQuestion()] },
});

/* find a node anywhere in the document */
function locate(d, id) {
  for (const [ui, u] of d.units.entries()) {
    if (u.id === id) return { type: 'unit', node: u, list: d.units, idx: ui };
    if (u.assessment?.id === id) return { type: 'assess', node: u.assessment, unit: u };
    for (const [li, l] of u.lessons.entries()) {
      if (l.id === id) return { type: 'lesson', node: l, list: u.lessons, idx: li };
      for (const [si, s] of l.sessions.entries()) {
        if (s.id === id) return { type: 'session', node: s, list: l.sessions, idx: si };
        for (const [ii, it] of s.items.entries()) if (it.id === id) return { type: 'item', node: it, list: s.items, idx: ii, session: s };
      }
    }
  }
  return null;
}


/* ───────── Markdown editor: toolbar, cheat sheet, live preview, paste from Word / Docs ───────── */
const SNIPPETS = {
  table: '\n\n| Column 1 | Column 2 |\n| --- | --- |\n| Item | Detail |\n| Item | Detail |\n\n',
  tip: '\n\n> **Tip:** Write your tip here.\n\n',
};
function MdEditor({ value, onChange, rows = 14, label }) {
  const ref = useRef(null);
  const [preview, setPreview] = useState(false);
  const apply = (fn) => {
    const ta = ref.current;
    const [a, b] = [ta.selectionStart, ta.selectionEnd];
    const { text, from, to } = fn(ta.value, a, b);
    ta.setRangeText(text, a, b, 'end');
    onChange(ta.value);
    requestAnimationFrame(() => { ta.focus(); ta.setSelectionRange(from, to); });
  };
  const wrap = (m, ph) => () => apply((v, a, b) => { const sel = v.slice(a, b) || ph; return { text: `${m}${sel}${m}`, from: a + m.length, to: a + m.length + sel.length }; });
  const lineStart = (pre, ph) => () => apply((v, a, b) => {
    const sel = v.slice(a, b) || ph;
    const text = sel.split('\n').map((l, i) => `${pre === '1. ' ? `${i + 1}. ` : pre}${l}`).join('\n');
    const lead = a > 0 && v[a - 1] !== '\n' ? '\n' : '';
    return { text: lead + text, from: a + lead.length, to: a + lead.length + text.length };
  });
  const block = (t) => () => apply((v, a) => ({ text: t, from: a + t.length, to: a + t.length }));
  const onPaste = (e) => {
    const html = e.clipboardData.getData('text/html');
    if (!html || !hasStructure(html)) return;
    const md = htmlToMarkdown(html);
    if (!md) return;
    e.preventDefault();
    apply((v, a) => ({ text: md, from: a + md.length, to: a + md.length }));
  };
  const tools = [
    ['Heading', lineStart('## ', 'Heading')], ['Subheading', lineStart('### ', 'Subheading')], ['Bold', wrap('**', 'bold text')], ['Italic', wrap('*', 'italic text')],
    ['Bullets', lineStart('- ', 'Item')], ['Numbers', lineStart('1. ', 'Step')], ['Table', block(SNIPPETS.table)], ['Tip box', block(SNIPPETS.tip)], ['Divider', block('\n\n---\n\n')],
  ];
  return (
    <div className="stack" style={{ gap: 8 }}>
      <div className="row between wrap">
        <strong>{label}</strong>
        <button type="button" className="viewtoggle" onClick={() => setPreview(!preview)}>{preview ? 'Back to editing' : 'Preview'}</button>
      </div>
      {preview ? <div className="mdpreview"><Markdown text={value} className="prose" /></div> : (
        <>
          <div className="mdtools" role="toolbar" aria-label="Formatting">
            {tools.map(([l, fn]) => <button type="button" key={l} className="btn soft sm" onClick={fn}>{l}</button>)}
          </div>
          <textarea ref={ref} rows={rows} value={value} aria-label={label} onChange={(e) => onChange(e.target.value)} onPaste={onPaste} />
        </>
      )}
      <details className="check">
        <summary>Formatting help</summary>
        <p className="small" style={{ margin: '8px 0' }}>Use the buttons above, or type these. <b>Pasting from Word, Google Docs or a web page keeps headings, bold, lists and tables automatically.</b> (Press Ctrl+Shift+V to paste plain text instead.)</p>
        <pre className="mdhelp">{`## Big heading
### Small heading
**bold**   *italic*
- bullet item
1. numbered step
> **Tip:** a highlighted box
---   (a divider line)

| Source | Good for |
| --- | --- |
| Website | Listings |`}</pre>
      </details>
    </div>
  );
}

/* ───────── small form helpers ───────── */
const Field = ({ label, hint, children }) => <label className="field">{label}{children}{hint && <span className="hint">{hint}</span>}</label>;

function QuestionForm({ q, onChange, label, hideType }) {
  const set = (patch) => onChange({ ...q, ...patch });
  const setOpt = (i, patch) => set({ options: q.options.map((o, j) => (j === i ? { ...o, ...patch } : o)) });
  const changeType = (type) => set({ type, options: newOptions(type), answer: type === 'tf' ? 'true' : 'a' });
  return (
    <div className="stack">
      {!hideType && <div className="row wrap">
        <select aria-label={`${label} type`} value={q.type} onChange={(e) => changeType(e.target.value)} style={{ width: 'auto' }}>
          <option value="mcq">Multiple choice</option><option value="tf">True / False</option>
        </select>
      </div>}
      <Field label="Question"><textarea rows={2} style={{ minHeight: 0 }} value={q.prompt} onChange={(e) => set({ prompt: e.target.value })} /></Field>
      <div>
        <strong className="small">Answer options. Select the correct one and explain every option.</strong>
        {q.options.map((o, i) => (
          <div className="optrow" key={o.id} style={{ marginTop: 8 }}>
            <input type="radio" name={`ans-${q.id}`} checked={q.answer === o.id} onChange={() => set({ answer: o.id })} aria-label={`Option ${i + 1} is correct`} style={{ width: 20, height: 20, marginTop: 12 }} />
            <input value={o.text} readOnly={q.type === 'tf'} placeholder={`Option ${i + 1}`} aria-label={`Option ${i + 1} text`} onChange={(e) => setOpt(i, { text: e.target.value })} />
            <input value={o.explanation} placeholder="Why is this right or wrong?" aria-label={`Option ${i + 1} explanation`} onChange={(e) => setOpt(i, { explanation: e.target.value })} />
            {q.type === 'mcq' && q.options.length > 3 ? <button className="icon-btn" aria-label={`Remove option ${i + 1}`} onClick={() => set({ options: q.options.filter((_, j) => j !== i), answer: q.answer === o.id ? q.options[0].id : q.answer })}><Icon name="trash" size={18} /></button> : <span />}
          </div>
        ))}
        {q.type === 'mcq' && q.options.length < 4 && <button className="btn soft sm" style={{ marginTop: 8 }} onClick={() => set({ options: [...q.options, { id: 'd', text: '', explanation: '' }] })}><Icon name="plus" size={16} /> Add option</button>}
      </div>
    </div>
  );
}

function QuizForm({ item, setBody }) {
  const qs = item.body.questions;
  return (
    <div className="stack">
      {qs.map((q, i) => (
        <div className="qcard" key={q.id}>
          <div className="row between"><strong>Question {i + 1}</strong>{qs.length > 1 && <button className="btn ghost sm danger" onClick={() => setBody({ questions: qs.filter((_, j) => j !== i) })}>Remove</button>}</div>
          <QuestionForm q={q} label={`Question ${i + 1}`} onChange={(nq) => setBody({ questions: qs.map((x, j) => (j === i ? nq : x)) })} />
        </div>
      ))}
      {qs.length < 2 && <div><button className="btn soft sm" onClick={() => setBody({ questions: [...qs, newQuestion()] })}><Icon name="plus" size={16} /> Add a second question</button><span className="small muted"> Each session should have 1 or 2 quiz questions in total.</span></div>}
    </div>
  );
}

function CheckForm({ k, onChange, onRemove }) {
  const list = k.type === 'anyOf' || k.type === 'allOf';
  const set = (patch) => onChange({ ...k, ...patch });
  return (
    <div className="qcard" style={{ background: '#fff' }}>
      <div className="row wrap">
        <select aria-label="Check type" value={k.type} style={{ width: 'auto' }} onChange={(e) => set({ type: e.target.value, value: ['anyOf', 'allOf'].includes(e.target.value) ? [] : 10 })}>
          {Object.entries(CHECK_TYPES).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
        {list ? <input style={{ flex: 1, minWidth: 200 }} aria-label="Phrases, separated by commas" placeholder="phrase one, phrase two, …" value={Array.isArray(k.value) ? k.value.join(', ') : ''} onChange={(e) => set({ value: e.target.value.split(',').map((x) => x.trimStart()) })} /> : <input type="number" min="0" style={{ width: 90 }} aria-label="Number" value={Number(k.value) || 0} onChange={(e) => set({ value: Number(e.target.value) })} />}
        {k.type === 'anyOf' && <label className="row small">at least <input type="number" min="1" style={{ width: 64 }} value={k.min || 1} onChange={(e) => set({ min: Number(e.target.value) })} /></label>}
        <button className="icon-btn" onClick={onRemove} aria-label="Remove check"><Icon name="trash" size={18} /></button>
      </div>
      <input placeholder="What the learner sees, e.g. “You greeted the reader”" aria-label="Check label" value={k.label} onChange={(e) => set({ label: e.target.value })} />
      <input placeholder="Hint if this check is missed" aria-label="Check hint" value={k.hint} onChange={(e) => set({ hint: e.target.value })} />
    </div>
  );
}

function WrittenForm({ t, onChange }) {
  const set = (patch) => onChange({ ...t, ...patch });
  const crit = t.rubric?.criteria || [];
  const setCrit = (i, patch) => set({ rubric: { criteria: crit.map((c, j) => (j === i ? { ...c, ...patch } : c)) } });
  return (
    <div className="stack">
      <Field label="Scenario (optional)" hint="Sets the scene. Markdown is allowed."><textarea rows={3} value={t.scenario || ''} onChange={(e) => set({ scenario: e.target.value })} /></Field>
      <div className="row wrap"><Field label="Starter text"><input value={t.starter || ''} onChange={(e) => set({ starter: e.target.value })} /></Field><Field label="Minimum words"><input type="number" min="0" style={{ width: 110 }} value={t.minWords || 0} onChange={(e) => set({ minWords: Number(e.target.value) })} /></Field></div>
      <Field label="Checklist shown to the learner" hint="One point per line."><textarea rows={3} value={lines(t.checklist)} onChange={(e) => set({ checklist: toLines(e.target.value) })} /></Field>
      <Field label="Model answer" hint="Shown after the learner submits."><textarea rows={4} value={t.modelAnswer || ''} onChange={(e) => set({ modelAnswer: e.target.value })} /></Field>
      <strong>Rating rubric</strong>
      <p className="small muted" style={{ margin: 0 }}>Each criterion is scored from simple, transparent checks, so every learner is rated the same way.</p>
      {crit.map((c, i) => (
        <div className="qcard" key={c.id}>
          <div className="row between"><strong>Criterion {i + 1}</strong><button className="btn ghost sm danger" onClick={() => set({ rubric: { criteria: crit.filter((_, j) => j !== i) } })}>Remove</button></div>
          <div className="row wrap"><Field label="Name"><input value={c.label} onChange={(e) => setCrit(i, { label: e.target.value })} /></Field><Field label="Weight"><input type="number" min="1" style={{ width: 90 }} value={c.weight} onChange={(e) => setCrit(i, { weight: Number(e.target.value) })} /></Field></div>
          <Field label="Description"><input value={c.description || ''} onChange={(e) => setCrit(i, { description: e.target.value })} /></Field>
          {c.checks.map((k, ki) => <CheckForm key={k.id} k={k} onChange={(nk) => setCrit(i, { checks: c.checks.map((x, j) => (j === ki ? nk : x)) })} onRemove={() => setCrit(i, { checks: c.checks.filter((_, j) => j !== ki) })} />)}
          <div><button className="btn soft sm" onClick={() => setCrit(i, { checks: [...c.checks, { id: rid('k'), label: '', hint: '', type: 'minWords', value: 20, min: 1 }] })}><Icon name="plus" size={16} /> Add check</button></div>
        </div>
      ))}
      <div><button className="btn soft sm" onClick={() => set({ rubric: { criteria: [...crit, { id: rid('c'), label: '', description: '', weight: 1, checks: [] }] } })}><Icon name="plus" size={16} /> Add criterion</button></div>
    </div>
  );
}

function AssessmentForm({ a, setNode, setBody }) {
  const tasks = a.body.tasks;
  const setTask = (i, t) => setBody({ tasks: tasks.map((x, j) => (j === i ? t : x)) });
  return (
    <div className="stack">
      <Field label="Title"><input value={a.title} onChange={(e) => setNode({ title: e.target.value })} /></Field>
      <Field label="Time (minutes)"><input type="number" min="0" style={{ width: 110 }} value={a.estMinutes} onChange={(e) => setNode({ estMinutes: Number(e.target.value) })} /></Field>
      <MdEditor label="Instructions" rows={5} value={a.body.instructions} onChange={(v) => setBody({ instructions: v })} />
      <p className="small muted" style={{ margin: 0 }}>Ratings: A+ 95%, A 90%, B+ 85%, B 80%, below 80% is C. Learners pass with B or higher.</p>
      {tasks.map((t, i) => (
        <div className="qcard" key={t.id}>
          <div className="row between wrap"><strong>Task {i + 1}</strong>
            <span className="row">
              <select aria-label="Task type" value={t.type} style={{ width: 'auto' }} onChange={(e) => { const type = e.target.value; setTask(i, type === 'written' ? { id: t.id, type, prompt: t.prompt, points: t.points, scenario: '', starter: '', minWords: 40, checklist: [], modelAnswer: '', rubric: { criteria: [] } } : { ...newQuestion(type), id: t.id, prompt: t.prompt, points: t.points }); }}>
                <option value="mcq">Multiple choice</option><option value="tf">True / False</option><option value="written">Written</option>
              </select>
              <label className="row small">Points <input type="number" min="1" style={{ width: 70 }} value={t.points} onChange={(e) => setTask(i, { ...t, points: Number(e.target.value) })} /></label>
              <button className="btn ghost sm danger" onClick={() => setBody({ tasks: tasks.filter((_, j) => j !== i) })}>Remove</button>
            </span></div>
          {t.type === 'written'
            ? <><Field label="Prompt"><textarea rows={2} style={{ minHeight: 0 }} value={t.prompt} onChange={(e) => setTask(i, { ...t, prompt: e.target.value })} /></Field><WrittenForm t={t} onChange={(nt) => setTask(i, nt)} /></>
            : <QuestionForm hideType q={t} label={`Task ${i + 1}`} onChange={(nq) => setTask(i, { ...nq, points: t.points })} />}
        </div>
      ))}
      <div className="row wrap"><button className="btn soft sm" onClick={() => setBody({ tasks: [...tasks, { ...newQuestion(), points: 10 }] })}><Icon name="plus" size={16} /> Add choice task</button>
        <button className="btn soft sm" onClick={() => setBody({ tasks: [...tasks, { id: rid('t'), type: 'written', prompt: '', points: 20, scenario: '', starter: '', minWords: 40, checklist: [], modelAnswer: '', rubric: { criteria: [] } }] })}><Icon name="plus" size={16} /> Add written task</button></div>
    </div>
  );
}

/* ───────── the editor page ───────── */
export function CourseEditor({ params }) {
  const toast = useToast();
  const { search } = useLocation();
  const { data, loading, error, reload } = useAsync(() => api.get(`/admin/courses/${params.id}`), [params.id]);
  const [doc, setDoc] = useState(null);
  const [meta, rev] = [doc?.meta, doc?.revision];
  const [sel, setSel] = useState('meta');
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState(false);
  const [problems, setProblems] = useState([]);
  const [status, setStatus] = useState('draft');
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (!data) return;
    setDoc({ meta: data.meta, units: data.units, revision: data.course.revision, slug: data.course.slug });
    setProblems(data.problems || []); setStatus(data.course.status); setDirty(false);
    const want = (search.get('item') || '').replace(/:overview$/, '');
    if (want && locate({ units: data.units }, want)) setSel(want);
  }, [data]);
  useEffect(() => {
    const h = (e) => { if (dirty) { e.preventDefault(); e.returnValue = ''; } };
    window.addEventListener('beforeunload', h);
    return () => window.removeEventListener('beforeunload', h);
  }, [dirty]);

  const edit = useCallback((fn) => { setDoc((d) => { const c = structuredClone(d); fn(c); return c; }); setDirty(true); }, []);
  const found = useMemo(() => (doc ? locate(doc, sel) : null), [doc, sel]);

  const setNode = (patch) => edit((d) => Object.assign(locate(d, sel).node, patch));
  const setBody = (patch) => edit((d) => { const n = locate(d, sel).node; n.body = { ...n.body, ...patch }; });
  const setMeta = (patch) => edit((d) => Object.assign(d.meta, patch));
  const setSessionVideo = (url, sessionId) => edit((d) => {
    const s = locate(d, sessionId).node;
    let v = s.items.find((i) => i.kind === 'video');
    if (!v) {
      if (!url.trim()) return;
      v = { ...newItem('video'), title: `Video: ${s.title}`, estMinutes: 5 };
      s.items.unshift(v);
    }
    v.body.url = url;
    if (!url.trim() && !v.body.transcript && !v.body.caption) s.items.splice(s.items.indexOf(v), 1);
  });

  const add = (id, what) => edit((d) => {
    if (what === 'unit') { const u = newUnit(); d.units.push(u); setSel(u.id); return; }
    const f = locate(d, id).node;
    if (what === 'lesson') { const l = { id: rid('lesson'), title: 'New lesson', summary: '', outcomes: [], sessions: [] }; f.lessons.push(l); setSel(l.id); }
    else if (what === 'session') { const s = { id: rid('session'), title: 'New session', summary: '', items: [newItem('reading'), newItem('quiz')] }; f.sessions.push(s); setSel(s.id); }
    else { const it = newItem(what); f.items.push(it); setSel(it.id); }
  });
  const remove = (id) => {
    if (!confirm('Delete this and everything inside it?')) return;
    edit((d) => {
      const f = locate(d, id);
      if (f.list) f.list.splice(f.idx, 1);
    });
    setSel('meta');
  };
  const move = (id, dir) => edit((d) => {
    const f = locate(d, id);
    const j = f.idx + dir;
    if (!f.list || j < 0 || j >= f.list.length) return;
    [f.list[f.idx], f.list[j]] = [f.list[j], f.list[f.idx]];
  });

  const save = async () => {
    setBusy(true);
    try {
      const r = await api.put(`/admin/courses/${params.id}`, { revision: doc.revision, meta: doc.meta, units: doc.units });
      setDoc((d) => ({ ...d, revision: r.revision })); setProblems(r.problems); setDirty(false);
      toast('Saved.'); setBusy(false); return true;
    } catch (e) { toast(e.message, 'err'); setBusy(false); return false; }
  };
  const release = async () => {
    if (dirty && !(await save())) return;
    setBusy(true);
    try { await api.post(`/admin/courses/${params.id}/publish`); setStatus('published'); setProblems([]); toast('Released. Learners can now find this course.'); }
    catch (e) { if (e.details?.length) setProblems(e.details); toast(e.message, 'err'); }
    setBusy(false);
  };
  const unpublish = async () => { try { await api.post(`/admin/courses/${params.id}/unpublish`); setStatus('draft'); toast('Moved back to draft.'); } catch (e) { toast(e.message, 'err'); } };
  const openPreview = async () => { if (dirty && !(await save())) return; navigate(`/learn/${doc.slug}?preview=1`); };

  const node = (id, level, icon, title, extra) => (
    <div key={id}>
      <div className={`tnode lvl${level} ${sel === id ? 'on' : ''}`} onClick={() => setSel(id)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setSel(id))}>
        {icon && <Icon name={icon} size={16} />}<span className="t">{title}</span>
        <span className="acts" onClick={(e) => e.stopPropagation()}>
          {extra}
          {locate(doc, id)?.list && <><button aria-label="Move up" onClick={() => move(id, -1)}><Icon name="up" size={14} /></button><button aria-label="Move down" onClick={() => move(id, 1)}><Icon name="down" size={14} /></button><button aria-label="Delete" onClick={() => remove(id)}><Icon name="trash" size={14} /></button></>}
        </span>
      </div>
    </div>
  );
  const addBtn = (label, fn) => <button key={label} aria-label={label} title={label} onClick={fn}><Icon name="plus" size={14} /></button>;

  const sessionVideoField = (sess) => {
    const v = sess.items.find((i) => i.kind === 'video');
    return (
      <div className="stack" style={{ gap: 8 }}>
        <Field label="Video link (optional)" hint="Optional. Paste a YouTube or Vimeo link, or an https link to an MP4. This is the video for the whole session. Leave empty if there is no video.">
          <input value={v?.body.url || ''} placeholder="https://www.youtube.com/watch?v=…" onChange={(e) => setSessionVideo(e.target.value, sess.id)} />
        </Field>
        {v && v.id !== sel && <div><button type="button" className="btn soft sm" onClick={() => setSel(v.id)}>Edit video title, caption and transcript</button></div>}
      </div>
    );
  };

  const form = () => {
    if (!found) return null;
    const { type, node: n } = found;
    if (sel === 'meta') return (
      <div className="formcard"><h2>Course details</h2>
        <Field label="Title"><input value={meta.title} onChange={(e) => setMeta({ title: e.target.value })} /></Field>
        <Field label="Subtitle"><input value={meta.subtitle} onChange={(e) => setMeta({ subtitle: e.target.value })} /></Field>
        <Field label="Description"><textarea rows={5} value={meta.description} onChange={(e) => setMeta({ description: e.target.value })} /></Field>
        <div className="row wrap"><Field label="Category"><select value={meta.category} onChange={(e) => setMeta({ category: e.target.value })}>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</select></Field>
          <Field label="Level"><input value={meta.level} placeholder="e.g. Beginner to intermediate" onChange={(e) => setMeta({ level: e.target.value })} /></Field>
          <Field label="Cover colour"><select value={meta.coverTheme} onChange={(e) => setMeta({ coverTheme: e.target.value })}>{THEMES.map((c) => <option key={c}>{c}</option>)}</select></Field></div>
      </div>);
    if (type === 'unit') return (
      <div className="formcard"><h2>Unit</h2>
        <Field label="Title"><input value={n.title} onChange={(e) => setNode({ title: e.target.value })} /></Field>
        <Field label="Summary"><textarea rows={3} value={n.summary} onChange={(e) => setNode({ summary: e.target.value })} /></Field>
        <Field label="Unit learning objectives" hint="One per line. Learners see these first. Start each with a verb, like “Describe…”."><textarea rows={5} value={lines(n.objectives)} onChange={(e) => setNode({ objectives: toLines(e.target.value) })} /></Field>
      </div>);
    if (type === 'lesson') return (
      <div className="formcard"><h2>Lesson</h2>
        <Field label="Title"><input value={n.title} onChange={(e) => setNode({ title: e.target.value })} /></Field>
        <Field label="Summary"><textarea rows={2} value={n.summary} onChange={(e) => setNode({ summary: e.target.value })} /></Field>
        <Field label="Lesson outcomes" hint="One per line."><textarea rows={4} value={lines(n.outcomes)} onChange={(e) => setNode({ outcomes: toLines(e.target.value) })} /></Field>
      </div>);
    if (type === 'session') return (
      <div className="formcard"><h2>Session</h2>
        <Field label="Title"><input value={n.title} onChange={(e) => setNode({ title: e.target.value })} /></Field>
        <Field label="Summary"><textarea rows={2} value={n.summary} onChange={(e) => setNode({ summary: e.target.value })} /></Field>
        {sessionVideoField(n)}
        <p className="muted small" style={{ margin: 0 }}>A session needs a video or reading, plus 1 or 2 quiz questions. Use the + button beside the session in the list to add more items.</p>
      </div>);
    if (type === 'assess') return <div className="formcard"><h2>Unit assessment</h2><AssessmentForm a={n} setNode={setNode} setBody={setBody} /></div>;
    return (
      <div className="formcard"><h2>{{ video: 'Video', reading: 'Reading', quiz: 'Quiz' }[n.kind]}</h2>
        <div className="row wrap"><Field label="Title"><input value={n.title} onChange={(e) => setNode({ title: e.target.value })} /></Field><Field label="Minutes"><input type="number" min="0" style={{ width: 100 }} value={n.estMinutes} onChange={(e) => setNode({ estMinutes: Number(e.target.value) })} /></Field></div>
        {n.kind !== 'video' && found.session && sessionVideoField(found.session)}
        {n.kind === 'video' && <>
          <Field label="Video link (optional)" hint="Optional. Paste a YouTube or Vimeo link, or an https link to an MP4. Until you add one, learners see a “Video coming soon” note above the transcript."><input value={n.body.url} placeholder="https://www.youtube.com/watch?v=…" onChange={(e) => setBody({ url: e.target.value })} /></Field>
          <Field label="Caption (optional)"><input value={n.body.caption} onChange={(e) => setBody({ caption: e.target.value })} /></Field>
          <MdEditor label="Transcript / script" rows={12} value={n.body.transcript} onChange={(v) => setBody({ transcript: v })} /></>}
        {n.kind === 'reading' && <>
          <MdEditor label="Reading text" rows={18} value={n.body.markdown} onChange={(v) => setBody({ markdown: v })} /></>}
        {n.kind === 'quiz' && <QuizForm item={n} setBody={setBody} />}
      </div>);
  };

  const icon = { video: 'video', reading: 'reading', quiz: 'quiz' };
  return (
    <AdminLayout title={meta?.title || 'Course editor'} active="courses" actions={doc && <>
      <span className={`pill ${status === 'published' ? 'good' : 'gold'}`}>{status === 'published' ? 'Released' : 'Draft'}</span>
      <button className="btn soft sm" onClick={openPreview}><Icon name="eye" size={16} /> Preview as learner</button>
      <Link to={`/admin/courses/${params.id}/analytics`} className="btn soft sm"><Icon name="chart" size={16} /> Analytics</Link>
      {status === 'published' ? <button className="btn ghost sm" onClick={unpublish}>Unpublish</button> : <button className="btn sm" disabled={busy} onClick={release}>Release to learners</button>}
    </>}>
      {loading && !doc ? <Spinner /> : error ? <ErrorBox error={error} retry={reload} /> : doc && (
        <>
          {problems.length > 0 && status !== 'published' && (
            <div className="problems" role="status" style={{ marginBottom: 16 }}>
              <strong>To release this course, fix {problems.length} thing{problems.length > 1 ? 's' : ''}:</strong>
              <ul>{problems.slice(0, 8).map((p, i) => <li key={i}>{p}</li>)}</ul>{problems.length > 8 && <span className="small">…and {problems.length - 8} more.</span>}
            </div>)}
          <div className="editor">
            <nav className="tree" aria-label="Course structure">
              {node('meta', 1, 'home', 'Course details')}
              {doc.units.map((u, ui) => (
                <div key={u.id}>
                  {node(u.id, 1, 'book', `Unit ${ui + 1}: ${plainTitle(u.title)}`, addBtn('Add lesson', () => add(u.id, 'lesson')))}
                  {u.lessons.map((l, li) => (
                    <div key={l.id}>
                      {node(l.id, 2, null, `Lesson ${li + 1}: ${plainTitle(l.title)}`, addBtn('Add session', () => add(l.id, 'session')))}
                      {l.sessions.map((s, si) => (
                        <div key={s.id}>
                          {node(s.id, 3, null, `Session ${si + 1}: ${s.title}`, <>{addBtn('Add video', () => add(s.id, 'video'))}{addBtn('Add reading', () => add(s.id, 'reading'))}{addBtn('Add quiz', () => add(s.id, 'quiz'))}</>)}
                          {s.items.map((it) => node(it.id, 4, icon[it.kind], it.title))}
                        </div>))}
                    </div>))}
                  {u.assessment && node(u.assessment.id, 2, 'assessment', 'Unit assessment')}
                </div>))}
              <div style={{ padding: 8 }}><button className="btn soft sm block" onClick={() => add(null, 'unit')}><Icon name="plus" size={16} /> Add unit</button></div>
            </nav>
            <div>{form()}</div>
          </div>
          <div className="savebar">
            <button className="btn" disabled={!dirty || busy} onClick={save}><Icon name="save" size={18} /> {busy ? 'Saving…' : 'Save draft'}</button>
            <span className="muted">{dirty ? 'You have unsaved changes.' : 'All changes saved.'}</span>
            {status === 'published' && <span className="small muted">Saved changes go live for learners straight away.</span>}
          </div>
        </>)}
    </AdminLayout>
  );
}
