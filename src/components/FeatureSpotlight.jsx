function CornerSquare({ style }) {
  return <div style={{ width: 10, height: 10, background: '#C8C2BA', ...style }} />;
}

export default function FeatureSpotlight({ heading, body, image, flip = false, bg = '#fff', bgImage }) {
  const sectionStyle = {
    padding: '80px 7%',
    background: bg,
    ...(bgImage && {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }),
  };

  return (
    <section style={sectionStyle}>
      <div style={{
        maxWidth: 1290, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: flip ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
        gap: 80,
        alignItems: 'center',
      }}>
        <div style={{ order: flip ? 2 : 1 }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 700,
            color: '#111',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: 24,
          }}>
            {heading}
          </h2>
          <p style={{
            fontSize: 17,
            color: '#555',
            lineHeight: 1.75,
            maxWidth: 440,
          }}>
            {body}
          </p>
        </div>

        <div style={{ order: flip ? 1 : 2, position: 'relative' }}>
          <CornerSquare style={{ position: 'absolute', top: -1, left: -1, zIndex: 2 }} />
          <CornerSquare style={{ position: 'absolute', top: -1, right: -1, zIndex: 2 }} />
          <CornerSquare style={{ position: 'absolute', bottom: -1, left: -1, zIndex: 2 }} />
          <CornerSquare style={{ position: 'absolute', bottom: -1, right: -1, zIndex: 2 }} />
          <div style={{
            borderRadius: 14,
            overflow: 'hidden',
            background: '#D6CFC5',
            boxShadow: '0 2px 32px rgba(0,0,0,0.10)',
            minHeight: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {image || <div style={{ color: '#999', fontSize: 15, padding: 48 }}>[Mockup]</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
