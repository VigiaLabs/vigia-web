import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Coins } from 'lucide-react'
import HazardMockup from './mockups/HazardMockup'

const ease = [0.22, 1, 0.36, 1]
const marquee = ['EARN WHILE YOU DRIVE', 'MAP THE WORLD', 'OWN YOUR DATA', 'DRIVE SMARTER']

export default function Hero() {
  const revealRef = useRef(null)
  // Scroll-scale reveal: the product panel grows from 0.86→1 and lifts as it enters.
  const { scrollYProgress } = useScroll({
    target: revealRef,
    offset: ['start 0.95', 'start 0.35'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1])
  const y = useTransform(scrollYProgress, [0, 1], [60, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1])

  return (
    <section id="top" className="relative overflow-hidden aurora">
      <div className="container-c section relative pt-36 text-center sm:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-xs text-muted backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-cyan" />
          The AI dashcam that pays you back · join the waitlist
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="h-display mx-auto max-w-4xl text-[clamp(2.75rem,8vw,6rem)]"
        >
          Earn while<br />you <span className="text-grad">drive.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          VIGIA is an AI copilot and edge node for your car. It reads the road, warns
          before impact, and pays you in $VGA for the road intelligence every drive contributes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#cta" className="pill-primary">
            Join the waitlist
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#how" className="pill-ghost">See it work →</a>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-line py-4">
        <div className="flex w-max motion-safe:animate-marquee">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="mx-6 flex shrink-0 items-center gap-6 font-display text-sm font-medium tracking-widest text-muted">
              {t}
              <span className="text-cyan">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll-scale product reveal */}
      <div ref={revealRef} className="container-c section pb-24 pt-16 sm:pb-32">
        <motion.div style={{ scale, y, opacity }} className="relative mx-auto max-w-3xl">
          <HazardMockup />
          {/* floating earnings chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur sm:-right-8"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gold/15 text-gold">
              <Coins className="h-4 w-4" />
            </span>
            <span className="text-left">
              <span className="block font-mono text-[10px] tracking-wider text-muted">EARNED TODAY</span>
              <span className="block font-display font-semibold">+12 $VGA</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
