import { Suspense, lazy } from 'react';
const StaticShader = lazy(() => import('./StaticShader'));

const cards = [
  {
    title: 'Detect',
    desc: 'AI-powered edge sensors identify potholes, cracks, and hazards in real time — before they cause accidents.',
    cta: 'Learn about detection →',
    shader: { color1: '#326BFF', color2: '#06B6D4', color3: '#03050f', rotationZ: -40, rotationY: 10 },
  },
  {
    title: 'Protect',
    desc: 'Instant BLE alerts warn drivers and fleet operators of road hazards up to 300m ahead.',
    cta: 'See how it works →',
    shader: { color1: '#9B51E0', color2: '#326BFF', color3: '#0d0520', rotationZ: 20, rotationY: -10 },
  },
  {
    title: 'Earn',
    desc: 'Community members earn credits for hosting VIGIA nodes. Turn civic data into income.',
    cta: 'Join the network →',
    shader: { color1: '#10B981', color2: '#06B6D4', color3: '#011510', rotationZ: 60, rotationY: -5 },
  },
];

export default function SolutionCards() {
  return (
    <section style={{ background: '#F5F5F5', padding: '100px 7%' }}>
      <div style={{ maxWidth: 1290, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800,
          color: '#000', textAlign: 'center', marginBottom: 64,
        }}>
          One platform. Three superpowers.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {cards.map(card => (
            <div key={card.title} style={{
              position: 'relative', borderRadius: 16,
              overflow: 'hidden', minHeight: 340,
              background: '#09090B',
            }}>
              {/* Static shader gradient background */}
              <Suspense fallback={<div style={{ position: 'absolute', inset: 0, background: '#09090B' }} />}>
                <StaticShader {...card.shader} positionY={1.2} cameraZoom={8} />
              </Suspense>

              {/* Content overlay */}
              <div style={{
                position: 'relative', zIndex: 1,
                padding: '40px 32px',
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 100%)',
                minHeight: 340,
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                boxSizing: 'border-box',
              }}>
                <h3 style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 12 }}>{card.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, marginBottom: 20 }}>{card.desc}</p>
                <a href="#" style={{ fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none', opacity: 0.9 }}>{card.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
