import { useState } from 'react';
import { Link, navigate, useLocation } from '../lib/router.jsx';
import { api } from '../lib/api.js';
import { useAuth } from '../lib/auth.jsx';
import { Band, GoogleButton, PublicPage, TopBar } from '../components/Shell.jsx';
import { Cover, Empty, ErrorBox, Icon, ProgressBar, Spinner, useAsync, useToast } from '../components/ui.jsx';
import { minutesLabel } from '../lib/format.js';

export function Landing() {
  const { user } = useAuth();
  const { data } = useAsync(() => api.get('/catalog'), []);
  const courses = data?.courses || [];
  return (
    <PublicPage>
      <section className="hero">
        <div className="container">
          <div>
            <h1>Learn English the way university actually uses it</h1>
            <p className="lead">Short sessions, quick quizzes with instant explanations, and an assistant that answers your questions while you read. Start with housing, banking and campus life, then move on to emails, lectures and research.</p>
            <div className="row wrap">
              <Link to={user ? '/my' : '/signup'} className="btn gold lg">{user ? 'Continue learning' : 'Create a free account'}</Link>
              <Link to="/courses" className="btn ghost lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.6)' }}>Browse courses</Link>
            </div>
            <div className="facts">
              <div><b>3 units</b>12 lessons</div>
              <div><b>40+</b>short sessions</div>
              <div><b>A+ to C</b>unit ratings</div>
            </div>
          </div>
          <div className="art"><Cover theme="blue" rounded={false} /></div>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <h2>How a lesson works</h2>
          <p className="sub">Every lesson is cut into sessions of about ten minutes, so you can learn on a bus or between classes.</p>
          <div className="how">
            <div><Icon name="video" size={28} /><h3>Watch and read</h3><p>Short videos with transcripts and readings with key phrases you can use right away.</p></div>
            <div><Icon name="quiz" size={28} /><h3>Check as you go</h3><p>One or two questions after each session. You see at once why each answer is right or wrong.</p></div>
            <div><Icon name="assessment" size={28} /><h3>Show what you can do</h3><p>Each unit ends with an assessment rated A+, A, B+, B or C. A B or higher passes the unit.</p></div>
          </div>
        </section>
        <section className="section">
          <h2>Courses to start with</h2>
          <p className="sub">Free to join. Pick up where you stopped on any device.</p>
          {courses.length ? <div className="tiles">{courses.slice(0, 3).map((c, i) => <CourseTile key={c.slug} c={c} i={i} />)}</div> : <Empty title="New courses are on their way">Check back soon.</Empty>}
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

export function Catalog() {
  const { search } = useLocation();
  const q = search.get('q') || '';
  const category = search.get('category') || '';
  const { data, loading, error, reload } = useAsync(() => api.get(`/catalog?${new URLSearchParams({ ...(q && { q }), ...(category && { category }) })}`), [q, category]);
  const setParam = (k, v) => {
    const p = new URLSearchParams(search);
    v ? p.set(k, v) : p.delete(k);
    navigate(`/courses${p.toString() ? `?${p}` : ''}`, { replace: true });
  };
  return (
    <PublicPage>
      <div className="container">
        <div className="page-title">
          <h1>Explore courses</h1>
          <p className="muted" style={{ maxWidth: '60ch' }}>Self-paced courses with short sessions, instant quiz feedback and ratings for every unit.</p>
          <form onSubmit={(e) => e.preventDefault()} style={{ maxWidth: 520, marginTop: 14 }}>
            <input value={q} onChange={(e) => setParam('q', e.target.value)} placeholder="Search courses…" aria-label="Search courses" />
          </form>
          <div className="filters" role="group" aria-label="Filter by category">
            <button className={`chip ${!category ? 'on' : ''}`} onClick={() => setParam('category', '')}>All courses</button>
            {(data?.categories || []).map((c) => <button key={c.name} className={`chip ${category === c.name ? 'on' : ''}`} onClick={() => setParam('category', c.name)}>{c.name} ({c.count})</button>)}
          </div>
        </div>
        {loading ? <Spinner /> : error ? <ErrorBox error={error} retry={reload} /> : data.courses.length ? (
          <div className="tiles">{data.courses.map((c, i) => <CourseTile key={c.slug} c={c} i={i} />)}</div>
        ) : <Empty title="No courses match">Try a different word or clear the filter.</Empty>}
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
