import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Radar, ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'Platform', href: '#features' },
  { label: 'Earn', href: '#earn' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Use Cases', href: '#usecases' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'glass' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5" aria-label="VIGIA home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-earn text-bg shadow-glow">
            <Radar className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="font-display text-lg font-bold tracking-widest">VIGIA</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="text-sm text-muted transition-colors hover:text-text">
            Docs
          </a>
          <a
            href="#cta"
            className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-earn px-4 py-2 text-sm font-semibold text-bg transition-shadow hover:shadow-glow"
          >
            Launch App
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-hairline md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-hairline px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-text"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-earn px-4 py-2.5 text-sm font-semibold text-bg"
            >
              Launch App
            </a>
          </div>
        </div>
      )}
    </motion.header>
  )
}
