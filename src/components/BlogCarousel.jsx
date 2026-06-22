import { useRef, useState } from 'react';

const GRAPHIK = "'Graphik', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

/* Blog posts live on Hashnode; each `url` points at the published post.
   Swap these for the real Hashnode permalinks (or fetch them at build time
   via the Hashnode GraphQL API — https://gql.hashnode.com). */
const posts = [
  {
    category: 'HACKATHON',
    title: 'Our plans for IITM Road Safety Hackathon 2026',
    excerpt: 'How VIGIA is preparing its edge-AI perception stack for India’s premier road-safety hackathon.',
    img: '/shaders/detection.webp',
    dark: true,
    url: '#',
  },
  {
    category: 'SAMSUNG SFT',
    title: 'Our plans for SFT 2026 India',
    excerpt: 'Bringing on-device ADAS and DePIN road intelligence to Samsung Solve for Tomorrow.',
    img: '/cloud-bg.jpg',
    dark: false,
    url: '#',
  },
  {
    category: 'DEPIN NETWORK',
    title: 'Building the first road-intelligence DePIN',
    excerpt: 'Why every kilometre you drive should make the next driver safer — and pay you back.',
    img: '/sec-road.jpg',
    dark: true,
    url: '#',
  },
  {
    category: 'ENGINEERING',
    title: 'Sub-50 ms hazard detection on a Raspberry Pi',
    excerpt: 'The edge-inference tricks behind VIGIA’s real-time perception pipeline.',
    img: '/shaders/earn.webp',
    dark: true,
    url: '#',
  },
];

function Arrow({ dir }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ transform: dir === 'left' ? 'scaleX(-1)' : 'none' }}>
      <path d="M6 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BlogCarousel() {
  const scroller = useRef(null);
  const [active, setActive] = useState(0);

  const CARD = 560; // px incl. gap step

  function scrollTo(i) {
    const idx = Math.max(0, Math.min(posts.length - 1, i));
    scroller.current?.scrollTo({ left: idx * CARD, behavior: 'smooth' });
    setActive(idx);
  }

  function onScroll() {
    const el = scroller.current;
    if (el) setActive(Math.round(el.scrollLeft / CARD));
  }

  return (
    <section style={{ background: '#fff', padding: '80px 0 90px', fontFamily: GRAPHIK }}>
      {/* heading row */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 7%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
        <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 700, color: '#111', letterSpacing: '-0.02em', margin: 0 }}>
          Latest from the <span style={{ color: '#326BFF' }}>VIGIA blog</span>
        </h2>
        <a href="#" style={{ fontSize: 15, fontWeight: 600, color: '#111', textDecoration: 'none', whiteSpace: 'nowrap' }}>View all &rarr;</a>
      </div>

      {/* scroller */}
      <div
        ref={scroller}
        onScroll={onScroll}
        style={{
          display: 'flex', gap: 24, overflowX: 'auto', scrollSnapType: 'x mandatory',
          padding: '0 7%', scrollbarWidth: 'none', scrollPaddingLeft: '7%',
        }}
      >
        {posts.map((p) => (
          <a
            key={p.title}
            href={p.url}
            style={{
              flex: '0 0 536px', maxWidth: '85vw', height: 440,
              scrollSnapAlign: 'start', position: 'relative',
              borderRadius: 20, overflow: 'hidden', textDecoration: 'none',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              background: '#111',
            }}
          >
            {/* bg image */}
            <img src={p.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            {/* legibility gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.78) 100%)' }} />

            {/* category pill */}
            <span style={{
              position: 'absolute', top: 24, left: 24, zIndex: 2,
              background: '#fff', color: '#111', fontFamily: MONO,
              fontSize: 12, letterSpacing: '0.08em', fontWeight: 500,
              padding: '7px 12px', borderRadius: 7,
            }}>{p.category}</span>

            {/* content */}
            <div style={{ position: 'relative', zIndex: 2, padding: 28 }}>
              <h3 style={{ fontSize: 26, fontWeight: 700, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 14px', maxWidth: 420 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)', lineHeight: 1.5, margin: '0 0 22px', maxWidth: 400 }}>
                {p.excerpt}
              </p>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: '#111', fontSize: 14, fontWeight: 600,
                padding: '11px 18px', borderRadius: 10,
              }}>
                Learn more <Arrow dir="right" />
              </span>
            </div>
          </a>
        ))}
        <div style={{ flex: '0 0 7%' }} aria-hidden />
      </div>

      {/* dots + arrows */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '28px 7% 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 8, background: '#F2F2F2', padding: '10px 16px', borderRadius: 12 }}>
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === active ? 26 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer',
                background: i === active ? '#1A1A1A' : '#C4C4C4', transition: 'width 0.25s, background 0.25s', padding: 0,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          {['left', 'right'].map((dir) => (
            <button
              key={dir}
              onClick={() => scrollTo(dir === 'left' ? active - 1 : active + 1)}
              aria-label={dir === 'left' ? 'Previous' : 'Next'}
              style={{
                width: 46, height: 40, borderRadius: 10, border: '1px solid #E2E2E2',
                background: '#F7F7F7', color: '#111', cursor: 'pointer',
                display: 'grid', placeItems: 'center',
              }}
            >
              <Arrow dir={dir} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
