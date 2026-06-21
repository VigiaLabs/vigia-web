import { motion } from 'framer-motion'
import { Check, TrendingUp } from 'lucide-react'
import { SectionHeading } from './Section'
import { fadeUp, viewportOnce } from '../lib/motion'

const points = [
  'Rewards scale with the uniqueness and quality of road data your node contributes.',
  'Every payload is signed on the edge node — contributions are provably yours.',
  'Drive your usual routes; rare roads and fresh hazards earn the most.',
  'Withdraw to fiat or hold network credits — your choice.',
]

export default function Earnings() {
  return (
    <section id="earn" className="mx-auto max-w-content px-5 py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="The DePIN flywheel"
            title="Your drive is an asset. Get paid for it."
            subtitle="VIGIA is a decentralized physical infrastructure network. Drivers supply the sensing; the network supplies the rewards."
          />
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-earn/15 text-earn">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="text-muted">{p}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Earnings card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-hairline bg-surface p-8 shadow-glow-earn"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted">Estimated monthly rewards</p>
              <p className="font-display text-4xl font-bold text-gradient">$142</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-earn/15 px-3 py-1 text-sm font-medium text-earn">
              <TrendingUp className="h-4 w-4" /> +18%
            </span>
          </div>

          <div className="mt-8 space-y-4">
            {[
              { label: 'Hazard reports', val: 72 },
              { label: 'Road coverage', val: 54 },
              { label: 'Rare-route bonus', val: 38 },
            ].map((row) => (
              <div key={row.label}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="text-muted">{row.label}</span>
                  <span className="text-text">{row.val}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-surface-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${row.val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-earn"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted">
            Illustrative estimate. Actual rewards depend on routes, data quality, and network demand.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
