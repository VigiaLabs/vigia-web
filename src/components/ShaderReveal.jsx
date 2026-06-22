import { useState, useEffect } from 'react';

/* Wraps a shader canvas — fades from transparent to opaque once on mount.
   Uses React state (not a CSS animation) so the opacity is permanent:
   it will never replay when the component scrolls off-screen and back. */
export default function ShaderReveal({ children, delay = 300 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, []); // empty deps — runs once, state persists for component lifetime

  return (
    <div style={{
      position: 'absolute', inset: 0,
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.9s ease',
      willChange: 'opacity',
    }}>
      {children}
    </div>
  );
}
