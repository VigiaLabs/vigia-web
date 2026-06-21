const cards = [
  {
    title: 'Detect',
    desc: 'AI-powered edge sensors identify potholes, cracks, and hazards in real time — before they cause accidents.',
    cta: 'Learn about detection →',
    grad: 'radial-gradient(ellipse at 20% 60%, #326BFF 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, #06B6D4 0%, transparent 55%), radial-gradient(ellipse at 50% 80%, #0a0a30 0%, transparent 70%)',
    bg: '#050518',
    animName: 'meshA',
  },
  {
    title: 'Protect',
    desc: 'Instant BLE alerts warn drivers and fleet operators of road hazards up to 300m ahead.',
    cta: 'See how it works →',
    grad: 'radial-gradient(ellipse at 70% 40%, #9B51E0 0%, transparent 55%), radial-gradient(ellipse at 20% 70%, #326BFF 0%, transparent 55%), radial-gradient(ellipse at 50% 20%, #1a0a30 0%, transparent 70%)',
    bg: '#0d0520',
    animName: 'meshB',
  },
  {
    title: 'Earn',
    desc: 'Community members earn credits for hosting VIGIA nodes. Turn civic data into income.',
    cta: 'Join the network →',
    grad: 'radial-gradient(ellipse at 30% 30%, #06B6D4 0%, transparent 55%), radial-gradient(ellipse at 75% 65%, #9B51E0 0%, transparent 55%), radial-gradient(ellipse at 50% 80%, #001a2a 0%, transparent 70%)',
    bg: '#021018',
    animName: 'meshC',
  },
];

export default function SolutionCards() {
  return (
    <section style={{ background: '#F5F5F5', padding: '100px 7%' }}>
      <style>{`
        @keyframes meshA {
          0%,100% { background-position: 0% 0%, 100% 100%, 50% 50% }
          50%      { background-position: 20% 30%, 80% 60%, 40% 70% }
        }
        @keyframes meshB {
          0%,100% { background-position: 100% 0%, 0% 100%, 50% 20% }
          50%      { background-position: 60% 40%, 30% 70%, 60% 50% }
        }
        @keyframes meshC {
          0%,100% { background-position: 0% 100%, 100% 0%, 50% 50% }
          50%      { background-position: 30% 60%, 70% 30%, 55% 40% }
        }
      `}</style>
      <div style={{ maxWidth: 1290, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#000', textAlign: 'center', marginBottom: 64 }}>
          One platform. Three superpowers.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {cards.map(card => (
            <div key={card.title} style={{
              position: 'relative',
              borderRadius: 16,
              overflow: 'hidden',
              minHeight: 340,
              background: card.bg,
            }}>
              {/* Animated mesh gradient background */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: card.grad,
                backgroundSize: '200% 200%, 200% 200%, 100% 100%',
                animation: `${card.animName} 8s ease-in-out infinite`,
                filter: 'blur(18px)',
                opacity: 0.85,
              }} />
              {/* Grain overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.15\'/%3E%3C/svg%3E")',
                backgroundSize: '200px 200px',
                opacity: 0.4,
                mixBlendMode: 'overlay',
              }} />
              {/* Content */}
              <div style={{
                position: 'relative', zIndex: 1,
                padding: '40px 32px',
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
                minHeight: 340,
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                boxSizing: 'border-box',
              }}>
                <h3 style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 12 }}>{card.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.65, marginBottom: 20 }}>{card.desc}</p>
                <a href="#" style={{ fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none', opacity: 0.9 }}>{card.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
