'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface DeepgramCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  delay?: number
  variant?: 'default' | 'feature' | 'pricing'
}

export default function DeepgramCard({
  icon: Icon,
  title,
  description,
  features = [],
  delay = 0,
  variant = 'default',
}: DeepgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`group ${variant === 'feature' ? 'card-deepgram-feature' : 'card-deepgram'} hover-lift glow-deepgram`}
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-14 h-14 rounded-xl bg-deepgram-gradient flex items-center justify-center mb-6 shadow-deepgram-glow"
      >
        <Icon className="w-7 h-7 text-white" />
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-deepgram-text-primary mb-4 group-hover:text-gradient-deepgram transition-all duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-deepgram-text-muted mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features List */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + index * 0.05 }}
              className="flex items-start text-sm"
            >
              <span className="text-deepgram-accent-teal mr-2 mt-0.5 flex-shrink-0">✓</span>
              <span className="text-deepgram-text-light">{feature}</span>
            </motion.li>
          ))}
        </ul>
      )}

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-deepgram-accent-blue/30 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  )
}
