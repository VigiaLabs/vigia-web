const partners = ['Govt. of Kerala', 'NHAI', 'IIT Madras', 'MeitY', 'ISRO', 'Smart Cities Mission'];
export default function LogoSection() {
  return (
    <section style={{ background: '#fff', padding: '60px 7%', textAlign: 'center' }}>
      <p style={{ fontSize: 14, color: '#A0A0A0', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 32 }}>
        Trusted by teams at
      </p>
      <ol style={{ display: 'flex', gap: 48, justifyContent: 'center', listStyle: 'none', padding: 0, margin: 0, flexWrap: 'wrap' }}>
        {partners.map(name => (
          <li key={name} style={{ fontSize: 18, fontWeight: 600, color: '#A0A0A0', letterSpacing: '0.02em' }}>{name}</li>
        ))}
      </ol>
    </section>
  );
}
