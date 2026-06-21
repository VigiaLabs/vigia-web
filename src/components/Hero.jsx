import { Suspense, lazy, useState } from 'react';
const ShaderWave = lazy(() => import('./ShaderWave'));

function BlueSquare({ style }) {
  return <div style={{ width: 14, height: 14, background: '#326BFF', ...style }} />;
}

/* ── Tab carousel ──────────────────────────────────────── */

const tabs = [
  {
    label: 'Real-time Detection',
    heading: 'Spot hazards before you reach them.',
    body: "VIGIA's on-device YOLO model processes every frame in under 50 ms — detecting potholes, debris, and TTC-critical vehicles with no cloud round-trip.",
    shader: { color1: '#326BFF', color2: '#06B6D4', color3: '#03050f', rz: -40, ry: 10 },
  },
  {
    label: 'Voice Copilot',
    heading: 'Your co-pilot speaks before danger strikes.',
    body: 'A context-aware voice assistant broadcasts BLE hazard alerts to drivers 300 m ahead — conversational, offline-capable, and always on.',
    shader: { color1: '#9B51E0', color2: '#326BFF', color3: '#0d0520', rz: 20, ry: -10 },
  },
  {
    label: 'Road Intelligence',
    heading: 'Every kilometre improves the next.',
    body: 'Edge nodes fuse GPS, depth, and IMU data into a live road-quality map. Each trip enriches the shared intelligence layer for every VIGIA user.',
    shader: { color1: '#06B6D4', color2: '#0EA5E9', color3: '#021018', rz: 0, ry: 5 },
  },
  {
    label: 'Earn $VGA',
    heading: 'Turn your daily commute into income.',
    body: 'Host a VIGIA edge node and earn $VGA credits for every verified kilometre of road data you contribute to the network.',
    shader: { color1: '#10B981', color2: '#06B6D4', color3: '#011510', rz: 60, ry: -5 },
  },
];

function TabShader({ color1, color2, color3, rz, ry }) {
  return (
    <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#09090B' }} />}>
      <ShaderWave color1={color1} color2={color2} color3={color3} rotationZ={rz} rotationY={ry} />
    </Suspense>
  );
}

function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const t = tabs[active];

  return (
    <div>
      {/* Tab strip */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid #E7E7E7',
        overflowX: 'auto',
        scrollbarWidth: 'none',
      }}>
        {tabs.map((tab, i) => (
          <button key={tab.label} onClick={() => setActive(i)} style={{
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
          }}>{tab.label}</button>
        ))}
      </div>

      {/* Content panel */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr',
        minHeight: 480,
        background: '#fff',
        borderBottom: '1px solid #E7E7E7',
      }}>
        {/* Left: text */}
        <div style={{
          padding: '60px 56px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          borderRight: '1px solid #E7E7E7',
        }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#326BFF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
            {t.label}
          </p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#000', lineHeight: 1.15, marginBottom: 20 }}>
            {t.heading}
          </h2>
          <p style={{ fontSize: 16, color: '#6B6B6B', lineHeight: 1.7, marginBottom: 36 }}>
            {t.body}
          </p>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 14, fontWeight: 600, color: '#000', textDecoration: 'none',
          }}>Learn more →</a>
        </div>

        {/* Right: shader animation panel */}
        <div style={{ position: 'relative', overflow: 'hidden', background: '#09090B' }}>
          <TabShader key={active} {...t.shader} />
          {/* Subtle bottom fade to white */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))',
            pointerEvents: 'none',
          }} />
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

      {/* ShaderGradient strip */}
      <div style={{ position: 'relative', height: 360, width: '100%', overflow: 'hidden', marginTop: -64 }}>
        <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#09090B' }} />}>
          <ShaderWave />
        </Suspense>
      </div>

      {/* Feature carousel — full width, no max-width container */}
      <FeatureCarousel />
    </section>
  );
}
