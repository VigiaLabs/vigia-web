import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import Orb from './Orb'

const ShaderWave = lazy(() => import('./ShaderWave'))

const ease = [0.22, 1, 0.36, 1]

export default function AiShowcase() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-c section relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="eyebrow text-accent"
        >
          VIGIA EDGE NODE
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="h-display mt-5 text-[clamp(2.5rem,5vw,4rem)] max-w-3xl"
        >
          World-class road intelligence
        </motion.h2>

        {/* Orb centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="my-14"
        >
          <Orb size={220} />
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="max-w-xl text-lg leading-relaxed text-muted"
        >
          Built on{' '}
          <span className="underline decoration-muted-2 underline-offset-4">on-device YOLO inference</span>,{' '}
          <span className="underline decoration-muted-2 underline-offset-4">depth estimation</span>, and{' '}
          <span className="underline decoration-muted-2 underline-offset-4">BLE telemetry</span> — all running at the
          edge, never touching the cloud. Every node contributes to a living map of India's roads.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="mt-10"
        >
          <a href="#hardware" className="btn-primary">
            Learn more
          </a>
        </motion.div>
      </div>

      {/* ShaderWave fills the lower half */}
      <div className="relative mt-16 h-[320px] w-full overflow-hidden">
        <Suspense fallback={<div className="h-full w-full" />}>
          <ShaderWave />
        </Suspense>
      </div>
    </section>
  )
}
