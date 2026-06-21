// Wireframe orbital sphere — the hero motif. Pure SVG: meridian + latitude
// ellipses form the globe; dots ride the rings; one ring + a few nodes use the
// accent. The whole assembly drifts slowly (disabled under reduced-motion).

const C = 250
const R = 200

// Evenly spaced points around a circle of radius `r`, returned as [x,y].
function ring(r, n, phase = 0) {
  return Array.from({ length: n }, (_, i) => {
    const a = phase + (i / n) * Math.PI * 2
    return [C + r * Math.cos(a), C + r * Math.sin(a)]
  })
}

const meridians = [R, R * 0.62, R * 0.26] // vertical ellipse rx values
const latitudes = [R * 0.62, R * 0.26] // horizontal ellipse ry values (rx = R)

const nodes = [
  ...ring(R, 14, 0.2),
  ...ring(R * 0.62, 8, 0.9),
]
const accentNodes = [
  [C + R * Math.cos(2.3), C + R * Math.sin(2.3)],
  [C + R * Math.cos(4.1), C + R * Math.sin(4.1)],
  [C + R * Math.cos(5.4), C + R * Math.sin(5.4)],
]

export default function Globe({ className = '' }) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      role="img"
      aria-label="A rotating wireframe globe representing the VIGIA road-intelligence network"
    >
      <defs>
        <radialGradient id="vignette" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#EA4E32" stopOpacity="0.10" />
          <stop offset="55%" stopColor="#EA4E32" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#EA4E32" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={C} cy={C} r={R} fill="url(#vignette)" />

      {/* slow-drifting globe */}
      <g
        className="origin-center motion-safe:animate-spin-slow"
        style={{ transformOrigin: '250px 250px' }}
      >
        <g transform={`rotate(-16 ${C} ${C})`}>
          {/* silhouette */}
          <circle cx={C} cy={C} r={R} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />

          {/* meridians */}
          {meridians.map((rx, i) => (
            <ellipse
              key={`m${i}`}
              cx={C}
              cy={C}
              rx={rx}
              ry={R}
              fill="none"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="1"
            />
          ))}

          {/* accent meridian */}
          <ellipse
            cx={C}
            cy={C}
            rx={R * 0.62}
            ry={R}
            fill="none"
            stroke="#EA4E32"
            strokeOpacity="0.55"
            strokeWidth="1"
            transform={`rotate(24 ${C} ${C})`}
          />

          {/* latitudes */}
          {latitudes.map((ry, i) => (
            <ellipse
              key={`l${i}`}
              cx={C}
              cy={C}
              rx={R}
              ry={ry}
              fill="none"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="1"
            />
          ))}
          <line x1={C - R} y1={C} x2={C + R} y2={C} stroke="rgba(255,255,255,0.10)" strokeWidth="1" />

          {/* nodes */}
          {nodes.map(([x, y], i) => (
            <circle key={`n${i}`} cx={x} cy={y} r={i % 4 === 0 ? 2.6 : 1.6} fill="rgba(255,255,255,0.55)" />
          ))}
          {accentNodes.map(([x, y], i) => (
            <circle key={`a${i}`} cx={x} cy={y} r="3.2" fill="#EA4E32" />
          ))}
        </g>
      </g>

      {/* outer orbit ring + travelling node, opposite direction */}
      <g className="origin-center motion-safe:animate-orbit" style={{ transformOrigin: '250px 250px' }}>
        <circle cx={C} cy={C} r={R + 24} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <circle cx={C + R + 24} cy={C} r="3" fill="#EA4E32" />
      </g>
    </svg>
  )
}
