const primaryLinks = [
  {
    heading: 'Product',
    links: ['How it works', 'Hardware', 'Earn $VGA', 'Pricing', 'Changelog', 'Status'],
  },
  {
    heading: 'Solutions',
    links: ['City governments', 'Fleet operators', 'Individual drivers', 'Communities', 'Researchers'],
  },
  {
    heading: 'Developers',
    links: ['API docs', 'MQTT protocol', 'BLE spec', 'GitHub', 'OpenAPI'],
  },
  {
    heading: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  },
];

const secondaryLinks = ['Privacy', 'Terms', 'Security', 'Cookies', 'Sitemap'];

export default function Footer() {
  return (
    <footer style={{
      background: '#fff',
      borderTop: '1px solid #E7E7E7',
      padding: '64px 7% 40px',
      fontFamily: "'Graphik', sans-serif",
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        {/* Top: logo + columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px repeat(4, 1fr)', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <p style={{ fontWeight: 700, fontSize: 20, color: '#000', margin: '0 0 12px', letterSpacing: '-0.03em' }}>VIGIA</p>
            <p style={{ fontSize: 13, color: '#A0A0A0', lineHeight: 1.6, margin: 0 }}>
              AI-powered hazard detection and community road intelligence.
            </p>
          </div>

          {/* Link columns */}
          {primaryLinks.map(({ heading, links }) => (
            <div key={heading}>
              <p style={{
                fontSize: 12, fontWeight: 700, color: '#000',
                textTransform: 'uppercase', letterSpacing: '0.06em',
                margin: '0 0 16px',
              }}>{heading}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map(link => (
                  <li key={link} style={{ marginBottom: 10 }}>
                    <a href="#" style={{
                      fontSize: 14, color: '#6B6B6B', textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                      onMouseEnter={e => e.target.style.color = '#000'}
                      onMouseLeave={e => e.target.style.color = '#6B6B6B'}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #E7E7E7', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: 13, color: '#A0A0A0', margin: 0 }}>
            © {new Date().getFullYear()} VigiaLabs. All rights reserved.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: 0 }}>
            {secondaryLinks.map(link => (
              <li key={link}>
                <a href="#" style={{
                  display: 'inline-block', padding: '4px 14px',
                  fontSize: 13, color: '#A0A0A0', textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                  onMouseEnter={e => e.target.style.color = '#000'}
                  onMouseLeave={e => e.target.style.color = '#A0A0A0'}
                >{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
