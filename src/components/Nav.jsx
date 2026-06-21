import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import VigiaMark from './VigiaMark'

const rightLinks = [
  { label: 'Log in', href: '#' },
  { label: 'Contact sales', href: '#' },
  { label: 'View demo', href: '#how' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-bg/85 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-c section flex h-[68px] items-center justify-between">
        {/* Logo + sub-product link */}
        <div className="flex items-center gap-5">
          <a href="#top" className="flex items-center gap-2.5 text-ink" aria-label="VIGIA home">
            <VigiaMark size={28} />
            <span className="font-display text-[18px] font-bold tracking-tight">VIGIA</span>
          </a>
          <a
            href="#hardware"
            className="hidden items-center gap-0.5 text-sm font-medium text-muted transition-colors hover:text-ink sm:flex"
          >
            Edge Node
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-5 md:flex">
          {rightLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="ml-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-white"
          >
            Start free trial
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg/95 px-5 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {rightLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted">
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-ink px-5 py-2.5 text-center text-sm font-semibold text-bg"
            >
              Start free trial
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
