import { Github, Twitter, Linkedin } from 'lucide-react'

const cols = [
  { title: 'Product', links: ['Copilot', 'Perception', 'Network', 'Hardware'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Data policy'] },
]

const socials = [
  { icon: Github, label: 'GitHub' },
  { icon: Twitter, label: 'X / Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
]

function Mark() {
  return (
    <span
      className="grid h-8 w-8 place-items-center rounded-xl"
      style={{ background: 'radial-gradient(circle at 35% 30%, #8F6CF6, #2E2450 70%)' }}
    >
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'linear-gradient(135deg,#FF3D8F,#4CC2FF)' }} />
    </span>
  )
}

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-line bg-porcelain">
      <div className="container-c section py-16">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Mark />
              <span className="font-display text-xl font-bold tracking-tight">VIGIA</span>
            </div>
            <p className="mt-4 max-w-xs leading-relaxed text-muted">
              Your road, understood. The AI copilot that sees the road, protects you, and pays
              you back for the intelligence your drive contributes.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:border-blue hover:text-blue"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow mb-5 text-muted-2">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted transition-colors hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-7 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} VIGIA Labs. All rights reserved.</p>
          <p>Your road, understood.</p>
        </div>
      </div>
    </footer>
  )
}
