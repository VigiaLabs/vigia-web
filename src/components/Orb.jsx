// The VIGIA orb — the app's signature Siri-style sphere: a glossy dark core with
// neon rim light flowing pink → violet → blue, wrapped in an aurora halo.
// Pure CSS gradients; the rim rotates, the whole orb gently floats. Reduced-motion
// safe (Tailwind's motion-safe gates the animations).

export default function Orb({ size = 340, className = '', halo = true }) {
  return (
    <div
      className={`relative grid place-items-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Aurora halo */}
      {halo && (
        <div
          className="absolute rounded-full blur-3xl opacity-80"
          style={{
            width: size * 1.35,
            height: size * 1.35,
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,61,143,0.45), transparent 55%), radial-gradient(circle at 70% 40%, rgba(76,194,255,0.40), transparent 55%), radial-gradient(circle at 50% 75%, rgba(143,108,246,0.45), transparent 55%)',
          }}
        />
      )}

      <div className="relative motion-safe:animate-floaty" style={{ width: size, height: size }}>
        {/* Rotating rim light */}
        <div
          className="absolute inset-0 rounded-full blur-[6px] motion-safe:animate-spin-slow"
          style={{
            background:
              'conic-gradient(from 0deg, #FF3D8F, #8F6CF6, #4CC2FF, #8F6CF6, #FF3D8F)',
          }}
        />
        {/* Glossy core sits on the rim so only the edge glows */}
        <div
          className="absolute rounded-full"
          style={{
            inset: size * 0.045,
            background:
              'radial-gradient(circle at 38% 30%, #4A3C7A 0%, #2E2450 38%, #140F2C 70%, #0A0716 100%)',
            boxShadow: 'inset 0 0 60px rgba(0,0,0,0.6), inset 0 8px 30px rgba(143,108,246,0.25)',
          }}
        />
        {/* Inner neon ring reflection */}
        <div
          className="absolute rounded-full"
          style={{
            inset: size * 0.045,
            background:
              'radial-gradient(circle at 50% 115%, rgba(76,194,255,0.35), transparent 45%), radial-gradient(circle at 50% -15%, rgba(255,61,143,0.30), transparent 45%)',
          }}
        />
        {/* Specular highlight */}
        <div
          className="absolute rounded-full blur-md"
          style={{
            width: size * 0.22,
            height: size * 0.16,
            top: size * 0.16,
            left: size * 0.24,
            background: 'radial-gradient(circle, rgba(255,255,255,0.75), transparent 70%)',
          }}
        />
      </div>
    </div>
  )
}
