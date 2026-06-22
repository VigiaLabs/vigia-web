import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import ShaderReveal from './ShaderReveal'

export default function StaticShader({
  color1 = '#326BFF',
  color2 = '#9B51E0',
  color3 = '#06B6D4',
  rotationZ = -60,
  rotationY = 0,
  positionY = 1.6,
  cameraZoom = 9.1,
}) {
  return (
    <ShaderReveal>
      <ShaderGradientCanvas
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        pointerEvents="none"
      >
        <ShaderGradient
          type="waterPlane"
          animate="off"
          uTime={0.4}
          uSpeed={0}
          uStrength={2.5}
          uDensity={1.5}
          uFrequency={5.5}
          uAmplitude={3.0}
          positionX={0}
          positionY={positionY}
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
          cameraZoom={cameraZoom}
        />
      </ShaderGradientCanvas>
    </ShaderReveal>
  )
}
