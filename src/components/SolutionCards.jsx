const cards = [
  {
    title: 'Detect',
    desc: 'AI-powered edge sensors identify potholes, cracks, and hazards in real time — before they cause accidents.',
    cta: 'Learn about detection →',
    img: '/shaders/detection.webp',
  },
  {
    title: 'Protect',
    desc: 'Instant BLE alerts warn drivers and fleet operators of road hazards up to 300m ahead.',
    cta: 'See how it works →',
    img: '/shaders/voice.webp',
  },
  {
    title: 'Earn',
    desc: 'Community members earn credits for hosting VIGIA nodes. Turn civic data into income.',
    cta: 'Join the network →',
    img: '/shaders/earn.webp',
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
              {/* Pre-rendered shader still — instant, no WebGL */}
              <img
                src={card.img}
                alt=""
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />

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
