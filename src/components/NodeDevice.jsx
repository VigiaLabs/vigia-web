// The VIGIA edge node — a stylized dashcam device rendered in pure CSS:
// a glossy dark slab with a camera lens (orb-gradient core), a live LED, and
// the etched wordmark. Used in the hardware showcase.

export default function NodeDevice({ className = '' }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* glow */}
      <div
        className="absolute -inset-8 rounded-[40px] blur-3xl opacity-60"
        style={{
          background:
            'radial-gradient(circle at 30% 40%, rgba(255,61,143,0.35), transparent 60%), radial-gradient(circle at 70% 60%, rgba(76,194,255,0.35), transparent 60%)',
        }}
      />
      {/* body */}
      <div
        className="relative aspect-[16/7] w-full rounded-[28px] border border-white/10 p-5"
        style={{
          background: 'linear-gradient(145deg, #2A2420 0%, #161210 55%, #0E0B09 100%)',
          boxShadow: '0 30px 60px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
      >
        <div className="flex h-full items-center gap-5">
          {/* lens */}
          <div className="relative aspect-square h-full shrink-0">
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: 'conic-gradient(from 200deg, #2a2420, #0E0B09, #2a2420)' }}
            />
            <div className="absolute inset-[12%] rounded-full" style={{ background: '#0A0716' }} />
            <div
              className="absolute inset-[26%] rounded-full"
              style={{
                background: 'radial-gradient(circle at 38% 32%, #6E5BB8, #2E2450 45%, #0A0716 80%)',
                boxShadow: '0 0 24px rgba(143,108,246,0.5)',
              }}
            />
            <div className="absolute left-[34%] top-[30%] h-[14%] w-[18%] rounded-full bg-white/70 blur-[2px]" />
          </div>

          {/* face */}
          <div className="flex h-full flex-1 flex-col justify-between py-1">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold tracking-[0.2em] text-ink/90">VIGIA</span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 animate-blink rounded-full bg-cyan shadow-[0_0_8px_#4CC2FF]" />
                <span className="font-mono text-[9px] tracking-widest text-muted">REC</span>
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
              <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-[9px] tracking-wider text-muted">GNSS</span>
              <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-[9px] tracking-wider text-muted">LTE</span>
              <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-[9px] tracking-wider text-muted">NPU</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
