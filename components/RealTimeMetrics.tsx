'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Activity, Users, DollarSign, Target } from 'lucide-react'

export default function RealTimeMetrics() {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const metrics = [
    {
      label: 'Active Calls',
      value: '47',
      subtext: '12 in queue',
      icon: Activity,
      color: 'text-deepgram-accent-teal',
      bgColor: 'bg-deepgram-accent-teal/20'
    },
    {
      label: 'Agents Online',
      value: '8/10',
      subtext: '80% capacity',
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      label: 'Revenue Today',
      value: '$24.5K',
      subtext: '+$2.3K vs yesterday',
      icon: DollarSign,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      label: 'Conversion Rate',
      value: '34.2%',
      subtext: 'Above 30% target',
      icon: Target,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    },
  ]

  return (
    <div className="w-full">
      {/* Live Indicator */}
      <div className="flex items-center justify-center mb-6 sm:mb-8">
        <motion.div
          animate={{ scale: pulse ? 1.2 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center space-x-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2"
        >
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-red-400">LIVE</span>
        </motion.div>
      </div>

      {/* Real-Time Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="gradient-border-deepgram hover-lift-strong"
          >
            <div className="gradient-border-content p-6 sm:p-8 text-center">
              <motion.div
                animate={{ rotate: pulse ? 360 : 0 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 sm:w-16 sm:h-16 ${metric.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <metric.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${metric.color}`} />
              </motion.div>

              <motion.div
                key={pulse ? 'pulse-on' : 'pulse-off'}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient-deepgram mb-2 font-display"
              >
                {metric.value}
              </motion.div>

              <div className="text-sm sm:text-base font-semibold text-deepgram-text-primary mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-deepgram-text-muted">
                {metric.subtext}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Live Activity Feed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-deepgram p-6 sm:p-8 mt-6 sm:mt-8"
      >
        <h3 className="text-lg sm:text-xl font-bold text-deepgram-text-primary mb-6 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-deepgram-accent-teal" />
          Live Activity Feed
        </h3>

        <div className="space-y-3">
          {[
            { event: 'New lead qualified', company: 'Tech Solutions Inc', time: 'Just now', type: 'success' },
            { event: 'Call connected', company: 'Global Enterprises', time: '30 sec ago', type: 'active' },
            { event: 'Meeting scheduled', company: 'Innovation Corp', time: '1 min ago', type: 'success' },
            { event: 'Follow-up required', company: 'Digital Marketing Ltd', time: '2 min ago', type: 'pending' },
            { event: 'Call completed', company: 'Real Estate Group', time: '3 min ago', type: 'completed' },
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center justify-between p-3 sm:p-4 bg-deepgram-dark-lighter rounded-lg"
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  activity.type === 'success' ? 'bg-green-500 animate-pulse' :
                  activity.type === 'active' ? 'bg-blue-500 animate-pulse' :
                  activity.type === 'pending' ? 'bg-yellow-500' :
                  'bg-gray-500'
                }`} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm sm:text-base text-deepgram-text-light font-semibold truncate">
                    {activity.event}
                  </p>
                  <p className="text-xs text-deepgram-text-muted truncate">{activity.company}</p>
                </div>
              </div>
              <span className="text-xs text-deepgram-text-muted ml-3 flex-shrink-0">{activity.time}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
