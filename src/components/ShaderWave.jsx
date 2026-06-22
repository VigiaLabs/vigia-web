import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import ShaderReveal from './ShaderReveal'

export default function ShaderWave({
  color1 = '#326BFF',
  color2 = '#9B51E0',
  color3 = '#06B6D4',
  rotationZ = -60,
  rotationY = 0,
}) {
  // Instant CSS approximation so the strip is never a dead black rectangle
  const bg = `radial-gradient(ellipse 80% 80% at 20% 50%, ${color1}cc 0%, transparent 55%),
    radial-gradient(ellipse 70% 70% at 75% 45%, ${color2}aa 0%, transparent 55%),
    radial-gradient(ellipse 60% 60% at 55% 70%, ${color3}88 0%, transparent 55%),
    ${color3 === '#06B6D4' ? '#030d1a' : color3 + '33'}`;

  return (
    <ShaderReveal bg={bg}>
      <ShaderGradientCanvas
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        pointerEvents="none"
      >
        <ShaderGradient
          type="waterPlane"
          animate="on"
          uTime={0.2}
          uSpeed={0.25}
          uStrength={2.2}
          uDensity={1.4}
          uFrequency={5.0}
          uAmplitude={2.8}
          positionX={0}
          positionY={1.6}
          positionZ={0}
          rotationX={45}
          rotationY={rotationY}
          rotationZ={rotationZ}
          color1={color1}
          color2={color2}
          color3={color3}
          reflection={0.1}
          wireframe={false}
          shader="defaults"
          lightType="3d"
          envPreset="city"
          grain="on"
          cAzimuthAngle={180}
          cPolarAngle={80}
          cDistance={3.5}
          cameraZoom={9.1}
        />
      </ShaderGradientCanvas>
    </ShaderReveal>
  )
}
