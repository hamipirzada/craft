'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

interface TechItem {
  name: string
  color: string
  position: [number, number, number]
}

const techStack: TechItem[] = [
  { name: 'React', color: '#61DAFB', position: [-3, 2, 0] },
  { name: 'Next.js', color: '#000000', position: [3, 2, 0] },
  { name: 'TypeScript', color: '#3178C6', position: [0, 3, -1] },
  { name: 'Node.js', color: '#339933', position: [-3, 0, 0] },
  { name: 'Python', color: '#3776AB', position: [3, 0, 0] },
  { name: 'AWS', color: '#FF9900', position: [0, 1, 1] },
  { name: 'Docker', color: '#2496ED', position: [-3, -2, 0] },
  { name: 'MongoDB', color: '#47A248', position: [3, -2, 0] },
  { name: 'PostgreSQL', color: '#4169E1', position: [0, -3, -1] },
  { name: 'GraphQL', color: '#E10098', position: [-2, -1, 1] },
  { name: 'TensorFlow', color: '#FF6F00', position: [2, -1, 1] },
  { name: 'Kubernetes', color: '#326CE5', position: [0, 0, -2] },
]

function TechBox({ name, color, position, index }: TechItem & { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()

      // Orbit around center
      const angle = time * 0.2 + (index * Math.PI * 2) / techStack.length
      const radius = 4
      meshRef.current.position.x = Math.cos(angle) * radius
      meshRef.current.position.z = Math.sin(angle) * radius
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + index) * 0.5

      // Rotate to face center
      meshRef.current.lookAt(0, meshRef.current.position.y, 0)
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <RoundedBox args={[1.5, 0.8, 0.2]} radius={0.05} smoothness={4}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.6}
          roughness={0.4}
        />
      </RoundedBox>
      <Text
        position={[0, 0, 0.15]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {name}
      </Text>
    </group>
  )
}

export default function TechStack3D() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {techStack.map((tech, index) => (
        <TechBox key={tech.name} {...tech} index={index} />
      ))}

      {/* Center glow sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#149AFB"
          emissive="#149AFB"
          emissiveIntensity={1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  )
}
