const cards = [
  {
    title: 'Detect',
    desc: 'AI-powered edge sensors identify potholes, cracks, and hazards in real time — before they cause accidents.',
    cta: 'Learn about detection →',
    bg: 'radial-gradient(ellipse 80% 70% at 20% 60%, rgba(50,107,255,0.9) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 80% 25%, rgba(6,182,212,0.75) 0%, transparent 60%), radial-gradient(ellipse 100% 100% at 50% 80%, #030b1a 0%, #050518 100%)',
  },
  {
    title: 'Protect',
    desc: 'Instant BLE alerts warn drivers and fleet operators of road hazards up to 300m ahead.',
    cta: 'See how it works →',
    bg: 'radial-gradient(ellipse 80% 70% at 70% 35%, rgba(155,81,224,0.9) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 20% 70%, rgba(50,107,255,0.75) 0%, transparent 60%), radial-gradient(ellipse 100% 100% at 50% 80%, #0d0520 0%, #0a0318 100%)',
  },
  {
    title: 'Earn',
    desc: 'Community members earn credits for hosting VIGIA nodes. Turn civic data into income.',
    cta: 'Join the network →',
    bg: 'radial-gradient(ellipse 80% 70% at 30% 30%, rgba(16,185,129,0.85) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 75% 65%, rgba(6,182,212,0.8) 0%, transparent 60%), radial-gradient(ellipse 100% 100% at 50% 90%, #011510 0%, #021018 100%)',
  },
];

const grain = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E")`;

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
              background: card.bg,
            }}>
              {/* Grain texture */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: grain,
                backgroundSize: '200px 200px',
                opacity: 0.35,
                mixBlendMode: 'overlay',
                pointerEvents: 'none',
              }} />
              {/* Content */}
              <div style={{
                position: 'relative', zIndex: 1,
                padding: '40px 32px',
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)',
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
