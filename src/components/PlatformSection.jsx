import { useState } from 'react';
import { RaspiSketch, BlackboxSketch, MobileSketch } from './DeviceSketches';

const GRAPHIK = "'Graphik', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const tabs = [
  {
    tab: 'Edge Node',
    category: 'Raspberry Pi node',
    title: 'On-device perception',
    desc: 'YOLO + depth inference run on the Pi in under 50 ms — hazard detection, distance estimation, and TTC, entirely offline.',
    points: ['Real-time object + pothole detection', 'On-device depth & TTC', 'No cloud round-trip'],
    Sketch: RaspiSketch,
  },
  {
    tab: 'Blackbox',
    category: 'In-vehicle blackbox',
    title: 'Always-on road recorder',
    desc: 'A rugged enclosure that captures, signs, and streams verified road telemetry — the trust layer of the VIGIA network.',
    points: ['Tamper-evident, ECDSA-signed events', 'LTE fallback uplink', 'Anti-death snapshot buffer'],
    Sketch: BlackboxSketch,
  },
  {
    tab: 'Mobile App',
    category: 'Driver companion',
    title: 'Voice copilot in your pocket',
    desc: 'BLE-paired alerts and a conversational copilot that warns drivers of hazards up to 300 m ahead — hands-free.',
    points: ['Live BLE hazard alerts', 'Conversational voice copilot', 'Earnings & $VGA wallet'],
    Sketch: MobileSketch,
  },
];

export default function PlatformSection() {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  const Sketch = t.Sketch;

  return (
    <section style={{ background: '#fff', padding: '100px 7%', fontFamily: GRAPHIK }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        {/* Header row: heading + tabs (Cartesia pattern) */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          flexWrap: 'wrap', gap: 24, marginBottom: 36,
        }}>
          <h2 style={{
            fontFamily: GRAPHIK, fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', fontWeight: 700,
            color: '#111', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0, maxWidth: 560,
          }}>
            One platform,<br />
            <span style={{ color: '#326BFF' }}>every surface.</span>
          </h2>

          {/* segmented tabs */}
          <div style={{ display: 'inline-flex', border: '1px solid #E2E2E2', borderRadius: 0, overflow: 'hidden', background: '#fff' }}>
            {tabs.map((tb, i) => (
              <button
                key={tb.tab}
                onClick={() => setActive(i)}
                style={{
                  padding: '12px 22px', fontSize: 15, fontFamily: GRAPHIK, cursor: 'pointer',
                  fontWeight: i === active ? 600 : 400,
                  color: i === active ? '#111' : '#6B6B6B',
                  background: i === active ? '#F2F2F2' : '#fff',
                  border: 'none',
                  borderRight: i < tabs.length - 1 ? '1px solid #E2E2E2' : 'none',
                  transition: 'background 0.15s, color 0.15s',
                  outline: 'none',
                }}
              >
                {tb.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Big bordered box */}
        <div style={{
          border: '1px solid #E6E6E6', borderRadius: 0, background: '#FAFAFA',
          padding: 0, overflow: 'hidden',
          display: 'grid', gridTemplateColumns: '0.85fr 1.15fr',
        }}>
          {/* left: text */}
          <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: 22, fontWeight: 600, color: '#111', margin: '0 0 28px' }}>{t.category}</p>

            <p style={{ fontSize: 15, fontWeight: 600, color: '#326BFF', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 10px' }}>
              {t.title}
            </p>
            <p style={{ fontSize: 16, color: '#555', lineHeight: 1.65, margin: '0 0 28px', maxWidth: 380 }}>
              {t.desc}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {t.points.map((p) => (
                <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: '#111' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#326BFF', flexShrink: 0 }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* right: line-art sketch */}
          <div style={{
            borderLeft: '1px solid #E7E7E7',
            background: '#fafafa',
            display: 'grid', placeItems: 'center',
            padding: '40px',
            minHeight: 380,
          }}>
            <Sketch className="device-sketch" />
          </div>
        </div>
      </div>
    </section>
  );
}
