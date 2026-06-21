import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

const stats = [
  { value: 12400, suffix: '+', label: 'Active nodes' },
  { value: 3.2, suffix: 'M', label: 'Kilometres mapped' },
  { value: 480, suffix: 'K+', label: 'Hazards flagged' },
  { value: 1.1, prefix: '$', suffix: 'M', label: 'Rewards paid out' },
]

function Counter({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [n, setN] = useState(0)
  const dec = !Number.isInteger(value)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value)
      return
    }
    let raf
    const start = performance.now()
    const tick = (t) => {
      const p = Math.min((t - start) / 1400, 1)
      setN(value * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setN(value)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  const shown = dec ? n.toFixed(1) : Math.round(n).toLocaleString('en-US')
  return (
    <span ref={ref} className="font-display text-5xl tracking-tight sm:text-6xl">
      {prefix}
      {shown}
      {suffix}
    </span>
  )
}

export default function Metrics() {
  return (
    <section className="bg-ink text-on-ink">
      <div className="container-c section py-24">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="eyebrow mb-14 text-center text-accent-soft"
        >
          The network, live
        </motion.p>
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="text-center"
            >
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              <p className="mt-3 text-sm text-muted-ink">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
