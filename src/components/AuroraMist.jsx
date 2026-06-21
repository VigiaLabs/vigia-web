import { useEffect, useRef } from 'react';

/* Animated aurora mist — soft drifting light pools on white background.
   Replaces the editorial image strip from the Intercom hero. */
export default function AuroraMist() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const blobs = [
      { x: 0.15, y: 0.5, r: 0.38, dx: 0.00018, dy: 0.00009, color: 'rgba(50,107,255,' },
      { x: 0.50, y: 0.45, r: 0.42, dx: -0.00014, dy: 0.00012, color: 'rgba(120,80,220,' },
      { x: 0.82, y: 0.55, r: 0.36, dx: 0.00010, dy: -0.00010, color: 'rgba(0,180,200,' },
      { x: 0.35, y: 0.6,  r: 0.30, dx: -0.00012, dy: 0.00015, color: 'rgba(80,160,255,' },
      { x: 0.68, y: 0.38, r: 0.32, dx: 0.00016, dy: 0.00008, color: 'rgba(160,100,255,' },
    ];

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      blobs.forEach((b, i) => {
        const x = (b.x + Math.sin(t * b.dx * 1000 + i) * 0.06) * W;
        const y = (b.y + Math.cos(t * b.dy * 1000 + i * 1.3) * 0.06) * H;
        const r = b.r * Math.min(W, H);

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, b.color + '0.22)');
        grad.addColorStop(0.5, b.color + '0.10)');
        grad.addColorStop(1, b.color + '0)');

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      t += 1;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: '100%', height: '100%', position: 'absolute', inset: 0 }}
      aria-hidden="true"
    />
  );
}
