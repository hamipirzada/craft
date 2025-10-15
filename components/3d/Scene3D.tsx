'use client'

import { Suspense, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useMousePosition } from '@/hooks/useMousePosition'
import ParticleField from './ParticleField'
import FloatingShapes from './FloatingShapes'

interface Scene3DProps {
  children?: React.ReactNode
  enableOrbitControls?: boolean
  enableParticles?: boolean
  enableShapes?: boolean
  cameraPosition?: [number, number, number]
}

function Scene({
  children,
  enableOrbitControls = false,
  enableParticles = true,
  enableShapes = true
}: Scene3DProps) {
  const cameraRef = useRef<any>(null)
  const mousePosition = useMousePosition()

  useEffect(() => {
    if (cameraRef.current && !enableOrbitControls) {
      // Subtle camera movement based on mouse position
      const targetX = (mousePosition.x - 0.5) * 0.5
      const targetY = (mousePosition.y - 0.5) * 0.5

      cameraRef.current.position.x += (targetX - cameraRef.current.position.x) * 0.05
      cameraRef.current.position.y += (targetY - cameraRef.current.position.y) * 0.05
    }
  }, [mousePosition, enableOrbitControls])

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0, 10]}
        fov={75}
        near={0.1}
        far={1000}
      />

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#149AFB" />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#13EF95" />
      <pointLight position={[0, 0, 10]} intensity={0.5} color="#00E5FF" />

      {/* 3D Elements */}
      {enableParticles && <ParticleField count={1500} radius={40} />}
      {enableShapes && <FloatingShapes />}

      {children}

      {enableOrbitControls && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      )}
    </>
  )
}

export default function Scene3D({
  children,
  enableOrbitControls = false,
  enableParticles = true,
  enableShapes = true,
  cameraPosition = [0, 0, 10]
}: Scene3DProps) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          <Scene
            enableOrbitControls={enableOrbitControls}
            enableParticles={enableParticles}
            enableShapes={enableShapes}
          >
            {children}
          </Scene>
        </Suspense>
      </Canvas>
    </div>
  )
}
