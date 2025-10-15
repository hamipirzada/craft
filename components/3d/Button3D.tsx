'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface Button3DProps {
  children: React.ReactNode
  icon?: LucideIcon
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  href?: string
}

export default function Button3D({
  children,
  icon: Icon,
  onClick,
  variant = 'primary',
  className = '',
  href
}: Button3DProps) {
  const [isPressed, setIsPressed] = useState(false)

  const buttonClass = variant === 'primary'
    ? 'btn-primary-deepgram'
    : 'btn-secondary-deepgram'

  const content = (
    <motion.button
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      animate={{
        translateZ: isPressed ? -10 : 0,
        scale: isPressed ? 0.95 : 1,
      }}
      whileHover={{
        translateY: -5,
        translateZ: 20,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onClick={onClick}
      className={`${buttonClass} ${className} relative overflow-hidden group`}
      style={{
        transformStyle: 'preserve-3d',
        transform: 'translateZ(0)',
      }}
    >
      {/* 3D depth layers */}
      <div
        className={`absolute inset-0 ${
          variant === 'primary'
            ? 'bg-deepgram-accent-blue'
            : 'bg-deepgram-border'
        } rounded-lg`}
        style={{ transform: 'translateZ(-5px)' }}
      />
      <div
        className={`absolute inset-0 ${
          variant === 'primary'
            ? 'bg-deepgram-accent-blue/70'
            : 'bg-deepgram-border/70'
        } rounded-lg`}
        style={{ transform: 'translateZ(-10px)' }}
      />
      <div
        className={`absolute inset-0 ${
          variant === 'primary'
            ? 'bg-deepgram-accent-blue/40'
            : 'bg-deepgram-border/40'
        } rounded-lg`}
        style={{ transform: 'translateZ(-15px)' }}
      />

      {/* Content */}
      <span
        className="relative z-10 flex items-center justify-center space-x-2"
        style={{ transform: 'translateZ(10px)' }}
      >
        <span>{children}</span>
        {Icon && <Icon className="w-5 h-5" />}
      </span>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    )
  }

  return content
}
