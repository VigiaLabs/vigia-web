import { useState, useEffect, useRef } from 'react';

/* Smooth shader reveal — two-stage, no jerk:
   1. `mounted`: an IntersectionObserver with a large rootMargin mounts the
      WebGL canvas ~1100px BEFORE it scrolls into view, so the (~800ms)
      shader compile finishes off-screen.
   2. `visible`: a second observer fades the (already-painted) canvas in over
      the instant CSS/image fallback once the section is comfortably in view.
   The fallback `bg` is shown immediately underneath, so there's never a
   black frame. Respects prefers-reduced-motion. */
export default function ShaderReveal({ children, bg = '#09090B' }) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    // Stage 1 — compile early, off-screen.
    const pre = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setMounted(true); pre.disconnect(); } },
      { rootMargin: '1100px 0px 1100px 0px' },
    );
    pre.observe(el);

    // Stage 2 — fade in once nicely in view.
    const show = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); show.disconnect(); } },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
    );
    show.observe(el);

    if (reduce) { setMounted(true); setVisible(true); }

    return () => { pre.disconnect(); show.disconnect(); };
  }, []);

  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0, background: bg }}>
      <div style={{
        position: 'absolute', inset: 0,
        opacity: visible ? 1 : 0,
        transition: 'opacity 1.3s ease',
        willChange: 'opacity',
      }}>
        {mounted && children}
      </div>
    </div>
  );
}
