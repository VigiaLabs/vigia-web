import { useState, useEffect, useRef } from 'react';
import ShaderWave from './ShaderWave';          // eager — loads with page

function BlueSquare({ style }) {
  return <div style={{ width: 14, height: 14, background: '#326BFF', ...style }} />;
}

/* ── Feature tab carousel ─────────────────────────────── */
/* Each tab shows a pre-rendered still of its shader (public/shaders/*.webp)
   — instant, ~100 KB, no WebGL. */

/* Pre-rendered shader gradient stills — instant load, no WebGL in carousel */
const tabs = [
  { label: 'Real-time Detection', img: '/shaders/detection.webp' },
  { label: 'Voice Copilot',       img: '/shaders/voice.webp' },
  { label: 'Road Intelligence',   img: '/shaders/road.webp' },
  { label: 'Earn $VGA',           img: '/shaders/earn.webp' },
];

const INTERVAL = 4000;

function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [sliding, setSliding] = useState(false);
  const paused = useRef(false);
  const timeoutRef = useRef(null);

  function goTo(idx) {
    if (idx === active || sliding) return;
    setPrev(active);
    setActive(idx);
    setSliding(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setSliding(false), 550);
  }

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) {
        setActive(i => {
          const next = (i + 1) % tabs.length;
          setPrev(i);
          setSliding(true);
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => setSliding(false), 550);
          return next;
        });
      }
    }, INTERVAL);
    return () => { clearInterval(id); clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <div
      style={{ borderTop: '2px solid #D4D4D4' }}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      {/* Tab strip */}
      <div style={{
        display: 'flex', borderBottom: '2px solid #D4D4D4',
        overflowX: 'auto', scrollbarWidth: 'none', background: '#fff',
      }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => goTo(i)}
            style={{
              padding: '18px 32px', fontSize: 15,
              fontWeight: i === active ? 600 : 400,
              color: i === active ? '#000' : '#6B6B6B',
              background: 'none', border: 'none',
              borderBottom: i === active ? '3px solid #000' : '3px solid transparent',
              cursor: 'pointer', whiteSpace: 'nowrap',
              transition: 'color 0.15s, border-color 0.15s', outline: 'none',
            }}
          >{tab.label}</button>
        ))}

        {/* Progress bar */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 24px', gap: 8, justifyContent: 'flex-end' }}>
          {tabs.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === active ? 24 : 8, height: 4,
                background: i === active ? '#000' : '#D4D4D4',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'width 0.3s, background 0.3s',
              }}
            />
          ))}
        </div>
      </div>

      {/* Sliding shader stills */}
      <div style={{ position: 'relative', height: 480, overflow: 'hidden', background: '#09090B' }}>
        {tabs.map((tab, i) => {
          const isActive = i === active;
          const isPrev = i === prev && sliding;
          const show = isActive || isPrev;
          return (
            <div
              key={tab.label}
              style={{
                position: 'absolute', inset: 0,
                transform: isActive
                  ? 'translateX(0%)'
                  : isPrev
                    ? 'translateX(-100%)'
                    : i < active ? 'translateX(-100%)' : 'translateX(100%)',
                transition: show ? 'transform 0.55s cubic-bezier(0.22,1,0.36,1)' : 'none',
                willChange: 'transform',
              }}
            >
              <img src={tab.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          );
        })}

        {/* Label overlay */}
        <div style={{ position: 'absolute', bottom: 40, left: 56, zIndex: 2, pointerEvents: 'none' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
            {tabs[active].label}
          </p>
          <div style={{ width: 32, height: 2, background: 'rgba(255,255,255,0.3)' }} />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section style={{ background: '#fff', overflow: 'hidden' }}>

      {/* Two-column headline */}
      <div style={{ padding: '60px 40px 0', maxWidth: 1290, margin: '0 auto', position: 'relative' }}>
        <BlueSquare style={{ position: 'absolute', top: 60, left: 40 }} />
        <BlueSquare style={{ position: 'absolute', top: 60, right: 40 }} />

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'flex-end',
          paddingTop: 40, paddingBottom: 64,
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 800,
            color: '#000', lineHeight: 1.05, letterSpacing: '-0.03em', margin: 0,
          }}>
            The only road safety network that pays you back.
          </h1>
          <div style={{ paddingBottom: 8 }}>
            <p style={{ fontSize: 18, color: '#000', lineHeight: 1.65, marginBottom: 36, maxWidth: 480 }}>
              VIGIA is the only edge-AI platform with a natively integrated road intelligence
              network — meaning every kilometre you drive improves the next driver's safety,
              enabling outcomes that were never possible before.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#cta" style={{
                background: '#000', color: '#fff', borderRadius: 4,
                padding: '13px 28px', fontSize: 15, fontWeight: 600,
                textDecoration: 'none', display: 'inline-block',
              }}>Start free trial</a>
              <a href="#how" style={{
                background: '#fff', color: '#000', borderRadius: 4,
                padding: '12px 26px', fontSize: 15, fontWeight: 600,
                textDecoration: 'none', border: '1.5px solid #000', display: 'inline-block',
              }}>View demo</a>
            </div>
          </div>
        </div>
      </div>

      {/* ShaderGradient wave strip — eager loaded, no Suspense needed */}
      <div style={{ position: 'relative', height: 360, width: '100%', overflow: 'hidden', marginTop: -64, background: '#09090B' }}>
        <ShaderWave />
      </div>

      {/* Feature carousel — full width */}
      <FeatureCarousel />
    </section>
  );
}
