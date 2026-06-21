import { motion } from 'framer-motion'
import { Cpu, ShieldAlert, Network, Lock, MessageSquareText, Boxes } from 'lucide-react'
import { SectionHeading } from './Section'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const features = [
  {
    icon: Cpu,
    title: 'Edge AI inference',
    body: 'YOLO + depth models run on-device with INT8 acceleration — sub-100ms detection without a cloud round-trip.',
    span: 'md:col-span-2',
    accent: 'primary',
  },
  {
    icon: ShieldAlert,
    title: 'Forward collision warning',
    body: 'Profile-scaled time-to-collision alerts warn you before impact.',
    accent: 'alert',
  },
  {
    icon: Lock,
    title: 'Private by design',
    body: 'Raw footage stays in the car. Only signed, anonymized insights are shared.',
    accent: 'primary',
  },
  {
    icon: Network,
    title: 'DePIN rewards',
    body: 'Every verified contribution to the map is cryptographically signed and rewarded — provably yours.',
    span: 'md:col-span-2',
    accent: 'earn',
  },
  {
    icon: MessageSquareText,
    title: 'Voice copilot',
    body: 'A natural-language driving assistant: route-ahead hazards, fatigue nudges, hands-free.',
    accent: 'primary',
  },
  {
    icon: Boxes,
    title: 'Fleet & insurer API',
    body: 'Stream aggregated road-risk intelligence into your own systems.',
    accent: 'primary',
  },
]

const accentMap = {
  primary: 'bg-primary/10 text-primary',
  earn: 'bg-earn/10 text-earn',
  alert: 'bg-alert/10 text-alert',
}

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-content px-5 py-24">
      <SectionHeading
        eyebrow="Platform"
        title="An ADAS copilot and a DePIN node — in one device"
        subtitle="Safety features you feel on every drive, powering a road-intelligence network you own a stake in."
      />
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-5 md:grid-cols-3"
      >
        {features.map(({ icon: Icon, title, body, span, accent }) => (
          <motion.article
            key={title}
            variants={fadeUp}
            className={`group rounded-2xl border border-hairline bg-surface p-7 transition-all hover:-translate-y-1 hover:border-primary/40 ${span || ''}`}
          >
            <span className={`mb-5 grid h-12 w-12 place-items-center rounded-xl ${accentMap[accent]}`}>
              <Icon className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <h3 className="mb-2 font-display text-lg font-semibold">{title}</h3>
            <p className="leading-relaxed text-muted">{body}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
