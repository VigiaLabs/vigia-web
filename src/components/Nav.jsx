import { useEffect, useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import VigiaMark from './VigiaMark'

const links = [
  { label: 'How it works', href: '#how' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Earn', href: '#earn' },
  { label: 'Pricing', href: '#pricing' },
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
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 text-ink" aria-label="VIGIA home">
          <VigiaMark size={28} />
          <span className="font-display text-[18px] font-bold tracking-tight">VIGIA</span>
        </a>

        {/* Center links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-1 md:flex">
          <a href="#" className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-ink">
            Sign in
          </a>
          <a
            href="#cta"
            className="ml-1 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-white"
          >
            Get started
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
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted">
                {l.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="pill-primary">
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
