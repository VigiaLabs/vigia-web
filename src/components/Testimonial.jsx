export default function Testimonial() {
  return (
    <section style={{ background: '#fff', padding: '44px 7%' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        border: '1px solid #E5E5E5', borderRadius: 24, background: '#F5F5F5',
        padding: 'clamp(48px, 6vw, 88px)', boxSizing: 'border-box',
      }}>
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <blockquote style={{
          fontFamily: "'Graphik', sans-serif",
          fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
          fontWeight: 400,
          lineHeight: 1.35,
          color: '#000',
          margin: '0 0 48px',
          position: 'relative',
          quotes: '"“" "”"',
        }}>
          <span style={{
            position: 'absolute', top: -16, left: -8,
            fontSize: '5rem', lineHeight: 1, color: '#E7E7E7',
            fontFamily: 'Georgia, serif', pointerEvents: 'none', userSelect: 'none',
          }}>"</span>
          We piloted VIGIA across our 200-truck fleet for three months. Rear-end incidents dropped 34%. The drivers love the voice alerts — they don't even look at their phones anymore.
        </blockquote>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: 'linear-gradient(135deg, #326BFF 0%, #9B51E0 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 700, fontSize: 18,
          }}>A</div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#000', margin: 0 }}>Arjun Mehta</p>
            <p style={{ fontSize: 13, color: '#A0A0A0', margin: 0 }}>Head of Fleet Operations, Bharat Logistics</p>
          </div>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'center', gap: 64,
          marginTop: 72, paddingTop: 48, borderTop: '1px solid #E7E7E7',
        }}>
          {[
            { stat: '34%', label: 'fewer rear-end incidents' },
            { stat: '300 m', label: 'hazard alert radius' },
            { stat: '< 50 ms', label: 'edge inference latency' },
          ].map(({ stat, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#000', margin: '0 0 4px' }}>{stat}</p>
              <p style={{ fontSize: 14, color: '#A0A0A0', margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
