import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Cpu, Coins } from 'lucide-react'
import Orb from './Orb'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden aurora">
      <div className="container-c section relative pt-36 pb-20 text-center sm:pt-44">
        {/* Orb centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="mb-10 flex justify-center"
        >
          <Orb size={300} className="sm:scale-110" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs text-muted backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-orb-pink" />
          The ADAS copilot that pays you back · now in beta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="h-display mx-auto max-w-4xl text-[clamp(2.75rem,7.5vw,5.5rem)]"
        >
          Your road,{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(100deg,#FF3D8F,#8F6CF6,#4CC2FF)' }}
          >
            understood.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          VIGIA is the AI copilot in your car. It sees the road, warns before impact,
          and turns every mile into rewards on a decentralized road-intelligence network.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#cta" className="pill-primary">
            Get started
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#copilot" className="pill-ghost">
            See how it works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-muted"
        >
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue" /> Edge-private by design</span>
          <span className="inline-flex items-center gap-2"><Cpu className="h-4 w-4 text-violet" /> Runs on-device</span>
          <span className="inline-flex items-center gap-2"><Coins className="h-4 w-4 text-gold" /> Signed, verifiable rewards</span>
        </motion.div>
      </div>
    </section>
  )
}
