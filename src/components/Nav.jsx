import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Product', href: '#copilot' },
  { label: 'Network', href: '#network' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Company', href: '#footer' },
]

function Mark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      <path d="M12 12 L18 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

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
      className={`fixed inset-x-0 top-0 z-50 text-on-ink transition-colors duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-line-dark' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-c section flex h-[72px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" aria-label="VIGIA home">
          <Mark />
          <span className="font-display text-xl tracking-tight">VIGIA</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-on-ink/80 transition-colors hover:text-on-ink">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#cta" className="pill hidden bg-on-ink text-ink hover:bg-white md:inline-flex">
          Contact
        </a>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-line-dark md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line-dark bg-ink/95 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-on-ink/80">
                {l.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="pill bg-on-ink text-ink">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
