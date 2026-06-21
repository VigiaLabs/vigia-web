import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

const stats = [
  { value: 12400, suffix: '+', label: 'Active nodes on the road' },
  { value: 3.2, suffix: 'M', label: 'Kilometres mapped' },
  { value: 480, suffix: 'K+', label: 'Hazards flagged' },
  { value: 1.1, prefix: '$', suffix: 'M', label: 'Rewards paid to drivers' },
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
    <span
      ref={ref}
      className="font-display text-5xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent"
      style={{ backgroundImage: 'linear-gradient(120deg,#FF3D8F,#8F6CF6,#4CC2FF)' }}
    >
      {prefix}
      {shown}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-ember text-on-ember">
      <div className="container-c section py-24">
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
              <p className="mx-auto mt-3 max-w-[12rem] text-sm text-muted-ember">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
