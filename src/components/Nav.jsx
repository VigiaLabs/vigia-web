import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import VigiaMark from './VigiaMark';

const GRAPHIK = "'Graphik', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const products = [
  {
    label: 'VIGIA Kavach',
    sub: 'Edge Node hardware',
    desc: 'Raspberry Pi-powered perception node — on-device ADAS, BLE alerts, and $VGA earnings.',
    to: '/edge-node',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#333" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="14" height="14" rx="2" />
        <circle cx="10" cy="10" r="3" />
        <path d="M10 3v2M10 15v2M3 10h2M15 10h2" />
      </svg>
    ),
  },
  {
    label: 'VIGIA IDE',
    sub: 'Road intelligence IDE',
    desc: 'Sentient road infrastructure — real-time monitoring and responsive road management.',
    href: 'https://main.d37hzf29nvf0f4.amplifyapp.com/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#333" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="5 8 2 10 5 12" />
        <polyline points="15 8 18 10 15 12" />
        <line x1="9" y1="4" x2="11" y2="16" />
      </svg>
    ),
  },
  {
    label: 'VIGIASearch',
    sub: 'Infrastructure intelligence',
    desc: 'Search, query, and brief government infrastructure data — spatial records and budget analysis.',
    href: 'https://main.d1y3lme21jz1c7.amplifyapp.com/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#333" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="6" />
        <path d="M15 15l3 3" />
      </svg>
    ),
  },
];

const rightLinks = [
  { label: 'Log in', to: '/login' },
  { label: 'Contact sales', to: '/contact-sales' },
  { label: 'View demo', to: '/demo' },
];

function scrollTop() { window.scrollTo({ top: 0, behavior: 'instant' }); }

function ProductDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: GRAPHIK, fontSize: 15, fontWeight: 400, color: '#000',
          display: 'flex', alignItems: 'center', gap: 5, padding: 0,
        }}
      >
        Product
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 16px)', left: '50%',
          transform: 'translateX(-50%)',
          background: '#fff',
          border: '2px solid #D4D4D4',
          borderRadius: 0,
          width: 420,
          zIndex: 200,
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        }}>
          {products.map((p, i) => {
            const inner = (
              <div style={{
                display: 'flex', gap: 16, alignItems: 'flex-start',
                padding: '20px 24px',
                borderBottom: i < products.length - 1 ? '2px solid #D4D4D4' : 'none',
                transition: 'background 0.12s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#F7F7F7'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ width: 36, height: 36, border: '2px solid #D4D4D4', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  {p.icon}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#111', letterSpacing: '-0.01em' }}>{p.label}</p>
                  <p style={{ margin: '2px 0 6px', fontSize: 12, fontWeight: 500, color: '#666', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{p.sub}</p>
                  <p style={{ margin: 0, fontSize: 13, color: '#888', lineHeight: 1.5 }}>{p.desc}</p>
                </div>
              </div>
            );

            return p.href ? (
              <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block' }}
                onClick={() => setOpen(false)}
              >{inner}</a>
            ) : (
              <Link key={p.label} to={p.to} style={{ textDecoration: 'none', display: 'block' }}
                onClick={() => { setOpen(false); scrollTop(); }}
              >{inner}</Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#fff',
      borderBottom: '2px solid #D4D4D4',
      padding: '18px 40px',
      display: 'flex', alignItems: 'center', gap: 40,
      fontFamily: GRAPHIK,
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#000', flexShrink: 0 }}>
        <VigiaMark size={32} />
        <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em' }}>VIGIA</span>
      </Link>

      <div style={{ display: 'flex', gap: 28, alignItems: 'center', flex: 1 }}>
        <ProductDropdown />
        <Link to="/customers" onClick={scrollTop} style={{ color: '#000', fontSize: 15, fontWeight: 400, textDecoration: 'none' }}>Customers</Link>
        <Link to="/pricing" onClick={scrollTop} style={{ color: '#000', fontSize: 15, fontWeight: 400, textDecoration: 'none' }}>Pricing</Link>
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexShrink: 0 }}>
        {rightLinks.map(l => (
          <Link key={l.label} to={l.to} onClick={scrollTop} style={{ color: '#000', fontSize: 15, fontWeight: 400, textDecoration: 'none', whiteSpace: 'nowrap' }}>{l.label}</Link>
        ))}
        <Link to="/signup" onClick={scrollTop} style={{
          background: '#000', color: '#fff', borderRadius: 4,
          padding: '10px 20px', fontSize: 15, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap',
        }}>Start free trial</Link>
        <Link to="/edge-node" onClick={scrollTop} style={{
          background: '#fff', color: '#000', borderRadius: 4,
          padding: '9px 18px', fontSize: 15, fontWeight: 600, textDecoration: 'none',
          border: '2px solid #000', whiteSpace: 'nowrap',
        }}>Edge Node →</Link>
      </div>
    </nav>
  );
}
