# VIGIA Web

Marketing landing page for **VIGIA** — the AI driving copilot that pays you back.
*Your road, understood.*

Design language: **"Warm Horizon"** — the app's own identity on the web. Structure
borrows from llamaindex.ai (light, bold, friendly-technical); the skin is pure
VIGIA — warm porcelain / ember, liquid-glass cards, the signature glowing orb,
and the `$VGA` gold accent.

## Stack
- React 18 + Vite
- Tailwind CSS (Warm Horizon tokens)
- framer-motion (scroll + entrance animation)
- lucide-react (icons)
- Fonts: Bricolage Grotesque (display) · Inter (UI) · JetBrains Mono (labels)

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
  index.css                    # Warm Horizon tokens, .pill-*, .glass-card, .aurora
  lib/motion.js                # shared framer-motion variants
  components/
    Nav.jsx                    # warm nav, Sign in / Get started
    Hero.jsx                   # orb centerpiece + "Your road, understood."
    Orb.jsx                    # signature glowing orb (CSS gradients)
    Marquee.jsx                # auto-scroll tech stack
    Capabilities.jsx           # sees / talks / pays
    Stats.jsx                  # ember band, animated gradient counters
    ProductSection.jsx         # reusable numbered 01/02/03 section
    UseCases.jsx               # drivers / fleets / insurers / cities
    TrustFeatures.jsx          # privacy / signing / offline / open rewards
    Testimonials.jsx           # 3 quotes, gradient avatars
    Hardware.jsx               # edge-node spec grid
    CTA.jsx / Footer.jsx
    mockups/
      CopilotMockup.jsx        # ember copilot screen w/ orb
      HazardMockup.jsx         # dashcam detection boxes
      EarningsMockup.jsx       # $VGA rewards card
```

See [DESIGN_SPEC.md](./DESIGN_SPEC.md) for the full visual + motion system.
