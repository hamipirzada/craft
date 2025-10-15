'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Text } from '@react-three/drei'
import * as THREE from 'three'

interface ServiceCard3DProps {
  position: [number, number, number]
  title: string
  color: string
  index: number
}

export default function ServiceCard3D({ position, title, color, index }: ServiceCard3DProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()

      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + index) * 0.3

      // Rotate on hover
      if (hovered) {
        meshRef.current.rotation.y += 0.02
        meshRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1)
      } else {
        meshRef.current.rotation.y += 0.005
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
    }
  })

  return (
    <group position={position}>
      <RoundedBox
        ref={meshRef}
        args={[2, 2, 0.3]}
        radius={0.1}
        smoothness={4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </RoundedBox>

      <Text
        position={[0, 0, 0.2]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {title}
      </Text>
    </group>
  )
}
