const links = {
  Product: ['How it works', 'Hardware', 'Earn', 'Pricing', 'Changelog'],
  Solutions: ['City governments', 'Fleet operators', 'Individual drivers', 'Communities', 'Researchers'],
  Developers: ['API docs', 'MQTT protocol', 'BLE spec', 'GitHub', 'Status'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};
export default function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #E7E7E7', padding: '80px 7% 40px' }}>
      <div style={{ maxWidth: 1290, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 40, marginBottom: 64 }}>
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#000', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>{section}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {items.map(item => (
                  <li key={item} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ fontSize: 14, color: '#6B6B6B', textDecoration: 'none' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32, borderTop: '1px solid #E7E7E7' }}>
          <div style={{ fontWeight: 800, fontSize: 18, color: '#000' }}>VIGIA</div>
          <p style={{ fontSize: 13, color: '#A0A0A0' }}>© 2025 VigiaLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
