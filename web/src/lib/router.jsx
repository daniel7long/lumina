// A very small client-side router (history API). Route patterns look like "/learn/:slug/:itemId?".
import { createContext, useContext, useEffect, useMemo, useState, useSyncExternalStore } from 'react';

const listeners = new Set();
const emit = () => listeners.forEach((l) => l());
const subscribe = (l) => (listeners.add(l), () => listeners.delete(l));
const getSnapshot = () => window.location.pathname + window.location.search;

window.addEventListener('popstate', emit);

export function navigate(to, { replace = false } = {}) {
  if (to === getSnapshot()) return;
  window.history[replace ? 'replaceState' : 'pushState']({}, '', to);
  emit();
  window.scrollTo(0, 0);
}

export function useLocation() {
  const full = useSyncExternalStore(subscribe, getSnapshot);
  const [pathname, search = ''] = full.split('?');
  return { pathname, search: new URLSearchParams(search) };
}

export function Link({ to, replace, className, children, onClick, ...rest }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || rest.target) return;
        e.preventDefault();
        navigate(to, { replace });
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

function compile(pattern) {
  const keys = [];
  const re = new RegExp(
    '^' + pattern.replace(/\/:([A-Za-z]+)(\?)?/g, (_, k, opt) => (keys.push(k), opt ? '(?:/([^/]+))?' : '/([^/]+)')) + '/?$',
  );
  return { re, keys };
}

/** routes: [[pattern, Component], …] — first match wins. */
export function Routes({ routes, notFound: NotFound }) {
  const { pathname } = useLocation();
  const compiled = useMemo(() => routes.map(([p, C]) => ({ ...compile(p), C })), [routes]);
  for (const r of compiled) {
    const m = r.re.exec(pathname);
    if (!m) continue;
    const params = {};
    r.keys.forEach((k, i) => (params[k] = m[i + 1] ? decodeURIComponent(m[i + 1]) : undefined));
    const C = r.C;
    return <C key={pathname.split('/').slice(0, 3).join('/')} params={params} />;
  }
  return <NotFound />;
}

const Ctx = createContext(null);
export const useRedirect = (to, when) => {
  useEffect(() => {
    if (when) navigate(to, { replace: true });
  }, [to, when]);
};
export { Ctx };
