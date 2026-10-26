import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, navigate, useLocation } from '../lib/router.jsx';
import { api } from '../lib/api.js';
import { useAuth } from '../lib/auth.jsx';
import { useRequireAuth } from '../components/Shell.jsx';
import { Icon, Logo, ErrorBox, ProgressBar, RatingBadge, Spinner, useAsync, useToast } from '../components/ui.jsx';
import { Markdown } from '../lib/md.jsx';
import { kindLabel, minutesLabel, plainTitle, timeAgo } from '../lib/format.js';

/* ───────── time tracking: counts seconds only while the tab is visible and focused ───────── */
function useHeartbeat(slug, itemId, q, enabled) {
  useEffect(() => {
    if (!enabled || !itemId) return;
    let pending = 0;
    const flush = () => {
      if (pending < 1) return;
      const seconds = Math.min(30, pending);
      pending = 0;
      api.post(`/learn/${slug}/heartbeat${q}`, { itemId, seconds }).catch(() => {});
    };
    const tick = setInterval(() => {
      if (document.visibilityState === 'visible' && document.hasFocus()) pending += 1;
      if (pending >= 15) flush();
    }, 1000);
    const onHide = () => document.visibilityState === 'hidden' && flush();
    document.addEventListener('visibilitychange', onHide);
    return () => { clearInterval(tick); document.removeEventListener('visibilitychange', onHide); flush(); };
  }, [slug, itemId, q, enabled]);
}

/* ───────── outline ───────── */
function Dot({ status }) {
  return <span className={`dot ${status}`} aria-label={status === 'done' ? 'Completed' : status === 'started' ? 'Started' : 'Not started'}>{status === 'done' && <Icon name="check" size={14} />}</span>;
}

function Outline({ outline, slug, current, q, onClose }) {
  const currentUnit = useMemo(() => outline.units.find((u) => [u.overview, u.assessment, ...u.lessons.flatMap((l) => l.sessions.flatMap((s) => s.items))].some((i) => i?.id === current))?.id, [outline, current]);
  const [open, setOpen] = useState(() => new Set([currentUnit]));
  useEffect(() => { setOpen((s) => new Set(s).add(currentUnit)); }, [currentUnit]);
  const toggle = (id) => setOpen((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const row = (it) => (
    <Link key={it.id} to={`/learn/${slug}/${it.id}${q}`} className={`oitem ${it.id === current ? 'cur' : ''}`} aria-current={it.id === current ? 'page' : undefined} onClick={onClose}>
      <Dot status={it.status} />
      <span><span className="t">{it.title}</span><br /><span className="k"><Icon name={it.kind} size={14} /> {kindLabel[it.kind]}{it.estMinutes ? ` · ${it.estMinutes} min` : ''}{it.best ? ` · Best: ${it.best.rating}` : ''}</span></span>
    </Link>
  );
  return (
    <aside className="card outline" aria-label="Course outline">
      <div className="outline-head"><h2>Course outline</h2><button className="icon-btn" onClick={onClose} aria-label="Hide outline"><Icon name="x" /></button></div>
      <div style={{ padding: '0 18px 10px' }}>
        <ProgressBar value={outline.totals.percent} label="Course progress" />
        <span className="small muted">{outline.totals.done} of {outline.totals.items} steps · {outline.totals.percent}%</span>
      </div>
      <div className="outline-scroll">
        {outline.units.map((u, ui) => (
          <section key={u.id}>
            <button className="unit-h" onClick={() => toggle(u.id)} aria-expanded={open.has(u.id)}>
              <span><small>Unit {ui + 1}</small><strong>{plainTitle(u.title)}</strong></span>
              <Icon name="chevronDown" size={18} className={open.has(u.id) ? 'flip' : ''} />
            </button>
            {open.has(u.id) && (
              <div>
                {row(u.overview)}
                {u.lessons.map((l, li) => (
                  <div key={l.id}>
                    <div className="lesson-h">Lesson {li + 1}: {plainTitle(l.title)}</div>
                    {l.sessions.map((s, si) => (
                      <div key={s.id}><div className="session-h">Session {si + 1}: {s.title}</div>{s.items.map(row)}</div>
                    ))}
                  </div>
                ))}
                {u.assessment && <><div className="lesson-h">Unit assessment</div>{row(u.assessment)}</>}
              </div>
            )}
          </section>
        ))}
      </div>
    </aside>
  );
}

/* ───────── content: overview, video, reading ───────── */
function Overview({ body }) {
  return (
    <div>
      <p className="prose" style={{ maxWidth: '62ch' }}>{body.summary}</p>
      <h2 style={{ fontSize: '1.4rem', margin: '24px 0 12px' }}>By the end of this unit you will be able to</h2>
      <ol className="objectives">{body.objectives.map((o, i) => <li key={i}>{o}</li>)}</ol>
      <h2 style={{ fontSize: '1.4rem', margin: '28px 0 0' }}>What is in this unit</h2>
      <div className="lesson-list">
        {body.lessons.map((l, i) => (
          <div key={i}><h4>Lesson {i + 1}: {l.title}</h4>{l.outcomes.length > 0 && <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>{l.outcomes.map((o, j) => <li key={j}>{o}</li>)}</ul>}</div>
        ))}
      </div>
    </div>
  );
}

function Video({ body, onTranscript }) {
  return (
    <div>
      <div className="videobox">
        {body.embedUrl ? <iframe src={body.embedUrl} title="Lesson video" allow="accelerometer; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
          : body.url ? <video src={body.url} controls preload="metadata" />
          : <div className="ph"><Icon name="video" size={44} /><p><b>Video coming soon</b></p><p style={{ margin: 0, fontSize: '.95rem' }}>The recording for this lesson is not uploaded yet. Read the transcript below to learn the same content.</p></div>}
      </div>
      {body.caption && <p className="muted" style={{ marginTop: 10 }}>{body.caption}</p>}
      {body.transcript && (
        <details className="dive" open={!body.url && !body.embedUrl}>
          <summary><Icon name="transcript" /> Read the transcript</summary>
          <div className="inner"><Markdown text={body.transcript} className="prose" /></div>
        </details>
      )}
    </div>
  );
}

/* ───────── quiz ───────── */
function QuizQuestion({ q, index, total, initial, onAnswer, slug, itemId, query }) {
  const toast = useToast();
  const [sel, setSel] = useState(initial?.optionId || null);
  const [res, setRes] = useState(initial || null);
  const [busy, setBusy] = useState(false);
  const check = async () => {
    setBusy(true);
    try {
      const r = await api.post(`/learn/${slug}/items/${itemId}/quiz${query}`, { questionId: q.id, optionId: sel });
      setRes({ ...r, optionId: sel });
      onAnswer(q.id, r);
    } catch (e) { toast(e.message, 'err'); }
    setBusy(false);
  };
  const locked = !!res;
  return (
    <fieldset className="q" style={{ minInlineSize: 0 }}>
      <legend className="sr">Question {index + 1}</legend>
      <div className="q-type">Question {index + 1} of {total} · {q.type === 'tf' ? 'True or false' : 'Choose one answer'}</div>
      <div className="prompt">{q.prompt}</div>
      <div className="opts" role="radiogroup" aria-label={q.prompt}>
        {q.options.map((o, i) => {
          const isSel = sel === o.id;
          const cls = locked ? (o.id === res.correctOptionId ? 'right' : isSel ? 'wrong' : 'neutral') : isSel ? 'sel' : '';
          return (
            <button key={o.id} type="button" role="radio" aria-checked={isSel} className={`opt ${cls}`} disabled={locked} onClick={() => setSel(o.id)}>
              <span className="rb">{locked && o.id === res.correctOptionId ? <Icon name="check" size={14} /> : locked && isSel ? <Icon name="x" size={14} /> : null}</span>
              <span><span className="sr">Option {String.fromCharCode(65 + i)}. </span>{o.text}</span>
              {locked && (isSel || o.id === res.correctOptionId) && (
                <span className="why"><span className="verdict">{o.id === res.correctOptionId ? 'Correct answer. ' : 'Not this one. '}</span>{res.explanations[o.id]}</span>
              )}
            </button>
          );
        })}
      </div>
      {locked && (
        <div className={`feedback ${res.correct ? 'ok' : 'no'}`} role="status">
          <b>{res.correct ? 'Correct!' : 'Not quite.'}</b>
          {res.correct ? 'Well done. Read the explanation to check your reasoning.' : 'Read why each answer is right or wrong, then try again.'}
          {!res.correct && <div style={{ marginTop: 8 }}><button className="btn ghost sm" onClick={() => { setRes(null); setSel(null); }}>Try again</button></div>}
        </div>
      )}
      {!locked && <div style={{ marginTop: 16 }}><button className="btn" disabled={!sel || busy} onClick={check}>{busy ? 'Checking…' : 'Check answer'}</button></div>}
    </fieldset>
  );
}

function Quiz({ body, state, slug, itemId, query, onProgress }) {
  const answered = useRef(new Set(Object.keys(state || {})));
  return (
    <div>
      <p className="muted" style={{ maxWidth: '60ch' }}>Check what you just learned. You see right away why each answer is right or wrong.</p>
      {body.questions.map((q, i) => (
        <QuizQuestion key={q.id} q={q} index={i} total={body.questions.length} initial={state?.[q.id]} slug={slug} itemId={itemId} query={query}
          onAnswer={(id, r) => { answered.current.add(id); if (r.itemComplete) onProgress(); }} />
      ))}
    </div>
  );
}

/* ───────── unit assessment ───────── */
const wordCount = (s) => (s.match(/[\p{L}\p{N}'’-]+/gu) || []).length;

function TaskResult({ t, task }) {
  if (t.type === 'written') {
    return (
      <div>
        <div className="row between"><strong>{t.earned} / {t.max} points</strong><span className="small muted">{t.wordCount} words</span></div>
        {t.notes?.map((n, i) => <p key={i} className="feedback no" style={{ margin: '8px 0' }}>{n}</p>)}
        {t.criteria.map((c) => (
          <div className="crit" key={c.id}>
            <b>{c.label}</b>
            {c.checks.map((k) => (
              <div key={k.id}><div className={`c ${k.passed ? 'ok' : 'no'}`}><Icon name={k.passed ? 'check' : 'x'} size={16} /><span>{k.label}</span></div>{!k.passed && k.hint && <div className="hint2">{k.hint}</div>}</div>
            ))}
          </div>
        ))}
        {t.modelAnswer && <details className="check"><summary>See a model answer</summary><div className="model">{t.modelAnswer}</div></details>}
      </div>
    );
  }
  return (
    <div className="opts" style={{ marginTop: 8 }}>
      {task.options.map((o) => {
        const right = o.id === t.correctOptionId, mine = o.id === t.selected;
        return (
          <div key={o.id} className={`opt ${right ? 'right' : mine ? 'wrong' : 'neutral'}`} style={{ cursor: 'default' }}>
            <span className="rb">{right ? <Icon name="check" size={14} /> : mine ? <Icon name="x" size={14} /> : null}</span>
            <span>{o.text}</span>
            {(right || mine) && <span className="why"><span className="verdict">{right ? (mine ? 'Your answer · correct. ' : 'Correct answer. ') : 'Your answer · not correct. '}</span>{t.explanations[o.id]}</span>}
          </div>
        );
      })}
    </div>
  );
}

function Assessment({ body, view, slug, itemId, query, onProgress, nextHref }) {
  const toast = useToast();
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(view.lastResult || null);
  const [busy, setBusy] = useState(false);
  const missing = body.tasks.filter((t) => !(answers[t.id] || '').trim());
  const submit = async () => {
    setBusy(true);
    try {
      const r = await api.post(`/learn/${slug}/items/${itemId}/assessment${query}`, { answers });
      setResult(r); onProgress(); window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) { toast(e.message, 'err'); }
    setBusy(false);
  };
  if (result) {
    return (
      <div>
        <div className={`result ${result.passed ? 'pass' : 'retry'}`} role="status">
          <RatingBadge rating={result.rating} size="lg" />
          <div>
            <h2>{result.passed ? 'You passed this unit' : 'Not passed yet. You need a B or higher.'}</h2>
            <p style={{ margin: 0 }}>Score {result.score}%. {result.passed ? 'Great work. Your next step is open.' : 'Read the feedback below, review the lessons, and try again. Your best result counts.'}</p>
          </div>
        </div>
        {body.tasks.map((task, i) => (
          <article className="task" key={task.id}>
            <span className="pill">{result.tasks[i].earned} / {result.tasks[i].max} pts</span>
            <h3 style={{ fontSize: '1.15rem', margin: '4px 0 6px' }}>Task {i + 1}</h3>
            <p style={{ fontWeight: 700 }}>{task.prompt}</p>
            <TaskResult t={result.tasks[i]} task={task} />
          </article>
        ))}
        <div className="row wrap">
          <button className="btn ghost" onClick={() => { setResult(null); setAnswers({}); window.scrollTo(0, 0); }}>Try again</button>
          {result.passed && nextHref && <Link to={nextHref} className="btn">Continue <Icon name="arrowRight" size={16} /></Link>}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="prose" style={{ marginBottom: 14 }}><Markdown text={body.instructions} /></div>
      <p className="ratingscale small"><b>Ratings:</b> <span>A+ (95%+)</span><span>A (90%+)</span><span>B+ (85%+)</span><span>B (80%+, pass)</span><span>C (below 80%)</span></p>
      {body.tasks.map((t, i) => (
        <article className="task" key={t.id}>
          <span className="pill">{t.points} pts</span>
          <h3 style={{ fontSize: '1.15rem', margin: '4px 0 6px' }}>Task {i + 1} · {t.type === 'written' ? 'Write' : t.type === 'tf' ? 'True or false' : 'Choose one'}</h3>
          <p style={{ fontWeight: 700 }}>{t.prompt}</p>
          {t.type === 'written' ? (
            <>
              {t.scenario && <div className="scenario"><Markdown text={t.scenario} /></div>}
              {t.checklist?.length > 0 && <details className="check"><summary>Checklist for a strong answer</summary><ul>{t.checklist.map((c, k) => <li key={k}>{c}</li>)}</ul></details>}
              <label className="sr" htmlFor={`w-${t.id}`}>Your answer</label>
              <textarea id={`w-${t.id}`} value={answers[t.id] || ''} maxLength={6000} placeholder={t.starter || 'Write your answer here…'} onChange={(e) => setAnswers({ ...answers, [t.id]: e.target.value })} />
              <div className={`wc ${wordCount(answers[t.id] || '') >= (t.minWords || 0) ? 'ok' : ''}`}>{wordCount(answers[t.id] || '')} words{t.minWords ? ` · aim for at least ${t.minWords}` : ''}</div>
            </>
          ) : (
            <div className="opts" role="radiogroup" aria-label={t.prompt}>
              {t.options.map((o) => (
                <button key={o.id} type="button" role="radio" aria-checked={answers[t.id] === o.id} className={`opt ${answers[t.id] === o.id ? 'sel' : ''}`} onClick={() => setAnswers({ ...answers, [t.id]: o.id })}>
                  <span className="rb" /><span>{o.text}</span>
                </button>
              ))}
            </div>
          )}
        </article>
      ))}
      <div className="row wrap">
        <button className="btn lg" disabled={busy || missing.length > 0} onClick={submit}>{busy ? 'Marking…' : 'Submit for rating'}</button>
        {missing.length > 0 && <span className="muted small">{missing.length} task{missing.length > 1 ? 's' : ''} still to answer</span>}
      </div>
    </div>
  );
}

/* ───────── side panels ───────── */
function NotesPanel({ slug, itemId, query, preview }) {
  const toast = useToast();
  const [text, setText] = useState('');
  const { data, loading, setData } = useAsync(() => api.get(`/learn/${slug}/notes?itemId=${encodeURIComponent(itemId)}${query.replace('?', '&')}`), [slug, itemId]);
  const add = async () => {
    try {
      const r = await api.post(`/learn/${slug}/notes${query}`, { itemId, body: text });
      setData((d) => ({ notes: [r.note, ...(d?.notes || [])] })); setText('');
    } catch (e) { toast(e.message, 'err'); }
  };
  const del = async (id) => { try { await api.del(`/notes/${id}`); setData((d) => ({ notes: d.notes.filter((n) => n.id !== id) })); } catch (e) { toast(e.message, 'err'); } };
  return (
    <div>
      {preview ? <p className="muted">Notes are switched off in preview.</p> : (
        <>
          <label className="sr" htmlFor="newnote">New note</label>
          <textarea id="newnote" style={{ minHeight: 96 }} value={text} onChange={(e) => setText(e.target.value)} maxLength={5000} placeholder="Write what you want to remember…" />
          <div style={{ margin: '8px 0 16px' }}><button className="btn sm" disabled={!text.trim()} onClick={add}>Save note</button></div>
        </>
      )}
      {loading ? <Spinner /> : (data?.notes || []).map((n) => (
        <div className="note" key={n.id}>
          <div className="when"><span>{timeAgo(n.updatedAt)}</span><button className="icon-btn" style={{ width: 28, height: 28 }} onClick={() => del(n.id)} aria-label="Delete note"><Icon name="trash" size={16} /></button></div>
          {n.body}
        </div>
      ))}
      {!loading && !(data?.notes || []).length && !preview && <p className="muted">Notes you save here stay with this step, and you can find them all on your learning page.</p>}
    </div>
  );
}

function AiPanel({ slug, itemId, query, kind }) {
  const toast = useToast();
  const [msgs, setMsgs] = useState([]);
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const [mode, setMode] = useState('local');
  const end = useRef(null);
  useEffect(() => {
    let live = true;
    api.get(`/learn/${slug}/ai?itemId=${encodeURIComponent(itemId)}${query.replace('?', '&')}`).then((r) => { if (live) { setMsgs(r.messages); setMode(r.mode); } }).catch(() => {});
    return () => { live = false; };
  }, [slug, itemId, query]);
  useEffect(() => { end.current?.scrollIntoView({ block: 'end' }); }, [msgs, busy]);
  const send = async (message) => {
    if (!message.trim() || busy) return;
    setMsgs((m) => [...m, { role: 'user', content: message }]); setText(''); setBusy(true);
    try {
      const r = await api.post(`/learn/${slug}/ai${query}`, { itemId, message });
      setMsgs((m) => [...m, { role: 'assistant', content: r.answer }]);
    } catch (e) { toast(e.message, 'err'); }
    setBusy(false);
  };
  const ideas = kind === 'assessment' ? ['How do I plan my answer?', 'What does the rubric look for?'] : ['Explain this in simpler words', 'Give me another example', 'What are the key points?'];
  return (
    <div className="chat-wrap">
      <p className="small muted" style={{ marginTop: 0 }}>{mode === 'ai' ? 'Answers come from an AI model, using this lesson.' : 'Answers come from the text of this lesson.'} {kind === 'assessment' ? 'For graded tasks I can explain ideas but I will not write your answer.' : ''}</p>
      <div className="chat" aria-live="polite">
        {msgs.map((m, i) => <div key={i} className={`msg ${m.role}`}>{m.content}</div>)}
        {busy && <div className="msg assistant">Thinking…</div>}
        <div ref={end} />
      </div>
      {!msgs.length && <div className="suggest" style={{ marginTop: 10 }}>{ideas.map((s) => <button key={s} onClick={() => send(s)}>{s}</button>)}</div>}
      <form onSubmit={(e) => { e.preventDefault(); send(text); }} className="row" style={{ marginTop: 12, alignItems: 'flex-end' }}>
        <label className="sr" htmlFor="aiq">Ask a question about this page</label>
        <textarea id="aiq" rows={2} style={{ minHeight: 0 }} value={text} maxLength={1000} onChange={(e) => setText(e.target.value)} placeholder="Ask about this page…" onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(text); } }} />
        <button className="btn sm" disabled={busy || !text.trim()} aria-label="Send"><Icon name="send" size={18} /></button>
      </form>
    </div>
  );
}

/* ───────── page ───────── */
export function Player({ params }) {
  const { loading: authLoading } = useRequireAuth();
  const { user } = useAuth();
  const { search } = useLocation();
  const preview = search.get('preview') === '1';
  const query = preview ? '?preview=1' : '';
  const slug = params.slug;
  const outlineQ = useAsync(() => (user ? api.get(`/learn/${slug}${query}`) : Promise.resolve(null)), [slug, user?.id, query]);
  const outline = outlineQ.data;
  const itemId = params.itemId ? decodeURIComponent(params.itemId) : null;
  const [showOutline, setShowOutline] = useState(() => window.innerWidth > 900);
  const [drawer, setDrawer] = useState(null);

  useEffect(() => {
    if (outline && !itemId) navigate(`/learn/${slug}/${outline.nextItemId || outline.order[0]}${query}`, { replace: true });
  }, [outline, itemId, slug, query]);

  const itemQ = useAsync(() => (user && itemId ? api.get(`/learn/${slug}/items/${encodeURIComponent(itemId)}${query}`) : Promise.resolve(null)), [slug, itemId, user?.id, query]);
  const view = itemQ.data;
  useHeartbeat(slug, itemId, query, !!view && !preview);
  useEffect(() => { document.title = view ? `${view.title} · ${outline?.course.title || 'Lumina Learning'}` : 'Lumina Learning'; }, [view, outline]);

  const refresh = useCallback(() => outlineQ.reload(), [outlineQ]);
  const idx = outline && itemId ? outline.order.indexOf(itemId) : -1;
  const prev = idx > 0 ? outline.order[idx - 1] : null;
  const next = idx >= 0 && idx < outline.order.length - 1 ? outline.order[idx + 1] : null;
  const href = (id) => `/learn/${slug}/${id}${query}`;
  const [busy, setBusy] = useState(false);
  const toast = useToast();

  const completeAndNext = async () => {
    setBusy(true);
    try {
      if (!view.completed) await api.post(`/learn/${slug}/items/${encodeURIComponent(itemId)}/complete${query}`);
      await outlineQ.reload();
      navigate(next ? href(next) : `/courses/${slug}${query}`);
    } catch (e) { toast(e.message, 'err'); }
    setBusy(false);
  };

  if (authLoading) return <Spinner />;
  if (outlineQ.error) return <div className="container" style={{ paddingTop: 60 }}><ErrorBox error={outlineQ.error} retry={outlineQ.reload} /><p><Link to={`/courses/${slug}`}>Go to the course page</Link></p></div>;
  if (!outline) return <Spinner />;
  const body = view?.body;
  const needsComplete = view && ['overview', 'video', 'reading'].includes(view.kind);
  const toggleDrawer = (name) => setDrawer((d) => (d === name ? null : name));

  return (
    <div className="player">
      <header className="ptop">
        <button className="icon-btn" onClick={() => setShowOutline(!showOutline)} aria-label={showOutline ? 'Hide outline' : 'Show outline'} aria-expanded={showOutline}><Icon name="menu" /></button>
        <Link to="/my" aria-label="Lumina Learning home"><Logo withText={false} size={30} /></Link>
        <div className="grow"><div className="title">{outline.course.title}</div></div>
        {preview && <span className="previewflag">Preview · nothing is saved</span>}
        {preview
          ? <Link to={`/admin/courses/${outline.course.id}${itemId ? `?item=${encodeURIComponent(itemId)}` : ''}`} className="btn ghost sm"><Icon name="arrowLeft" size={16} /> Back to editing</Link>
          : <Link to="/my" className="btn ghost sm">My learning</Link>}
      </header>
      <div className={`pbody ${showOutline ? '' : 'noOutline'} ${drawer ? 'withDrawer' : ''}`}>
        {showOutline && <Outline outline={outline} slug={slug} current={itemId} q={query} onClose={() => window.innerWidth <= 900 ? setShowOutline(false) : setShowOutline(false)} />}
        <main className="card stage" id="top">
          {itemQ.loading && !view ? <Spinner /> : itemQ.error ? <ErrorBox error={itemQ.error} retry={itemQ.reload} /> : view && (
            <>
              <div className="stage-main">
                <div className="where">{[view.crumbs.unit, view.crumbs.lesson, view.crumbs.session].filter(Boolean).join(' › ')}</div>
                <h1>{view.title}</h1>
                <div className="row small muted" style={{ marginBottom: 18 }}><Icon name={view.kind} size={16} /> {kindLabel[view.kind]}{view.estMinutes ? <><Icon name="clock" size={16} /> {minutesLabel(view.estMinutes)}</> : null}{view.completed && <span className="pill good">Completed</span>}</div>
                {view.kind === 'overview' && <Overview body={body} />}
                {view.kind === 'video' && <Video body={body} />}
                {view.kind === 'reading' && <Markdown text={body.markdown} className="prose" />}
                {view.kind === 'quiz' && <Quiz key={view.id} body={body} state={view.state} slug={slug} itemId={view.id} query={query} onProgress={refresh} />}
                {view.kind === 'assessment' && <Assessment key={view.id} body={body} view={view} slug={slug} itemId={view.id} query={query} onProgress={refresh} nextHref={next && href(next)} />}
              </div>
              <div className="stage-foot">
                {prev ? <Link to={href(prev)} className="btn ghost"><Icon name="arrowLeft" size={16} /> Previous</Link> : <span />}
                {needsComplete ? (
                  <button className="btn" disabled={busy} onClick={completeAndNext}>{view.completed ? 'Next' : next ? 'Mark complete and continue' : 'Mark complete'} <Icon name="arrowRight" size={16} /></button>
                ) : next ? <Link to={href(next)} className="btn soft">Next <Icon name="arrowRight" size={16} /></Link> : <Link to="/my" className="btn soft">Back to my learning</Link>}
              </div>
            </>
          )}
        </main>
        {drawer && view && (
          <section className="card drawer" aria-label={drawer === 'notes' ? 'Notes' : drawer === 'ai' ? 'Ask AI' : 'Transcript'}>
            <div className="drawer-head"><h2 style={{ fontSize: '1.15rem' }}>{drawer === 'notes' ? 'My notes' : drawer === 'ai' ? 'Ask the assistant' : 'Transcript'}</h2><button className="icon-btn" onClick={() => setDrawer(null)} aria-label="Close panel"><Icon name="x" /></button></div>
            <div className="drawer-body">
              {drawer === 'notes' && <NotesPanel slug={slug} itemId={view.id} query={query} preview={preview} />}
              {drawer === 'ai' && <AiPanel slug={slug} itemId={view.id} query={query} kind={view.kind} />}
              {drawer === 'transcript' && <Markdown text={view.body.transcript || 'No transcript for this page.'} className="prose" />}
            </div>
          </section>
        )}
        <nav className="card rail" aria-label="Learning tools">
          <button className={drawer === 'notes' ? 'on' : ''} onClick={() => toggleDrawer('notes')} aria-pressed={drawer === 'notes'}><Icon name="notes" />Notes</button>
          {view?.kind === 'video' && <button className={drawer === 'transcript' ? 'on' : ''} onClick={() => toggleDrawer('transcript')} aria-pressed={drawer === 'transcript'}><Icon name="transcript" />Transcript</button>}
          <button className={`ai ${drawer === 'ai' ? 'on' : ''}`} onClick={() => toggleDrawer('ai')} aria-pressed={drawer === 'ai'}><Icon name="sparkle" />Ask AI</button>
        </nav>
      </div>
    </div>
  );
}
