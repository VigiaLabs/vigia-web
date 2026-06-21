import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, viewportOnce } from '../lib/motion'

// Alternating text + product-visual section. theme: 'dark' | 'light'.
export default function ShowcaseSection({
  id,
  theme = 'light',
  eyebrow,
  title,
  body,
  cta,
  reverse = false,
  children,
}) {
  const dark = theme === 'dark'
  return (
    <section
      id={id}
      className={dark ? 'bg-ink text-on-ink' : 'bg-paper text-on-paper'}
    >
      <div className="container-c section py-24 sm:py-32">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
            reverse ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {eyebrow && (
              <p className={`eyebrow mb-5 ${dark ? 'text-accent-soft' : 'text-accent'}`}>{eyebrow}</p>
            )}
            <h2 className="h-display text-[clamp(2.25rem,5vw,3.75rem)]">{title}</h2>
            <p
              className={`mt-6 max-w-md text-lg leading-relaxed ${
                dark ? 'text-muted-ink' : 'text-muted-paper'
              }`}
            >
              {body}
            </p>
            {cta && (
              <a
                href={cta.href}
                className={`pill mt-9 ${
                  dark ? 'bg-on-ink text-ink hover:bg-white' : 'bg-ink text-on-ink hover:bg-ink-2'
                }`}
              >
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
