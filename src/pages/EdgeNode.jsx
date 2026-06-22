import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Section, SectionHead, CardGrid, GRAPHIK, MONO } from '../components/sections';
import { RaspiSketch, BlackboxSketch, CameraSketch } from '../components/DeviceSketches';
import CTA from '../components/CTA';

const specs = [
  ['Compute', 'Raspberry Pi 5 — quad-core Arm Cortex-A76'],
  ['Memory', '8 GB LPDDR4X'],
  ['Camera', 'CSI wide-angle module, 1080p / 60 fps'],
  ['Inference', 'Sub-50 ms detect + depth + TTC, on-device'],
  ['Connectivity', 'BLE 5.0 (300 m), Wi-Fi, optional LTE'],
  ['Storage', 'NVMe SSD, signed snapshot buffer'],
  ['Power', 'USB-C, 12 V vehicle adapter included'],
  ['Enclosure', 'Ruggedised, dash- or windshield-mount'],
];

const steps = [
  { eyebrow: 'Step 1', title: 'Mount & power', body: 'Clip the node to your windshield and plug into the 12 V adapter. It boots and calibrates in under a minute.', icon: <CameraSketch className="device-sketch" /> },
  { eyebrow: 'Step 2', title: 'Detect on-device', body: 'The Pi runs the full perception stack locally — potholes, vehicles, pedestrians — with no cloud round-trip.', icon: <RaspiSketch className="device-sketch" /> },
  { eyebrow: 'Step 3', title: 'Sign, alert & earn', body: 'Verified events are signed, broadcast over BLE to nearby drivers, and earn you $VGA on the network.', icon: <BlackboxSketch className="device-sketch" /> },
];

export default function EdgeNode() {
  return (
    <div style={{ fontFamily: GRAPHIK }}>
      <PageHeader
        eyebrow="Hardware"
        title={<>The VIGIA <span style={{ color: '#326BFF' }}>Edge Node.</span></>}
        subtitle="A Raspberry Pi-powered perception node that turns any vehicle into a real-time road-safety sensor — and a $VGA-earning network participant."
        actions={
          <>
            <Link to="/signup" className="btn-primary">Pre-order — $149</Link>
            <Link to="/contact-sales" className="btn-outline">Talk to sales</Link>
          </>
        }
      />

      {/* Hero diagram + intro */}
      <Section pad="100px 7%">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ border: '1px solid #E7E7E7', borderRadius: 18, background: '#fafafa', display: 'grid', placeItems: 'center', padding: 48, minHeight: 380 }}>
            <RaspiSketch className="device-sketch" />
          </div>
          <div>
            <p style={{ fontFamily: MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#326BFF', margin: '0 0 16px' }}>Edge perception, built in</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 700, color: '#111', lineHeight: 1.12, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
              All the intelligence. None of the cloud.
            </h2>
            <p style={{ fontSize: 17, color: '#555', lineHeight: 1.65, margin: '0 0 24px', maxWidth: 460 }}>
              The Edge Node runs VIGIA's full detect–depth–TTC pipeline directly on the Raspberry Pi in under 50 ms. Detection, forward-collision warnings, and BLE alerts all work with zero connectivity — the network just makes them better.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Real-time hazard detection on-device', 'Tamper-evident, signed road events', 'Earns $VGA on the road-intelligence network'].map(p => (
                <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: '#111' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#326BFF', flexShrink: 0 }} />{p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section bg="#F5F5F5" border pad="100px 7%">
        <SectionHead eyebrow="How it works" title="From windshield to network in 3 steps" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {steps.map(s => (
            <div key={s.title} style={{ border: '1px solid #E7E7E7', borderRadius: 16, background: '#fff', padding: 28, display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#fafafa', borderRadius: 12, border: '1px solid #EFEFEF', padding: 20, marginBottom: 22 }}>{s.icon}</div>
              <p style={{ fontFamily: MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#326BFF', margin: '0 0 10px' }}>{s.eyebrow}</p>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: '#111', margin: '0 0 10px' }}>{s.title}</h3>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.6, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Specs table */}
      <Section pad="100px 7%">
        <SectionHead eyebrow="Specifications" title="Tech specs" />
        <div style={{ border: '1px solid #E7E7E7', borderRadius: 12, overflow: 'hidden', maxWidth: 820, margin: '0 auto' }}>
          {specs.map(([k, v], i) => (
            <div key={k} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', borderTop: i ? '1px solid #EFEFEF' : 'none' }}>
              <div style={{ padding: '18px 24px', fontSize: 14, fontWeight: 600, color: '#111', background: '#F9F9F9', borderRight: '1px solid #EFEFEF' }}>{k}</div>
              <div style={{ padding: '18px 24px', fontSize: 15, color: '#555' }}>{v}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* In the box */}
      <Section bg="#F5F5F5" border pad="100px 7%">
        <SectionHead eyebrow="In the box" title="Everything to get rolling" />
        <CardGrid cards={[
          { eyebrow: 'Node', title: 'VIGIA Edge Node', body: 'Pre-flashed Raspberry Pi 5 with the VIGIA perception stack, NVMe storage, and a rugged enclosure.' },
          { eyebrow: 'Camera', title: 'Wide-angle CSI module', body: 'A calibrated 1080p camera and ribbon, ready to clip to your windshield mount.' },
          { eyebrow: 'Power', title: '12 V vehicle kit', body: 'USB-C vehicle adapter, cabling, and windshield/dash mounting hardware included.' },
        ]} />
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link to="/signup" className="btn-primary">Pre-order your Edge Node — $149</Link>
        </div>
      </Section>

      <CTA />
    </div>
  );
}
