import { motion, useScroll, useSpring } from 'framer-motion'

// Thin gradient progress bar pinned to the top of the viewport.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0% 50%' }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-gradient-to-r from-pink via-violet to-blue"
      aria-hidden
    />
  )
}
