const plans = [
  { name: 'Driver', price: 'Free', desc: 'For individual drivers who want real-time hazard alerts.', features: ['Real-time BLE alerts', 'Basic hazard map', 'Community reports', '1 device'], cta: 'Get started free', featured: false },
  { name: 'Plus', price: '$9', period: '/mo', desc: 'For drivers and small fleets who want more.', features: ['Everything in Driver', 'Advanced route safety score', 'Fleet dashboard (up to 5)', 'Priority alerts', 'CSV export'], cta: 'Start free trial', featured: true },
  { name: 'Fleet', price: 'Custom', desc: 'For governments, logistics companies, and large fleets.', features: ['Everything in Plus', 'Unlimited devices', 'API access', 'SLA guarantee', 'Dedicated support'], cta: 'Contact sales', featured: false },
];
export default function Pricing() {
  return (
    <section style={{ background: '#fff', padding: '100px 7%' }}>
      <div style={{ maxWidth: 1290, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', color: '#000', marginBottom: 16 }}>Simple, transparent pricing</h2>
        <p style={{ textAlign: 'center', color: '#6B6B6B', fontSize: 18, marginBottom: 64 }}>Start free. Scale as you grow.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {plans.map(plan => (
            <div key={plan.name} style={{
              borderRadius: 12, padding: '40px 32px',
              border: plan.featured ? '2px solid #326BFF' : '1.5px solid #E7E7E7',
              background: '#fff', display: 'flex', flexDirection: 'column'
            }}>
              <div style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#326BFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{plan.name}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 12 }}>
                  <span style={{ fontSize: 48, fontWeight: 800, color: '#000', lineHeight: 1 }}>{plan.price}</span>
                  {plan.period && <span style={{ fontSize: 18, color: '#6B6B6B' }}>{plan.period}</span>}
                </div>
                <p style={{ fontSize: 15, color: '#6B6B6B', lineHeight: 1.5 }}>{plan.desc}</p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', flex: 1 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ fontSize: 15, color: '#000', padding: '8px 0', borderBottom: '1px solid #F5F5F5', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#00A862', fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#" style={{
                display: 'block', textAlign: 'center', padding: '12px 24px',
                borderRadius: 4, fontSize: 15, fontWeight: 600, textDecoration: 'none',
                background: plan.featured ? '#000' : 'transparent',
                color: plan.featured ? '#fff' : '#000',
                border: plan.featured ? 'none' : '1.5px solid #000'
              }}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
