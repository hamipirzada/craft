'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  opacity: number
}

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const particleIdRef = useRef(0)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only show custom cursor on desktop
    const checkDevice = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      setIsVisible(!isTouchDevice && window.innerWidth > 1024)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)

      // Create particle trail
      if (Math.random() > 0.7) {
        const newParticle: Particle = {
          id: particleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
        }

        setParticles(prev => [...prev, newParticle])

        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id))
        }, 800)
      }
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return

      // Check if target is an element that supports closest
      if (typeof target.closest !== 'function') return

      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return

      // Check if leaving an interactive element
      if (typeof target.closest !== 'function') {
        setIsHovering(false)
        return
      }

      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [isVisible, cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-0 border-2 border-neural-cyan rounded-full"
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.8 : 0.6,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Inner Dot */}
        <motion.div
          className="absolute inset-0 m-auto w-1.5 h-1.5 bg-neural-cyan rounded-full"
          animate={{
            scale: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-neural-cyan/30 rounded-full blur-md"
          animate={{
            scale: isHovering ? 2 : 0.5,
            opacity: isHovering ? 0.4 : 0.2,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Particle Trail */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="fixed w-1 h-1 bg-neural-cyan rounded-full pointer-events-none z-[9998]"
          style={{
            left: particle.x,
            top: particle.y,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      ))}
    </>
  )
}
