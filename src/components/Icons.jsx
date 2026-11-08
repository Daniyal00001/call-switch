const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function FeatureIcon({ name }) {
  const paths = {
    handset: (
      <>
        <rect x="9" y="4" width="10" height="18" rx="2" />
        <path d="M12 7h4M8 22c-2 2-3 5-2 7l4-2c2-4 6-6 10-6h2" />
      </>
    ),
    devices: (
      <>
        <rect x="3" y="6" width="16" height="11" rx="1.5" />
        <path d="M8 20h6" />
        <rect x="21" y="8" width="8" height="14" rx="1.5" />
      </>
    ),
    phone: (
      <>
        <path d="M8 5h6a2 2 0 0 1 2 2v16l-5-2-5 2V7a2 2 0 0 1 2-2z" />
        <path d="M11 9h2" />
      </>
    ),
    port: (
      <>
        <path d="M7 16c2-6 8-8 14-6" />
        <path d="M16 6l6 4-6 3" />
        <path d="M8 22h12" />
      </>
    ),
    voicemail: (
      <>
        <circle cx="10" cy="16" r="4" />
        <circle cx="22" cy="16" r="4" />
        <path d="M10 20h12" />
      </>
    ),
    clock: (
      <>
        <circle cx="16" cy="16" r="9" />
        <path d="M16 11v6l4 2" />
      </>
    ),
    transfer: (
      <>
        <path d="M6 12h14" />
        <path d="M16 8l5 4-5 4" />
        <path d="M26 20H12" />
        <path d="M16 16l-5 4 5 4" />
      </>
    ),
    bell: (
      <>
        <path d="M8 22h16l-2-3V14a6 6 0 1 0-12 0v5l-2 3z" />
        <path d="M13 22a3 3 0 0 0 6 0" />
      </>
    ),
    conference: (
      <>
        <circle cx="16" cy="11" r="3" />
        <circle cx="7" cy="14" r="2.4" />
        <circle cx="25" cy="14" r="2.4" />
        <path d="M10 24c.6-3 2.8-4.5 6-4.5s5.4 1.5 6 4.5" />
        <path d="M4 23c.4-2 1.6-3.2 3.4-3.6" />
        <path d="M28 23c-.4-2-1.6-3.2-3.4-3.6" />
      </>
    ),
    record: (
      <>
        <circle cx="16" cy="16" r="9" />
        <circle cx="16" cy="16" r="4" fill="currentColor" stroke="none" />
      </>
    ),
    menu: (
      <>
        <rect x="6" y="6" width="20" height="20" rx="2" />
        <path d="M10 12h12M10 16h12M10 20h8" />
      </>
    ),
    forward: (
      <>
        <path d="M6 16h16" />
        <path d="M17 10l7 6-7 6" />
      </>
    ),
    rocket: (
      <>
        <path d="M18 6c4 3 6 8 6 12l-4 2-2-4-4 2 2-4-4-2c1-4 4-8 6-6z" />
        <path d="M14 22l-2 4M20 20l2 5" stroke="#F96854" />
        <circle cx="18" cy="13" r="1.4" />
      </>
    ),
    growth: (
      <>
        <path d="M6 24V10" />
        <path d="M6 24h18" />
        <path d="M10 20l4-5 3 3 6-8" stroke="#F96854" />
        <path d="M19 10h5v5" stroke="#F96854" />
      </>
    ),
    building: (
      <>
        <path d="M8 26V10l8-4v20" />
        <path d="M16 26V12h8v14" />
        <path d="M6 26h20" />
        <path d="M19 16h2M19 20h2" stroke="#F96854" />
      </>
    ),
    heart: (
      <>
        <path d="M16 24s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z" />
        <path d="M12 14.5c.8 1 2 1.6 4 1.6" stroke="#F96854" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={`icon icon--${name}`}>
      <g {...stroke}>{paths[name]}</g>
    </svg>
  );
}

export function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="arrow">
      <path d="M3 8h10M9 4l4 4-4 4" {...stroke} strokeWidth="1.5" />
    </svg>
  );
}

export function Check({ name }) {
  if (name === "card") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true" className="tick-icon">
        <rect x="2" y="3.5" width="12" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 6.5h12" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="tick-icon">
      <rect x="2.5" y="3" width="11" height="10" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 8.2l2 2 4-4.2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function StarRow({ score, id = "s" }) {
  const full = Math.floor(score);
  const fraction = score - full;
  return (
    <span className="stars" aria-label={`${score} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = i < full ? 1 : i === full ? fraction : 0;
        const grad = `${id}-${i}`;
        return (
          <svg key={i} viewBox="0 0 20 20" className="star" aria-hidden="true">
            <defs>
              <linearGradient id={grad}>
                <stop offset={`${fill * 100}%`} stopColor="#00b67a" />
                <stop offset={`${fill * 100}%`} stopColor="#d5d0cc" />
              </linearGradient>
            </defs>
            <path fill={`url(#${grad})`} d="M10 1.8l2.1 4.6 5 .6-3.7 3.4.9 5-4.3-2.4L5.7 15.4l.9-5L2.9 7l5-.6L10 1.8z" />
          </svg>
        );
      })}
    </span>
  );
}
