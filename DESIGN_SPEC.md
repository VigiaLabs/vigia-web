# VIGIA — Web Landing Page Design Spec

> Marketing site for **VIGIA**: an ADAS DePIN edge-node platform. An AI dashcam +
> driver copilot that turns every drive into mapped road intelligence — and pays
> drivers in rewards for the data their node contributes.
>
> **Design language:** editorial, high-end SaaS — modeled on the restraint and
> rhythm of arianetworks.com. Serif display, alternating dark/light sections,
> one disciplined accent, real product UI shown in context.

---

## 1. Positioning

| Axis | Decision |
|------|----------|
| Category | ADAS DePIN (Decentralized Physical Infrastructure) |
| Hero line | *"Roads that think."* |
| Tone | Engineered, confident, editorial — automotive-grade, not crypto-hype |
| Reference | arianetworks.com — deep black canvas, serif headlines, product mockups, single warm accent |

## 2. Visual Language

### Palette — alternating dark / warm-paper
| Token | Hex | Use |
|-------|-----|-----|
| `ink` | `#0A0A0B` | Dark sections / canvas |
| `ink-2` | `#141416` | Elevated surfaces on dark |
| `ink-3` | `#1C1C1F` | Tracks / nested fills |
| `paper` | `#F2F1ED` | Light sections (warm off-white) |
| `paper-2` | `#E7E5DE` | Light nested surfaces |
| `accent` | `#EA4E32` | THE accent — used sparingly (one ring, key labels, active threat, CTAs) |
| `accent-soft` | `#F6A593` | Accent on dark backgrounds |
| `on-ink` | `#F7F6F3` | Text on dark |
| `muted-ink` | `#9C9C97` | Secondary on dark |
| `on-paper` | `#0A0A0B` | Text on light |
| `muted-paper`| `#6B6B64` | Secondary on light |

No gradients on text or surfaces (one faint radial vignette behind the globe only).
The accent is rationed — if everything is red, nothing is.

### Typography
- **Display:** `Fraunces` (high-contrast serif, optical sizing) — huge headlines,
  italic used for the emphasized word (`think.`, `every mile.`).
- **Body / UI:** `Inter` — clean neo-grotesque.
- **Mono:** system mono — for technical/status labels (`ROUTE LOADED`, `TTC 2.3s`).
- Headline scale via `clamp()`; tight tracking (`-0.04em`), line-height ~0.98.

### Components
- **Pills** for all CTAs: white-on-dark, black-on-light, accent for primary.
- **Product mockups** rendered as dark rounded panels (`rounded-2xl`, hairline
  border, deep shadow) floating in light sections — the way Aria shows its UI.

## 3. Hero motif — orbital globe
Pure-SVG wireframe sphere: meridian + latitude ellipses, dots riding the rings,
one accent meridian + a few accent nodes, a faint radial vignette, and a single
travelling node on an outer orbit. The globe drifts slowly (90s); the outer
orbit counter-rotates (24s). Both pause under `prefers-reduced-motion`.

## 4. Motion (framer-motion)
- Scroll reveals: `opacity 0→1`, `y 24–28→0`, ease `[0.22,1,0.36,1]`, ~0.6s.
- Hero headline: two-line staggered rise on load.
- Metric counters animate on first viewport entry (cubic ease-out).
- Earnings bars grow on scroll-in.
- transform/opacity only; everything degrades to opacity-only under reduced-motion.

## 5. Page structure
1. **Nav** — wordmark + mark, links, white `Contact` pill; transparent over hero,
   ink glass on scroll.
2. **Hero (dark)** — orbital globe, `Roads that think.`, subtitle, dual pill CTA.
3. **Copilot (light)** — text + voice-copilot conversation mockup.
4. **Perception (dark, reversed)** — text + dashcam detection-box mockup.
5. **Network (light)** — text + rewards/earnings mockup.
6. **Metrics (dark)** — serif animated counters.
7. **Hardware (light)** — edge-node spec grid (hairline-divided cells).
8. **CTA (dark)** — big serif close.
9. **Footer (dark)**.

## 6. Tech Stack
React 18 + Vite · Tailwind (tokens above) · framer-motion · lucide-react.

## 7. Accessibility
- Contrast ≥ 4.5:1 verified on both ink and paper.
- Visible accent focus rings on every interactive element.
- `prefers-reduced-motion` honored globally.
- Semantic landmarks, single `h1`, `aria-label` on icon-only controls, SVG `role="img"`.
- All CTAs ≥ 44px tap height.
