// Stylized edge-perception view — a dashcam frame with the road in perspective
// and live detection boxes (mono confidence / TTC labels). The accent box is the
// active collision threat.

export default function HazardMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line-dark bg-ink shadow-2xl shadow-black/40">
      {/* status bar */}
      <div className="flex items-center justify-between border-b border-line-dark px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-blink rounded-full bg-accent" />
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted-ink">EDGE INFERENCE · 47 MS</span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.18em] text-muted-ink">YOLO · DEPTH</span>
      </div>

      {/* scene */}
      <svg viewBox="0 0 480 300" className="block w-full" role="img" aria-label="Road scene with live hazard detection boxes">
        <rect width="480" height="300" fill="#0E0E10" />
        {/* sky / horizon glow */}
        <rect width="480" height="150" fill="#141416" />
        {/* road */}
        <path d="M210 150 L270 150 L420 300 L60 300 Z" fill="#1A1A1D" />
        {/* lane dashes */}
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={238 - i * 2}
            y={160 + i * 34}
            width={4 + i * 2}
            height={16 + i * 6}
            fill="rgba(255,255,255,0.18)"
          />
        ))}
        {/* detected vehicle (accent / active threat) */}
        <g>
          <rect x="250" y="150" width="78" height="48" fill="none" stroke="#EA4E32" strokeWidth="1.5" />
          <rect x="250" y="138" width="92" height="13" fill="#EA4E32" />
          <text x="254" y="148" fontFamily="ui-monospace, monospace" fontSize="9" fill="#0A0A0B">
            vehicle · TTC 2.3s
          </text>
        </g>
        {/* pothole */}
        <g>
          <rect x="120" y="232" width="64" height="30" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
          <rect x="120" y="220" width="78" height="12" fill="rgba(255,255,255,0.85)" />
          <text x="124" y="229" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#0A0A0B">
            pothole · 0.94
          </text>
        </g>
        {/* sign */}
        <g>
          <rect x="356" y="120" width="40" height="40" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" />
          <rect x="356" y="110" width="52" height="11" fill="rgba(255,255,255,0.7)" />
          <text x="360" y="118.5" fontFamily="ui-monospace, monospace" fontSize="8" fill="#0A0A0B">
            sign · 0.88
          </text>
        </g>
      </svg>
    </div>
  )
}
