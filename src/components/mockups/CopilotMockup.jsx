// In-car voice-copilot panel — a dark product surface that mirrors a real
// hands-free interaction: a driver prompt, a live investigation timeline with
// monospace status sublabels, and the input affordance.

const steps = [
  { title: 'Scanning route ahead', status: 'ROUTE LOADED', done: true },
  { title: 'Pothole cluster at 1.2 km', status: '3 HAZARDS FLAGGED', done: true, accent: true },
  { title: 'Tightening collision threshold for rain', status: 'PROFILE ADJUSTED', done: false },
]

export default function CopilotMockup() {
  return (
    <div className="rounded-2xl border border-line-dark bg-ink p-3 shadow-2xl shadow-black/40 sm:p-4">
      {/* Driver prompt */}
      <div className="rounded-xl border border-line-dark bg-ink-2 p-4 text-[15px] leading-relaxed text-on-ink">
        There's heavy rain ahead on <span className="font-mono text-accent">NH-48</span>. Anything I
        should know?
      </div>

      {/* Timeline */}
      <div className="relative mt-5 pl-6">
        <span className="absolute left-[7px] top-1 bottom-3 w-px bg-line-dark" aria-hidden />
        {steps.map((s, i) => (
          <div key={i} className="relative mb-3 last:mb-0">
            <span
              className={`absolute -left-[22px] top-3 grid h-3.5 w-3.5 place-items-center rounded-full border ${
                s.done ? 'border-accent' : 'border-line-dark'
              }`}
            >
              {s.done && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
            </span>
            <div className="rounded-xl bg-ink-2 px-4 py-3">
              <p className="text-sm font-medium text-on-ink">{s.title}</p>
              <p className={`mt-1 font-mono text-[10px] tracking-[0.18em] ${s.accent ? 'text-accent' : 'text-muted-ink'}`}>
                {s.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="mt-4 flex items-center justify-between rounded-xl border border-line-dark bg-ink-2 px-4 py-3">
        <span className="text-sm text-muted-ink">Ask VIGIA · hands-free</span>
        <span className="grid h-7 w-7 place-items-center rounded-full border border-line-dark text-muted-ink">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  )
}
