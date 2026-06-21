import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'
import HazardMockup from './mockups/HazardMockup'
import CopilotMockup from './mockups/CopilotMockup'
import EarningsMockup from './mockups/EarningsMockup'
import { fadeUp, viewportOnce } from '../lib/motion'

const steps = [
  {
    n: '01',
    eyebrow: 'Detect',
    title: 'The node sees what you’d miss',
    body: 'On-device AI scans the road in real time — potholes, debris, collision risk — and flags it the instant it appears, with zero cloud round-trip.',
    points: ['Sub-100ms edge inference', 'Works fully offline', 'Raw video never leaves the car'],
    Visual: HazardMockup,
  },
  {
    n: '02',
    eyebrow: 'Guide',
    title: 'It warns you before you arrive',
    body: 'A natural-language copilot reads the route ahead and speaks up before it matters — hazards, weather, following distance — completely hands-free.',
    points: ['Route-ahead hazard warnings', 'Profile-scaled collision alerts', 'Fatigue & drift nudges'],
    Visual: CopilotMockup,
  },
  {
    n: '03',
    eyebrow: 'Earn',
    title: 'Every mile pays you back',
    body: 'Each verified contribution to the road map is signed on your node and rewarded in $VGA. The roads you already drive become an income stream.',
    points: ['Earn for verified road data', 'Rare routes earn the most', 'Withdraw to fiat anytime'],
    Visual: EarningsMockup,
  },
]

function StickyVisual({ progress }) {
  // Crossfade three layered visuals across the section scroll progress.
  const o1 = useTransform(progress, [0, 0.3, 0.37], [1, 1, 0])
  const o2 = useTransform(progress, [0.3, 0.37, 0.63, 0.7], [0, 1, 1, 0])
  const o3 = useTransform(progress, [0.63, 0.7, 1], [0, 1, 1])
  const s1 = useTransform(progress, [0, 0.37], [1, 0.96])
  const s2 = useTransform(progress, [0.3, 0.5, 0.7], [0.96, 1, 0.96])
  const s3 = useTransform(progress, [0.63, 1], [0.96, 1])
  const layers = [
    { o: o1, s: s1, V: steps[0].Visual },
    { o: o2, s: s2, V: steps[1].Visual },
    { o: o3, s: s3, V: steps[2].Visual },
  ]
  return (
    <div className="sticky top-0 flex h-screen items-center">
      <div className="relative w-full">
        {layers.map(({ o, s, V }, i) => (
          <motion.div key={i} style={{ opacity: o, scale: s }} className="absolute inset-0 flex items-center">
            <div className="w-full">
              <V />
            </div>
          </motion.div>
        ))}
        {/* spacer to give the stack height */}
        <div className="invisible">
          <HazardMockup />
        </div>
      </div>
    </div>
  )
}

export default function StickySteps() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <section id="how" ref={ref} className="container-c section">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Sticky visual — desktop only */}
        <div className="hidden lg:block">
          <StickyVisual progress={scrollYProgress} />
        </div>

        {/* Steps */}
        <div>
          {steps.map(({ n, eyebrow, title, body, points, Visual }) => (
            <div key={n} className="flex min-h-screen flex-col justify-center py-20">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
                {/* Inline visual — mobile only */}
                <div className="mb-8 lg:hidden">
                  <Visual />
                </div>

                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-sm text-muted-2">{n}</span>
                  <span className="h-px w-8 bg-line-2" />
                  <span className="eyebrow text-cyan">{eyebrow}</span>
                </div>
                <h2 className="h-display text-[clamp(2rem,4.5vw,3.25rem)]">{title}</h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{body}</p>
                <ul className="mt-7 space-y-3">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan/15 text-cyan">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-ink">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
