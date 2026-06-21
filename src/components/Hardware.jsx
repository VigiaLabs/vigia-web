import { motion } from 'framer-motion'
import { Cpu, Camera, Satellite, KeyRound, Gauge, Wifi } from 'lucide-react'
import { SectionHeading } from './Section'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const specs = [
  { icon: Cpu, label: 'Compute', value: 'ARM edge SoC · INT8 NPU path' },
  { icon: Camera, label: 'Vision', value: 'Wide-FOV road camera + depth' },
  { icon: Satellite, label: 'Positioning', value: 'GNSS + IMU dead-reckoning' },
  { icon: KeyRound, label: 'Security', value: 'Hardware-signed telemetry' },
  { icon: Gauge, label: 'Latency', value: 'Sub-100ms on-device detection' },
  { icon: Wifi, label: 'Uplink', value: 'BLE to phone · LTE failover' },
]

export default function Hardware() {
  return (
    <section id="hardware" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-content px-5">
        <SectionHeading
          eyebrow="The edge node"
          title="Automotive-grade hardware, decentralized economics"
          subtitle="A purpose-built node that perceives the road, protects the driver, and signs every contribution."
        />
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {specs.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-hairline bg-surface p-6 transition-colors hover:border-primary/40"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
                <p className="mt-1 font-medium text-text">{value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
