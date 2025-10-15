'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface TestimonialCard3DProps {
  quote: string
  author: string
  role: string
  company: string
  rating: number
  delay?: number
}

export default function TestimonialCard3D({
  quote,
  author,
  role,
  company,
  rating,
  delay = 0
}: TestimonialCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    const rotateXValue = ((y - 0.5) * -20)
    const rotateYValue = ((x - 0.5) * 20)

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8, z: -100 }}
      whileInView={{ opacity: 1, scale: 1, z: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="h-full"
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Main card */}
        <div
          className="card-deepgram p-8 h-full relative overflow-hidden"
          style={{ transform: 'translateZ(40px)' }}
        >
          {/* Quote icon with depth */}
          <motion.div
            animate={{
              translateZ: isHovered ? 80 : 60,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-6 right-6"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Quote className="w-12 h-12 text-deepgram-accent-teal opacity-20" />
            <div
              className="absolute inset-0 bg-deepgram-accent-teal/20 blur-xl"
              style={{ transform: 'translateZ(-10px)' }}
            />
          </motion.div>

          {/* Rating stars */}
          <motion.div
            className="flex items-center mb-4"
            style={{ transform: 'translateZ(50px)' }}
          >
            {[...Array(rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.1 * i }}
                animate={{
                  translateZ: isHovered ? 70 : 50,
                }}
              >
                <Star className="w-5 h-5 text-deepgram-accent-teal fill-current" />
              </motion.div>
            ))}
          </motion.div>

          {/* Quote text */}
          <motion.p
            className="text-deepgram-text-light mb-6 leading-relaxed relative z-10"
            style={{ transform: 'translateZ(30px)' }}
          >
            "{quote}"
          </motion.p>

          {/* Author info */}
          <motion.div style={{ transform: 'translateZ(40px)' }} className="relative z-10">
            <p className="font-bold text-deepgram-text-primary text-lg">{author}</p>
            <p className="text-sm text-deepgram-text-muted">{role}</p>
            <p className="text-sm text-deepgram-accent-teal font-semibold mt-1">{company}</p>
          </motion.div>

          {/* Gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-deepgram-accent-blue/10 to-deepgram-accent-teal/10"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Depth layers */}
          <div
            className="absolute inset-0 border border-deepgram-border/30 rounded-2xl"
            style={{ transform: 'translateZ(10px)' }}
          />
          <div
            className="absolute inset-0 border border-deepgram-border/20 rounded-2xl"
            style={{ transform: 'translateZ(-5px)' }}
          />
        </div>

        {/* Shadow layer */}
        <div
          className="absolute inset-0 bg-deepgram-dark/80 rounded-2xl blur-xl"
          style={{ transform: 'translateZ(-30px)' }}
        />
      </motion.div>
    </motion.div>
  )
}
