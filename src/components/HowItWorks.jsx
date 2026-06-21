import { motion } from 'framer-motion'
import { Car, ScanEye, Coins } from 'lucide-react'
import { SectionHeading } from './Section'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const steps = [
  {
    icon: Car,
    step: '01',
    title: 'Drive',
    body: 'Mount the VIGIA node. As you drive, its cameras and sensors capture the road exactly as you see it — no extra effort, no behavior change.',
  },
  {
    icon: ScanEye,
    step: '02',
    title: 'Detect',
    body: 'On-device AI flags potholes, hazards, and collision risk in real time, warning you instantly. Raw video never leaves the car — only signed insights do.',
  },
  {
    icon: Coins,
    step: '03',
    title: 'Earn',
    body: 'Each verified contribution to the road-intelligence map earns rewards. Your node is paid for the data only it could capture.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-content px-5 py-24">
      <SectionHeading
        eyebrow="How it works"
        title="Three steps. One drive."
        subtitle="From ignition to payout, the entire loop runs on the edge node in your car."
      />
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-3"
      >
        {steps.map(({ icon: Icon, step, title, body }) => (
          <motion.div
            key={step}
            variants={fadeUp}
            className="group relative rounded-2xl border border-hairline bg-surface p-7 transition-transform hover:-translate-y-1 hover:shadow-glow"
          >
            <span className="absolute right-6 top-6 font-display text-5xl font-bold text-hairline transition-colors group-hover:text-primary/20">
              {step}
            </span>
            <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <h3 className="mb-2 font-display text-xl font-semibold">{title}</h3>
            <p className="leading-relaxed text-muted">{body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
