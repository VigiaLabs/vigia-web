const cards = [
  { title: 'Detect', desc: 'AI-powered edge sensors identify potholes, cracks, and hazards in real time — before they cause accidents.', cta: 'Learn about detection →' },
  { title: 'Protect', desc: 'Instant BLE alerts warn drivers and fleet operators of road hazards up to 300m ahead.', cta: 'See how it works →' },
  { title: 'Earn', desc: 'Community members earn credits for hosting VIGIA nodes. Turn civic data into income.', cta: 'Join the network →' },
];
export default function SolutionCards() {
  return (
    <section style={{ background: '#F5F5F5', padding: '100px 7%' }}>
      <div style={{ maxWidth: 1290, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#000', textAlign: 'center', marginBottom: 64 }}>
          One platform. Three superpowers.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {cards.map(card => (
            <div key={card.title} style={{
              background: '#fff', borderRadius: 12,
              border: '1.5px solid #E7E7E7', padding: '40px 32px'
            }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: '#000', marginBottom: 16 }}>{card.title}</h3>
              <p style={{ fontSize: 16, color: '#6B6B6B', lineHeight: 1.6, marginBottom: 24 }}>{card.desc}</p>
              <a href="#" style={{ fontSize: 15, fontWeight: 600, color: '#326BFF', textDecoration: 'none' }}>{card.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
