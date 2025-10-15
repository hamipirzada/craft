'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Dodecahedron, Icosahedron, Octahedron, Torus, TorusKnot } from '@react-three/drei'
import * as THREE from 'three'

interface ShapeProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
}

function FloatingDodecahedron({ position, scale = 1 }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.rotation.x = time * 0.2
      meshRef.current.rotation.y = time * 0.3
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.5
    }
  })

  return (
    <Dodecahedron ref={meshRef} args={[scale, 0]} position={position}>
      <meshStandardMaterial
        color="#149AFB"
        emissive="#149AFB"
        emissiveIntensity={0.2}
        wireframe
        transparent
        opacity={0.3}
      />
    </Dodecahedron>
  )
}

function FloatingIcosahedron({ position, scale = 1 }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.rotation.x = time * 0.15
      meshRef.current.rotation.z = time * 0.25
      meshRef.current.position.y = position[1] + Math.cos(time * 0.7) * 0.4
    }
  })

  return (
    <Icosahedron ref={meshRef} args={[scale, 0]} position={position}>
      <meshStandardMaterial
        color="#13EF95"
        emissive="#13EF95"
        emissiveIntensity={0.2}
        wireframe
        transparent
        opacity={0.3}
      />
    </Icosahedron>
  )
}

function FloatingOctahedron({ position, scale = 1 }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.rotation.y = time * 0.35
      meshRef.current.rotation.x = time * 0.15
      meshRef.current.position.y = position[1] + Math.sin(time * 0.6 + 1) * 0.6
    }
  })

  return (
    <Octahedron ref={meshRef} args={[scale, 0]} position={position}>
      <meshStandardMaterial
        color="#00E5FF"
        emissive="#00E5FF"
        emissiveIntensity={0.2}
        wireframe
        transparent
        opacity={0.3}
      />
    </Octahedron>
  )
}

function FloatingTorus({ position, scale = 1 }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.rotation.x = time * 0.2
      meshRef.current.rotation.y = time * 0.4
      meshRef.current.position.y = position[1] + Math.cos(time * 0.8) * 0.5
    }
  })

  return (
    <Torus ref={meshRef} args={[scale, scale * 0.3, 16, 32]} position={position}>
      <meshStandardMaterial
        color="#149AFB"
        emissive="#149AFB"
        emissiveIntensity={0.2}
        wireframe
        transparent
        opacity={0.25}
      />
    </Torus>
  )
}

function FloatingTorusKnot({ position, scale = 1 }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.rotation.x = time * 0.1
      meshRef.current.rotation.y = time * 0.2
      meshRef.current.position.y = position[1] + Math.sin(time * 0.4) * 0.7
    }
  })

  return (
    <TorusKnot ref={meshRef} args={[scale * 0.6, scale * 0.2, 64, 16]} position={position}>
      <meshStandardMaterial
        color="#13EF95"
        emissive="#13EF95"
        emissiveIntensity={0.2}
        wireframe
        transparent
        opacity={0.25}
      />
    </TorusKnot>
  )
}

export default function FloatingShapes() {
  return (
    <group>
      {/* Background shapes */}
      <FloatingDodecahedron position={[-8, 2, -5]} scale={1.5} />
      <FloatingIcosahedron position={[8, -2, -8]} scale={1.8} />
      <FloatingOctahedron position={[-10, -3, -10]} scale={2} />
      <FloatingTorus position={[10, 4, -6]} scale={1.2} />
      <FloatingTorusKnot position={[0, -5, -12]} scale={1.5} />

      {/* Mid-ground shapes */}
      <FloatingDodecahedron position={[6, 3, -3]} scale={1} />
      <FloatingIcosahedron position={[-7, -1, -4]} scale={1.2} />
      <FloatingOctahedron position={[4, -4, -7]} scale={1.5} />

      {/* Subtle foreground shapes */}
      <FloatingTorus position={[-5, 2, -2]} scale={0.8} />
      <FloatingTorusKnot position={[3, -2, -3]} scale={1} />
    </group>
  )
}
