# VIGIA — Web Landing Page Design Spec

> Marketing site for **VIGIA**: an ADAS DePIN edge-node platform. An AI dashcam +
> driver copilot that turns every drive into mapped road intelligence — and pays
> drivers in rewards for the data their node contributes to the network.

---

## 1. Brand Positioning

| Axis | Decision |
|------|----------|
| Category | ADAS DePIN (Decentralized Physical Infrastructure) |
| One-liner | *"Your car becomes a node. Your drive becomes the map. Your data earns."* |
| Tone | Premium, technical, confident — automotive-grade, not crypto-hype |
| Reference feel | arianetworks.com — deep dark canvas, restrained motion, engineered precision |

## 2. Visual Language

### Palette (dark-first)
| Token | Hex | Use |
|-------|-----|-----|
| `--bg` | `#060809` | Page canvas (near-black) |
| `--surface` | `#0D1117` | Cards, elevated panels |
| `--surface-2` | `#141A21` | Nested / hover surfaces |
| `--primary` | `#22D3EE` | Primary accent (sensor cyan) |
| `--earn` | `#34E5B0` | Rewards / earnings highlight (mint) |
| `--alert` | `#F5A623` | Hazard / ADAS alert accent (amber) |
| `--text` | `#E6EDF3` | Primary text |
| `--muted` | `#8B98A5` | Secondary text |
| `--border` | `#1C2530` | Hairline borders |

Gradient signature: `linear-gradient(135deg, #22D3EE, #34E5B0)` for CTAs and key glyphs.
Glow: radial cyan bloom behind hero + section dividers, low opacity (≤0.18).

### Typography
- **Display / headings:** `Orbitron` (400–700) — geometric, web3/engineered.
- **Body / UI:** `Exo 2` (300–600) — humanist-tech, highly readable.
- Scale: `12 · 14 · 16 · 18 · 24 · 32 · 48 · 72`. Body base 16px, line-height 1.6.

### Effects
- Glassmorphic sticky nav: `backdrop-blur(16px)` over `rgba(6,8,9,0.6)`.
- Hairline borders `1px var(--border)`; cards lift on hover (`translateY(-4px)` + cyan ring glow).
- Animated dot-grid + scanning radar line as the hero backdrop motif.

## 3. Motion (framer-motion)
- Scroll reveals: `opacity 0→1`, `y 24→0`, `ease-out`, 0.5s, staggered 60ms.
- Hero headline: word-by-word stagger on load.
- Counters: animate stats on first viewport entry.
- Respect `prefers-reduced-motion` — disable transforms, keep opacity only.
- Durations 150–400ms; transform/opacity only (no layout animation).

## 4. Page Structure
1. **Nav** — logo, links (Platform · Earn · Hardware · Docs), `Launch App` CTA.
2. **Hero** — headline, subcopy, dual CTA, live "network" stat ticker, edge-node visual.
3. **Trust bar** — partner / chipset logos (OpenVINO, ONNX Runtime, Raspberry Pi, AWS IoT).
4. **How it works** — 3 steps: *Drive → Detect → Earn*.
5. **Features bento** — 6 cards: edge AI, collision warning, DePIN rewards, privacy, voice copilot, fleet API.
6. **Metrics band** — animated stats (nodes, km mapped, hazards flagged, paid out).
7. **DePIN / Earnings** — how rewards accrue, tokenomics teaser, earnings calculator hint.
8. **Hardware** — the edge node spec (Pi + sensor stack, signed telemetry).
9. **Use cases** — fleets, insurers, municipalities, individual drivers.
10. **CTA** — final conversion band.
11. **Footer** — sitemap, socials, legal.

## 5. Tech Stack
- React 18 + Vite
- Tailwind CSS (custom theme tokens above)
- framer-motion (scroll + entrance animation)
- lucide-react (icon system — single family, 1.5px stroke)

## 6. Accessibility Guardrails
- Text contrast ≥ 4.5:1 on all surfaces (verified against `--bg`/`--surface`).
- Visible focus rings (cyan, 3px) on every interactive element.
- `prefers-reduced-motion` honored globally.
- Semantic landmarks (`header`/`main`/`section`/`footer`), one `h1`.
- All CTAs ≥ 44px tap height; icon-only controls carry `aria-label`.
