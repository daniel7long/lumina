import { Fragment, useEffect, useState } from 'react';
import { Link, navigate, useLocation } from '../lib/router.jsx';
import { api } from '../lib/api.js';
import { useAuth } from '../lib/auth.jsx';
import { BarChart, ChartCard, Granularity, HBars, Kpi, LineChart } from '../components/Charts.jsx';
import { Avatar, Empty, ErrorBox, Icon, Logo, Modal, RatingBadge, Spinner, useAsync, useToast } from '../components/ui.jsx';
import { dateLabel, num, pct, timeAgo } from '../lib/format.js';

export function AdminLayout({ title, actions, children, active }) {
  const { user, loading, logout } = useAuth();
  useEffect(() => {
    if (loading) return;
    if (!user) navigate(`/login?next=${encodeURIComponent(location.pathname)}`, { replace: true });
    else if (user.role !== 'admin') navigate('/my', { replace: true });
  }, [loading, user]);
  if (loading || !user || user.role !== 'admin') return <Spinner />;
  const link = (to, icon, label, key) => <Link to={to} className={active === key ? 'on' : ''}><Icon name={icon} size={20} />{label}</Link>;
  return (
    <div className="admin">
      <nav className="aside" aria-label="Admin">
        <Logo light />
        {link('/admin', 'chart', 'Overview', 'overview')}
        {link('/admin/courses', 'book', 'Courses', 'courses')}
        {link('/admin/users', 'users', 'Learners', 'users')}
        <span className="sp" />
        <Link to="/courses"><Icon name="external" size={20} />Learner site</Link>
        <a href="#out" onClick={async (e) => { e.preventDefault(); await logout(); navigate('/'); }}><Icon name="logout" size={20} />Sign out</a>
      </nav>
      <main className="amain" id="top">
        <header><h1>{title}</h1><div className="row wrap">{actions}</div></header>
        {children}
      </main>
    </div>
  );
}

const pts = (arr) => arr.map((p) => ({ label: p.label, value: p.value }));
const Defs = ({ d }) => (
  <details className="defs" style={{ marginTop: 16 }}>
    <summary style={{ cursor: 'pointer', fontWeight: 700 }}>How these numbers are counted</summary>
    <dl>{Object.entries(d).map(([k, v]) => <Fragment key={k}><dt>{{ completed: 'Completed', dropped: 'Dropped out', inProgress: 'In progress', completionRate: 'Completion rate', dropoutRate: 'Dropout rate', active: 'Active learner' }[k] || k}</dt><dd style={{ margin: 0 }}>{v}</dd></Fragment>)}</dl>
  </details>
);

function StatusPill({ s }) {
  return <span className={`pill ${s === 'published' ? 'good' : s === 'draft' ? 'gold' : 'mute'}`}>{s === 'published' ? 'Released' : s === 'draft' ? 'Draft' : 'Archived'}</span>;
}

export function AdminOverview() {
  const [g, setG] = useState('day');
  const { data, loading, error, reload } = useAsync(() => api.get(`/admin/overview?granularity=${g}`), [g]);
  const k = data?.kpis;
  const word = { day: 'day', week: 'week', month: 'month' }[g];
  return (
    <AdminLayout title="Platform overview" active="overview" actions={<Granularity value={g} onChange={setG} />}>
      {loading && !data ? <Spinner /> : error ? <ErrorBox error={error} retry={reload} /> : (
        <>
          <div className="kpis">
            <Kpi accent value={num(k.learners)} label="Learners" sub={`+${k.newLearners7d} this week · +${k.newLearners30d} in 30 days`} />
            <Kpi value={num(k.activeWeek)} label="Active this week" sub={`${k.activeToday} today · ${k.activeMonth} in 30 days`} />
            <Kpi value={num(k.enrolled)} label="Enrolments" sub={`${k.inProgress} in progress`} />
            <Kpi value={pct(k.completionRate)} label="Completion rate" sub={`${k.completed} completed`} />
            <Kpi value={pct(k.dropoutRate)} label="Dropout rate" sub={`${k.dropped} dropped out`} />
            <Kpi value={`${num(Math.round(k.totalHours))} h`} label="Learning time" sub={`${k.avgMinutesPerEnrolment} min per enrolment`} />
          </div>
          <div className="grid2">
            <ChartCard title={`New learners per ${word}`} sub="Accounts created (learners only)" table={{ columns: ['Period', 'New learners'], rows: data.series.newLearners.map((p) => [p.label, p.value]) }}>
              <BarChart data={pts(data.series.newLearners)} />
            </ChartCard>
            <ChartCard title={`Active learners per ${word}`} sub="Distinct learners with learning time in the period" table={{ columns: ['Period', 'Active learners'], rows: data.series.activeLearners.map((p) => [p.label, p.value]) }}>
              <LineChart series={[{ name: 'Active learners', points: pts(data.series.activeLearners) }]} area />
            </ChartCard>
            <ChartCard title="Enrolments and completions" sub="Course starts compared with course finishes" table={{ columns: ['Period', 'Enrolments', 'Completions'], rows: data.series.enrollments.map((p, i) => [p.label, p.value, data.series.completions[i].value]) }}>
              <LineChart series={[{ name: 'Enrolments', points: pts(data.series.enrollments) }, { name: 'Completions', points: pts(data.series.completions) }]} />
            </ChartCard>
            <ChartCard title={`Learning minutes per ${word}`} sub="Total time spent by all learners" table={{ columns: ['Period', 'Minutes'], rows: data.series.minutes.map((p) => [p.label, p.value]) }}>
              <BarChart data={pts(data.series.minutes)} color="#1baf7a" />
            </ChartCard>
          </div>
          <div className="grid2">
            <ChartCard title="Course comparison" sub="Completion and dropout as a share of enrolments" table={{ columns: ['Course', 'Enrolled', 'Completion %', 'Dropout %'], rows: data.courses.map((c) => [c.title, c.enrolled, c.completionRate, c.dropoutRate]) }}>
              <p className="small muted" style={{ margin: '6px 0 4px' }}>Completion rate</p>
              <HBars data={data.courses.map((c) => ({ label: c.title, value: c.completionRate }))} unit="%" percent color="#1baf7a" />
              <p className="small muted" style={{ margin: '14px 0 4px' }}>Dropout rate</p>
              <HBars data={data.courses.map((c) => ({ label: c.title, value: c.dropoutRate }))} unit="%" percent color="#eb6834" />
            </ChartCard>
            <ChartCard title="Unit assessment ratings" sub="Each learner's best rating per assessment. B or higher passes." table={{ columns: ['Rating', 'Learners'], rows: data.ratingDistribution.map((r) => [r.rating, r.count]) }}>
              <HBars data={data.ratingDistribution.map((r) => ({ label: r.rating, value: r.count, color: r.rating === 'C' ? '#eb6834' : '#2a78d6' }))} empty="No assessments taken yet." />
            </ChartCard>
          </div>
          <h2 style={{ fontSize: '1.3rem', margin: '24px 0 12px' }}>Courses</h2>
          <div className="tblcard"><table className="tbl">
            <thead><tr><th>Course</th><th>Status</th><th className="num">Enrolled</th><th className="num">In progress</th><th className="num">Completed</th><th className="num">Dropped</th><th className="num">Hours</th></tr></thead>
            <tbody>{data.courses.map((c) => (
              <tr key={c.id} className="click" onClick={() => navigate(`/admin/courses/${c.id}/analytics`)}>
                <td><Link to={`/admin/courses/${c.id}/analytics`}>{c.title}</Link></td><td><StatusPill s={c.status} /></td>
                <td className="num">{c.enrolled}</td><td className="num">{c.inProgress}</td><td className="num">{c.completed} ({pct(c.completionRate)})</td><td className="num">{c.dropped} ({pct(c.dropoutRate)})</td><td className="num">{c.totalHours}</td>
              </tr>))}</tbody></table></div>
          <Defs d={data.definitions} />
        </>
      )}
    </AdminLayout>
  );
}

export function AdminCourses() {
  const toast = useToast();
  const { data, loading, error, reload } = useAsync(() => api.get('/admin/courses'), []);
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState('');
  const create = async (e) => {
    e.preventDefault();
    try { const r = await api.post('/admin/courses', { title }); navigate(`/admin/courses/${r.id}`); } catch (x) { toast(x.message, 'err'); }
  };
  const act = async (c, what) => {
    try { await api.post(`/admin/courses/${c.id}/${what}`); toast(what === 'publish' ? 'Course released to learners.' : what === 'unpublish' ? 'Course moved back to draft.' : 'Course archived.'); reload(); }
    catch (x) { toast(x.details?.length ? `Not ready: ${x.details[0]}${x.details.length > 1 ? ` (+${x.details.length - 1} more, open the editor)` : ''}` : x.message, 'err'); }
  };
  return (
    <AdminLayout title="Courses" active="courses" actions={<button className="btn" onClick={() => setCreating(true)}><Icon name="plus" size={18} /> New course</button>}>
      {loading ? <Spinner /> : error ? <ErrorBox error={error} retry={reload} /> : !data.courses.length ? <Empty title="No courses yet">Create your first course to get started.</Empty> : (
        <div className="tblcard"><table className="tbl">
          <thead><tr><th>Course</th><th>Status</th><th className="num">Units</th><th className="num">Learners</th><th>Updated</th><th>Actions</th></tr></thead>
          <tbody>{data.courses.map((c) => (
            <tr key={c.id}>
              <td><Link to={`/admin/courses/${c.id}`} style={{ fontWeight: 700 }}>{c.title}</Link><div className="small muted">{c.category}</div></td>
              <td><StatusPill s={c.status} /></td><td className="num">{c.units}</td><td className="num">{c.enrolled}</td><td className="nowrap">{timeAgo(c.updatedAt)}</td>
              <td><div className="row wrap" style={{ gap: 6 }}>
                <Link to={`/admin/courses/${c.id}`} className="btn soft sm">Edit</Link>
                <Link to={`/learn/${c.slug}?preview=1`} className="btn soft sm"><Icon name="eye" size={16} /> Preview</Link>
                <Link to={`/admin/courses/${c.id}/analytics`} className="btn soft sm"><Icon name="chart" size={16} /> Analytics</Link>
                {c.status === 'published' ? <button className="btn ghost sm" onClick={() => act(c, 'unpublish')}>Unpublish</button> : c.status === 'draft' ? <button className="btn sm" onClick={() => act(c, 'publish')}>Release</button> : null}
              </div></td>
            </tr>))}</tbody></table></div>
      )}
      {creating && (
        <Modal title="New course" onClose={() => setCreating(false)}>
          <form className="stack" onSubmit={create}>
            <label className="field">Course title<input autoFocus required minLength={3} maxLength={120} value={title} onChange={(e) => setTitle(e.target.value)} /></label>
            <p className="muted small" style={{ margin: 0 }}>It starts as a draft. Learners cannot see it until you release it.</p>
            <button className="btn">Create and open editor</button>
          </form>
        </Modal>
      )}
    </AdminLayout>
  );
}

export function CourseAnalytics({ params }) {
  const [g, setG] = useState('day');
  const { data, loading, error, reload } = useAsync(() => api.get(`/admin/courses/${params.id}/analytics?granularity=${g}`), [params.id, g]);
  const k = data?.kpis;
  const word = { day: 'day', week: 'week', month: 'month' }[g];
  return (
    <AdminLayout title={data ? data.course.title : 'Course analytics'} active="courses" actions={<><Granularity value={g} onChange={setG} /><Link to={`/admin/courses/${params.id}`} className="btn soft sm">Edit course</Link></>}>
      {loading && !data ? <Spinner /> : error ? <ErrorBox error={error} retry={reload} /> : (
        <>
          <div className="kpis">
            <Kpi accent value={num(k.enrolled)} label="Enrolled learners" sub={`${k.inProgress} in progress`} />
            <Kpi value={pct(k.completionRate)} label="Completion rate" sub={`${k.completed} completed`} />
            <Kpi value={pct(k.dropoutRate)} label="Dropout rate" sub={`${k.dropped} dropped out`} />
            <Kpi value={`${k.avgMinutesPerEnrolment} min`} label="Average time per learner" sub={`${Math.round(k.totalHours)} h in total`} />
            <Kpi value={pct(k.avgProgress)} label="Average progress" />
          </div>
          <div className="grid2">
            <ChartCard title={`New learners per ${word}`} sub="Enrolments in this course" table={{ columns: ['Period', 'Enrolments'], rows: data.series.enrollments.map((p) => [p.label, p.value]) }}>
              <BarChart data={pts(data.series.enrollments)} />
            </ChartCard>
            <ChartCard title={`Active learners and completions per ${word}`} table={{ columns: ['Period', 'Active', 'Completions'], rows: data.series.activeLearners.map((p, i) => [p.label, p.value, data.series.completions[i].value]) }}>
              <LineChart series={[{ name: 'Active learners', points: pts(data.series.activeLearners) }, { name: 'Completions', points: pts(data.series.completions) }]} />
            </ChartCard>
            <ChartCard title="Learners at each step" sub="Share of enrolled learners who finished each step, in course order" wide table={{ columns: ['Step', 'Unit', 'Finished %'], rows: data.funnel.map((f) => [`${f.seq}. ${f.title}`, f.unit, f.pct]) }}>
              <LineChart max={100} unit="%" height={230} area series={[{ name: 'Finished', points: data.funnel.map((f) => ({ label: String(f.seq), tip: `${f.seq}. ${f.title}`, value: f.pct })) }]} />
            </ChartCard>
            <ChartCard title="Where learners stop" sub="Dropped-out learners by the unit of their last finished step" table={{ columns: ['Unit', 'Learners'], rows: data.dropOff.map((d) => [d.label, d.count]) }}>
              <HBars data={data.dropOff.map((d) => ({ label: d.label, value: d.count, color: '#eb6834' }))} empty="Nobody has dropped out yet." />
            </ChartCard>
            <ChartCard title="Average time in each unit" sub="Minutes per enrolled learner" table={{ columns: ['Unit', 'Minutes'], rows: data.timePerUnit.map((u) => [u.unit, u.avgMinutes]) }}>
              <HBars data={data.timePerUnit.map((u) => ({ label: u.unit, value: u.avgMinutes }))} unit=" min" color="#1baf7a" />
            </ChartCard>
            <ChartCard title="Time spent by learners" sub="How many learners spent each amount of time" table={{ columns: ['Time', 'Learners'], rows: data.timeHist.map((t) => [t.label, t.count]) }}>
              <BarChart data={data.timeHist.map((t) => ({ label: t.label.replace(' min', ''), tip: t.label, value: t.count }))} color="#6250d6" />
            </ChartCard>
            <ChartCard title="Unit assessments" sub="Pass rate and best ratings" wide table={{ columns: ['Unit', 'Learners', 'Pass rate %', 'Average score', 'Attempts to pass'], rows: data.assessments.map((a) => [a.unit, a.takers, a.passRate, a.avgScore, a.avgAttemptsToPass]) }}>
              <div className="grid2" style={{ marginBottom: 0 }}>
                {data.assessments.map((a) => (
                  <div key={a.id}><strong>{a.unit}</strong><p className="small muted">{a.takers} learners · {pct(a.passRate)} passed · average best score {a.avgScore}%</p>
                    <HBars data={a.ratings.map((r) => ({ label: r.rating, value: r.count, color: r.rating === 'C' ? '#eb6834' : '#2a78d6' }))} empty="No attempts yet." /></div>
                ))}
              </div>
            </ChartCard>
            <ChartCard title="Hardest quiz questions" sub="Share answered correctly on the first try (lowest first)" wide table={{ columns: ['Question', 'Quiz', 'Learners', 'First try %'], rows: data.questions.map((q) => [q.prompt, q.quiz, q.learners, q.firstTryRate]) }}>
              <HBars data={data.questions.map((q) => ({ label: q.prompt, value: q.firstTryRate, note: q.quiz }))} unit="%" percent empty="No quiz answers yet." />
            </ChartCard>
            <ChartCard title="Learners who come back" sub="Active again N days after enrolling (older cohorts only)" table={{ columns: ['Days after enrolling', 'Cohort', 'Came back %'], rows: data.retention.map((r) => [r.day, r.cohort, r.rate ?? '—']) }}>
              <HBars data={data.retention.map((r) => ({ label: `Day ${r.day}`, value: r.rate ?? 0, note: `${r.cohort} learners` }))} unit="%" percent color="#2a78d6" />
            </ChartCard>
          </div>
          <Defs d={data.definitions} />
        </>
      )}
    </AdminLayout>
  );
}

export function AdminUsers() {
  const { search } = useLocation();
  const q = search.get('q') || '';
  const role = search.get('role') || '';
  const page = Number(search.get('page') || 1);
  const [draft, setDraft] = useState(q);
  const { data, loading, error, reload } = useAsync(() => api.get(`/admin/users?${new URLSearchParams({ q, role, page, pageSize: 20 })}`), [q, role, page]);
  const go = (patch) => {
    const p = new URLSearchParams(search);
    Object.entries(patch).forEach(([k, v]) => (v ? p.set(k, v) : p.delete(k)));
    navigate(`/admin/users?${p}`, { replace: true });
  };
  useEffect(() => { const t = setTimeout(() => draft !== q && go({ q: draft, page: '' }), 300); return () => clearTimeout(t); }, [draft]);
  const pages = data ? Math.max(1, Math.ceil(data.total / data.pageSize)) : 1;
  return (
    <AdminLayout title="Learners" active="users" actions={<>
      <input style={{ width: 260 }} placeholder="Search name or email" aria-label="Search users" value={draft} onChange={(e) => setDraft(e.target.value)} />
      <select aria-label="Role" value={role} onChange={(e) => go({ role: e.target.value, page: '' })}><option value="">All accounts</option><option value="learner">Learners</option><option value="admin">Admins</option></select>
    </>}>
      {error ? <ErrorBox error={error} retry={reload} /> : loading && !data ? <Spinner /> : (
        <>
          <div className="tblcard"><table className="tbl">
            <thead><tr><th>Person</th><th>Joined</th><th>Last sign-in</th><th className="num">Courses</th><th className="num">Completed</th><th className="num">Minutes</th><th>Status</th></tr></thead>
            <tbody>{data.users.map((u) => (
              <tr key={u.id} className="click" onClick={() => navigate(`/admin/users/${u.id}`)}>
                <td><div className="row"><Avatar name={u.name} size={34} /><div><b>{u.name}</b>{u.role === 'admin' && <span className="pill gold" style={{ marginLeft: 8 }}>Admin</span>}<div className="small muted">{u.email}</div></div></div></td>
                <td className="nowrap">{dateLabel(u.createdAt)}</td><td className="nowrap">{u.lastLoginAt ? timeAgo(u.lastLoginAt) : '—'}</td>
                <td className="num">{u.courses}</td><td className="num">{u.completed}</td><td className="num">{u.minutes}</td>
                <td>{u.status === 'active' ? <span className="pill good">Active</span> : <span className="pill warn">Suspended</span>}</td>
              </tr>))}</tbody></table></div>
          <div className="row between" style={{ marginTop: 14 }}>
            <span className="muted">{num(data.total)} accounts · page {page} of {pages}</span>
            <span className="row"><button className="btn soft sm" disabled={page <= 1} onClick={() => go({ page: String(page - 1) })}>Previous</button><button className="btn soft sm" disabled={page >= pages} onClick={() => go({ page: String(page + 1) })}>Next</button></span>
          </div>
        </>
      )}
    </AdminLayout>
  );
}

export function UserDetail({ params }) {
  const toast = useToast();
  const { user: me } = useAuth();
  const { data, loading, error, reload } = useAsync(() => api.get(`/admin/users/${params.id}`), [params.id]);
  const patch = async (body, msg) => { try { await api.patch(`/admin/users/${params.id}`, body); toast(msg); reload(); } catch (e) { toast(e.message, 'err'); } };
  const u = data?.user;
  return (
    <AdminLayout title={u ? u.name : 'Learner'} active="users" actions={<Link to="/admin/users" className="btn soft sm"><Icon name="arrowLeft" size={16} /> All learners</Link>}>
      {loading ? <Spinner /> : error ? <ErrorBox error={error} retry={reload} /> : (
        <>
          <div className="kpis">
            <Kpi accent value={u.email} label="Email" sub={u.google ? 'Signs in with Google' : 'Email and password'} />
            <Kpi value={dateLabel(u.createdAt)} label="Joined" sub={`${u.loginCount} sign-ins`} />
            <Kpi value={u.lastLoginAt ? timeAgo(u.lastLoginAt) : '—'} label="Last sign-in" />
            <Kpi value={data.notes} label="Notes written" />
          </div>
          {me.id !== u.id && (
            <div className="row wrap" style={{ marginBottom: 18 }}>
              {u.status === 'active' ? <button className="btn danger ghost sm" onClick={() => confirm('Suspend this account? They will be signed out.') && patch({ status: 'suspended' }, 'Account suspended.')}>Suspend account</button> : <button className="btn sm" onClick={() => patch({ status: 'active' }, 'Account reactivated.')}>Reactivate account</button>}
              <button className="btn soft sm" onClick={() => patch({ role: u.role === 'admin' ? 'learner' : 'admin' }, 'Role updated.')}>{u.role === 'admin' ? 'Remove admin access' : 'Make admin'}</button>
            </div>
          )}
          <div className="grid2">
            <ChartCard title="Learning time, last 30 days" sub="Minutes per day" table={{ columns: ['Day', 'Minutes'], rows: data.activity.map((a) => [a.day, a.minutes]) }}>
              {data.activity.length ? <BarChart data={data.activity.map((a) => ({ label: a.day.slice(5), tip: a.day, value: a.minutes }))} color="#1baf7a" /> : <p className="muted">No learning time recorded yet.</p>}
            </ChartCard>
            <ChartCard title="Unit assessments" sub="Most recent results">
              {data.assessments.length ? data.assessments.map((a, i) => (
                <div className="result-row" key={i}><RatingBadge rating={a.rating} /><div className="grow"><b>{a.title}</b><div className="small muted">{a.course} · {a.score}% · {dateLabel(a.at)}</div></div>{a.passed ? <span className="pill good">Passed</span> : <span className="pill warn">Retry</span>}</div>
              )) : <p className="muted">No assessments taken yet.</p>}
            </ChartCard>
          </div>
          <h2 style={{ fontSize: '1.3rem', margin: '24px 0 12px' }}>Courses</h2>
          {data.enrollments.length ? <div className="tblcard"><table className="tbl">
            <thead><tr><th>Course</th><th>Status</th><th className="num">Progress</th><th className="num">Minutes</th><th>Enrolled</th><th>Last activity</th><th>Time in each unit</th></tr></thead>
            <tbody>{data.enrollments.map((e) => (
              <tr key={e.slug}><td><b>{e.course}</b></td><td>{e.status === 'completed' ? <span className="pill good">Completed</span> : <span className="pill">In progress</span>}</td><td className="num">{e.percent}%</td><td className="num">{e.minutes}</td><td>{dateLabel(e.enrolledAt)}</td><td>{e.lastActivityAt ? timeAgo(e.lastActivityAt) : '—'}</td>
                <td className="small">{e.units.map((x) => `${x.unit}: ${x.minutes} min`).join(' · ') || '—'}</td></tr>))}</tbody></table></div> : <Empty title="Not enrolled in any course" />}
        </>
      )}
    </AdminLayout>
  );
}
