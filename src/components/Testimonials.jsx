import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const quotes = [
  {
    quote:
      'It called out a flooded dip before I could see it in the rain. Two weeks later the rewards covered my fuel.',
    name: 'Anjali R.',
    role: 'Daily commuter · Bengaluru',
    grad: 'linear-gradient(135deg,#FF3D8F,#8F6CF6)',
  },
  {
    quote:
      'We rolled VIGIA across 40 vehicles. Hazard data and driver coaching in one feed — our claims dropped.',
    name: 'Marcus Lee',
    role: 'Ops lead · last-mile fleet',
    grad: 'linear-gradient(135deg,#8F6CF6,#4CC2FF)',
  },
  {
    quote:
      'Signed, source-verified road incidents are exactly the kind of ground truth our risk models were missing.',
    name: 'Priya N.',
    role: 'Data scientist · insurer',
    grad: 'linear-gradient(135deg,#4CC2FF,#FBBF24)',
  },
]

function initials(name) {
  return name.split(' ').map((w) => w[0]).join('').slice(0, 2)
}

export default function Testimonials() {
  return (
    <section className="container-c section py-24 sm:py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <p className="eyebrow mb-4 text-violet">From the road</p>
        <h2 className="h-display text-[clamp(2rem,4.5vw,3.25rem)]">Drivers and fleets, in their words</h2>
      </motion.div>

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-3"
      >
        {quotes.map((q) => (
          <motion.figure key={q.name} variants={fadeUp} className="glass-card flex flex-col p-7">
            <blockquote className="flex-1 text-[17px] leading-relaxed text-ink">“{q.quote}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-white"
                style={{ background: q.grad }}
              >
                {initials(q.name)}
              </span>
              <span>
                <span className="block text-sm font-medium text-ink">{q.name}</span>
                <span className="block text-xs text-muted">{q.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  )
}
