'use client'

import dynamic from 'next/dynamic'

// Lazy load 3D component with SSR disabled
const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => null
})

export default function Scene3DWrapper() {
  return <Scene3D enableParticles enableShapes />
}
