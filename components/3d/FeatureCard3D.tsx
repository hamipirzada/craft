'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureCard3DProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  delay?: number
  gradient?: string
}

export default function FeatureCard3D({
  icon: Icon,
  title,
  description,
  features = [],
  delay = 0,
  gradient = 'from-deepgram-accent-blue to-deepgram-accent-teal'
}: FeatureCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0.5)
    mouseY.set(0.5)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, z: -100 }}
      whileInView={{ opacity: 1, y: 0, z: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
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
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        className="relative h-full"
      >
        {/* Main card */}
        <div
          className="card-deepgram-feature h-full relative overflow-hidden group"
          style={{ transform: 'translateZ(50px)' }}
        >
          {/* Animated gradient background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0`}
            animate={{ opacity: isHovered ? 0.1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating icon */}
          <motion.div
            animate={{
              translateZ: isHovered ? 60 : 40,
              rotateZ: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.8 }}
            className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6 relative`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Icon className="w-8 h-8 text-white" />

            {/* Icon shadow layer */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 rounded-xl blur-sm"
              style={{ transform: 'translateZ(-10px)' }}
            />
          </motion.div>

          {/* Content with depth */}
          <motion.div
            style={{ transform: 'translateZ(30px)' }}
            className="relative z-10"
          >
            <h3 className="text-2xl font-bold text-deepgram-text-primary mb-3">
              {title}
            </h3>
            <p className="text-deepgram-text-muted mb-6 leading-relaxed">
              {description}
            </p>

            {features.length > 0 && (
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 0.1 * idx }}
                    className="flex items-start text-sm"
                  >
                    <span className="text-deepgram-accent-teal mr-2 mt-0.5">✓</span>
                    <span className="text-deepgram-text-secondary">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* Depth layers */}
          <div
            className="absolute inset-0 border border-deepgram-border/30 rounded-2xl pointer-events-none"
            style={{ transform: 'translateZ(10px)' }}
          />
          <div
            className="absolute inset-0 border border-deepgram-border/20 rounded-2xl pointer-events-none"
            style={{ transform: 'translateZ(0px)' }}
          />
          <div
            className="absolute inset-0 border border-deepgram-border/10 rounded-2xl pointer-events-none"
            style={{ transform: 'translateZ(-10px)' }}
          />
        </div>

        {/* Shadow card */}
        <div
          className="absolute inset-0 bg-black/20 rounded-2xl blur-xl"
          style={{ transform: 'translateZ(-50px)' }}
        />
      </motion.div>
    </motion.div>
  )
}
