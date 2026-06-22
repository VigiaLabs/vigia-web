/* Web port of vigia-android's AiOrbComponent.kt — a Siri-style dark glossy
   sphere with counter-rotating pink→violet→blue rim lights and a breathing
   scale. Pure CSS (see .aiorb rules in index.css), ~0 KB, theme-able. */
export default function AiOrb({ size = 300, className = '' }) {
  return (
    <div className={`aiorb ${className}`} style={{ width: size, height: size }} aria-label="VIGIA AI orb" role="img">
      <div className="aiorb-halo" />
      <div className="aiorb-sphere" />
      <div className="aiorb-spec" />
      <div className="aiorb-rim-glow" />
      <div className="aiorb-rim" />
      <div className="aiorb-rim-counter" />
    </div>
  );
}
