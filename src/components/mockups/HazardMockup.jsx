// Edge-perception view — dashcam frame with road perspective + live detection
// boxes. Functional colors only: amber = active threat, accent = tracked object,
// white = signage. Reads as genuine ML output, like syntax highlighting.

export default function HazardMockup() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-line bg-surface shadow-2xl shadow-black/50">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-blink rounded-full bg-accent" />
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted">EDGE INFERENCE · 47 MS</span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.18em] text-muted">YOLO · DEPTH</span>
      </div>

      <svg viewBox="0 0 480 300" className="block w-full" role="img" aria-label="Road scene with live hazard detection boxes">
        <rect width="480" height="300" fill="#0B0B0D" />
        <rect width="480" height="150" fill="#121214" />
        <path d="M210 150 L270 150 L420 300 L60 300 Z" fill="#1A1A1E" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={238 - i * 2} y={160 + i * 34} width={4 + i * 2} height={16 + i * 6} fill="rgba(245,245,247,0.18)" />
        ))}
        {/* active threat — amber */}
        <g>
          <rect x="250" y="150" width="78" height="48" fill="none" stroke="#E0B24C" strokeWidth="1.5" />
          <rect x="250" y="138" width="98" height="13" fill="#E0B24C" />
          <text x="254" y="148" fontFamily="ui-monospace, monospace" fontSize="9" fill="#0B0B0D">vehicle · TTC 2.3s</text>
        </g>
        {/* tracked — accent */}
        <g>
          <rect x="120" y="232" width="64" height="30" fill="none" stroke="#6E9BFF" strokeWidth="1.3" />
          <rect x="120" y="220" width="78" height="12" fill="#6E9BFF" />
          <text x="124" y="229" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#0B0B0D">pothole · 0.94</text>
        </g>
        {/* signage — neutral */}
        <g>
          <rect x="356" y="120" width="40" height="40" fill="none" stroke="rgba(245,245,247,0.55)" strokeWidth="1.3" />
          <rect x="356" y="110" width="52" height="11" fill="rgba(245,245,247,0.85)" />
          <text x="360" y="118.5" fontFamily="ui-monospace, monospace" fontSize="8" fill="#0B0B0D">sign · 0.88</text>
        </g>
      </svg>
    </div>
  )
}
