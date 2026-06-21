# VIGIA — Web Landing Page Design Spec

> Marketing site for **VIGIA**: earn-while-you-drive ADAS DePIN network. An AI
> copilot + edge node that reads the road, warns before impact, and pays drivers
> in `$VGA` for the road intelligence every drive contributes.
>
> **Design language:** dark, fast, motion-driven — modeled on joinspread.app
> (buttery smooth scroll, sticky "sidekick" sections, scroll-scale image reveals,
> parallax, marquee, 3-tier pricing). Skinned in VIGIA's identity: the orb, the
> pink→violet→blue gradient, ember warmth, and the `$VGA` gold accent.

---

## 1. Positioning
| Axis | Decision |
|------|----------|
| Category | Earn-while-driving ADAS DePIN network + hardware |
| Hero line | *"Earn while you drive."* |
| Tone | Energetic, premium, high-tech — fintech-grade momentum |
| References | joinspread.app (motion/structure) + the VIGIA app (identity) |

## 2. Identity — dark "Ember Night"
| Token | Hex | Use |
|-------|-----|-----|
| `bg` | `#0C0A09` | Page canvas (warm near-black) |
| `bg-2` | `#15110E` | Alt bands (stats) |
| `surface` / `surface-2` | `#1A1512` / `#221C18` | Cards / nested |
| `ink` / `muted` / `muted-2` | `#F4EFE9` / `#A39B90` / `#6F665C` | Text ramp |
| `cyan` | `#4CC2FF` | Electric accent (orb-blue) — eyebrows, links, ticks |
| `pink / violet / blue` | `#FF3D8F` `#8F6CF6` `#4CC2FF` | Orb + signature gradient (CTAs, headlines) |
| `gold` | `#FBBF24` | `$VGA` token accent |

Type: **Space Grotesk** (display, geometric/techy) · **Inter** (body) · **JetBrains Mono** (labels).
Signature visuals: the **orb** (`Orb.jsx`), the **node device** (`NodeDevice.jsx`), and three
product mockups (hazard detection, copilot, $VGA earnings).

## 3. Motion system (the point of this build)
- **Smooth scroll:** Lenis (`useLenis.js`) — `duration 1.15`, exp ease, smooth wheel +
  anchor glide. Disabled entirely under `prefers-reduced-motion`.
- **Scroll progress bar:** gradient bar at top, spring-smoothed (`ScrollProgress.jsx`).
- **Hero scroll-scale reveal:** product panel scales `0.86→1`, lifts, and fades in as it
  enters viewport (`useScroll`/`useTransform`).
- **Sticky sidekick (`StickySteps.jsx`):** the signature effect — a pinned visual
  crossfades between Detect → Guide → Earn mockups while three text blocks scroll past.
  Desktop sticky; mobile falls back to stacked visual-above-text.
- **Hardware parallax:** node device drifts up, spec chips counter-drift, slight rotate,
  all scroll-linked (`HardwareShowcase.jsx`).
- **Marquee:** infinite tech/value ticker.
- **Counters:** stats count up on viewport entry.
- **Reveals:** staggered opacity/`y` fade-ups throughout; earnings bars grow on scroll.
- transform/opacity only; everything degrades gracefully under reduced-motion.

## 4. Page structure (joinspread rhythm)
1. Scroll-progress bar · 2. Nav (dark, gradient CTA) · 3. Hero (headline + marquee +
scroll-scale product reveal) · 4. Sticky steps (Detect/Guide/Earn) · 5. Stats band ·
6. Hardware showcase (parallax device + specs) · 7. Pricing (Driver / Plus / Fleet) ·
8. CTA (orb) · 9. Footer.

## 5. Stack
React 18 + Vite · Tailwind (Ember Night tokens) · framer-motion (scroll-linked) ·
**lenis** (smooth scroll) · lucide-react · Space Grotesk / Inter / JetBrains Mono.

## 6. Accessibility
Lenis + all motion gated on `prefers-reduced-motion` · contrast ≥ 4.5:1 on ember ·
visible cyan focus rings · semantic landmarks + single `h1` · `aria-label` on icon
buttons · decorative visuals `aria-hidden`, SVG scenes `role="img"` · CTAs ≥ 44px.
