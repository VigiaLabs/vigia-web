import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Orb from './Orb'
import { fadeUp, viewportOnce } from '../lib/motion'

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-line aurora">
      <div className="container-c section relative py-28 text-center sm:py-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex justify-center"
        >
          <Orb size={160} />
        </motion.div>

        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="h-display mx-auto max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]">
          Every mile has value.<br /><span className="h-soft">Start capturing yours.</span>
        </motion.h2>

        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mx-auto mt-6 max-w-lg text-lg text-muted">
          Join the waitlist. Claim your node, drive the roads you already drive, and start earning $VGA.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="pill-primary">
            Join the waitlist
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="mailto:hello@vigia.network" className="pill-ghost">Talk to the team</a>
        </motion.div>
      </div>
    </section>
  )
}
