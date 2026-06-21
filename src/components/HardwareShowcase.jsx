import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Cpu, Camera, Satellite, KeyRound, Gauge, Wifi } from 'lucide-react'
import NodeDevice from './NodeDevice'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const specs = [
  { icon: Cpu, label: 'Compute', value: 'ARM edge SoC · INT8 NPU' },
  { icon: Camera, label: 'Vision', value: 'Wide-FOV camera + depth' },
  { icon: Satellite, label: 'Positioning', value: 'GNSS + IMU dead-reckoning' },
  { icon: KeyRound, label: 'Security', value: 'Hardware-signed telemetry' },
  { icon: Gauge, label: 'Latency', value: 'Sub-100 ms on-device' },
  { icon: Wifi, label: 'Uplink', value: 'BLE to phone · LTE failover' },
]

export default function HardwareShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Parallax: device drifts up, chips counter-drift for depth.
  const deviceY = useTransform(scrollYProgress, [0, 1], [70, -70])
  const chipsY = useTransform(scrollYProgress, [0, 1], [-40, 40])
  const rot = useTransform(scrollYProgress, [0, 1], [4, -4])

  return (
    <section id="hardware" ref={ref} className="relative overflow-hidden py-28 sm:py-36">
      <div className="container-c section">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4 text-accent">The edge node</p>
          <h2 className="h-display text-[clamp(2.25rem,5vw,3.75rem)]">Meet the node that does the work</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            A purpose-built device that perceives the road, protects the driver, and signs every contribution at the source.
          </p>
        </motion.div>

        {/* Device with parallax + floating chips */}
        <div className="relative mx-auto mb-20 max-w-2xl">
          <motion.div style={{ y: deviceY, rotate: rot }}>
            <NodeDevice />
          </motion.div>

          <motion.div style={{ y: chipsY }} className="pointer-events-none absolute inset-0">
            <span className="absolute -left-4 top-6 hidden rounded-full border border-line bg-surface/80 px-3 py-1.5 font-mono text-[10px] tracking-wider text-accent backdrop-blur sm:block">
              47 MS INFERENCE
            </span>
            <span className="absolute -right-6 bottom-8 hidden rounded-full border border-line bg-surface/80 px-3 py-1.5 font-mono text-[10px] tracking-wider text-muted backdrop-blur sm:block">
              SIGNED · $VGA
            </span>
          </motion.div>
        </div>

        {/* Specs */}
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {specs.map(({ icon: Icon, label, value }) => (
            <motion.div key={label} variants={fadeUp} className="bg-bg p-7">
              <Icon className="mb-5 h-6 w-6 text-accent" strokeWidth={1.6} />
              <p className="eyebrow text-muted-2">{label}</p>
              <p className="mt-2 text-lg">{value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
