import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Copilot', href: '#copilot' },
  { label: 'Perception', href: '#perception' },
  { label: 'Network', href: '#network' },
  { label: 'Hardware', href: '#hardware' },
]

function Mark() {
  return (
    <span
      className="grid h-8 w-8 place-items-center rounded-xl"
      style={{
        background:
          'radial-gradient(circle at 35% 30%, #8F6CF6, #2E2450 70%)',
        boxShadow: '0 0 0 1px rgba(143,108,246,0.4)',
      }}
    >
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'linear-gradient(135deg,#FF3D8F,#4CC2FF)' }} />
    </span>
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-porcelain/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-c section flex h-[72px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" aria-label="VIGIA home">
          <Mark />
          <span className="font-display text-xl font-bold tracking-tight">VIGIA</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          <a href="#" className="text-sm font-medium text-ink transition-colors hover:text-blue">
            Sign in
          </a>
          <a href="#cta" className="pill-primary !py-2.5 !text-sm">
            Get started
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-line-strong md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-porcelain/95 px-5 py-5 backdrop-blur-xl md:hidden">
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
