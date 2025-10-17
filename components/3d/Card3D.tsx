'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface Card3DProps {
  icon?: LucideIcon
  title: string
  description?: string
  value?: string
  gradient?: string
  delay?: number
  children?: React.ReactNode
  className?: string
}

export default function Card3D({
  icon: Icon,
  title,
  description,
  value,
  gradient = 'from-deepgram-accent-blue to-deepgram-accent-teal',
  delay = 0,
  children,
  className = ''
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = ((y - centerY) / centerY) * -10
    const rotateYValue = ((x - centerX) / centerX) * 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative h-full ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="card-deepgram hover-lift p-6 relative overflow-hidden h-full flex flex-col"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          style={{ transform: 'translateZ(-10px)' }}
        />

        {/* Content */}
        <div style={{ transform: 'translateZ(50px)' }} className="relative z-10 flex-1 flex flex-col">
          {Icon && (
            <motion.div
              animate={{ rotateZ: rotateY * 0.5 }}
              className="w-12 h-12 mb-4"
            >
              <Icon className={`w-full h-full text-deepgram-accent-teal`} />
            </motion.div>
          )}

          {value && (
            <div className="text-4xl font-black text-gradient-deepgram mb-2 font-display">
              {value}
            </div>
          )}

          <h3 className="text-xl font-bold text-deepgram-text-primary mb-2">
            {title}
          </h3>

          {description && (
            <p className="text-sm text-deepgram-text-muted flex-1">{description}</p>
          )}

          {children}
        </div>

        {/* 3D depth layers */}
        <div
          className="absolute inset-0 border border-deepgram-border rounded-2xl"
          style={{ transform: 'translateZ(-5px)' }}
        />
        <div
          className="absolute inset-0 border border-deepgram-border/50 rounded-2xl"
          style={{ transform: 'translateZ(-10px)' }}
        />
      </motion.div>
    </motion.div>
  )
}
