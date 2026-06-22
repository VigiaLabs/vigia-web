import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import ShaderReveal from './ShaderReveal';
import AiOrb from './AiOrb';

const GRAPHIK = "'Graphik', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const SERIF = "'Source Serif 4', Georgia, 'Times New Roman', serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

/* small 2x2 dot mark used as VIGIA's chat avatar */
function Mark() {
  return (
    <span style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(2, 5px)', gap: 3 }}>
      {[0, 1, 2, 3].map((i) => (
        <span key={i} style={{ width: 5, height: 5, borderRadius: 1.5, background: '#15110e' }} />
      ))}
    </span>
  );
}

function ChatBubble({ who, children, style }) {
  const isUser = who === 'user';
  return (
    <div style={{
      position: 'absolute',
      width: 300,
      maxWidth: '80vw',
      padding: '18px 22px',
      borderRadius: 22,
      fontFamily: GRAPHIK,
      fontSize: 16,
      lineHeight: 1.5,
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      boxShadow: '0 16px 50px rgba(0,0,0,0.30)',
      ...(isUser
        ? { background: 'rgba(24,22,24,0.66)', color: '#fff', borderBottomRightRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }
        : { background: 'rgba(248,246,242,0.9)', color: '#15110e', borderBottomLeftRadius: 6, border: '1px solid rgba(255,255,255,0.4)' }),
      ...style,
    }}>
      {who === 'vigia' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10, fontWeight: 700, fontSize: 14 }}>
          <Mark /> VIGIA
        </div>
      )}
      {children}
    </div>
  );
}

export default function VoiceSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: 820, fontFamily: GRAPHIK }}>

      {/* Shader gradient background — orb-matched warm palette */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <ShaderReveal bg="radial-gradient(ellipse 70% 60% at 22% 38%, #b5402a 0%, transparent 55%), radial-gradient(ellipse 64% 62% at 82% 72%, #14756c 0%, transparent 55%), #160d10">
          <ShaderGradientCanvas
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            pointerEvents="none"
          >
            <ShaderGradient
              type="waterPlane"
              animate="on"
              uTime={0.2}
              uSpeed={0.16}
              uStrength={3.2}
              uDensity={1.3}
              uFrequency={5.5}
              uAmplitude={3.4}
              positionX={0}
              positionY={0.5}
              positionZ={0}
              rotationX={45}
              rotationY={-8}
              rotationZ={40}
              color1="#EC6035"
              color2="#16A091"
              color3="#1C0A0C"
              reflection={0.1}
              grain="on"
              lightType="3d"
              envPreset="city"
              cAzimuthAngle={180}
              cPolarAngle={80}
              cDistance={3.5}
              cameraZoom={6.5}
            />
          </ShaderGradientCanvas>
        </ShaderReveal>
      </div>

      {/* legibility vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 75% 70% at 50% 46%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.58) 100%)',
      }} />

      {/* Centre content */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1100, margin: '0 auto', padding: '120px 7%',
        textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        {/* eyebrow */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: MONO, fontSize: 13, letterSpacing: '0.14em',
          color: 'rgba(255,255,255,0.88)', textTransform: 'uppercase', marginBottom: 26,
        }}>
          <span style={{ width: 11, height: 11, background: '#E0533A' }} /> VIGIA VOICE
        </div>

        {/* heading (sans) */}
        <h2 style={{
          fontFamily: GRAPHIK, fontSize: 'clamp(2.2rem, 4.2vw, 3.5rem)', fontWeight: 700,
          color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 40px', maxWidth: 780,
        }}>
          A conversational copilot that rides with you.
        </h2>

        {/* orb flanked by the floating conversation blurbs */}
        <div style={{
          position: 'relative', width: '100%', minHeight: 360,
          display: 'grid', placeItems: 'center', margin: '0 0 40px',
        }}>
          {/* user blurb — left gutter */}
          <ChatBubble who="user" style={{ left: 0, top: 24, transform: 'rotate(-3deg)' }}>
            There's thick fog rolling onto the highway ahead.
          </ChatBubble>

          {/* the real vigia-android AI orb, ported to CSS */}
          <AiOrb size={300} />

          {/* vigia blurb — right gutter */}
          <ChatBubble who="vigia" style={{ right: 0, bottom: 24, transform: 'rotate(2.5deg)' }}>
            I see it — visibility drops sharply in 1.8 km. I've enabled early hazard alerts and I'll
            warn you 300 m before each one. Ease down to 60 km/h.
          </ChatBubble>
        </div>

        {/* body (serif) */}
        <p style={{
          fontFamily: SERIF, fontSize: 21, color: 'rgba(255,255,255,0.92)',
          lineHeight: 1.6, maxWidth: 600, margin: '0 0 40px',
        }}>
          VIGIA's voice copilot listens, understands, and responds in real time — reading the road
          ahead and guiding you through hazards before you reach them. No taps, no screens. Just a
          calm voice that keeps you safe.
        </p>

        <a href="#" style={{
          background: '#fff', color: '#15110e', borderRadius: 6,
          padding: '14px 30px', fontSize: 15, fontWeight: 600,
          textDecoration: 'none', fontFamily: GRAPHIK,
        }}>Learn more</a>
      </div>
    </section>
  );
}
