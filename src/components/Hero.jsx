import { Suspense, lazy, useState } from 'react';
const ShaderWave = lazy(() => import('./ShaderWave'));
const StaticShader = lazy(() => import('./StaticShader'));

function BlueSquare({ style }) {
  return <div style={{ width: 14, height: 14, background: '#326BFF', ...style }} />;
}

/* ── Feature tab carousel ─────────────────────────────── */

const tabs = [
  {
    label: 'Real-time Detection',
    shader: { color1: '#326BFF', color2: '#06B6D4', color3: '#03050f', rotationZ: -40, rotationY: 10 },
  },
  {
    label: 'Voice Copilot',
    shader: { color1: '#9B51E0', color2: '#326BFF', color3: '#0d0520', rotationZ: 20, rotationY: -10 },
  },
  {
    label: 'Road Intelligence',
    shader: { color1: '#06B6D4', color2: '#0EA5E9', color3: '#021018', rotationZ: 0, rotationY: 5 },
  },
  {
    label: 'Earn $VGA',
    shader: { color1: '#10B981', color2: '#06B6D4', color3: '#011510', rotationZ: 60, rotationY: -5 },
  },
];

function FeatureCarousel() {
  const [active, setActive] = useState(0);

  return (
    <div style={{ borderTop: '1px solid #E7E7E7' }}>
      {/* Tab strip */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid #E7E7E7',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        background: '#fff',
      }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            style={{
              padding: '18px 32px',
              fontSize: 15,
              fontWeight: i === active ? 600 : 400,
              color: i === active ? '#000' : '#6B6B6B',
              borderBottom: i === active ? '3px solid #326BFF' : '3px solid transparent',
              background: 'none',
              border: 'none',
              borderBottom: i === active ? '3px solid #326BFF' : '3px solid transparent',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'color 0.15s',
              outline: 'none',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Full-width static shader panel */}
      <div style={{ position: 'relative', height: 480, overflow: 'hidden', background: '#09090B' }}>
        <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#09090B' }} />}>
          <StaticShader
            key={active}
            {...tabs[active].shader}
            positionY={1.4}
            cameraZoom={9.5}
          />
        </Suspense>
        {/* Tab label overlay bottom-left */}
        <div style={{
          position: 'absolute', bottom: 40, left: 56, zIndex: 2,
          pointerEvents: 'none',
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
            {tabs[active].label}
          </p>
          <div style={{ width: 32, height: 2, background: 'rgba(255,255,255,0.3)', borderRadius: 1 }} />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section style={{ background: '#fff', overflow: 'hidden' }}>

      {/* Two-column headline */}
      <div style={{ padding: '60px 40px 0', maxWidth: 1290, margin: '0 auto', position: 'relative' }}>
        <BlueSquare style={{ position: 'absolute', top: 60, left: 40 }} />
        <BlueSquare style={{ position: 'absolute', top: 60, right: 40 }} />

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'flex-end',
          paddingTop: 40, paddingBottom: 64,
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 800,
            color: '#000', lineHeight: 1.05, letterSpacing: '-0.03em', margin: 0,
          }}>
            The only road safety network that pays you back.
          </h1>
          <div style={{ paddingBottom: 8 }}>
            <p style={{ fontSize: 18, color: '#000', lineHeight: 1.65, marginBottom: 36, maxWidth: 480 }}>
              VIGIA is the only edge-AI platform with a natively integrated road intelligence
              network — meaning every kilometre you drive improves the next driver's safety,
              enabling outcomes that were never possible before.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#cta" style={{
                background: '#000', color: '#fff', borderRadius: 4,
                padding: '13px 28px', fontSize: 15, fontWeight: 600,
                textDecoration: 'none', display: 'inline-block',
              }}>Start free trial</a>
              <a href="#how" style={{
                background: '#fff', color: '#000', borderRadius: 4,
                padding: '12px 26px', fontSize: 15, fontWeight: 600,
                textDecoration: 'none', border: '1.5px solid #000', display: 'inline-block',
              }}>View demo</a>
            </div>
          </div>
        </div>
      </div>

      {/* ShaderGradient wave strip */}
      <div style={{ position: 'relative', height: 360, width: '100%', overflow: 'hidden', marginTop: -64 }}>
        <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#09090B' }} />}>
          <ShaderWave />
        </Suspense>
      </div>

      {/* Feature carousel — full width */}
      <FeatureCarousel />
    </section>
  );
}
