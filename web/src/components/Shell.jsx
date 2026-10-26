import { useEffect, useRef, useState } from 'react';
import { Link, navigate, useLocation } from '../lib/router.jsx';
import { useAuth, useConfig } from '../lib/auth.jsx';
import { Avatar, Icon, Logo } from './ui.jsx';

export function TopBar() {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  const on = (p) => (pathname === p || pathname.startsWith(`${p}/`) ? 'on' : '');
  return (
    <header className="topbar">
      <div className="container">
        <Link to="/" aria-label="Lumina Learning home"><Logo /></Link>
        <nav className="nav" aria-label="Main">
          <Link to="/courses" className={on('/courses')}>Courses</Link>
          {user && <Link to="/my" className={on('/my')}>My learning</Link>}
        </nav>
        <form className="searchbox" role="search" onSubmit={(e) => { e.preventDefault(); navigate(`/courses?q=${encodeURIComponent(q)}`); }}>
          <Icon name="search" size={18} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="What do you want to learn?" aria-label="Search courses" />
        </form>
        {user ? (
          <div className="menu" ref={ref}>
            <button className="avatar-btn" onClick={() => setOpen(!open)} aria-haspopup="menu" aria-expanded={open} aria-label="Account menu"><Avatar name={user.name} size={40} /></button>
            {open && (
              <div className="menu-pop" role="menu">
                <div className="who"><b>{user.name}</b><span className="muted small">{user.email}</span></div>
                <Link to="/my"><Icon name="book" size={18} /> My learning</Link>
                {user.role === 'admin' && <Link to="/admin"><Icon name="chart" size={18} /> Admin console</Link>}
                <button onClick={async () => { await logout(); navigate('/'); }}><Icon name="logout" size={18} /> Sign out</button>
              </div>
            )}
          </div>
        ) : (
          <div className="row">
            <Link to="/login" className="btn ghost sm">Sign in</Link>
            <Link to="/signup" className="btn sm">Join free</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div><Logo light /><p style={{ marginTop: 12, maxWidth: '34ch' }}>Self-paced courses with short sessions, quick quizzes and an assistant that explains things in simple English.</p></div>
          <div><h4>Learn</h4><ul><li><Link to="/courses">All courses</Link></li><li><Link to="/my">My learning</Link></li></ul></div>
          <div><h4>Account</h4><ul><li><Link to="/login">Sign in</Link></li><li><Link to="/signup">Create account</Link></li></ul></div>
          <div><h4>Help</h4><ul><li><a href="#top">Accessibility</a></li><li><a href="#top">Contact support</a></li></ul></div>
        </div>
        <div className="fine">© {new Date().getFullYear()} Lumina Learning. All rights reserved.</div>
      </div>
    </footer>
  );
}

export function Band({ trail }) {
  return (
    <div className="band" aria-label="Breadcrumb">
      <div className="container">
        {trail.map((t, i) => (
          <span key={i} className="row" style={{ gap: 12 }}>
            {i > 0 && <span className="sep">›</span>}
            {t.to ? <Link to={t.to}>{t.label}</Link> : <span>{t.label}</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

export function PublicPage({ children }) {
  return (<><TopBar /><main id="top">{children}</main><Footer /></>);
}

export function useRequireAuth() {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading && !user) navigate(`/login?next=${encodeURIComponent(location.pathname + location.search)}`, { replace: true });
  }, [loading, user]);
  return { user, loading: loading || !user };
}

export function GoogleButton({ onCredential, text = 'continue_with' }) {
  const { googleClientId } = useConfig();
  const box = useRef(null);
  const cb = useRef(onCredential);
  cb.current = onCredential;
  useEffect(() => {
    if (!googleClientId) return;
    const render = () => {
      if (!window.google?.accounts?.id || !box.current) return;
      window.google.accounts.id.initialize({ client_id: googleClientId, callback: (r) => cb.current(r.credential) });
      window.google.accounts.id.renderButton(box.current, { theme: 'outline', size: 'large', shape: 'pill', text, width: 360, logo_alignment: 'left' });
    };
    if (window.google?.accounts?.id) return render();
    let s = document.querySelector('script[data-gsi]');
    if (!s) {
      s = document.createElement('script');
      s.src = 'https://accounts.google.com/gsi/client';
      s.async = true;
      s.defer = true;
      s.dataset.gsi = '1';
      document.head.appendChild(s);
    }
    s.addEventListener('load', render);
    return () => s.removeEventListener('load', render);
  }, [googleClientId, text]);
  if (!googleClientId) {
    return (
      <button type="button" className="btn ghost block" disabled title="Ask your administrator to set GOOGLE_CLIENT_ID">
        Google sign-in is not set up yet
      </button>
    );
  }
  return <div ref={box} style={{ display: 'flex', justifyContent: 'center', minHeight: 44 }} />;
}
