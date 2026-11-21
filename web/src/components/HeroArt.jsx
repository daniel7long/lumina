/* Landing-page hero illustration: a stylised lesson screen showing what learners get
   (outline and progress, a quiz with instant feedback, a unit rating, an AI helper). Decorative only. */
export default function HeroArt() {
  const ink = '#17284a', muted = '#6b7a99', blue = '#2d6cb4', green = '#2e9b6a', gold = '#f3b43c';
  const shadow = { filter: 'drop-shadow(0 10px 16px rgba(8,20,45,.32))' };
  const outline = [
    { y: 112, done: true, w: 58 }, { y: 140, done: true, w: 48 }, { y: 168, current: true, w: 62 }, { y: 196, w: 52 }, { y: 224, w: 44 },
  ];
  return (
    <svg className="hero-art" viewBox="0 0 500 400" role="img" aria-label="A Lumina lesson with an outline, a quiz with instant feedback, a progress ring, a unit rating and an AI helper" preserveAspectRatio="xMidYMid slice" style={{ fontFamily: 'inherit' }}>
      <defs>
        <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2f73bd" /><stop offset="1" stopColor="#1a4682" /></linearGradient>
        <clipPath id="heroWin"><rect x="34" y="52" width="388" height="282" rx="20" /></clipPath>
      </defs>
      <rect width="500" height="400" fill="url(#heroBg)" />
      <circle cx="440" cy="40" r="120" fill="#7fb0e6" opacity=".16" />
      <circle cx="40" cy="380" r="90" fill="#7fb0e6" opacity=".12" />

      {/* lesson window */}
      <g style={shadow}>
        <rect x="34" y="52" width="388" height="282" rx="20" fill="#fff" />
      </g>
      <g clipPath="url(#heroWin)">
        <rect x="34" y="52" width="388" height="38" fill="#eef3fb" />
        <circle cx="54" cy="71" r="5" fill="#d3dcec" /><circle cx="70" cy="71" r="5" fill="#d3dcec" /><circle cx="86" cy="71" r="5" fill="#d3dcec" />
        <rect x="120" y="65" width="180" height="12" rx="6" fill="#d9e2f1" />
        <rect x="34" y="90" width="116" height="244" fill="#f4f7fc" />
        {/* course outline */}
        <rect x="46" y="100" width="92" height="6" rx="3" fill="#cfd9ea" />
        {outline.map((r) => (
          <g key={r.y}>
            {r.current && <rect x="42" y={r.y - 12} width="104" height="26" rx="10" fill="#dbe8f8" />}
            <circle cx="58" cy={r.y + 1} r="7.5" fill={r.done ? green : '#fff'} stroke={r.done ? green : r.current ? blue : '#b7c4dc'} strokeWidth="2" />
            {r.done && <path d={`M54.5 ${r.y + 1.2}l2.6 2.6 4.6-5`} stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
            <rect x="72" y={r.y - 3} width={r.w} height="8" rx="4" fill={r.current ? blue : '#cfd9ea'} />
          </g>
        ))}
        <rect x="46" y="256" width="92" height="6" rx="3" fill="#cfd9ea" opacity=".7" />
        <rect x="46" y="272" width="70" height="6" rx="3" fill="#cfd9ea" opacity=".7" />
        {/* quiz */}
        <text x="168" y="118" fontSize="15" fontWeight="700" fill={ink}>Check your understanding</text>
        <text x="168" y="142" fontSize="12.5" fill={muted}>What is the derivative of x²?</text>
        <rect x="168" y="154" width="236" height="30" rx="10" fill="#fff" stroke="#d3dcec" strokeWidth="1.5" />
        <text x="184" y="174" fontSize="13" fill={ink}>x</text>
        <rect x="168" y="190" width="236" height="30" rx="10" fill="#e4f5ec" stroke={green} strokeWidth="2" />
        <text x="184" y="210" fontSize="13" fontWeight="700" fill={ink}>2x</text>
        <circle cx="386" cy="205" r="9" fill={green} /><path d="M381.5 205.2l3.2 3.2 5.6-6" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="168" y="226" width="236" height="30" rx="10" fill="#fff" stroke="#d3dcec" strokeWidth="1.5" />
        <text x="184" y="246" fontSize="13" fill={ink}>x²</text>
        <rect x="168" y="264" width="236" height="34" rx="10" fill="#f1faf5" />
        <text x="180" y="278" fontSize="11" fontWeight="700" fill={green}>Correct.</text>
        <text x="180" y="291" fontSize="10.5" fill={muted}>Power rule: bring the 2 down.</text>
        <rect x="288" y="304" width="116" height="22" rx="11" fill={gold} />
        <text x="346" y="319" fontSize="11" fontWeight="700" fill={ink} textAnchor="middle">Continue</text>
      </g>

      {/* unit rating */}
      <g style={shadow}>
        <rect x="372" y="20" width="108" height="88" rx="18" fill="#fff" transform="rotate(4 426 64)" />
      </g>
      <g transform="rotate(4 426 64)">
        <text x="426" y="44" fontSize="11" fontWeight="700" fill={muted} textAnchor="middle">Unit rating</text>
        <circle cx="426" cy="68" r="22" fill="#fff4d6" stroke={gold} strokeWidth="3" />
        <text x="426" y="76" fontSize="22" fontWeight="800" fill="#b97a00" textAnchor="middle">A+</text>
        <text x="426" y="104" fontSize="10.5" fontWeight="700" fill={green} textAnchor="middle">Passed</text>
      </g>

      {/* progress */}
      <g style={shadow}>
        <rect x="12" y="302" width="168" height="84" rx="18" fill="#fff" transform="rotate(-3 96 344)" />
      </g>
      <g transform="rotate(-3 96 344)">
        <circle cx="54" cy="344" r="25" fill="none" stroke="#dbe5f4" strokeWidth="9" />
        <circle cx="54" cy="344" r="25" fill="none" stroke={blue} strokeWidth="9" strokeLinecap="round" strokeDasharray="113 157" transform="rotate(-90 54 344)" />
        <text x="54" y="349" fontSize="14" fontWeight="800" fill={ink} textAnchor="middle">72%</text>
        <text x="92" y="338" fontSize="12.5" fontWeight="700" fill={ink}>Your progress</text>
        <text x="92" y="354" fontSize="11" fill={muted}>3 h 20 min</text>
      </g>

      {/* AI helper */}
      <g style={shadow}>
        <rect x="300" y="344" width="170" height="42" rx="21" fill="#5b3fc4" />
      </g>
      <path d="M326 356l2.6 7.4 7.4 2.6-7.4 2.6-2.6 7.4-2.6-7.4-7.4-2.6 7.4-2.6Z" fill="#fff" />
      <text x="346" y="370" fontSize="12.5" fontWeight="700" fill="#fff">Ask the AI helper</text>
    </svg>
  );
}
