import { motion } from 'framer-motion'
import { ScanEye, MessageSquareText, Coins } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const cards = [
  {
    icon: ScanEye,
    tint: 'text-blue',
    bg: 'bg-blue/10',
    title: 'It sees the road',
    body: 'Edge AI detects potholes, hazards, and collision risk in real time — sub-100ms, fully on-device.',
  },
  {
    icon: MessageSquareText,
    tint: 'text-violet',
    bg: 'bg-violet/10',
    title: 'It talks to you',
    body: 'A natural-language copilot warns before impact, flags route-ahead hazards, and nudges on fatigue — hands-free.',
  },
  {
    icon: Coins,
    tint: 'text-gold',
    bg: 'bg-gold/10',
    title: 'It pays you back',
    body: 'Every verified contribution to the road map is signed on your node and rewarded in $VGA.',
  },
]

export default function Capabilities() {
  return (
    <section className="container-c section py-24 sm:py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <p className="eyebrow mb-4 text-violet">One device, three jobs</p>
        <h2 className="h-display text-[clamp(2rem,4.5vw,3.25rem)]">
          A copilot and a node, working as one
        </h2>
      </motion.div>

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-3"
      >
        {cards.map(({ icon: Icon, tint, bg, title, body }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="glass-card p-7 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl ${bg} ${tint}`}>
              <Icon className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="mt-2.5 leading-relaxed text-muted">{body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
