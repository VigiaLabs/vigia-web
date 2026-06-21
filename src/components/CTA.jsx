import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Orb from './Orb'
import { fadeUp, viewportOnce } from '../lib/motion'

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-ember text-on-ember">
      <div className="container-c section relative py-28 text-center sm:py-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex justify-center"
        >
          <Orb size={170} />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="h-display mx-auto max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]"
        >
          Put intelligence in{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(100deg,#FF3D8F,#8F6CF6,#4CC2FF)' }}
          >
            every mile.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-6 max-w-lg text-lg text-muted-ember"
        >
          Join the beta. Claim your node, map the roads you drive, and start earning $VGA.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#" className="pill-primary">
            Reserve your node
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="mailto:hello@vigia.network" className="pill border border-line-ember text-on-ember hover:bg-ember-2">
            Talk to the team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
