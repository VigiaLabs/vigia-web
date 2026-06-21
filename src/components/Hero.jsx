import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import HazardMockup from './mockups/HazardMockup'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const revealRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: revealRef,
    offset: ['start 0.95', 'start 0.35'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-c section relative flex flex-col pt-24 sm:pt-32">

        {/* Left-aligned headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="h-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-tightest max-w-4xl"
        >
          Earn while<br />you <span className="h-soft">drive.</span>
        </motion.h1>

        {/* Left-aligned body */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
          className="mt-7 max-w-lg text-lg leading-relaxed text-muted"
        >
          An AI edge node for your car. Reads the road, warns before impact,
          and pays you in $VGA for every mile you contribute.
        </motion.p>

        {/* Square CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#cta" className="btn-primary">
            Join the waitlist
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#how" className="btn-outline">See it work →</a>
        </motion.div>
      </div>

      {/* Full-width product reveal */}
      <div ref={revealRef} className="container-c section pb-24 pt-14 sm:pb-32">
        <motion.div style={{ scale, y, opacity }}>
          <HazardMockup />
        </motion.div>
      </div>
    </section>
  )
}
