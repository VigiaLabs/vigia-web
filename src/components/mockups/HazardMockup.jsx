// Edge-perception view — dashcam frame with road perspective + live detection
// boxes (mono confidence / TTC). Gold = active threat, cyan = tracked, violet = sign.

export default function HazardMockup() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-line bg-surface shadow-2xl shadow-black/50">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-blink rounded-full bg-pink" />
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted">EDGE INFERENCE · 47 MS</span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.18em] text-muted">YOLO · DEPTH</span>
      </div>

      <svg viewBox="0 0 480 300" className="block w-full" role="img" aria-label="Road scene with live hazard detection boxes">
        <rect width="480" height="300" fill="#0E0B09" />
        <rect width="480" height="150" fill="#15110E" />
        <path d="M210 150 L270 150 L420 300 L60 300 Z" fill="#1C1713" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={238 - i * 2} y={160 + i * 34} width={4 + i * 2} height={16 + i * 6} fill="rgba(244,239,233,0.18)" />
        ))}
        <g>
          <rect x="250" y="150" width="78" height="48" fill="none" stroke="#FBBF24" strokeWidth="1.5" />
          <rect x="250" y="138" width="98" height="13" fill="#FBBF24" />
          <text x="254" y="148" fontFamily="ui-monospace, monospace" fontSize="9" fill="#1B1A17">vehicle · TTC 2.3s</text>
        </g>
        <g>
          <rect x="120" y="232" width="64" height="30" fill="none" stroke="#4CC2FF" strokeWidth="1.3" />
          <rect x="120" y="220" width="78" height="12" fill="#4CC2FF" />
          <text x="124" y="229" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#0A1A2A">pothole · 0.94</text>
        </g>
        <g>
          <rect x="356" y="120" width="40" height="40" fill="none" stroke="#8F6CF6" strokeWidth="1.3" />
          <rect x="356" y="110" width="52" height="11" fill="#8F6CF6" />
          <text x="360" y="118.5" fontFamily="ui-monospace, monospace" fontSize="8" fill="#1A1230">sign · 0.88</text>
        </g>
      </svg>
    </div>
  )
}
