import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { fadeUp, viewportOnce } from '../lib/motion'

// LlamaIndex-style numbered product section: index + eyebrow + title + body +
// check-bulleted features + CTA, paired with a product visual. theme + reverse.
export default function ProductSection({
  id,
  index,
  theme = 'light',
  eyebrow,
  title,
  body,
  features = [],
  cta,
  reverse = false,
  children,
}) {
  const dark = theme === 'ember'
  return (
    <section id={id} className={dark ? 'bg-ember text-on-ember' : 'bg-porcelain text-ink'}>
      <div className="container-c section py-24 sm:py-32">
        <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <div className="mb-5 flex items-center gap-3">
              <span
                className="font-mono text-sm font-medium"
                style={{ color: dark ? '#B5ACA0' : '#8A8378' }}
              >
                {index}
              </span>
              <span className={`h-px w-8 ${dark ? 'bg-line-ember' : 'bg-line-strong'}`} />
              <span className={`eyebrow ${dark ? 'text-orb-blue' : 'text-violet'}`}>{eyebrow}</span>
            </div>

            <h2 className="h-display text-[clamp(2rem,4.5vw,3.25rem)]">{title}</h2>
            <p className={`mt-5 max-w-md text-lg leading-relaxed ${dark ? 'text-muted-ember' : 'text-muted'}`}>
              {body}
            </p>

            {features.length > 0 && (
              <ul className="mt-7 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        dark ? 'bg-orb-blue/20 text-orb-blue' : 'bg-blue/10 text-blue'
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className={dark ? 'text-on-ember/90' : 'text-ink'}>{f}</span>
                  </li>
                ))}
              </ul>
            )}

            {cta && (
              <a href={cta.href} className={`mt-9 ${dark ? 'pill-ember' : 'pill-primary'}`}>
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
