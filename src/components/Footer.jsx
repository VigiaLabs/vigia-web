import { Radar, Github, Twitter, Linkedin } from 'lucide-react'

const cols = [
  { title: 'Platform', links: ['Features', 'Hardware', 'Earn', 'Docs'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Data policy'] },
]

const socials = [
  { icon: Github, label: 'GitHub' },
  { icon: Twitter, label: 'X / Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-content px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-earn text-bg">
                <Radar className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="font-display text-lg font-bold tracking-widest">VIGIA</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The ADAS DePIN network. Drive safer, map the world, earn for the road
              intelligence only your node can capture.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-hairline text-muted transition-colors hover:border-primary/40 hover:text-text"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold text-text">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted transition-colors hover:text-text">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} VIGIA Labs. All rights reserved.</p>
          <p>Drive. Detect. Earn.</p>
        </div>
      </div>
    </footer>
  )
}
