// The VIGIA orb — restyled for an institutional register: a glossy dark sphere
// with a brushed-metal rim and a single faint cool sheen (no rainbow). Reads as
// a precision sensor/lens. Rim rotates, orb floats; reduced-motion safe.

export default function Orb({ size = 340, className = '', halo = true }) {
  return (
    <div
      className={`relative grid place-items-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {halo && (
        <div
          className="absolute rounded-full blur-3xl opacity-60"
          style={{
            width: size * 1.3,
            height: size * 1.3,
            background:
              'radial-gradient(circle at 50% 40%, rgba(110,155,255,0.30), transparent 60%), radial-gradient(circle at 50% 70%, rgba(255,255,255,0.10), transparent 60%)',
          }}
        />
      )}

      <div className="relative motion-safe:animate-floaty" style={{ width: size, height: size }}>
        {/* Brushed-metal rim */}
        <div
          className="absolute inset-0 rounded-full blur-[5px] motion-safe:animate-spin-slow"
          style={{
            background:
              'conic-gradient(from 0deg, #AEB6C6, #2B2E36, #8A93A6, #20232B, #C2C9D6, #2B2E36, #AEB6C6)',
          }}
        />
        {/* Glossy neutral core */}
        <div
          className="absolute rounded-full"
          style={{
            inset: size * 0.045,
            background:
              'radial-gradient(circle at 38% 30%, #3A3B43 0%, #1E1F25 42%, #101116 72%, #08090C 100%)',
            boxShadow: 'inset 0 0 60px rgba(0,0,0,0.65), inset 0 8px 28px rgba(110,155,255,0.12)',
          }}
        />
        {/* Faint cool reflections */}
        <div
          className="absolute rounded-full"
          style={{
            inset: size * 0.045,
            background:
              'radial-gradient(circle at 50% 115%, rgba(110,155,255,0.22), transparent 45%), radial-gradient(circle at 50% -15%, rgba(255,255,255,0.14), transparent 45%)',
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
            background: 'radial-gradient(circle, rgba(255,255,255,0.8), transparent 70%)',
          }}
        />
      </div>
    </div>
  )
}
