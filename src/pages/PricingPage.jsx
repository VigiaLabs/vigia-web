import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Section, SectionHead, GRAPHIK } from '../components/sections';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';

const compareRows = [
  { feature: 'Real-time BLE hazard alerts', starter: true, pro: true, fleet: true },
  { feature: 'Community hazard map', starter: true, pro: true, fleet: true },
  { feature: 'Voice copilot', starter: 'Basic', pro: 'Advanced', fleet: 'Advanced' },
  { feature: 'Devices', starter: '1', pro: 'Up to 5', fleet: 'Unlimited' },
  { feature: 'Route safety score', starter: false, pro: true, fleet: true },
  { feature: '$VGA earnings', starter: false, pro: true, fleet: true },
  { feature: 'Analytics dashboard', starter: false, pro: true, fleet: 'Fleet command' },
  { feature: 'REST API + MQTT access', starter: false, pro: false, fleet: true },
  { feature: 'SLA guarantee', starter: false, pro: false, fleet: true },
  { feature: 'Dedicated onboarding & support', starter: false, pro: 'Priority', fleet: true },
];

const faqs = [
  { q: 'Is there really a free tier?', a: 'Yes. The Starter plan is free forever and includes real-time BLE hazard alerts, the community hazard map, and the basic voice copilot for one device. No credit card required.' },
  { q: 'How do $VGA earnings work?', a: 'On the Pro and Fleet plans, every kilometre of verified, signed road data you contribute earns $VGA credits. Rewards are transparent and tied to verified contributions, not raw mileage.' },
  { q: 'Do I need the hardware to use VIGIA?', a: 'No. The mobile app delivers BLE alerts and the voice copilot on its own. The Raspberry Pi edge node unlocks on-device detection and higher $VGA earning rates.' },
  { q: 'Can I change plans later?', a: 'Anytime. Upgrade, downgrade, or cancel from your dashboard. Changes take effect at the start of your next billing cycle.' },
  { q: 'What does Fleet pricing include?', a: 'Fleet is custom-priced for governments, logistics, and large operators — unlimited devices, API + MQTT access, a fleet command dashboard, an SLA, and dedicated onboarding.' },
];

function Cell({ v }) {
  if (v === true) return <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#F5F5F5" /><path d="M4.5 8l2.5 2.5 4.5-5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (v === false) return <span style={{ color: '#D0D0D0', fontSize: 18 }}>–</span>;
  return <span style={{ fontSize: 14, color: '#111', fontWeight: 500 }}>{v}</span>;
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #E7E7E7' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
        background: 'none', border: 'none', cursor: 'pointer', padding: '24px 0', textAlign: 'left',
        fontFamily: GRAPHIK, fontSize: 17, fontWeight: 600, color: '#111',
      }}>
        {q}
        <span style={{ fontSize: 24, color: '#326BFF', lineHeight: 1, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </button>
      {open && <p style={{ fontSize: 15, color: '#555', lineHeight: 1.65, margin: '0 0 24px', maxWidth: 720 }}>{a}</p>}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div style={{ fontFamily: GRAPHIK }}>
      <PageHeader
        eyebrow="Pricing"
        title={<>Pricing for <span style={{ color: '#326BFF' }}>every stage.</span></>}
        subtitle="Start free as a driver, go Pro to earn $VGA, or scale across a fleet. No credit card required to begin."
        wave={false}
      />

      {/* Reuse the existing pricing tier cards */}
      <Pricing />

      {/* Comparison table */}
      <Section pad="100px 7%" border>
        <SectionHead eyebrow="Compare plans" title="Every feature, side by side" />
        <div style={{ border: '1px solid #E7E7E7', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: '#F5F5F5', borderBottom: '1px solid #E7E7E7' }}>
            {['Feature', 'Starter', 'Pro', 'Fleet'].map((h, i) => (
              <div key={h} style={{ padding: '18px 24px', fontSize: 14, fontWeight: 700, color: '#111', textAlign: i === 0 ? 'left' : 'center' }}>{h}</div>
            ))}
          </div>
          {compareRows.map((r, idx) => (
            <div key={r.feature} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderTop: idx ? '1px solid #EFEFEF' : 'none' }}>
              <div style={{ padding: '16px 24px', fontSize: 15, color: '#111' }}>{r.feature}</div>
              {['starter', 'pro', 'fleet'].map(k => (
                <div key={k} style={{ padding: '16px 24px', display: 'grid', placeItems: 'center' }}><Cell v={r[k]} /></div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="#F5F5F5" border pad="100px 7%">
        <SectionHead eyebrow="FAQ" title="Questions, answered" />
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          {faqs.map(f => <FAQ key={f.q} {...f} />)}
        </div>
      </Section>

      <CTA />
    </div>
  );
}
