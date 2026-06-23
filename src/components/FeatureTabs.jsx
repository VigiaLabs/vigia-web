import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HazardMockup from './mockups/HazardMockup'
import CopilotMockup from './mockups/CopilotMockup'
import EarningsMockup from './mockups/EarningsMockup'

const ease = [0.22, 1, 0.36, 1]

function RoadIntelMockup() {
  const stats = [
    { label: 'Roads mapped', value: '14,823 km' },
    { label: 'Hazards verified', value: '91,204' },
    { label: 'Active nodes', value: '6,741' },
    { label: 'Avg accuracy', value: '97.3%' },
  ]
  return (
    <div className="overflow-hidden rounded-[28px] border border-line bg-surface shadow-2xl shadow-black/50">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-blink rounded-full bg-success" />
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted">ROAD INTELLIGENCE · LIVE</span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.18em] text-muted">INDIA NETWORK</span>
      </div>
      <div className="grid grid-cols-2 gap-px bg-line">
        {stats.map(({ label, value }) => (
          <div key={label} className="bg-surface p-6">
            <p className="font-mono text-[10px] tracking-widest text-muted-2 uppercase">{label}</p>
            <p className="mt-2 font-display text-3xl font-semibold text-ink">{value}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-line px-4 py-3">
        <p className="font-mono text-[10px] tracking-widest text-muted-2">COVERAGE EXPANDING · KERALA · TAMIL NADU · DELHI NCR</p>
      </div>
    </div>
  )
}

const tabs = [
  { id: 'detect', label: 'Real-time Detection', Panel: HazardMockup },
  { id: 'copilot', label: 'Voice Copilot', Panel: CopilotMockup },
  { id: 'intel', label: 'Road Intelligence', Panel: RoadIntelMockup },
  { id: 'earn', label: 'Earn $VGA', Panel: EarningsMockup },
]

const INTERVAL = 4000

export default function FeatureTabs() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [dir, setDir] = useState(1) // 1 = forward, -1 = backward
  const paused = useRef(false)
  const active = tabs[activeIdx].id
  const ActivePanel = tabs[activeIdx].Panel

  useEffect(() => {
    const id = setInterval(() => {
      if (paused.current) return
      setDir(1)
      setActiveIdx(i => (i + 1) % tabs.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  function goTo(idx) {
    setDir(idx > activeIdx ? 1 : -1)
    setActiveIdx(idx)
  }

  return (
    <section
      id="how"
      className="container-c section py-20 sm:py-28"
      onMouseEnter={() => { paused.current = true }}
      onMouseLeave={() => { paused.current = false }}
    >
      {/* Tab bar */}
      <div className="mb-10 flex overflow-x-auto border-b border-line">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => goTo(i)}
            className={`relative shrink-0 px-5 py-3.5 text-sm font-medium transition-colors duration-200 ${
              activeIdx === i ? 'text-ink' : 'text-muted hover:text-ink'
            }`}
          >
            {tab.label}
            {activeIdx === i && (
              <motion.span
                layoutId="tab-indicator"
                className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Panel — horizontal slide */}
      <div style={{ overflow: 'hidden' }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            initial={d => ({ opacity: 0, x: d * 60 })}
            animate={{ opacity: 1, x: 0 }}
            exit={d => ({ opacity: 0, x: d * -40 })}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {ActivePanel && <ActivePanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
