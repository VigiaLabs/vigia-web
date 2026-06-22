/* Monoline line-art device sketches — Cartesia-style outline illustrations.
   Single stroke weight, VIGIA-blue, transparent fills, theme-able via `stroke`. */

const STROKE = '#326BFF';
const FAINT = 'rgba(50,107,255,0.08)';

const base = {
  fill: 'none',
  stroke: STROKE,
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

/* ── Raspberry Pi edge node (top-down board) ───────────────── */
export function RaspiSketch({ className = '' }) {
  return (
    <svg viewBox="0 0 420 320" className={className} width="100%" role="img" aria-label="Raspberry Pi edge node">
      {/* board */}
      <rect x="50" y="60" width="320" height="200" rx="12" {...base} fill={FAINT} />
      {/* 40-pin GPIO header */}
      {Array.from({ length: 20 }).map((_, i) => (
        <g key={i}>
          <circle cx={78 + i * 13} cy="78" r="2.6" {...base} />
          <circle cx={78 + i * 13} cy="92" r="2.6" {...base} />
        </g>
      ))}
      {/* SoC */}
      <rect x="150" y="130" width="70" height="70" rx="6" {...base} />
      <line x1="150" y1="148" x2="220" y2="148" {...base} />
      {/* RAM / chip */}
      <rect x="250" y="130" width="44" height="30" rx="4" {...base} />
      {/* USB stack */}
      <rect x="330" y="120" width="40" height="34" rx="3" {...base} />
      <rect x="330" y="170" width="40" height="34" rx="3" {...base} />
      {/* ethernet */}
      <rect x="320" y="218" width="50" height="34" rx="3" {...base} />
      {/* USB-C power + HDMI on bottom edge */}
      <rect x="80" y="252" width="26" height="14" rx="3" {...base} />
      <rect x="130" y="252" width="40" height="14" rx="3" {...base} />
      <rect x="186" y="252" width="40" height="14" rx="3" {...base} />
      {/* camera ribbon connector */}
      <rect x="60" y="150" width="10" height="50" rx="2" {...base} />
      {/* mounting holes */}
      <circle cx="68" cy="74" r="4" {...base} />
      <circle cx="352" cy="74" r="4" {...base} />
      <circle cx="68" cy="246" r="4" {...base} />
      <circle cx="352" cy="246" r="4" {...base} />
    </svg>
  );
}

/* ── Blackbox enclosure (isometric) ────────────────────────── */
export function BlackboxSketch({ className = '' }) {
  return (
    <svg viewBox="0 0 420 320" className={className} width="100%" role="img" aria-label="VIGIA blackbox edge device">
      {/* isometric box: top, left, right faces */}
      <polygon points="210,70 330,120 210,170 90,120" {...base} fill={FAINT} />
      <polygon points="90,120 210,170 210,275 90,225" {...base} />
      <polygon points="330,120 210,170 210,275 330,225" {...base} fill={FAINT} />
      {/* camera lens on front-left face */}
      <ellipse cx="150" cy="200" rx="26" ry="22" {...base} />
      <ellipse cx="150" cy="200" rx="13" ry="11" {...base} />
      {/* status LED on right face */}
      <circle cx="285" cy="195" r="5" {...base} />
      {/* vent lines on right face */}
      <line x1="250" y1="225" x2="305" y2="200" {...base} />
      <line x1="250" y1="238" x2="305" y2="213" {...base} />
      {/* antenna from top */}
      <line x1="270" y1="95" x2="300" y2="50" {...base} />
      <circle cx="300" cy="46" r="5" {...base} />
      {/* mount bracket */}
      <line x1="210" y1="275" x2="210" y2="300" {...base} />
      <line x1="170" y1="300" x2="250" y2="300" {...base} />
    </svg>
  );
}

/* ── Mobile app (phone with voice orb + alerts) ────────────── */
export function MobileSketch({ className = '' }) {
  return (
    <svg viewBox="0 0 420 320" className={className} width="100%" role="img" aria-label="VIGIA mobile app">
      {/* phone body */}
      <rect x="150" y="30" width="120" height="260" rx="22" {...base} fill={FAINT} />
      {/* speaker */}
      <line x1="196" y1="46" x2="224" y2="46" {...base} />
      {/* voice orb */}
      <circle cx="210" cy="100" r="22" {...base} />
      <circle cx="210" cy="100" r="13" {...base} />
      {/* waveform */}
      <line x1="186" y1="140" x2="186" y2="150" {...base} />
      <line x1="196" y1="135" x2="196" y2="155" {...base} />
      <line x1="206" y1="128" x2="206" y2="162" {...base} />
      <line x1="216" y1="135" x2="216" y2="155" {...base} />
      <line x1="226" y1="140" x2="226" y2="150" {...base} />
      {/* alert cards */}
      <rect x="166" y="178" width="88" height="26" rx="6" {...base} />
      <rect x="166" y="212" width="88" height="26" rx="6" {...base} />
      {/* home indicator */}
      <line x1="196" y1="274" x2="224" y2="274" {...base} />
      {/* floating BLE signal arcs */}
      <path d="M 286 120 q 20 26 0 52" {...base} />
      <path d="M 300 108 q 32 38 0 76" {...base} />
    </svg>
  );
}

/* ── Camera module (CSI camera + field-of-view cone) ───────────────── */
export function CameraSketch({ className = '' }) {
  return (
    <svg viewBox="0 0 420 320" className={className} width="100%" role="img" aria-label="VIGIA camera module">
      {/* camera body */}
      <rect x="70" y="120" width="110" height="80" rx="10" {...base} fill={FAINT} />
      {/* lens barrel */}
      <rect x="150" y="142" width="34" height="36" rx="6" {...base} />
      <circle cx="167" cy="160" r="22" {...base} />
      <circle cx="167" cy="160" r="12" {...base} />
      <circle cx="167" cy="160" r="4" {...base} />
      {/* ribbon cable */}
      <path d="M 70 170 q -34 0 -34 36" {...base} />
      <line x1="36" y1="200" x2="36" y2="240" {...base} />
      {/* field-of-view cone */}
      <line x1="189" y1="160" x2="360" y2="92" {...base} />
      <line x1="189" y1="160" x2="360" y2="228" {...base} />
      <path d="M 330 110 q 18 50 0 100" {...base} />
      {/* detected hazard markers in view */}
      <rect x="296" y="136" width="26" height="20" rx="3" {...base} />
      <rect x="312" y="178" width="30" height="22" rx="3" {...base} />
    </svg>
  );
}

/* ── Road-intelligence network (nodes meshing to a cloud) ──────────── */
export function NetworkSketch({ className = '' }) {
  const nodes = [[90, 230], [200, 270], [320, 235], [150, 170], [270, 165]];
  return (
    <svg viewBox="0 0 420 320" className={className} width="100%" role="img" aria-label="VIGIA road intelligence network">
      {/* cloud */}
      <path d="M 150 70 a 34 34 0 0 1 64 -12 a 30 30 0 0 1 54 18 a 26 26 0 0 1 -6 50 H 165 a 30 30 0 0 1 -15 -56 Z" {...base} fill={FAINT} />
      {/* links from nodes to cloud */}
      {nodes.map(([x, y], i) => <line key={i} x1={x} y1={y} x2="210" y2="120" {...base} strokeWidth="1.4" />)}
      {/* mesh links between nodes */}
      <line x1="90" y1="230" x2="200" y2="270" {...base} strokeWidth="1.4" />
      <line x1="200" y1="270" x2="320" y2="235" {...base} strokeWidth="1.4" />
      <line x1="150" y1="170" x2="270" y2="165" {...base} strokeWidth="1.4" />
      {/* nodes (vehicles) */}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="14" {...base} fill="#fff" />
          <circle cx={x} cy={y} r="4" {...base} />
        </g>
      ))}
    </svg>
  );
}
