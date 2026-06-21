import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const tiers = [
  {
    name: 'Driver',
    price: 'Free',
    note: 'Get a node, start earning',
    features: ['1 edge node', 'Real-time hazard alerts', 'Base $VGA rewards', 'Core voice copilot'],
    cta: 'Join the waitlist',
    featured: false,
  },
  {
    name: 'Plus',
    price: '$9',
    per: '/mo',
    note: 'One month of driving pays for it',
    features: ['Everything in Driver', '1.5× rewards multiplier', 'Full conversational copilot', 'Priority routes & faster payouts', 'Premium driver profiles'],
    cta: 'Get early access',
    featured: true,
  },
  {
    name: 'Fleet',
    price: 'Custom',
    note: 'For teams and operators',
    features: ['Everything in Plus', 'Multi-node dashboard', 'Road-intelligence API', 'Team seats & roles', 'Dedicated support'],
    cta: 'Talk to sales',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="container-c section py-28 sm:py-32">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mx-auto mb-14 max-w-2xl text-center">
        <p className="eyebrow mb-4 text-cyan">Pricing</p>
        <h2 className="h-display text-[clamp(2.25rem,5vw,3.75rem)]">One month of driving pays for itself</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          Start earning for free. Upgrade when the rewards roll in.
        </p>
      </motion.div>

      <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid items-stretch gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            className={`relative flex flex-col rounded-3xl p-8 ${
              t.featured
                ? 'border-2 border-transparent bg-surface [background:linear-gradient(#1A1512,#1A1512)_padding-box,linear-gradient(135deg,#FF3D8F,#8F6CF6,#4CC2FF)_border-box]'
                : 'card'
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-pink to-blue px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-bg">
                Most popular
              </span>
            )}
            <h3 className="font-display text-lg font-semibold">{t.name}</h3>
            <div className="mt-3 flex items-end gap-1">
              <span className="font-display text-5xl font-bold tracking-tight">{t.price}</span>
              {t.per && <span className="mb-1.5 text-muted">{t.per}</span>}
            </div>
            <p className="mt-2 text-sm text-muted">{t.note}</p>

            <ul className="mt-7 flex-1 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan/15 text-cyan">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-ink">{f}</span>
                </li>
              ))}
            </ul>

            <a href="#cta" className={`mt-8 w-full ${t.featured ? 'pill-primary' : 'pill-ghost'}`}>
              {t.cta}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
