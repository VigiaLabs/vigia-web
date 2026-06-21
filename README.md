# VIGIA Web

Marketing landing page for **VIGIA** — the ADAS DePIN edge-node platform.
*Roads that think.*

Editorial, high-end SaaS design — serif display, alternating dark/warm-paper
sections, one disciplined accent, and real product UI shown in context.

## Stack
- React 18 + Vite
- Tailwind CSS (custom dark/paper theme)
- framer-motion (scroll + entrance animation)
- lucide-react (icons)
- Fonts: Fraunces (display serif) + Inter (UI)

## Develop
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Structure
```
src/
  App.jsx                      # page composition
  index.css                    # theme tokens, .h-display / .pill / .eyebrow
  lib/motion.js                # shared framer-motion variants
  components/
    Nav.jsx                    # transparent → ink-glass nav
    Hero.jsx                   # "Roads that think." + orbital globe
    Globe.jsx                  # SVG wireframe orbital sphere
    ShowcaseSection.jsx        # reusable alternating text + visual section
    Metrics.jsx                # animated serif counters
    Hardware.jsx               # edge-node spec grid
    CTA.jsx / Footer.jsx
    mockups/
      CopilotMockup.jsx        # voice-copilot conversation panel
      HazardMockup.jsx         # dashcam detection-box view
      EarningsMockup.jsx       # rewards / earnings card
```

See [DESIGN_SPEC.md](./DESIGN_SPEC.md) for the full visual + motion system.
