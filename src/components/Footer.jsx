import { Github, Twitter, Linkedin } from 'lucide-react'

const cols = [
  { title: 'Product', links: ['Copilot', 'Detection', 'Hardware', 'Network'] },
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
    <footer id="footer" className="bg-ink text-on-ink">
      <div className="container-c section border-t border-line-dark py-16">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl tracking-tight">VIGIA</span>
            <p className="mt-4 max-w-xs leading-relaxed text-muted-ink">
              Roads that think. An AI copilot in every car, and a road-intelligence
              network that pays drivers back.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line-dark text-muted-ink transition-colors hover:border-on-ink/40 hover:text-on-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow mb-5 text-muted-ink">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-on-ink/80 transition-colors hover:text-on-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line-dark pt-7 text-sm text-muted-ink sm:flex-row">
          <p>© {new Date().getFullYear()} VIGIA Labs. All rights reserved.</p>
          <p className="font-display italic">Roads that think.</p>
        </div>
      </div>
    </footer>
  )
}
