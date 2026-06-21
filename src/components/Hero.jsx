import { motion } from 'framer-motion'
import Globe from './Globe'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink">
      {/* Orbital globe backdrop */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
        <Globe className="h-[150vmin] w-[150vmin] max-w-none opacity-90" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" aria-hidden />

      <div className="container-c section relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-8 text-on-ink/55"
        >
          ADAS · DePIN road-intelligence network
        </motion.p>

        <h1 className="h-display mx-auto max-w-4xl text-[clamp(3.5rem,11vw,9rem)]">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Roads that
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="block italic"
          >
            think.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-ink"
        >
          Engineering intelligence into every mile you drive — an AI copilot in
          every car, and a network that pays drivers back.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#cta" className="pill bg-accent text-on-ink hover:bg-accent/90">
            Reserve your node
          </a>
          <a href="#copilot" className="pill border border-line-dark text-on-ink hover:bg-ink-2">
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  )
}
