import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { api } from './api.js';

const AuthCtx = createContext(null);
const ConfigCtx = createContext({});
export const useAuth = () => useContext(AuthCtx);
export const useConfig = () => useContext(ConfigCtx);

export function AuthProvider({ children }) {
  const [state, setState] = useState({ loading: true, user: null });
  const [config, setConfig] = useState({});
  useEffect(() => {
    Promise.all([api.get('/config').catch(() => ({})), api.get('/auth/me').catch(() => ({ user: null }))]).then(([c, me]) => {
      setConfig(c);
      setState({ loading: false, user: me.user });
    });
  }, []);
  const apply = (r) => (setState({ loading: false, user: r.user }), r.user);
  const value = {
    ...state,
    login: useCallback((email, password) => api.post('/auth/login', { email, password }).then(apply), []),
    signup: useCallback((name, email, password) => api.post('/auth/signup', { name, email, password }).then(apply), []),
    google: useCallback((credential) => api.post('/auth/google', { credential }).then(apply), []),
    logout: useCallback(async () => { await api.post('/auth/logout'); setState({ loading: false, user: null }); }, []),
    rename: useCallback(async (name) => apply(await api.patch('/auth/me', { name })), []),
  };
  return (
    <ConfigCtx.Provider value={config}>
      <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>
    </ConfigCtx.Provider>
  );
}
