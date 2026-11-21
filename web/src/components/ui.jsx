import { createContext, useCallback, useContext, useEffect, useState } from 'react';

/* ───────── icons (24×24, stroke) ───────── */
const P = {
  video: 'M5 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 5 5.5Z',
  reading: 'M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5v-15Zm16 0A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5v-15Z',
  quiz: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-5v.01M9.6 9.3a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.2.9-1.2 1.7',
  overview: 'M5 4h14v16H5zM9 9h6M9 13h6M9 17h3',
  assessment: 'M9 4h6l1 2h3v14H5V6h3l1-2Zm-1.5 9 2.5 2.5L16 10',
  check: 'm5 12.5 4.5 4.5L19 7.5',
  x: 'M6 6l12 12M18 6 6 18',
  chevronDown: 'm6 9 6 6 6-6',
  chevronRight: 'm9 6 6 6-6 6',
  chevronLeft: 'm15 6-6 6 6 6',
  arrowRight: 'M5 12h14m-6-6 6 6-6 6',
  arrowLeft: 'M19 12H5m6-6-6 6 6 6',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3 2',
  notes: 'M4 20h4l10-10-4-4L4 16v4Zm9-13 4 4',
  transcript: 'M5 5h14v14H5zM8 9h8M8 12h8M8 15h5',
  sparkle: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 11 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 4.5 4.5',
  menu: 'M4 7h16M4 12h16M4 17h16',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0',
  users: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6.5 9a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 6.5M18 14.5a6.5 6.5 0 0 1 3.5 5.5',
  logout: 'M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 8l-4 4 4 4M6 12h10',
  plus: 'M12 5v14M5 12h14',
  trash: 'M5 7h14M10 7V4h4v3m-7 0 1 13h8l1-13M10 11v6m4-6v6',
  eye: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  chart: 'M4 20V4m0 16h16M8 16v-4m4 4V8m4 8v-6',
  book: 'M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Zm0 13a3 3 0 0 1 3-3h11',
  flag: 'M6 21V4m0 0h11l-2 4 2 4H6',
  send: 'M4 12 20 4l-4 16-4-6-8-2Zm8 2 8-10',
  up: 'M12 19V5m-6 6 6-6 6 6',
  down: 'M12 5v14m6-6-6 6-6-6',
  external: 'M14 4h6v6m0-6L10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
  lock: 'M6 11h12v9H6zM8 11V8a4 4 0 0 1 8 0v3',
  refresh: 'M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5',
  save: 'M5 4h11l3 3v13H5V4Zm3 0v5h7V4M8 20v-6h8v6',
  copy: 'M9 9h10v11H9zM5 15V4h10',
  home: 'M4 11 12 4l8 7v9h-5v-6H9v6H4v-9Z',
};
export function Icon({ name, size = 20, className = '', title }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`icon ${className}`} aria-hidden={title ? undefined : true} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      <path d={P[name] || P.overview} />
    </svg>
  );
}

export function Logo({ size = 34, withText = true, light = false }) {
  return (
    <span className={`logo ${light ? 'light' : ''}`}>
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="10" fill="var(--blue)" />
        <path d="M8 10.5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-6l-5 4v-4a3 3 0 0 1-2-3z" fill="#fff" />
        <circle cx="16" cy="14" r="2.5" fill="var(--gold)" />
      </svg>
      {withText && <span className="logo-text"><b>Lumina</b> Learning</span>}
    </span>
  );
}

/* ───────── course cover: overlapping speech bubbles ───────── */
const THEMES = {
  blue: ['#1f4f8f', '#2d6cb4', '#9fc3ea', '#e8f1fb', '#f2b63d'],
  teal: ['#0f5c5c', '#1b8a86', '#8fd3cc', '#e3f6f3', '#f2b63d'],
  amber: ['#8a4b0f', '#d98a1f', '#f6d08a', '#fff4dc', '#2d6cb4'],
  violet: ['#43308f', '#6a55d0', '#b8aef0', '#eeeaff', '#f2b63d'],
  rose: ['#8f2f55', '#d0547e', '#f2b3c8', '#ffe9f0', '#f2b63d'],
  slate: ['#27374d', '#4a627f', '#a9b8cb', '#e9eef4', '#f2b63d'],
};
/* ───────── course covers: one simple illustration per subject ───────── */
const CATEGORY_MOTIF = {
  'Language and Speech': 'speech', 'Arts & Humanities': 'speech', Business: 'chart',
  'Computer Science & Programming': 'code', 'Data Science and Causal Reasoning': 'bell', 'Life Sciences': 'dna',
  'Mathematics and Logic': 'calc', 'Engineering and Technology': 'truss', 'Social Sciences': 'neurons',
};
const SLUG_MOTIF = [
  [/calculus/, 'calc'], [/economic/, 'sd'], [/statistics|probability/, 'bell'], [/java/, 'cup'], [/python/, 'code'],
  [/cyber|security/, 'shield'], [/management|business/, 'chart'], [/biolog/, 'dna'], [/static|engineering/, 'truss'],
  [/psycholog/, 'neurons'], [/astronom|space|physics/, 'planet'], [/english|language/, 'speech'],
];
/** Picks the illustration for a course from its slug, falling back to its category. */
export function motifFor(course) {
  const key = `${course?.slug || ''} ${course?.title || ''}`.toLowerCase();
  const hit = SLUG_MOTIF.find(([re]) => re.test(key));
  return hit ? hit[1] : CATEGORY_MOTIF[course?.category] || 'speech';
}
export const categoryMotif = (name) => CATEGORY_MOTIF[name] || 'speech';

const MOTIFS = {
  speech: ({ dark, mid, light, pale, accent }) => (<>
    <path d="M70 52h150a26 26 0 0 1 26 26v52a26 26 0 0 1-26 26h-92l-38 30v-30h-20a26 26 0 0 1-26-26V78a26 26 0 0 1 26-26Z" fill={pale} />
    <circle cx="106" cy="104" r="7" fill={mid} /><circle cx="140" cy="104" r="7" fill={mid} /><circle cx="174" cy="104" r="7" fill={mid} />
    <path d="M230 120h96a22 22 0 0 1 22 22v36a22 22 0 0 1-22 22h-10v24l-30-24h-56a22 22 0 0 1-22-22v-36a22 22 0 0 1 22-22Z" fill={light} />
    <path d="M256 150h66M256 168h44" stroke={dark} strokeWidth="8" strokeLinecap="round" opacity=".55" />
    <circle cx="318" cy="68" r="15" fill={accent} />
  </>),
  code: ({ dark, mid, light, pale, accent }) => (<>
    <rect x="70" y="42" width="260" height="158" rx="16" fill={pale} />
    <circle cx="92" cy="62" r="6" fill={mid} /><circle cx="110" cy="62" r="6" fill={mid} /><circle cx="128" cy="62" r="6" fill={mid} />
    <path d="M96 100l16 11-16 11" stroke={dark} strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="124" y="106" width="110" height="9" rx="4.5" fill={mid} opacity=".6" />
    <rect x="96" y="136" width="150" height="9" rx="4.5" fill={mid} opacity=".45" />
    <rect x="116" y="162" width="84" height="9" rx="4.5" fill={mid} opacity=".45" />
    <rect x="212" y="158" width="14" height="18" rx="3" fill={accent} />
  </>),
  cup: ({ dark, mid, light, pale, accent }) => (<>
    <path d="M122 100h130v52a52 52 0 0 1-52 52h-26a52 52 0 0 1-52-52Z" fill={pale} />
    <path d="M122 124h130v14H122z" fill={accent} />
    <path d="M252 116h14a26 26 0 0 1 0 52h-22" stroke={pale} strokeWidth="13" fill="none" strokeLinecap="round" />
    <rect x="100" y="206" width="174" height="11" rx="5.5" fill={light} />
    <path d="M160 82c-10-13 10-21 0-34M190 82c-10-13 10-21 0-34M220 82c-10-13 10-21 0-34" stroke={light} strokeWidth="8" fill="none" strokeLinecap="round" />
  </>),
  shield: ({ dark, mid, light, pale, accent }) => (<>
    <path d="M200 38l92 30v52c0 50-38 78-92 92-54-14-92-42-92-92V68Z" fill={pale} />
    <circle cx="200" cy="112" r="17" fill={mid} />
    <path d="M191 124h18l6 38h-30Z" fill={mid} />
    <path d="M108 100H66M108 142H78M292 100h42M292 142h30" stroke={light} strokeWidth="6" strokeLinecap="round" />
    <circle cx="66" cy="100" r="8" fill={accent} /><circle cx="78" cy="142" r="8" fill={accent} /><circle cx="334" cy="100" r="8" fill={accent} /><circle cx="322" cy="142" r="8" fill={accent} />
  </>),
  chart: ({ dark, mid, light, pale, accent }) => (<>
    <rect x="70" y="198" width="270" height="7" rx="3.5" fill={light} />
    {[[92, 52], [144, 82], [196, 112], [248, 142]].map(([x, h]) => <rect key={x} x={x} y={198 - h} width="40" height={h} rx="5" fill={pale} />)}
    <path d="M112 118l52-26 52-30 52-26" stroke={accent} strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M286 28l20 6-13 16Z" fill={accent} />
  </>),
  sd: ({ dark, mid, light, pale, accent }) => (<>
    <path d="M92 40v158h244" stroke={pale} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M116 66l196 116" stroke={pale} strokeWidth="10" strokeLinecap="round" />
    <path d="M116 182l196-116" stroke={light} strokeWidth="10" strokeLinecap="round" />
    <path d="M214 124V198M92 124h122" stroke={pale} strokeWidth="3" strokeDasharray="6 7" opacity=".8" />
    <circle cx="214" cy="124" r="15" fill={accent} />
  </>),
  calc: ({ dark, mid, light, pale, accent }) => (<>
    <path d="M100 190Q200 20 320 120V190Z" fill={light} opacity=".4" />
    <path d="M80 40v156h260" stroke={pale} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M100 190Q200 20 320 120" stroke={pale} strokeWidth="9" fill="none" strokeLinecap="round" />
    <path d="M124 112L290 60" stroke={accent} strokeWidth="6" strokeLinecap="round" />
    <circle cx="205" cy="87.5" r="10" fill={accent} />
  </>),
  bell: ({ dark, mid, light, pale, accent }) => (<>
    <rect x="76" y="198" width="248" height="6" rx="3" fill={light} />
    {[28, 62, 100, 124, 100, 62, 28].map((h, i) => <rect key={i} x={90 + i * 32} y={198 - h} width="28" height={h} rx="4" fill={pale} />)}
    <path d="M86 196C140 196 160 76 202 76s62 120 116 120" stroke={accent} strokeWidth="8" fill="none" strokeLinecap="round" />
  </>),
  dice: ({ dark, mid, light, pale, accent }) => (<>
    <g transform="rotate(-12 160 120)"><rect x="110" y="70" width="100" height="100" rx="16" fill={pale} />{[[135, 95], [185, 95], [160, 120], [135, 145], [185, 145]].map(([x, y]) => <circle key={x + y} cx={x} cy={y} r="9" fill={mid} />)}</g>
    <g transform="rotate(10 245 145)"><rect x="200" y="100" width="90" height="90" rx="14" fill={light} />{[[225, 125], [245, 145], [265, 165]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="8" fill={dark} opacity=".7" />)}</g>
    <circle cx="316" cy="56" r="14" fill={accent} />
  </>),
  dna: ({ dark, mid, light, pale, accent }) => (<>
    {[100, 125, 150, 175, 225, 250, 275, 300].map((x, i) => { const h = 52 * Math.sin((Math.PI * (x - 80)) / 120); const a = Math.abs(h); return <path key={x} d={`M${x} ${120 - a * 0.9}V${120 + a * 0.9}`} stroke={i % 2 ? light : accent} strokeWidth="6" strokeLinecap="round" />; })}
    <path d="M80 120C120 50 160 50 200 120S280 190 320 120" stroke={pale} strokeWidth="11" fill="none" strokeLinecap="round" />
    <path d="M80 120C120 190 160 190 200 120S280 50 320 120" stroke={light} strokeWidth="11" fill="none" strokeLinecap="round" />
  </>),
  truss: ({ dark, mid, light, pale, accent }) => (<>
    <path d="M90 168H310M145 100H255M90 168l55-68 55 68 55-68 55 68" stroke={pale} strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {[[90, 168], [200, 168], [310, 168], [145, 100], [255, 100]].map(([x, y]) => <circle key={x + '' + y} cx={x} cy={y} r="11" fill={light} />)}
    <path d="M90 182L70 208h40ZM310 182l-20 26h40Z" fill={light} />
    <path d="M145 44v38" stroke={accent} strokeWidth="8" strokeLinecap="round" /><path d="M131 76l14 18 14-18Z" fill={accent} />
  </>),
  neurons: ({ dark, mid, light, pale, accent }) => (<>
    <path d="M110 122L172 72 182 160 252 102 292 172M172 72L252 102 300 62M182 160L110 122" stroke={pale} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity=".85" />
    {[[110, 122], [172, 72], [182, 160], [252, 102], [292, 172], [300, 62]].map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="18" fill={i === 3 ? accent : pale} /><circle cx={x} cy={y} r="7" fill={mid} /></g>)}
  </>),
  planet: ({ dark, mid, light, pale, accent }) => (<>
    <circle cx="200" cy="120" r="54" fill={pale} />
    <path d="M168 96q32-14 64 0M162 124q38-12 76 0" stroke={mid} strokeWidth="7" fill="none" strokeLinecap="round" opacity=".45" />
    <ellipse cx="200" cy="124" rx="108" ry="24" transform="rotate(-18 200 124)" stroke={light} strokeWidth="10" fill="none" />
    <circle cx="80" cy="58" r="5" fill={accent} /><circle cx="330" cy="54" r="7" fill={pale} /><circle cx="318" cy="190" r="5" fill={accent} /><circle cx="70" cy="180" r="6" fill={pale} />
  </>),
};

export function Cover({ theme = 'blue', motif = 'speech', seed = 0, className = '', rounded = true }) {
  const [dark, mid, light, pale, accent] = THEMES[theme] || THEMES.blue;
  const flip = motif === 'speech' && seed % 2 === 1;
  const Art = MOTIFS[motif] || MOTIFS.speech;
  return (
    <svg className={`cover ${rounded ? 'rounded' : ''} ${className}`} viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`g${theme}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={mid} />
          <stop offset="1" stopColor={dark} />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill={`url(#g${theme})`} />
      <g transform={flip ? 'translate(400 0) scale(-1 1)' : undefined}>
        <circle cx="330" cy="30" r="90" fill={light} opacity=".18" />
        <Art dark={dark} mid={mid} light={light} pale={pale} accent={accent} />
      </g>
    </svg>
  );
}

export function Avatar({ name = '?', size = 36 }) {
  const initials = name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  return <span className="avatar" style={{ width: size, height: size, fontSize: size * 0.4 }} aria-hidden="true">{initials}</span>;
}

export function Spinner({ label = 'Loading…' }) {
  return <div className="spinner-wrap" role="status"><span className="spinner" /><span className="sr">{label}</span></div>;
}

export function ProgressBar({ value, label, tone = 'blue' }) {
  return (
    <div className={`pbar ${tone}`} role="progressbar" aria-valuenow={Math.round(value)} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <span style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

export function RatingBadge({ rating, size = 'md' }) {
  const tone = rating === 'C' ? 'warn' : rating?.startsWith('A') ? 'gold' : 'good';
  return <span className={`rating ${tone} ${size}`}>{rating}</span>;
}

export function Empty({ title, children, action }) {
  return (
    <div className="empty">
      <h3>{title}</h3>
      {children && <p>{children}</p>}
      {action}
    </div>
  );
}

export function ErrorBox({ error, retry }) {
  if (!error) return null;
  return (
    <div className="errorbox" role="alert">
      <p>{error.message || String(error)}</p>
      {retry && <button className="btn ghost sm" onClick={retry}>Try again</button>}
    </div>
  );
}

/* ───────── toasts ───────── */
const ToastCtx = createContext(() => {});
export const useToast = () => useContext(ToastCtx);
export function ToastProvider({ children }) {
  const [items, setItems] = useState([]);
  const push = useCallback((message, tone = 'ok') => {
    const id = Math.random();
    setItems((a) => [...a, { id, message, tone }]);
    setTimeout(() => setItems((a) => a.filter((x) => x.id !== id)), 4200);
  }, []);
  return (
    <ToastCtx.Provider value={push}>
      {children}
      <div className="toasts" aria-live="polite">
        {items.map((t) => <div key={t.id} className={`toast ${t.tone}`}>{t.message}</div>)}
      </div>
    </ToastCtx.Provider>
  );
}

/* generic hook: load data, expose loading/error/reload */
export function useAsync(fn, deps = []) {
  const [state, setState] = useState({ loading: true, data: null, error: null });
  const [tick, setTick] = useState(0);
  useEffect(() => {
    let live = true;
    setState((s) => ({ ...s, loading: true, error: null }));
    fn().then((data) => live && setState({ loading: false, data, error: null }), (error) => live && setState({ loading: false, data: null, error }));
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, tick]);
  return { ...state, reload: () => setTick((t) => t + 1), setData: (d) => setState((s) => ({ ...s, data: typeof d === 'function' ? d(s.data) : d })) };
}

export function Modal({ title, onClose, children, wide }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [onClose]);
  return (
    <div className="modal-back" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`modal ${wide ? 'wide' : ''}`} role="dialog" aria-modal="true" aria-label={title}>
        <div className="modal-head"><h2>{title}</h2><button className="icon-btn" onClick={onClose} aria-label="Close"><Icon name="x" /></button></div>
        {children}
      </div>
    </div>
  );
}
