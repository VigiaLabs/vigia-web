import { useState, useEffect } from 'react';
import VigiaMark from './VigiaMark';

const centerLinks = ['Product', 'Customers', 'Pricing'];
const rightLinks = ['Log in', 'Contact sales', 'View demo'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#fff',
      borderBottom: scrolled ? '1px solid #E7E7E7' : '1px solid transparent',
      padding: '18px 40px',
      display: 'flex', alignItems: 'center', gap: 40,
      transition: 'border-color 0.2s',
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#000', flexShrink: 0 }}>
        <VigiaMark size={32} />
        <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em' }}>VIGIA</span>
      </a>

      <div style={{ display: 'flex', gap: 28, alignItems: 'center', flex: 1 }}>
        {centerLinks.map(l => (
          <a key={l} href="#" style={{ color: '#000', fontSize: 15, fontWeight: 400, textDecoration: 'none', whiteSpace: 'nowrap' }}>{l}</a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexShrink: 0 }}>
        {rightLinks.map(l => (
          <a key={l} href="#" style={{ color: '#000', fontSize: 15, fontWeight: 400, textDecoration: 'none', whiteSpace: 'nowrap' }}>{l}</a>
        ))}
        <a href="#cta" style={{
          background: '#000', color: '#fff', borderRadius: 4,
          padding: '10px 20px', fontSize: 15, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap',
        }}>Start free trial</a>
        <a href="#hardware" style={{
          background: '#fff', color: '#000', borderRadius: 4,
          padding: '9px 18px', fontSize: 15, fontWeight: 600, textDecoration: 'none',
          border: '1.5px solid #000', whiteSpace: 'nowrap',
        }}>Edge Node →</a>
      </div>
    </nav>
  );
}
