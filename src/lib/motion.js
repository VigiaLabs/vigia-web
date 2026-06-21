// Shared framer-motion variants. All transforms are opacity/translate only
// and degrade gracefully under prefers-reduced-motion (handled in index.css).

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export const stagger = (gap = 0.06) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
})

export const viewportOnce = { once: true, amount: 0.3 }
