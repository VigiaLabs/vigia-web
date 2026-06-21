import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function ShaderWave() {
  return (
    <ShaderGradientCanvas
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      pointerEvents="none"
    >
      <ShaderGradient
        type="waterPlane"
        animate="on"
        uTime={0.2}
        uSpeed={0.3}
        uStrength={2.4}
        uDensity={1.5}
        uFrequency={5.5}
        uAmplitude={3.0}
        positionX={0}
        positionY={0.9}
        positionZ={0}
        rotationX={50}
        rotationY={0}
        rotationZ={-60}
        color1="#0a0a0e"
        color2="#1a2a4a"
        color3="#0d1520"
        reflection={0.15}
        wireframe={false}
        shader="defaults"
        lightType="3d"
        envPreset="city"
        grain="off"
        cAzimuthAngle={180}
        cPolarAngle={80}
        cDistance={3.5}
        cameraZoom={9.1}
      />
    </ShaderGradientCanvas>
  )
}
