import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section style={{ position: 'relative', background: '#000', padding: '120px 7%', textAlign: 'center', overflow: 'hidden' }}>
      {/* black/white shader still — wave.webp desaturated */}
      <img
        src="/shaders/wave.webp"
        aria-hidden
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', filter: 'grayscale(1) brightness(0.9)',
          pointerEvents: 'none', userSelect: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700, lineHeight: 1.1,
          color: '#fff', margin: '0 0 20px',
        }}>
          Join the roads revolution.
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', margin: '0 0 48px', lineHeight: 1.55 }}>
          VIGIA is building the world's first community-powered road safety network. Sign up and be among the first to deploy a node.
        </p>

        {submitted ? (
          <p style={{ color: '#6AFDB3', fontSize: 18, fontWeight: 600 }}>
            Thanks! We'll be in touch soon. 👍
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: 'flex', gap: 0,
            background: '#fff', borderRadius: 4, overflow: 'hidden',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.12)',
          }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                flex: 1, border: 'none', outline: 'none',
                padding: '14px 20px', fontSize: 15,
                fontFamily: "'Graphik', sans-serif",
                color: '#000', background: 'transparent',
              }}
            />
            <button type="submit" style={{
              background: '#326BFF', color: '#fff',
              border: 'none', cursor: 'pointer',
              padding: '14px 24px', fontSize: 15, fontWeight: 600,
              fontFamily: "'Graphik', sans-serif",
              flexShrink: 0, transition: 'background 0.15s',
            }}>
              Get early access
            </button>
          </form>
        )}

        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 16 }}>
          No credit card required &mdash; free to start.
        </p>
      </div>
    </section>
  );
}
