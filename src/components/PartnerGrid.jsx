import { motion } from 'framer-motion'

const partners = [
  'Govt. of Kerala',
  'NHAI',
  'IIT Madras',
  'MeitY',
  'ISRO',
  'Smart Cities Mission',
  'DRDO',
  'ADAS India',
]

export default function PartnerGrid() {
  return (
    <section className="container-c section py-16 sm:py-20">
      <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-2">
        Trusted in partnership with
      </p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
        {partners.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center py-4"
          >
            <span className="font-display text-sm font-semibold tracking-wide text-muted-2 text-center">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
