import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/app.css';
import { AuthProvider } from './lib/auth.jsx';
import { Routes, Link } from './lib/router.jsx';
import { ToastProvider } from './components/ui.jsx';
import { PublicPage } from './components/Shell.jsx';
import { Landing, Catalog, CourseDetail, Login, Signup } from './pages/Public.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { Player } from './pages/Player.jsx';
import { AdminOverview, AdminCourses, CourseAnalytics, AdminUsers, UserDetail } from './pages/Admin.jsx';
import { CourseEditor } from './pages/Editor.jsx';

const routes = [
  ['/', Landing],
  ['/courses', Catalog],
  ['/courses/:slug', CourseDetail],
  ['/login', Login],
  ['/signup', Signup],
  ['/my', Dashboard],
  ['/learn/:slug/:itemId?', Player],
  ['/admin', AdminOverview],
  ['/admin/courses', AdminCourses],
  ['/admin/courses/:id/analytics', CourseAnalytics],
  ['/admin/courses/:id', CourseEditor],
  ['/admin/users', AdminUsers],
  ['/admin/users/:id', UserDetail],
];

const NotFound = () => (
  <PublicPage><div className="container" style={{ padding: '80px 0', textAlign: 'center' }}><h1>We can't find that page</h1><p className="muted">The link may be old or mistyped.</p><Link to="/" className="btn">Go home</Link></div></PublicPage>
);

createRoot(document.getElementById('root')).render(
  <StrictMode><ToastProvider><AuthProvider><Routes routes={routes} notFound={NotFound} /></AuthProvider></ToastProvider></StrictMode>,
);
