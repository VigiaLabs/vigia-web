import { motion } from 'framer-motion'
import { Cpu, Camera, Satellite, KeyRound, Gauge, Wifi } from 'lucide-react'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const specs = [
  { icon: Cpu, label: 'Compute', value: 'ARM edge SoC · INT8 NPU path' },
  { icon: Camera, label: 'Vision', value: 'Wide-FOV road camera + depth' },
  { icon: Satellite, label: 'Positioning', value: 'GNSS + IMU dead-reckoning' },
  { icon: KeyRound, label: 'Security', value: 'Hardware-signed telemetry' },
  { icon: Gauge, label: 'Latency', value: 'Sub-100 ms on-device' },
  { icon: Wifi, label: 'Uplink', value: 'BLE to phone · LTE failover' },
]

export default function Hardware() {
  return (
    <section id="hardware" className="bg-paper text-on-paper">
      <div className="container-c section py-24 sm:py-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-16 max-w-2xl"
        >
          <p className="eyebrow mb-5 text-accent">The edge node</p>
          <h2 className="h-display text-[clamp(2.25rem,5vw,3.75rem)]">It all starts at the node.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-paper">
            A purpose-built device that perceives the road, protects the driver, and
            signs every contribution at the source.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-px overflow-hidden rounded-2xl border border-line-light bg-line-light sm:grid-cols-2 lg:grid-cols-3"
        >
          {specs.map(({ icon: Icon, label, value }) => (
            <motion.div key={label} variants={fadeUp} className="bg-paper p-7">
              <Icon className="mb-5 h-6 w-6 text-accent" strokeWidth={1.5} />
              <p className="eyebrow text-muted-paper">{label}</p>
              <p className="mt-2 text-lg">{value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
