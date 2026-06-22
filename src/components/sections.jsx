import { useState } from 'react';

const GRAPHIK = "'Graphik', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

/* ── Section shell with optional centred heading (eyebrow + two-tone) ── */
export function Section({ children, bg = '#fff', pad = '100px 7%', border, style }) {
  return (
    <section style={{ background: bg, padding: pad, fontFamily: GRAPHIK, borderTop: border ? '1px solid #E7E7E7' : 'none', ...style }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, subtitle, align = 'center', max = 640 }) {
  return (
    <div style={{ textAlign: align, marginBottom: 56, maxWidth: align === 'center' ? max : 'none', marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>
      {eyebrow && (
        <p style={{ fontFamily: MONO, fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#326BFF', margin: '0 0 16px' }}>{eyebrow}</p>
      )}
      <h2 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)', fontWeight: 700, color: '#111', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 18, color: '#555', lineHeight: 1.55, margin: '16px 0 0' }}>{subtitle}</p>}
    </div>
  );
}

/* ── Boxed segmented tabs (generalized PlatformSection.jsx pattern) ──── */
export function BoxedTabs({ heading, tabs }) {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  const Sketch = t.Sketch;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 36 }}>
        {heading && <h2 style={{ fontFamily: GRAPHIK, fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', fontWeight: 700, color: '#111', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0, maxWidth: 560 }}>{heading}</h2>}
        <div style={{ display: 'inline-flex', border: '1px solid #E2E2E2', borderRadius: 10, overflow: 'hidden', background: '#fff' }}>
          {tabs.map((tb, i) => (
            <button key={tb.tab} onClick={() => setActive(i)} style={{
              padding: '12px 22px', fontSize: 15, fontFamily: GRAPHIK, cursor: 'pointer',
              fontWeight: i === active ? 600 : 400, color: i === active ? '#111' : '#6B6B6B',
              background: i === active ? '#F2F2F2' : '#fff', border: 'none',
              borderRight: i < tabs.length - 1 ? '1px solid #E2E2E2' : 'none',
              transition: 'background 0.15s, color 0.15s', outline: 'none',
            }}>{tb.tab}</button>
          ))}
        </div>
      </div>

      <div style={{ border: '1px solid #E7E7E7', borderRadius: 18, background: '#F5F5F5', overflow: 'hidden', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr' }}>
        <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontSize: 22, fontWeight: 600, color: '#111', margin: '0 0 28px' }}>{t.category}</p>
          <p style={{ fontSize: 15, fontWeight: 600, color: '#326BFF', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 10px' }}>{t.title}</p>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.65, margin: '0 0 28px', maxWidth: 380 }}>{t.desc}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {t.points.map(p => (
              <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: '#111' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#326BFF', flexShrink: 0 }} />{p}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ borderLeft: '1px solid #E7E7E7', background: '#fafafa', display: 'grid', placeItems: 'center', padding: 40, minHeight: 380 }}>
          {Sketch ? <Sketch className="device-sketch" /> : (t.image && <img src={t.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} />)}
        </div>
      </div>
    </div>
  );
}

/* ── Card grid (icon/eyebrow + title + body, bordered boxes) ─────────── */
export function CardGrid({ cards, cols = 3 }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 20 }}>
      {cards.map((c, i) => (
        <div key={i} style={{ border: '1px solid #E7E7E7', borderRadius: 14, background: '#fff', padding: 28, display: 'flex', flexDirection: 'column' }}>
          {c.icon && <div style={{ marginBottom: 16 }}>{c.icon}</div>}
          {c.eyebrow && <p style={{ fontFamily: MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#326BFF', margin: '0 0 12px' }}>{c.eyebrow}</p>}
          <h3 style={{ fontSize: 19, fontWeight: 700, color: '#111', letterSpacing: '-0.01em', margin: '0 0 10px' }}>{c.title}</h3>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.6, margin: 0 }}>{c.body}</p>
          {c.foot && <div style={{ marginTop: 'auto', paddingTop: 18 }}>{c.foot}</div>}
        </div>
      ))}
    </div>
  );
}

/* ── Customer logo grid (reuses LogoSection skeleton-bar aesthetic) ──── */
export function LogoGrid({ names }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '1px solid #E7E7E7', borderRadius: 12, overflow: 'hidden' }}>
      {names.map((n, i) => (
        <div key={n} style={{
          display: 'grid', placeItems: 'center', minHeight: 120, padding: 24,
          borderRight: (i + 1) % 4 !== 0 ? '1px solid #E7E7E7' : 'none',
          borderTop: i >= 4 ? '1px solid #E7E7E7' : 'none',
          fontSize: 19, fontWeight: 700, color: '#A0A0A0', letterSpacing: '-0.01em',
        }}>{n}</div>
      ))}
    </div>
  );
}

/* primary / outline anchor-style buttons via react-router Link or href */
export { GRAPHIK, MONO };
