// Edge-perception view — a dashcam frame with the road in perspective and live
// detection boxes (mono confidence / TTC labels). Warm Horizon accents: blue for
// tracked objects, gold for the active collision threat, violet for signage.

export default function HazardMockup() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-line bg-ember shadow-[0_20px_50px_-20px_rgba(27,26,23,0.35)]">
      <div className="flex items-center justify-between border-b border-line-ember px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-blink rounded-full bg-orb-pink" />
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted-ember">EDGE INFERENCE · 47 MS</span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.18em] text-muted-ember">YOLO · DEPTH</span>
      </div>

      <svg viewBox="0 0 480 300" className="block w-full" role="img" aria-label="Road scene with live hazard detection boxes">
        <rect width="480" height="300" fill="#100D0A" />
        <rect width="480" height="150" fill="#171310" />
        <path d="M210 150 L270 150 L420 300 L60 300 Z" fill="#1E1813" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={238 - i * 2} y={160 + i * 34} width={4 + i * 2} height={16 + i * 6} fill="rgba(239,233,225,0.18)" />
        ))}
        {/* active threat — gold */}
        <g>
          <rect x="250" y="150" width="78" height="48" fill="none" stroke="#FBBF24" strokeWidth="1.5" />
          <rect x="250" y="138" width="98" height="13" fill="#FBBF24" />
          <text x="254" y="148" fontFamily="ui-monospace, monospace" fontSize="9" fill="#1B1A17">vehicle · TTC 2.3s</text>
        </g>
        {/* pothole — blue */}
        <g>
          <rect x="120" y="232" width="64" height="30" fill="none" stroke="#4CC2FF" strokeWidth="1.3" />
          <rect x="120" y="220" width="78" height="12" fill="#4CC2FF" />
          <text x="124" y="229" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#0A1A2A">pothole · 0.94</text>
        </g>
        {/* sign — violet */}
        <g>
          <rect x="356" y="120" width="40" height="40" fill="none" stroke="#8F6CF6" strokeWidth="1.3" />
          <rect x="356" y="110" width="52" height="11" fill="#8F6CF6" />
          <text x="360" y="118.5" fontFamily="ui-monospace, monospace" fontSize="8" fill="#1A1230">sign · 0.88</text>
        </g>
      </svg>
    </div>
  )
}
