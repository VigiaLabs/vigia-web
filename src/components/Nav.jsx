import { useState, useEffect } from 'react';

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
      padding: '20px 7%',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'border-color 0.2s'
    }}>
      <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em', color: '#000' }}>VIGIA</div>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {['How it works', 'Hardware', 'Earn', 'Pricing'].map(link => (
          <a key={link} href="#" style={{ color: '#000', fontSize: 15, fontWeight: 400, textDecoration: 'none' }}>{link}</a>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <a href="#" style={{ color: '#000', fontSize: 15, fontWeight: 400, textDecoration: 'none' }}>Log in</a>
        <a href="#" style={{
          background: '#000', color: '#fff', borderRadius: 4,
          padding: '10px 20px', fontSize: 15, fontWeight: 600, textDecoration: 'none'
        }}>Start free trial</a>
      </div>
    </nav>
  );
}
