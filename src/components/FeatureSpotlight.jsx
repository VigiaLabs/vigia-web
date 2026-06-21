export default function FeatureSpotlight({ eyebrow, heading, body, image, flip = false, bg = '#fff' }) {
  return (
    <section style={{ background: bg, padding: '100px 7%' }}>
      <div style={{
        maxWidth: 1290, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
        alignItems: 'center',
        direction: flip ? 'rtl' : 'ltr'
      }}>
        <div style={{ direction: 'ltr' }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#326BFF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>{eyebrow}</p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#000', lineHeight: 1.2, marginBottom: 20 }}>{heading}</h2>
          <p style={{ fontSize: 17, color: '#6B6B6B', lineHeight: 1.7 }}>{body}</p>
        </div>
        <div style={{ direction: 'ltr' }}>
          <div style={{
            borderRadius: 25, overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
            background: '#F5F5F5', minHeight: 360,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            {image || <div style={{ color: '#A0A0A0', fontSize: 16 }}>[Mockup]</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
