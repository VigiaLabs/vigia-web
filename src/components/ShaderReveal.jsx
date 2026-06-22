import { useState, useEffect } from 'react';

/* Renders children (WebGL shader) on top of an instant CSS fallback bg.
   - bg: CSS background shown immediately — user sees color, never black
   - Shader fades in over 1.1s once WebGL is ready (100ms head start)
   - opacity is React state → permanent after first mount, never replays */
export default function ShaderReveal({ children, bg = '#09090B', delay = 100 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, background: bg }}>
      <div style={{
        position: 'absolute', inset: 0,
        opacity: visible ? 1 : 0,
        transition: 'opacity 1.1s ease',
        willChange: 'opacity',
      }}>
        {children}
      </div>
    </div>
  );
}
