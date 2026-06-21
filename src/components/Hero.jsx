export default function Hero() {
  return (
    <section style={{
      minHeight: 'calc(100vh - 61px)',
      background: '#fff',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '80px 7% 60px'
    }}>
      <h1 style={{
        fontSize: 'clamp(3.5rem, 7vw, 7rem)',
        fontWeight: 800, color: '#326BFF',
        lineHeight: 1.05, letterSpacing: '-0.03em',
        marginBottom: 24, maxWidth: 900
      }}>
        Roads that protect themselves.
      </h1>
      <p style={{
        fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
        fontWeight: 500, color: '#000',
        maxWidth: 640, marginBottom: 40, lineHeight: 1.4
      }}>
        VIGIA detects hazards, warns drivers in real-time, and turns road data into community income.
      </p>
      <form style={{ display: 'flex', gap: 8, marginBottom: 16 }} onSubmit={e => e.preventDefault()}>
        <input
          type="email" placeholder="Enter your email"
          style={{
            border: '1.5px solid #000', borderRadius: 4,
            padding: '12px 16px', fontSize: 15, width: 280,
            outline: 'none', fontFamily: 'inherit'
          }}
        />
        <button type="submit" style={{
          background: '#000', color: '#fff', borderRadius: 4,
          padding: '12px 24px', fontSize: 15, fontWeight: 600,
          border: 'none', cursor: 'pointer', fontFamily: 'inherit'
        }}>Start free trial</button>
      </form>
      <p style={{ fontSize: 13, color: '#A0A0A0', marginBottom: 80 }}>No credit card required</p>
      <div style={{
        width: '100%', maxWidth: 1000,
        background: '#F5F5F5', borderRadius: 25,
        height: 480, display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
        color: '#A0A0A0', fontSize: 18
      }}>
        [VIGIA Dashboard Mockup]
      </div>
    </section>
  );
}
