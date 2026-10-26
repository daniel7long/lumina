import { useEffect, useState } from 'react';
import { Link, navigate, useLocation } from '../lib/router.jsx';
import { api } from '../lib/api.js';
import { useAuth } from '../lib/auth.jsx';
import { Band, GoogleButton, PublicPage, TopBar } from '../components/Shell.jsx';
import { Cover, Empty, ErrorBox, Icon, ProgressBar, Spinner, useAsync, useToast } from '../components/ui.jsx';
import { minutesLabel } from '../lib/format.js';
import { SITE } from '../lib/site.js';

const EFFECTIVE = [
  { icon: 'target', title: 'Clear learning objectives', text: 'Every unit starts with well-defined goals, so you always know what you are working toward.' },
  { icon: 'feedback', title: 'Instant feedback', text: 'Auto-graded questions explain each answer the moment you choose it, so mistakes become lessons.' },
  { icon: 'doing', title: 'Learning by doing', text: 'Short, hands-on activities turn concepts into skills you can use.' },
  { icon: 'progress', title: 'Progress tracking', text: 'Your learning dashboard shows what you finished, your time spent and your unit ratings.' },
];

function FeatureIcon({ name }) {
  const common = { width: 56, height: 56, viewBox: '0 0 56 56', fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (name === 'target') return (<svg {...common}><circle cx="26" cy="30" r="20" /><circle cx="26" cy="30" r="13" /><circle cx="26" cy="30" r="5.5" /><path d="M26 30 46 10M40 8v8h8" /></svg>);
  if (name === 'feedback') return (<svg {...common}><path d="m6 14 5 5 9-10M6 36l9 9M15 36l-9 9" /><path d="M28 12h22M28 20h22M28 38h22M28 46h22" /></svg>);
  if (name === 'doing') return (<svg {...common}><path d="M8 12c8-3 14-2 20 3 6-5 12-6 20-3v32c-8-3-14-2-20 3-6-5-12-6-20-3V12ZM28 15v32" /><path d="M14 20c4-1 8 0 10 2M14 28c4-1 8 0 10 2M32 22c2-2 6-3 10-2M32 30c2-2 6-3 10-2" /></svg>);
  return (<svg {...common}><rect x="6" y="8" width="44" height="36" rx="4" /><path d="M6 16h44M16 36v-6m6 6v-12m6 12V26m6 10v-8" /><circle cx="40" cy="38" r="9" fill="var(--sky)" /><path d="m47 45 6 6" /></svg>);
}

export function Landing() {
  const { user } = useAuth();
  const { data } = useAsync(() => api.get('/catalog?limit=3'), []);
  const courses = data?.courses || [];
  return (
    <PublicPage>
      <section className="hero">
        <div className="container">
          <div>
            <h1>Online courses built on the science of learning</h1>
            <p className="lead">Lumina is the next generation of the Open Learning Initiative platform at Carnegie Mellon. Choose from a growing catalogue of courses with clear objectives, short sessions, quizzes that explain every answer, and a dashboard that shows how you are doing.</p>
            <div className="row wrap">
              <Link to={user ? '/my' : '/signup'} className="btn gold lg">{user ? 'Continue learning' : 'Create a free account'}</Link>
              <Link to="/courses" className="btn ghost lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.6)' }}>Browse courses</Link>
            </div>
            <div className="facts">
              {SITE.stats.map((s) => <div key={s.label}><b>{s.value}</b>{s.label}</div>)}
            </div>
          </div>
          <div className="art"><Cover theme="blue" rounded={false} /></div>
        </div>
      </section>

      <section className="effective" aria-labelledby="effective-h">
        <div className="container">
          <h2 id="effective-h">What makes Lumina courses effective?</h2>
          <div className="effgrid">
            {EFFECTIVE.map((f) => (
              <div key={f.title}><FeatureIcon name={f.icon} /><h3>{f.title}</h3><p>{f.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <h2>How a lesson works</h2>
          <p className="sub">Every lesson is cut into sessions of about ten minutes, so you can learn on a bus or between classes.</p>
          <div className="how">
            <div><Icon name="video" size={28} /><h3>Watch and read</h3><p>Short videos with transcripts, and readings with key ideas you can use right away.</p></div>
            <div><Icon name="quiz" size={28} /><h3>Check as you go</h3><p>One or two questions after each session. You see at once why each answer is right or wrong.</p></div>
            <div><Icon name="assessment" size={28} /><h3>Show what you can do</h3><p>Each unit ends with an assessment rated A+, A, B+, B or C. A B or higher passes the unit.</p></div>
          </div>
        </section>
        <section className="section">
          <h2>Courses to start with</h2>
          <p className="sub">Free to join. Pick up where you stopped on any device.</p>
          {courses.length ? <div className="tiles">{courses.slice(0, 3).map((c, i) => <CourseTile key={c.slug} c={c} i={i} />)}</div> : <Empty title="New courses are on their way">Check back soon.</Empty>}
          {courses.length > 0 && <p style={{ marginTop: 22 }}><Link to="/courses" className="btn ghost">See all courses</Link></p>}
        </section>
      </div>
    </PublicPage>
  );
}

export function CourseTile({ c, i = 0 }) {
  return (
    <Link to={`/courses/${c.slug}`} className="tile">
      <div className="cover-box"><Cover theme={c.coverTheme} seed={i} rounded={false} /></div>
      <div className="body">
        <span className="meta">{c.category}</span>
        <h3>{c.title}</h3>
        <p className="meta" style={{ margin: 0 }}>{c.units} units · {minutesLabel(c.estMinutes)}{c.level ? ` · ${c.level}` : ''}</p>
        {c.enrolled && <><ProgressBar value={c.progress || 0} label={`${c.title} progress`} /><span className="pill good" style={{ justifySelf: 'start' }}>Enrolled · {c.progress || 0}%</span></>}
      </div>
    </Link>
  );
}

const CAT_THEMES = ['blue', 'teal', 'amber', 'violet', 'rose', 'slate'];

export function Catalog() {
  const { search } = useLocation();
  const toast = useToast();
  const q = search.get('q') || '';
  const category = search.get('category') || '';
  const [text, setText] = useState(q);
  const [extra, setExtra] = useState({ key: '', list: [], hasMore: null, busy: false });
  const qs = (o = {}) => new URLSearchParams({ ...(q && { q }), ...(category && { category }), ...o }).toString();
  const { data, loading, error, reload } = useAsync(() => api.get(`/catalog?${qs()}`), [q, category]);
  const setParam = (k, v, replace = true) => {
    const p = new URLSearchParams(search);
    v ? p.set(k, v) : p.delete(k);
    navigate(`/courses${p.toString() ? `?${p}` : ''}`, { replace });
  };
  // Search as you type, but wait for a short pause so we do not call the server on every key.
  useEffect(() => {
    if (text === q) return undefined;
    const t = setTimeout(() => setParam('q', text.trim()), 300);
    return () => clearTimeout(t);
  }, [text]);
  useEffect(() => { setText(q); }, [q]);

  const key = `${q}|${category}`;
  const more = extra.key === key ? extra : { list: [], hasMore: null, busy: false };
  const list = [...(data?.courses || []), ...more.list];
  const hasMore = more.hasMore ?? data?.hasMore;
  const loadMore = async () => {
    setExtra({ ...more, key, busy: true });
    try {
      const r = await api.get(`/catalog?${qs({ offset: list.length })}`);
      setExtra({ key, list: [...more.list, ...r.courses], hasMore: r.hasMore, busy: false });
    } catch (e) { toast(e.message, 'err'); setExtra({ ...more, key, busy: false }); }
  };
  const cats = data?.categories || [];
  return (
    <PublicPage>
      <div className="container">
        <div className="page-title cat-head">
          <div>
            <h1>Explore courses</h1>
            <p className="muted" style={{ maxWidth: '56ch' }}>Self-paced courses from Carnegie Mellon, with short sessions, instant quiz feedback and a rating for every unit. Pick a subject or search by title.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setParam('q', text.trim()); }} role="search">
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Search courses…" aria-label="Search courses" />
          </form>
        </div>
        <div className="cats" role="group" aria-label="Browse by subject">
          <button className={`cat ${!category ? 'on' : ''}`} aria-pressed={!category} onClick={() => setParam('category', '')}>
            <span className="cat-img"><Cover theme="blue" seed={0} rounded={false} /></span>
            <span className="cat-label">All courses ({data?.allCount ?? 0})</span>
          </button>
          {cats.map((c, i) => (
            <button key={c.name} className={`cat ${category === c.name ? 'on' : ''}`} aria-pressed={category === c.name} onClick={() => setParam('category', c.name)}>
              <span className="cat-img"><Cover theme={CAT_THEMES[(i + 1) % CAT_THEMES.length]} seed={i + 1} rounded={false} /></span>
              <span className="cat-label">{c.name} ({c.count})</span>
            </button>
          ))}
        </div>
        {loading ? <Spinner /> : error ? <ErrorBox error={error} retry={reload} /> : list.length ? (
          <>
            <p className="muted small" style={{ marginTop: 26 }} aria-live="polite">Showing {list.length} of {data.total} {data.total === 1 ? 'course' : 'courses'}{category ? ` in ${category}` : ''}{q ? ` matching “${q}”` : ''}</p>
            <div className="tiles">{list.map((c, i) => <CourseTile key={c.slug} c={c} i={i} />)}</div>
            {hasMore && <p style={{ textAlign: 'center', marginTop: 28 }}><button className="btn ghost" onClick={loadMore} disabled={more.busy}>{more.busy ? 'Loading…' : 'Show more courses'}</button></p>}
          </>
        ) : <Empty title="No courses match">Try a different word or choose another subject.</Empty>}
      </div>
    </PublicPage>
  );
}

export function CourseDetail({ params }) {
  const { user } = useAuth();
  const toast = useToast();
  const [busy, setBusy] = useState(false);
  const { data, loading, error, reload } = useAsync(() => api.get(`/catalog/${params.slug}`), [params.slug, user?.id]);
  if (loading) return <PublicPage><Spinner /></PublicPage>;
  if (error) return <PublicPage><div className="container" style={{ paddingTop: 40 }}><ErrorBox error={error} retry={reload} /><p><Link to="/courses">Back to all courses</Link></p></div></PublicPage>;
  const { course, units, enrollment, preview } = data;
  const start = async () => {
    if (!user) return navigate(`/signup?next=${encodeURIComponent(`/courses/${course.slug}`)}`);
    setBusy(true);
    try {
      await api.post(`/courses/${course.slug}/enroll`);
      navigate(`/learn/${course.slug}`);
    } catch (e) { toast(e.message, 'err'); setBusy(false); }
  };
  const totalLessons = units.reduce((n, u) => n + u.lessons.length, 0);
  return (
    <PublicPage>
      <Band trail={[{ label: 'Home', to: '/' }, { label: 'Courses', to: '/courses' }, { label: course.title }]} />
      <section className="course-hero">
        <div className="container">
          <div>
            {preview && <span className="previewflag">Draft preview</span>}
            <h1 style={{ margin: '10px 0 12px' }}>{course.title}</h1>
            <p>{course.subtitle}</p>
            <div className="row wrap" style={{ marginTop: 18 }}>
              {enrollment ? <Link to={`/learn/${course.slug}`} className="btn gold lg">{enrollment.status === 'completed' ? 'Review course' : 'Continue learning'}</Link>
                : preview ? <Link to={`/learn/${course.slug}?preview=1`} className="btn gold lg">Preview as a learner</Link>
                : <button className="btn gold lg" onClick={start} disabled={busy}>{busy ? 'Enrolling…' : 'Enroll for free'}</button>}
              {enrollment && <span className="pill gold">{enrollment.percent}% complete</span>}
            </div>
          </div>
          <div className="art"><Cover theme={course.coverTheme} rounded={false} /></div>
        </div>
      </section>
      <div className="container detail-grid">
        <div>
          <h2 style={{ marginBottom: 10 }}>About this course</h2>
          <p style={{ maxWidth: '65ch' }}>{course.description}</p>
          <h2 style={{ margin: '34px 0 14px' }}>What you will learn</h2>
          {units.map((u) => (
            <article className="unit-card" key={u.id}>
              <h3>{u.title}</h3>
              <p className="muted" style={{ marginBottom: 6 }}>{u.summary}</p>
              <strong className="small">By the end of this unit you will be able to:</strong>
              <ul>{u.objectives.map((o, i) => <li key={i}>{o}</li>)}</ul>
              <p className="small muted" style={{ margin: '12px 0 0' }}>{u.lessons.length} lessons · {u.lessons.reduce((n, l) => n + l.sessions, 0)} sessions · about {minutesLabel(u.minutes)}</p>
            </article>
          ))}
        </div>
        <aside className="side-card">
          <h3 style={{ fontSize: '1.15rem' }}>Course details</h3>
          <dl>
            <div><dt>Category</dt><dd>{course.category}</dd></div>
            {course.level && <div><dt>Level</dt><dd>{course.level}</dd></div>}
            <div><dt>Content</dt><dd>{units.length} units · {totalLessons} lessons</dd></div>
            <div><dt>Time</dt><dd>About {minutesLabel(course.estMinutes)}</dd></div>
            <div><dt>Pass mark</dt><dd>Rating B or higher in each unit assessment</dd></div>
          </dl>
          {!enrollment && !preview && <button className="btn block" onClick={start} disabled={busy}>Enroll for free</button>}
        </aside>
      </div>
    </PublicPage>
  );
}

function AuthFrame({ title, children, art }) {
  return (
    <>
      <TopBar />
      <div className="auth-wrap">
        <div className="auth-art"><div><Cover theme="blue" /><h2>{art}</h2><p style={{ color: '#cfe0f6', maxWidth: '36ch' }}>One account for every course, on any device.</p></div></div>
        <div className="auth-form"><div className="auth-card"><h1>{title}</h1>{children}</div></div>
      </div>
    </>
  );
}

export function Login() {
  const { login, google, user } = useAuth();
  const { search } = useLocation();
  const next = search.get('next') || '/my';
  const [f, setF] = useState({ email: '', password: '' });
  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);
  if (user) { navigate(next, { replace: true }); return null; }
  const submit = async (e) => {
    e.preventDefault(); setBusy(true); setErr(null);
    try { const u = await login(f.email, f.password); navigate(u.role === 'admin' && next === '/my' ? '/admin' : next, { replace: true }); } catch (x) { setErr(x); setBusy(false); }
  };
  return (
    <AuthFrame title="Welcome back" art="Pick up right where you left off">
      <GoogleButton onCredential={async (c) => { try { await google(c); navigate(next, { replace: true }); } catch (x) { setErr(x); } }} />
      <div className="divider">or use your email</div>
      <form className="stack" onSubmit={submit}>
        <label className="field">Email<input type="email" autoComplete="email" required value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></label>
        <label className="field">Password<input type="password" autoComplete="current-password" required value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} /></label>
        <ErrorBox error={err} />
        <button className="btn lg" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
      </form>
      <p className="muted">New here? <Link to={`/signup${search.get('next') ? `?next=${encodeURIComponent(next)}` : ''}`}>Create an account</Link></p>
    </AuthFrame>
  );
}

export function Signup() {
  const { signup, google, user } = useAuth();
  const { search } = useLocation();
  const next = search.get('next') || '/courses';
  const [f, setF] = useState({ name: '', email: '', password: '' });
  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);
  if (user) { navigate(next, { replace: true }); return null; }
  const submit = async (e) => {
    e.preventDefault(); setBusy(true); setErr(null);
    try { await signup(f.name, f.email, f.password); navigate(next, { replace: true }); } catch (x) { setErr(x); setBusy(false); }
  };
  return (
    <AuthFrame title="Create your account" art="Choose a course and start in minutes">
      <GoogleButton text="signup_with" onCredential={async (c) => { try { await google(c); navigate(next, { replace: true }); } catch (x) { setErr(x); } }} />
      <div className="divider">or sign up with email</div>
      <form className="stack" onSubmit={submit}>
        <label className="field">Your name<input autoComplete="name" required maxLength={80} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
        <label className="field">Email<input type="email" autoComplete="email" required value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></label>
        <label className="field">Password<input type="password" autoComplete="new-password" required minLength={8} value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} /><span className="hint">At least 8 characters.</span></label>
        <ErrorBox error={err} />
        <button className="btn lg" disabled={busy}>{busy ? 'Creating account…' : 'Create account'}</button>
      </form>
      <p className="muted">Already have an account? <Link to="/login">Sign in</Link></p>
    </AuthFrame>
  );
}
