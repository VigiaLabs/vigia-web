import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, viewportOnce } from '../lib/motion'

export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-content px-5 py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-3xl border border-hairline bg-surface px-6 py-16 text-center sm:px-16"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            Turn your next drive into <span className="text-gradient">road intelligence</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Join the beta. Claim your node, map the roads you drive, and start earning.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-earn px-7 py-3.5 font-semibold text-bg transition-shadow hover:shadow-glow"
            >
              Reserve your node
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-7 py-3.5 font-medium text-text transition-colors hover:bg-surface-2"
            >
              Read the docs
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
