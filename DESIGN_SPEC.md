# VIGIA — Web Landing Page Design Spec

> Marketing site for **VIGIA**: an ADAS DePIN platform. An AI driving copilot that
> sees the road, warns before impact, and turns every mile into rewards on a
> decentralized road-intelligence network.
>
> **Design language:** "Warm Horizon" — the app's own identity, expressed on the
> web. Structure and rhythm borrow from llamaindex.ai (light, bold, friendly-
> technical, generous whitespace, numbered product sections, stats, marquee,
> testimonials); the *skin* is pure VIGIA — warm porcelain by day, ember by
> night, and the signature glowing orb.

---

## 1. Positioning

| Axis | Decision |
|------|----------|
| Category | ADAS DePIN (Decentralized Physical Infrastructure) |
| Hero line | *"Your road, understood."* |
| Tone | Friendly-technical, premium, human — warm, never cold or hypey |
| References | llamaindex.ai (layout/structure) + the VIGIA app (identity/palette) |

## 2. Identity — pulled straight from the app ("Warm Horizon")

### Palette
| Token | Hex | Use |
|-------|-----|-----|
| `porcelain` | `#F6F3EC` | Primary light canvas (warm) |
| `cream` | `#FBF9F4` | Alt light bands (marquee, trust) |
| `surface` | `#FFFFFF` | Glass cards |
| `peach` | `#FAE6CF` | Warm accent chips |
| `ember` | `#141210` | Dark sections (night riding) |
| `ember-2/3` | `#1D1A17` / `#282420` | Elevated dark surfaces |
| `ink` | `#1B1A17` | Text on light |
| `muted` | `#565049` | Secondary on light |
| `blue` | `#3A5BD9` | Primary CTA (copilot blue) |
| `violet` | `#6A57C7` | Eyebrows / secondary accent |
| `orb-pink / violet / blue` | `#FF3D8F` `#8F6CF6` `#4CC2FF` | The orb rim + signature gradient |
| `gold / gold-soft` | `#D97706` / `#FBBF24` | `$VGA` token accent |
| `success` | `#1E8E4E` | Positive states |

All pulled from `feature/copilot/.../VigiaColors.kt` so day-one the web matches the app.

### The orb (signature motif)
The app's Siri-style sphere: a glossy dark core (`#2E2450 → #0A0716`) with neon rim
light flowing **pink → violet → blue**, wrapped in an aurora halo. Rendered in pure
CSS gradients (`Orb.jsx`): rim rotates (14s), orb floats (7s), reduced-motion safe.
Used as the hero centerpiece, in the copilot mockup, and in the final CTA.

### Aurora wash
`.aurora` utility — three soft radial blooms (pink / blue / violet) behind the hero,
echoing the app's atmosphere layers.

### Typography
- **Display:** `Bricolage Grotesque` (600–800) — bold, characterful, modern.
- **Body / UI:** `Inter` (400–600).
- **Mono:** `JetBrains Mono` — status labels, indices, technical chips.

### Components
- **Pills:** `pill-primary` (blue), `pill-ghost` (outline), `pill-ember` (light-on-dark).
- **Liquid-glass cards:** `glass-card` — white, soft shadow, `rounded-3xl`, no harsh
  hairline (app's iOS register).

## 3. Page structure (llamaindex rhythm, VIGIA skin)
1. **Nav** — orb mark + wordmark, links, `Sign in` + `Get started`.
2. **Hero** — orb centerpiece on aurora wash, "Your road, understood.", dual CTA, trust row.
3. **Marquee** — auto-scrolling tech stack.
4. **Capabilities** — 3 cards: sees / talks / pays.
5. **Stats** — ember band, gradient animated counters.
6. **01 Copilot** (ember) — copilot screen mockup + feature bullets.
7. **02 Perception** (light, reversed) — dashcam detection mockup + bullets.
8. **03 Network** (light) — `$VGA` earnings mockup + bullets.
9. **Use cases** — drivers / fleets / insurers / cities.
10. **Trust features** — edge-private / signed / offline-first / open rewards.
11. **Testimonials** — 3 quotes with gradient avatars.
12. **Hardware** — edge-node spec grid.
13. **CTA** (ember) — orb + "Put intelligence in every mile."
14. **Footer**.

## 4. Motion (framer-motion)
Scroll reveals (`opacity 0→1`, `y 24–28→0`, ease `[0.22,1,0.36,1]`, ~0.6s, staggered),
hero load sequence, marquee, orb float + rim spin, counters on viewport-enter, earnings
bars grow on scroll. transform/opacity only; everything degrades under reduced-motion.

## 5. Tech Stack
React 18 + Vite · Tailwind (Warm Horizon tokens) · framer-motion · lucide-react ·
Bricolage Grotesque / Inter / JetBrains Mono.

## 6. Accessibility
Contrast ≥ 4.5:1 on porcelain and ember · visible blue focus rings · `prefers-reduced-motion`
honored globally · semantic landmarks, single `h1` · `aria-label` on icon-only controls ·
decorative orb/SVG marked `aria-hidden` / `role="img"` · CTAs ≥ 44px.
