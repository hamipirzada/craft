'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { useState } from 'react'

interface MorphingCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  gradient?: string
  delay?: number
}

export default function MorphingCard({
  icon: Icon,
  title,
  description,
  features = [],
  gradient = 'from-neural-cyan to-neural-purple',
  delay = 0,
}: MorphingCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative"
      onMouseMove={handleMouseMove}
    >
      {/* Liquid Border Animation */}
      <div className="liquid-border">
        <motion.div
          className="liquid-border-content p-8 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Mouse Follow Glow */}
          <motion.div
            className="absolute w-32 h-32 bg-neural-cyan/20 rounded-full blur-3xl pointer-events-none"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
            animate={{
              x: -64,
              y: -64,
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
          />

          {/* Icon with Morphing Effect */}
          <motion.div
            className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6 relative z-10`}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-8 h-8 text-white" />

            {/* Pulsing Glow */}
            <motion.div
              className="absolute inset-0 bg-neural-cyan/30 rounded-xl blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Title with Gradient */}
          <h3 className="text-2xl font-display font-bold text-gradient mb-4 relative z-10">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-6 relative z-10">{description}</p>

          {/* Features (Expandable) */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden relative z-10"
          >
            {features.length > 0 && (
              <div className="space-y-2 mb-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                      x: isExpanded ? 0 : -20,
                    }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start"
                  >
                    <span className="text-neural-cyan mr-2 mt-1">▸</span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Learn More Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 flex items-center space-x-2 text-neural-cyan font-semibold group-hover:text-neural-cyan-bright transition-colors"
          >
            <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
            <motion.span
              animate={{ x: isExpanded ? 0 : [0, 5, 0] }}
              transition={{ repeat: isExpanded ? 0 : Infinity, duration: 1.5 }}
            >
              {isExpanded ? '−' : '→'}
            </motion.span>
          </motion.button>

          {/* Noise Texture Overlay */}
          <div className="noise-texture absolute inset-0 pointer-events-none" />
        </motion.div>
      </div>

      {/* Floating Particles on Hover - Fixed positions to avoid hydration mismatch */}
      <motion.div
        className="absolute -inset-4 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {[
          { left: '20%', top: '15%' },
          { left: '80%', top: '25%' },
          { left: '50%', top: '75%' },
          { left: '15%', top: '60%' },
          { left: '85%', top: '80%' },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neural-cyan rounded-full"
            style={{
              left: pos.left,
              top: pos.top,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
