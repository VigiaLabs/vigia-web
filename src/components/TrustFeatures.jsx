import { motion } from 'framer-motion'
import { Lock, FileSignature, WifiOff, GitBranch } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const features = [
  { icon: Lock, title: 'Edge-private', body: 'Raw video never leaves the car. Only signed, anonymized insights are shared.' },
  { icon: FileSignature, title: 'Signed telemetry', body: 'Every payload is cryptographically signed on-device — provably yours.' },
  { icon: WifiOff, title: 'Offline-first alerts', body: 'Collision and hazard warnings fire on-device, with or without a network.' },
  { icon: GitBranch, title: 'Open rewards', body: 'Transparent, on-chain $VGA accrual. No black-box payout formula.' },
]

export default function TrustFeatures() {
  return (
    <section className="bg-cream">
      <div className="container-c section py-20">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map(({ icon: Icon, title, body }) => (
            <motion.div key={title} variants={fadeUp}>
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-peach text-secondary" style={{ color: '#96601F' }}>
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
