import { motion } from 'framer-motion'
import { viewportOnce } from '../../lib/motion'

// Rewards surface — this-month earnings, contribution breakdown bars, and a
// withdraw affordance. Light-on-paper friendly card sitting in the dark panel.

const rows = [
  { label: 'Hazard reports', val: 72, amount: '$64' },
  { label: 'Road coverage', val: 54, amount: '$48' },
  { label: 'Rare-route bonus', val: 38, amount: '$30' },
]

export default function EarningsMockup() {
  return (
    <div className="rounded-2xl border border-line-dark bg-ink p-6 shadow-2xl shadow-black/40 sm:p-7">
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-muted-ink">THIS MONTH</p>
          <p className="mt-2 font-display text-5xl tracking-tight text-on-ink">$142</p>
        </div>
        <span className="rounded-full border border-accent/40 px-3 py-1 font-mono text-[11px] tracking-wider text-accent-soft">
          +18%
        </span>
      </div>

      <div className="mt-7 space-y-4">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="text-muted-ink">{r.label}</span>
              <span className="font-mono text-on-ink">{r.amount}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-ink-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${r.val}%` }}
                viewport={viewportOnce}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="h-full rounded-full bg-accent"
              />
            </div>
          </div>
        ))}
      </div>

      <button className="pill mt-7 w-full bg-on-ink text-ink hover:bg-white">Withdraw rewards</button>
    </div>
  )
}
