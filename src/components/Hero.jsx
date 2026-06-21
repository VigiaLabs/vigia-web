import { useRef, Suspense, lazy } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Coins } from 'lucide-react'
import HazardMockup from './mockups/HazardMockup'

const ShaderWave = lazy(() => import('./ShaderWave'))

const ease = [0.22, 1, 0.36, 1]
const marquee = ['EARN WHILE YOU DRIVE', 'MAP THE WORLD', 'OWN YOUR DATA', 'DRIVE SMARTER']

const trustLogos = [
  { name: 'Govt. of Kerala', abbr: 'GoK' },
  { name: 'NHAI', abbr: 'NHAI' },
  { name: 'IIT Madras', abbr: 'IITM' },
  { name: 'MeitY', abbr: 'MeitY' },
  { name: 'ISRO', abbr: 'ISRO' },
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
    <section id="top" className="relative overflow-hidden">
      <div className="container-c section relative flex flex-col items-center pt-28 text-center sm:pt-36">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="h-display mx-auto max-w-4xl text-[clamp(2.75rem,8vw,6rem)]"
        >
          Earn while<br />you <span className="h-soft">drive.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted"
        >
          An AI edge node for your car. Reads the road, warns before impact,
          and pays you in $VGA for every mile you contribute.
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

        {/* Trust strip — Mobbin staggered fade-in */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
          }}
          className="mt-16 flex flex-col items-center gap-5"
        >
          <motion.p
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }}
            className="font-mono text-[11px] tracking-widest text-muted-2 uppercase"
          >
            Deployed in partnership with
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {trustLogos.map(({ name }) => (
              <motion.span
                key={name}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="font-display text-sm font-semibold tracking-wide text-muted-2"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Shader wave — handhold.io style fluid gradient below CTA */}
      <div className="relative mt-10 h-[340px] w-full overflow-hidden">
        <Suspense fallback={<div className="h-full w-full" />}>
          <ShaderWave />
        </Suspense>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-line py-4">
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
