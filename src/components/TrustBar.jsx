import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

const stack = ['OpenVINO', 'ONNX Runtime', 'Raspberry Pi', 'AWS IoT Core', 'Sarvam AI', 'MQTT']

export default function TrustBar() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="border-y border-hairline bg-surface/40"
    >
      <div className="mx-auto max-w-content px-5 py-8">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted">
          Built on a production-grade edge & cloud stack
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {stack.map((name) => (
            <span
              key={name}
              className="font-display text-sm font-medium tracking-wide text-muted/80 transition-colors hover:text-text"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
