import Orb from '../Orb'

// The in-car copilot screen — an ember glass surface with the orb listening,
// a driver prompt, and a live response timeline with monospace status lines.

const steps = [
  { title: 'Scanning route ahead', status: 'ROUTE LOADED', done: true },
  { title: 'Pothole cluster at 1.2 km', status: '3 HAZARDS FLAGGED', done: true, hot: true },
  { title: 'Tightening collision threshold for rain', status: 'PROFILE ADJUSTED', done: false },
]

export default function CopilotMockup() {
  return (
    <div className="relative rounded-[28px] border border-line-ember bg-ember-2 p-4 shadow-2xl shadow-black/40">
      {/* orb header */}
      <div className="flex flex-col items-center pb-4 pt-2">
        <Orb size={92} halo={false} />
        <p className="mt-2 font-mono text-[10px] tracking-[0.18em] text-muted-ember">VIGIA · LISTENING</p>
      </div>

      {/* prompt */}
      <div className="rounded-2xl border border-line-ember bg-ember-3 p-4 text-[15px] leading-relaxed text-on-ember">
        Heavy rain ahead on <span className="font-mono text-orb-blue">NH-48</span>. Anything I should know?
      </div>

      {/* timeline */}
      <div className="relative mt-4 pl-6">
        <span className="absolute left-[7px] top-1 bottom-3 w-px bg-line-ember" aria-hidden />
        {steps.map((s, i) => (
          <div key={i} className="relative mb-2.5 last:mb-0">
            <span
              className={`absolute -left-[22px] top-3 grid h-3.5 w-3.5 place-items-center rounded-full border ${
                s.done ? 'border-orb-violet' : 'border-line-ember'
              }`}
            >
              {s.done && <span className="h-1.5 w-1.5 rounded-full bg-orb-violet" />}
            </span>
            <div className="rounded-2xl bg-ember-3 px-4 py-3">
              <p className="text-sm font-medium text-on-ember">{s.title}</p>
              <p className={`mt-1 font-mono text-[10px] tracking-[0.18em] ${s.hot ? 'text-orb-pink' : 'text-muted-ember'}`}>
                {s.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* input */}
      <div className="mt-4 flex items-center justify-between rounded-full border border-line-ember bg-ember-3 px-4 py-3">
        <span className="text-sm text-muted-ember">Ask VIGIA · hands-free</span>
        <span
          className="grid h-7 w-7 place-items-center rounded-full text-white"
          style={{ background: 'linear-gradient(135deg,#FF3D8F,#8F6CF6)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  )
}
