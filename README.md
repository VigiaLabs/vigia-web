# VIGIA Web

Marketing landing page for **VIGIA** — earn while you drive.

Dark, fast, **motion-driven** design (joinspread.app-style smooth scroll, sticky
sidekick sections, scroll-scale reveals, parallax), skinned in VIGIA's identity —
the orb, the pink→violet→blue gradient, ember warmth, and the `$VGA` gold accent.

## Stack
- React 18 + Vite
- **Lenis** — buttery smooth scroll
- framer-motion — scroll-linked animation (`useScroll` / `useTransform`)
- Tailwind CSS (Ember Night tokens)
- lucide-react · Space Grotesk / Inter / JetBrains Mono

## Develop
```bash
npm install
npm run dev
```

## Build
```bash
npm run build && npm run preview
```

## Structure
```
src/
  App.jsx                      # composition + useLenis()
  index.css                    # Ember Night tokens, .pill-*, .card, Lenis CSS
  lib/
    useLenis.js                # smooth scroll (reduced-motion safe)
    motion.js                  # shared framer variants
  components/
    ScrollProgress.jsx         # top gradient progress bar
    Nav.jsx
    Hero.jsx                   # headline + marquee + scroll-scale product reveal
    StickySteps.jsx            # ★ sticky sidekick: pinned visual crossfades on scroll
    Stats.jsx                  # scroll-triggered counters
    HardwareShowcase.jsx       # parallax node device + specs
    NodeDevice.jsx             # CSS dashcam/edge-node visual
    Orb.jsx                    # signature glowing orb
    Pricing.jsx                # Driver / Plus / Fleet
    CTA.jsx / Footer.jsx
    mockups/                   # HazardMockup · CopilotMockup · EarningsMockup
```

See [DESIGN_SPEC.md](./DESIGN_SPEC.md) for the full visual + motion system.
