import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section, SectionHead, CardGrid, GRAPHIK } from '../components/sections';
import FormPage from '../components/FormPage';

function PlayButton() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', zIndex: 3, pointerEvents: 'none' }}>
      <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', display: 'grid', placeItems: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#111"><path d="M8 5v14l11-7z" /></svg>
      </div>
    </div>
  );
}

export default function Demo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div style={{ fontFamily: GRAPHIK, background: '#fff' }}>
      <Section pad="80px 7% 24px">
        <SectionHead
          eyebrow="View demo"
          title={<>See VIGIA detect, <span style={{ color: '#326BFF' }}>protect, and earn.</span></>}
          subtitle="A two-minute walkthrough of the edge node, the voice copilot, and the road-intelligence network in action."
        />
      </Section>

      <Section pad="0 7% 72px">
        <div
          onClick={() => setPlaying(true)}
          style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', cursor: 'pointer', boxShadow: '0 24px 64px rgba(0,0,0,0.16)' }}
        >
          <img src="/shaders/detection.webp" alt="" style={{ width: '100%', height: 520, objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.45))' }} />
          {!playing && <PlayButton />}
          <div style={{ position: 'absolute', bottom: 28, left: 32, zIndex: 3, color: '#fff' }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7, margin: '0 0 6px' }}>Product tour</p>
            <p style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>{playing ? 'Now playing — VIGIA in 2 minutes' : 'Watch the full walkthrough'}</p>
          </div>
        </div>
      </Section>

      <Section bg="#F5F5F5" border pad="80px 7%">
        <SectionHead eyebrow="In this demo" title="What you'll see" />
        <CardGrid cards={[
          { eyebrow: 'Detect', title: 'Sub-50 ms perception', body: 'Watch the Pi node spot potholes, vehicles, and pedestrians in real time, entirely on-device.' },
          { eyebrow: 'Protect', title: 'BLE hazard alerts', body: 'See the voice copilot warn drivers of hazards up to 300 m ahead — hands-free and offline.' },
          { eyebrow: 'Earn', title: '$VGA in the wallet', body: 'Follow a verified road event from capture to a credited reward in the driver wallet.' },
        ]} />
      </Section>

      <FormPage
        eyebrow="Want a guided tour?"
        title="Book a live demo"
        subtitle="Prefer a hands-on session? Tell us a little about you and we'll set up a personalised walkthrough."
        submitLabel="Request live demo"
        success="Booked — we'll email you a calendar invite shortly."
        fields={[
          { name: 'name', label: 'Full name', placeholder: 'Asha Rao', required: true },
          { name: 'email', label: 'Work email', type: 'email', placeholder: 'you@company.com', required: true },
          { name: 'role', label: "What's your role?", type: 'select', placeholder: 'Select one', options: ['Individual driver', 'Fleet operator', 'City / government', 'Developer'], required: true },
        ]}
        footer={<>Ready to start? <Link to="/signup" style={{ color: '#326BFF', textDecoration: 'none', fontWeight: 600 }}>Start free trial →</Link></>}
      />
    </div>
  );
}
