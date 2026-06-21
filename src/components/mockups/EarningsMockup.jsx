import { motion } from 'framer-motion'
import { Coins } from 'lucide-react'
import { viewportOnce } from '../../lib/motion'

// Rewards surface — this-month $VGA earnings, contribution breakdown, withdraw.
// Light glass card with the gold token accent.

const rows = [
  { label: 'Hazard reports', val: 72, amount: '64' },
  { label: 'Road coverage', val: 54, amount: '48' },
  { label: 'Rare-route bonus', val: 38, amount: '30' },
]

export default function EarningsMockup() {
  return (
    <div className="glass-card p-7 sm:p-8">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] text-muted-2">THIS MONTH</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gold/15 text-gold">
              <Coins className="h-4 w-4" />
            </span>
            <p className="font-display text-5xl font-bold tracking-tight">142</p>
            <span className="font-display text-2xl font-semibold text-gold">$VGA</span>
          </div>
        </div>
        <span className="rounded-full bg-success/10 px-3 py-1 font-mono text-[11px] tracking-wider text-success">+18%</span>
      </div>

      <div className="mt-7 space-y-4">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="text-muted">{r.label}</span>
              <span className="font-mono text-ink">{r.amount} $VGA</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-line">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${r.val}%` }}
                viewport={viewportOnce}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg,#FBBF24,#D97706)' }}
              />
            </div>
          </div>
        ))}
      </div>

      <button className="pill-primary mt-7 w-full">Withdraw rewards</button>
    </div>
  )
}
