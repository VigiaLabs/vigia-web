import { motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { useState } from 'react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-50 flex items-center justify-center gap-3 border-b border-white/8 bg-surface/80 px-4 py-2.5 text-center backdrop-blur"
    >
      <span className="h-1.5 w-1.5 animate-blink rounded-full bg-accent shrink-0" />
      <p className="text-sm text-muted">
        VIGIA is live in early access — the AI dashcam that pays you back.{' '}
        <a href="#cta" className="font-medium text-ink underline underline-offset-2 hover:text-accent transition-colors">
          Claim your node →
        </a>
      </p>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        className="absolute right-4 grid h-6 w-6 place-items-center rounded-full text-muted-2 transition-colors hover:text-ink"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </motion.div>
  )
}
