import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

export default function CTA() {
  return (
    <section id="cta" className="bg-ink text-on-ink">
      <div className="container-c section py-32 text-center sm:py-40">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="h-display mx-auto max-w-3xl text-[clamp(2.5rem,7vw,5rem)]"
        >
          Put intelligence in <span className="italic">every mile.</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-6 max-w-lg text-lg text-muted-ink"
        >
          Join the beta. Claim your node, map the roads you drive, and start earning.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#" className="pill bg-accent text-on-ink hover:bg-accent/90">
            Reserve your node
          </a>
          <a href="mailto:hello@vigia.network" className="pill border border-line-dark text-on-ink hover:bg-ink-2">
            Talk to the team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
