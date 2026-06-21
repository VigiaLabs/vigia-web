import { Suspense, lazy } from 'react';
const ShaderGradientCanvas = lazy(() =>
  import('@shadergradient/react').then(m => ({ default: m.ShaderGradientCanvas }))
);
const ShaderGradient = lazy(() =>
  import('@shadergradient/react').then(m => ({ default: m.ShaderGradient }))
);

/* Shimmering skeleton bar */
function SkeletonBar({ width = 96, delay = 0 }) {
  return (
    <div style={{
      width,
      height: 20,
      borderRadius: 4,
      background: 'linear-gradient(90deg, #E7E7E7 25%, #F5F5F5 50%, #E7E7E7 75%)',
      backgroundSize: '200% 100%',
      animation: `shimmer 1.5s ${delay}s infinite linear`,
    }} />
  );
}

const widths = [110, 80, 130, 90, 60, 140];
const delays = [0, 0.15, 0.3, 0.45, 0.6, 0.75];

export default function LogoSection() {
  return (
    <section style={{ background: '#fff', padding: '60px 7%', textAlign: 'center' }}>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0 }
          100% { background-position: -200% 0 }
        }
      `}</style>
      <p style={{ fontSize: 14, color: '#A0A0A0', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 32 }}>
        Trusted by teams at
      </p>
      <div style={{ display: 'flex', gap: 48, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {widths.map((w, i) => (
          <SkeletonBar key={i} width={w} delay={delays[i]} />
        ))}
      </div>
    </section>
  );
}
