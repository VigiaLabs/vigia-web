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
        uSpeed={0.25}
        uStrength={2.2}
        uDensity={1.4}
        uFrequency={5.0}
        uAmplitude={2.8}
        positionX={0}
        positionY={1.6}
        positionZ={0}
        rotationX={45}
        rotationY={0}
        rotationZ={-60}
        color1="#326BFF"
        color2="#9B51E0"
        color3="#06B6D4"
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
  )
}
