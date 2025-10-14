'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface SolutionCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  gradient: string
  delay?: number
}

export default function SolutionCard({
  icon: Icon,
  title,
  description,
  features,
  gradient,
  delay = 0
}: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-2xl p-6 group"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />

      {/* Content */}
      <div className="relative z-10">
        <div className={`w-14 h-14 ${gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-300 flex items-start">
              <span className="text-primary-400 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold group/link"
        >
          Learn More
          <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Border */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/20 transition-colors" />
    </motion.div>
  )
}
