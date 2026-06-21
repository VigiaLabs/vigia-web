export default function CTA() {
  return (
    <section style={{ background: '#EEF3FF', padding: '120px 7%', textAlign: 'center' }}>
      <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#000', marginBottom: 24, lineHeight: 1.1 }}>
        Join the roads revolution.
      </h2>
      <p style={{ fontSize: 18, color: '#6B6B6B', marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
        VIGIA is building the world's first community-powered road safety network. Be part of it.
      </p>
      <a href="#" style={{
        display: 'inline-block', background: '#000', color: '#fff',
        borderRadius: 4, padding: '14px 32px', fontSize: 16, fontWeight: 600,
        textDecoration: 'none'
      }}>Start free trial</a>
    </section>
  );
}
