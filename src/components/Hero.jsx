import { motion } from 'framer-motion'
import { ArrowUpRight, Play, ShieldCheck, Cpu, Coins } from 'lucide-react'
import { fadeUp, stagger } from '../lib/motion'

const headline = ['Drive.', 'Detect.', 'Earn.']

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* Backdrop motifs */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={stagger(0.08)} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1.5 text-xs text-muted"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-earn" />
            DePIN road-intelligence network · now live in beta
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {headline.map((word, i) => (
              <motion.span
                key={word}
                variants={fadeUp}
                className={`mr-4 inline-block ${i === 2 ? 'text-gradient' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            VIGIA turns your car into an AI edge node. It spots road hazards in real
            time, warns you before impact, and pays you in rewards for the road
            intelligence your drive contributes to the network.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-earn px-6 py-3 font-semibold text-bg transition-shadow hover:shadow-glow"
            >
              Start earning
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 font-medium text-text transition-colors hover:bg-surface"
            >
              <Play className="h-4 w-4 text-primary" />
              See how it works
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Edge-private by design
            </span>
            <span className="inline-flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" /> Runs on-device, no cloud round-trip
            </span>
            <span className="inline-flex items-center gap-2">
              <Coins className="h-4 w-4 text-earn" /> Signed, verifiable rewards
            </span>
          </motion.div>
        </motion.div>

        {/* Edge-node radar visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-full border border-hairline" />
          <div className="absolute inset-[12%] rounded-full border border-hairline" />
          <div className="absolute inset-[28%] rounded-full border border-hairline" />
          <div className="absolute inset-[44%] rounded-full border border-primary/30" />
          {/* sweeping radar beam */}
          <div className="absolute inset-0 animate-radar" aria-hidden>
            <div
              className="absolute left-1/2 top-0 h-1/2 w-1/2 origin-bottom-left"
              style={{
                background:
                  'conic-gradient(from 0deg, rgba(34,211,238,0.35), transparent 60deg)',
              }}
            />
          </div>
          {/* detected blips */}
          {[
            { top: '22%', left: '64%', c: 'bg-alert' },
            { top: '58%', left: '30%', c: 'bg-primary' },
            { top: '70%', left: '70%', c: 'bg-earn' },
          ].map((b, i) => (
            <span
              key={i}
              className={`absolute h-2.5 w-2.5 rounded-full ${b.c} shadow-glow`}
              style={{ top: b.top, left: b.left }}
            />
          ))}
          <div className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-primary to-earn text-bg shadow-glow">
            <span className="font-display text-xs font-bold">NODE</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
