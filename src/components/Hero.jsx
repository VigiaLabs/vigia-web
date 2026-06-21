import { Suspense, lazy } from 'react';
const ShaderWave = lazy(() => import('./ShaderWave'));

/* Corner accent squares — Intercom's signature decorative detail */
function BlueSquare({ style }) {
  return <div style={{ width: 14, height: 14, background: '#326BFF', ...style }} />;
}

export default function Hero() {
  return (
    <section style={{ background: '#fff', overflow: 'hidden' }}>

      {/* ── Two-column headline section ── */}
      <div style={{ padding: '60px 40px 0', maxWidth: 1290, margin: '0 auto', position: 'relative' }}>

        {/* Corner squares */}
        <BlueSquare style={{ position: 'absolute', top: 60, left: 40 }} />
        <BlueSquare style={{ position: 'absolute', top: 60, right: 40 }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'flex-end',
          paddingTop: 40,
          paddingBottom: 64,
        }}>
          {/* Left: giant headline */}
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 800,
            color: '#000',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            margin: 0,
          }}>
            The only road safety network that pays you back.
          </h1>

          {/* Right: body + CTAs */}
          <div style={{ paddingBottom: 8 }}>
            <p style={{
              fontSize: 18,
              color: '#000',
              lineHeight: 1.65,
              marginBottom: 36,
              maxWidth: 480,
            }}>
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

      {/* ── ShaderGradient strip ── */}
      <div style={{
        position: 'relative',
        height: 360,
        width: '100%',
        overflow: 'hidden',
        marginTop: -64,
      }}>
        <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#09090B' }} />}>
          <ShaderWave />
        </Suspense>
      </div>

      {/* ── Feature tabs ── */}
      <div style={{ borderBottom: '1px solid #E7E7E7', padding: '0 40px', maxWidth: 1290, margin: '0 auto' }}>
        <FeatureTabBar />
      </div>
    </section>
  );
}

const tabs = [
  'Real-time Detection',
  'Voice Copilot',
  'Road Intelligence',
  'Earn $VGA',
];

function FeatureTabBar() {
  return (
    <div style={{ display: 'flex', gap: 0 }}>
      {tabs.map((tab, i) => (
        <div key={tab} style={{
          padding: '20px 32px',
          fontSize: 15,
          fontWeight: i === 0 ? 600 : 400,
          color: i === 0 ? '#000' : '#6B6B6B',
          borderBottom: i === 0 ? '3px solid #326BFF' : '3px solid transparent',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'color 0.15s',
        }}>{tab}</div>
      ))}
    </div>
  );
}
