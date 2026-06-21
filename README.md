# VIGIA Web

Marketing landing page for **VIGIA** — the ADAS DePIN edge-node platform.
*Drive. Detect. Earn.*

## Stack
- React 18 + Vite
- Tailwind CSS (custom dark theme)
- framer-motion (scroll + entrance animation)
- lucide-react (icons)

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
  App.jsx              # page composition
  index.css            # theme tokens, base styles, reduced-motion
  lib/motion.js        # shared framer-motion variants
  components/
    Nav.jsx            # glass sticky nav
    Hero.jsx           # headline + radar edge-node visual
    TrustBar.jsx       # tech stack strip
    HowItWorks.jsx     # Drive → Detect → Earn
    Features.jsx       # bento feature grid
    Metrics.jsx        # animated stat counters
    Earnings.jsx       # DePIN rewards + earnings card
    Hardware.jsx       # edge-node spec grid
    UseCases.jsx       # drivers / fleets / insurers / cities
    CTA.jsx            # final conversion band
    Footer.jsx
```

See [DESIGN_SPEC.md](./DESIGN_SPEC.md) for the full visual + motion system.
