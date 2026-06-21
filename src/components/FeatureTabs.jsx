import { useState } from 'react'
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

export default function FeatureTabs() {
  const [active, setActive] = useState('detect')
  const ActivePanel = tabs.find((t) => t.id === active)?.Panel

  return (
    <section id="how" className="container-c section py-20 sm:py-28">
      {/* Tab bar */}
      <div className="mb-10 flex overflow-x-auto border-b border-line">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`relative shrink-0 px-5 py-3.5 text-sm font-medium transition-colors duration-200 ${
              active === tab.id ? 'text-ink' : 'text-muted hover:text-ink'
            }`}
          >
            {tab.label}
            {active === tab.id && (
              <motion.span
                layoutId="tab-indicator"
                className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease }}
        >
          {ActivePanel && <ActivePanel />}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
