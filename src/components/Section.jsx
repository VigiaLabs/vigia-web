import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

// Reusable section heading block.
export function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`mb-14 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>}
    </motion.div>
  )
}
