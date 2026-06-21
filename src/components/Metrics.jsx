import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 12400, suffix: '+', label: 'Active nodes' },
  { value: 3.2, suffix: 'M', label: 'Kilometres mapped' },
  { value: 480000, suffix: '+', label: 'Hazards flagged' },
  { value: 1.1, suffix: 'M', prefix: '$', label: 'Rewards paid out' },
]

function format(n) {
  if (n >= 1000 && Number.isInteger(n)) return n.toLocaleString('en-US')
  return n.toString()
}

function Counter({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(value)
      return
    }
    let raf
    const start = performance.now()
    const dur = 1400
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
      else setDisplay(value)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  const shown = Number.isInteger(value) ? format(Math.round(display)) : display.toFixed(1)
  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gradient sm:text-5xl tabular-nums">
      {prefix}
      {shown}
      {suffix}
    </span>
  )
}

export default function Metrics() {
  return (
    <section className="border-y border-hairline bg-surface/40">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-8 px-5 py-16 lg:grid-cols-4">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
