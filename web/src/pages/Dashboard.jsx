import { useState } from 'react';
import { Link } from '../lib/router.jsx';
import { api } from '../lib/api.js';
import { Calendar } from '../components/Calendar.jsx';
import { TopBar, Footer, useRequireAuth } from '../components/Shell.jsx';
import { Avatar, Cover, Empty, ErrorBox, Icon, ProgressBar, RatingBadge, Spinner, useAsync, useToast } from '../components/ui.jsx';
import { dateLabel, kindLabel, minutesLabel, timeAgo } from '../lib/format.js';

function CourseRow({ c, i }) {
  const done = c.status === 'completed';
  return (
    <article className="mycourse">
      <Link to={`/courses/${c.slug}`} className="thumb" aria-hidden="true" tabIndex={-1}><Cover theme={c.coverTheme} seed={i} rounded={false} /></Link>
      <div>
        <span className="small muted">{c.category}</span>
        <h3><Link to={`/courses/${c.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{c.title}</Link></h3>
        <ProgressBar value={c.percent} label={`${c.title} progress`} tone={done ? 'good' : 'blue'} />
        <span className="small muted">{done ? `Completed ${dateLabel(c.completedAt)}` : `${c.percent}% done · ${c.itemsDone} of ${c.itemsTotal} steps · ${minutesLabel(c.totalMinutes)} learned`}{c.lastActivityAt && !done ? ` · ${timeAgo(c.lastActivityAt)}` : ''}</span>
      </div>
      <div className="next">
        {c.next && c.published ? (
          <>
            <span className="small muted">Up next · {kindLabel[c.next.kind]}</span>
            <div style={{ fontWeight: 700, margin: '2px 0 8px' }}>{c.next.title}</div>
            <Link to={`/learn/${c.slug}/${c.next.id}`} className="btn sm">{c.percent ? 'Continue' : 'Start'} <Icon name="arrowRight" size={16} /></Link>
          </>
        ) : done ? (
          <Link to={`/learn/${c.slug}`} className="btn soft sm">Review course</Link>
        ) : <span className="small muted">This course is not open right now.</span>}
      </div>
    </article>
  );
}

function NotesTab() {
  const toast = useToast();
  const { data, loading, error, reload, setData } = useAsync(() => api.get('/my/notes'), []);
  if (loading) return <Spinner />;
  if (error) return <ErrorBox error={error} retry={reload} />;
  if (!data.notes.length) return <Empty title="No notes yet">Open any lesson and use Notes to save what you want to remember.</Empty>;
  const del = async (id) => {
    try { await api.del(`/notes/${id}`); setData((d) => ({ notes: d.notes.filter((n) => n.id !== id) })); } catch (e) { toast(e.message, 'err'); }
  };
  return (
    <div>
      {data.notes.map((n) => (
        <div key={n.id} className="note">
          <div className="when"><span><Link to={`/learn/${n.slug}/${n.itemId}`}>{n.course} · {n.item}</Link></span><span>{timeAgo(n.updatedAt)}</span></div>
          {n.body}
          <div style={{ textAlign: 'right' }}><button className="icon-btn" onClick={() => del(n.id)} aria-label="Delete note"><Icon name="trash" size={18} /></button></div>
        </div>
      ))}
    </div>
  );
}

export function Dashboard() {
  const { user, loading: authLoading } = useRequireAuth();
  const [tab, setTab] = useState('progress');
  const { data, loading, error, reload } = useAsync(() => (user ? api.get('/my/courses') : Promise.resolve(null)), [user?.id]);
  if (authLoading) return <Spinner />;
  const active = data?.courses.filter((c) => c.status !== 'completed') || [];
  const finished = data?.courses.filter((c) => c.status === 'completed') || [];
  const goal = data?.dailyGoal;
  return (
    <>
      <TopBar />
      <main className="container" id="top">
        <div className="greet">
          <Avatar name={user.name} size={64} />
          <div>
            <h1>Hello, {user.name.split(' ')[0]}</h1>
            {goal && (
              <div className="goalbar" aria-label="Daily goal">
                <div className="dots" aria-hidden="true">{Array.from({ length: goal.target }, (_, i) => <i key={i} className={i < goal.done ? 'on' : ''} />)}</div>
                <span>{goal.done >= goal.target ? 'Daily goal reached. Nice work!' : `Complete ${goal.target} steps today (${Math.min(goal.done, goal.target)} done)`}</span>
              </div>
            )}
          </div>
        </div>
        <div className="tabs" role="tablist">
          {[['progress', `In progress${data ? ` (${active.length})` : ''}`], ['done', `Completed${data ? ` (${finished.length})` : ''}`], ['notes', 'My notes']].map(([k, l]) => (
            <button key={k} role="tab" aria-selected={tab === k} className={`tab ${tab === k ? 'on' : ''}`} onClick={() => setTab(k)}>{l}</button>
          ))}
        </div>
        <div className="dash-grid">
          <section aria-live="polite">
            {loading ? <Spinner /> : error ? <ErrorBox error={error} retry={reload} /> : tab === 'notes' ? <NotesTab /> : tab === 'progress' ? (
              active.length ? active.map((c, i) => <CourseRow key={c.slug} c={c} i={i} />) : (
                <Empty title="Nothing in progress" action={<Link to="/courses" className="btn">Find a course</Link>}>Pick a course to start learning.</Empty>
              )
            ) : finished.length ? finished.map((c, i) => <CourseRow key={c.slug} c={c} i={i} />) : <Empty title="No finished courses yet">Finish every step and pass each unit assessment to complete a course.</Empty>}
          </section>
          <aside>
            <div className="panel"><h3>Your learning days</h3><Calendar activity={data?.activity || []} /></div>
            <div className="panel">
              <h3>Last 4 weeks</h3>
              <div className="stats3">
                <div><b>{data?.stats.minutes ?? 0}</b><span>minutes learned</span></div>
                <div><b>{data?.stats.items ?? 0}</b><span>steps completed</span></div>
                <div><b>{data?.stats.activeDays ?? 0}</b><span>days active</span></div>
              </div>
            </div>
            <div className="panel">
              <h3>Recent results</h3>
              {data?.results.length ? data.results.map((r, i) => (
                <div className="result-row" key={i}>
                  <RatingBadge rating={r.rating} />
                  <div className="grow"><div style={{ fontWeight: 700 }}>{r.assessment}</div><span className="small muted">{r.course} · {dateLabel(r.at)}</span></div>
                </div>
              )) : <p className="muted" style={{ margin: 0 }}>Your unit assessment results will show here. A rating of B or higher passes.</p>}
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
