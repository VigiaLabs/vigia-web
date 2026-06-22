const GRAPHIK = "'Graphik', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const SERIF = "'Source Serif 4', Georgia, 'Times New Roman', serif";

/* small registration square, like the Intercom editorial spotlight */
function Pin({ style }) {
  return <div style={{ position: 'absolute', width: 10, height: 10, background: '#fff', zIndex: 3, ...style }} />;
}

export default function FeatureSpotlight({
  heading,
  body,
  image,
  secondaryImage,
  flip = false,
  bg = '#F5F5F5',
  cardBgImage,
}) {
  return (
    <section style={{ padding: '44px 7%', background: '#fff', fontFamily: GRAPHIK }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto',
        border: '1px solid #E5E5E5', borderRadius: 24, background: bg,
        padding: 'clamp(40px, 5vw, 72px)',
        display: 'grid',
        gridTemplateColumns: flip ? '1.05fr 0.95fr' : '0.95fr 1.05fr',
        gap: 'clamp(40px, 5vw, 72px)',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}>

        {/* ── Text column ───────────────────────────── */}
        <div style={{ order: flip ? 2 : 1, display: 'flex', flexDirection: 'column' }}>
          <h2 style={{
            fontFamily: GRAPHIK,
            fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
            fontWeight: 700,
            color: '#111',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: '0 0 24px',
          }}>
            {heading}
          </h2>
          <p style={{
            fontFamily: SERIF,
            fontSize: 20,
            color: '#5C574F',
            lineHeight: 1.62,
            maxWidth: 460,
            margin: 0,
          }}>
            {body}
          </p>

          {/* secondary aesthetic image */}
          {secondaryImage && (
            <div style={{
              marginTop: 52,
              width: 300,
              maxWidth: '100%',
              aspectRatio: '1 / 1',
              overflow: 'hidden',
              borderRadius: 4,
              boxShadow: '0 2px 24px rgba(0,0,0,0.08)',
            }}>
              <img src={secondaryImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          )}
        </div>

        {/* ── Image column ──────────────────────────── */}
        <div style={{ order: flip ? 1 : 2, position: 'relative' }}>
          <div style={{
            position: 'relative',
            borderRadius: 6,
            overflow: 'hidden',
            background: '#E6E6E6',
            ...(cardBgImage && {
              backgroundImage: `url(${cardBgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }),
            boxShadow: '0 2px 44px rgba(0,0,0,0.12)',
            minHeight: 440,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 40,
            boxSizing: 'border-box',
          }}>
            {image || <div style={{ color: '#999', fontSize: 15 }}>[Mockup]</div>}
          </div>

          {/* white corner pins */}
          <Pin style={{ top: 10, left: 10 }} />
          <Pin style={{ top: 10, right: 10 }} />
          <Pin style={{ bottom: 10, left: 10 }} />
          <Pin style={{ bottom: 10, right: 10 }} />
        </div>
      </div>
    </section>
  );
}
