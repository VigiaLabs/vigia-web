import { motion } from 'framer-motion'
import { Truck, ShieldCheck, Building2, User } from 'lucide-react'
import { SectionHeading } from './Section'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const cases = [
  { icon: User, title: 'Drivers', body: 'Safer drives and passive income from roads you already travel.' },
  { icon: Truck, title: 'Fleets', body: 'Live hazard intelligence and driver coaching across every vehicle.' },
  { icon: ShieldCheck, title: 'Insurers', body: 'Verifiable road-risk and incident data, signed at the source.' },
  { icon: Building2, title: 'Municipalities', body: 'Continuous road-condition maps without survey crews.' },
]

export default function UseCases() {
  return (
    <section id="usecases" className="mx-auto max-w-content px-5 py-24">
      <SectionHeading
        eyebrow="Who it's for"
        title="One network, many sides of the market"
      />
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {cases.map(({ icon: Icon, title, body }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="rounded-2xl border border-hairline bg-surface p-7 transition-transform hover:-translate-y-1"
          >
            <Icon className="mb-5 h-7 w-7 text-primary" strokeWidth={1.5} />
            <h3 className="mb-2 font-display text-lg font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-muted">{body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
