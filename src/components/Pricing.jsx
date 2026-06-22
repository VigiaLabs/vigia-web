const plans = [
  {
    category: 'For drivers',
    name: 'Starter',
    price: 'Free',
    desc: 'Real-time hazard alerts and community road intelligence for individual drivers.',
    features: [
      'Real-time BLE hazard alerts',
      'Community hazard map',
      'Voice copilot (basic)',
      '1 device',
      'iOS & Android app',
    ],
    cta: 'Get started free',
    ctaHref: '#',
    featured: false,
  },
  {
    category: 'For power users',
    name: 'Pro',
    price: '$9',
    period: '/mo',
    desc: 'Advanced safety scoring, route intelligence, and $VGA earnings for serious drivers.',
    badge: 'Most popular',
    features: [
      'Everything in Starter',
      'Route safety score',
      '$VGA earnings on verified data',
      'Up to 5 devices',
      'Advanced analytics dashboard',
      'Priority alert processing',
    ],
    cta: 'Start free trial',
    ctaHref: '#',
    featured: true,
  },
  {
    category: 'For organisations',
    name: 'Fleet',
    price: 'Custom',
    desc: 'Enterprise-grade road intelligence for governments, logistics, and large fleets.',
    features: [
      'Everything in Pro',
      'Unlimited devices',
      'REST API + MQTT access',
      'Fleet command dashboard',
      'SLA guarantee',
      'Dedicated onboarding & support',
    ],
    cta: 'Contact sales',
    ctaHref: '#',
    featured: false,
  },
];

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8" cy="8" r="8" fill="#F5F5F5" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section style={{ background: '#fff', padding: '100px 7%', borderTop: '1px solid #E7E7E7' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, lineHeight: 1.1,
            color: '#000', margin: '0 0 16px',
          }}>Simple, transparent pricing</h2>
          <p style={{ fontSize: 18, color: '#A0A0A0', margin: 0 }}>Start free. Scale as your fleet grows.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid #E7E7E7', borderRadius: 8, overflow: 'hidden' }}>
          {plans.map((plan, i) => (
            <div key={plan.name} style={{
              display: 'flex', flexDirection: 'column',
              borderRight: i < plans.length - 1 ? '1px solid #E7E7E7' : 'none',
              background: '#fff',
            }}>
              {/* Header */}
              <div style={{
                padding: '32px 32px 28px',
                borderBottom: '2px solid #E7E7E7',
                minHeight: 320,
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                {plan.badge ? (
                  <div style={{ marginBottom: 4 }}>
                    <span style={{
                      display: 'inline-block',
                      background: '#F5C000', color: '#000',
                      fontSize: 12, fontWeight: 700,
                      padding: '4px 12px', borderRadius: 20,
                    }}>{plan.badge}</span>
                  </div>
                ) : (
                  <div style={{ height: 28 }} />
                )}

                <p style={{ fontSize: 13, fontWeight: 600, color: '#A0A0A0', textTransform: 'uppercase', letterSpacing: '0.07em', margin: 0 }}>{plan.category}</p>
                <p style={{ fontSize: 28, fontWeight: 700, color: '#000', margin: 0, lineHeight: 1 }}>{plan.name}</p>
                <p style={{ fontSize: 14, color: '#6B6B6B', lineHeight: 1.55, margin: 0 }}>{plan.desc}</p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 8 }}>
                  <span style={{ fontSize: 46, fontWeight: 700, color: '#000', lineHeight: 1 }}>{plan.price}</span>
                  {plan.period && <span style={{ fontSize: 16, color: '#A0A0A0' }}>{plan.period}</span>}
                </div>

                <a href={plan.ctaHref} style={{
                  marginTop: 8,
                  display: 'block', textAlign: 'center',
                  padding: '12px 24px', borderRadius: 4,
                  fontSize: 15, fontWeight: 600,
                  textDecoration: 'none', transition: 'opacity 0.15s',
                  background: plan.featured ? '#000' : 'transparent',
                  color: plan.featured ? '#fff' : '#000',
                  border: plan.featured ? 'none' : '1.5px solid #000',
                }}>{plan.cta}</a>
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: '28px 32px', margin: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#000', lineHeight: 1.4 }}>
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: 14, color: '#A0A0A0', marginTop: 32 }}>
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
