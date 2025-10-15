'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleFieldProps {
  count?: number
  radius?: number
}

export default function ParticleField({ count = 2000, radius = 50 }: ParticleFieldProps) {
  const points = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // Create particles in a sphere
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = radius * Math.cbrt(Math.random())

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      // Color gradient (blue to teal)
      const colorT = Math.random()
      colors[i * 3] = THREE.MathUtils.lerp(0.08, 0.07, colorT) // R
      colors[i * 3 + 1] = THREE.MathUtils.lerp(0.6, 0.94, colorT) // G
      colors[i * 3 + 2] = THREE.MathUtils.lerp(0.98, 0.58, colorT) // B
    }

    return { positions, colors }
  }, [count, radius])

  useFrame((state) => {
    if (points.current) {
      const time = state.clock.getElapsedTime()
      points.current.rotation.y = time * 0.05
      points.current.rotation.x = Math.sin(time * 0.1) * 0.1

      // Pulsing effect
      const scale = 1 + Math.sin(time * 0.5) * 0.05
      points.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particlesPosition.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
