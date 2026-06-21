import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Coins } from 'lucide-react'
import HazardMockup from './mockups/HazardMockup'
import VigiaMark from './VigiaMark'

const ease = [0.22, 1, 0.36, 1]
const marquee = ['EARN WHILE YOU DRIVE', 'MAP THE WORLD', 'OWN YOUR DATA', 'DRIVE SMARTER']

const trustLogos = [
  'Govt. of Kerala',
  'NHAI',
  'IIT Madras',
  'MeitY',
  'ISRO',
]

export default function Hero() {
  const revealRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: revealRef,
    offset: ['start 0.95', 'start 0.35'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1])
  const y = useTransform(scrollYProgress, [0, 1], [60, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1])

  return (
    <section id="top" className="relative overflow-hidden aurora">
      <div className="container-c section relative flex flex-col items-center pt-36 text-center sm:pt-48">

        {/* App icon card — Mobbin-style centered mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="mb-8"
        >
          <div
            className="grid h-[76px] w-[76px] place-items-center rounded-[22px] border border-white/10"
            style={{
              background: 'linear-gradient(145deg, #1a1a1f 0%, #0e0e12 100%)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
            }}
          >
            <VigiaMark size={40} />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="h-display mx-auto max-w-4xl text-[clamp(2.75rem,8vw,6rem)]"
        >
          Earn while<br />you <span className="h-soft">drive.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          VIGIA is an AI edge node for your car. It reads the road, warns before impact,
          and pays you in $VGA for every mile of road intelligence you contribute.
        </motion.p>

        {/* CTAs */}
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

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 flex flex-col items-center gap-5"
        >
          <p className="font-mono text-[11px] tracking-widest text-muted-2 uppercase">Deployed in partnership with</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustLogos.map((name) => (
              <span
                key={name}
                className="font-display text-sm font-semibold tracking-wide text-muted-2"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-20 overflow-hidden border-y border-line py-4">
        <div className="flex w-max motion-safe:animate-marquee">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="mx-6 flex shrink-0 items-center gap-6 font-display text-sm font-medium tracking-widest text-muted">
              {t}
              <span className="text-muted-2">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll-scale product reveal */}
      <div ref={revealRef} className="container-c section pb-24 pt-16 sm:pb-32">
        <motion.div style={{ scale, y, opacity }} className="relative mx-auto max-w-3xl">
          <HazardMockup />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-xl backdrop-blur sm:-right-8"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-accent/15 text-accent">
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
