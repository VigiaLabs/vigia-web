import { motion } from 'framer-motion'
import { User, Truck, ShieldCheck, Building2, ArrowRight } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const cases = [
  { icon: User, title: 'Drivers', body: 'Safer drives and passive $VGA income from roads you already travel.', cta: 'For drivers' },
  { icon: Truck, title: 'Fleets', body: 'Live hazard intelligence and driver coaching across every vehicle.', cta: 'For fleets' },
  { icon: ShieldCheck, title: 'Insurers', body: 'Verifiable road-risk and incident data, signed at the source.', cta: 'For insurers' },
  { icon: Building2, title: 'Cities', body: 'Continuous road-condition maps without survey crews.', cta: 'For cities' },
]

export default function UseCases() {
  return (
    <section className="container-c section py-24 sm:py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mb-14 max-w-2xl"
      >
        <p className="eyebrow mb-4 text-violet">Who it's for</p>
        <h2 className="h-display text-[clamp(2rem,4.5vw,3.25rem)]">One network, every side of the road</h2>
      </motion.div>

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {cases.map(({ icon: Icon, title, body, cta }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="group glass-card flex flex-col p-7 transition-transform duration-300 hover:-translate-y-1"
          >
            <Icon className="mb-5 h-7 w-7 text-blue" strokeWidth={1.6} />
            <h3 className="font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{body}</p>
            <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue">
              {cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
