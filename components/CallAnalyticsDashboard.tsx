'use client'

import { motion } from 'framer-motion'
import { Phone, TrendingUp, Clock, CheckCircle, XCircle, PhoneCall } from 'lucide-react'

const callMetrics = [
  { label: 'Total Calls Today', value: '2,847', change: '+12.5%', icon: Phone, color: 'text-deepgram-accent-teal' },
  { label: 'Success Rate', value: '94.2%', change: '+3.2%', icon: CheckCircle, color: 'text-green-500' },
  { label: 'Avg. Call Duration', value: '3:42', change: '-0:15', icon: Clock, color: 'text-deepgram-accent-blue' },
  { label: 'Leads Qualified', value: '1,284', change: '+18.3%', icon: TrendingUp, color: 'text-deepgram-accent-teal' },
]

const recentCalls = [
  { id: 1, name: 'John Smith', time: '2 mins ago', status: 'qualified', duration: '4:23', sentiment: 'positive' },
  { id: 2, name: 'Sarah Johnson', time: '5 mins ago', status: 'callback', duration: '2:18', sentiment: 'neutral' },
  { id: 3, name: 'Mike Davis', time: '8 mins ago', status: 'qualified', duration: '5:47', sentiment: 'positive' },
  { id: 4, name: 'Emily Chen', time: '12 mins ago', status: 'not-interested', duration: '1:34', sentiment: 'negative' },
  { id: 5, name: 'Robert Wilson', time: '15 mins ago', status: 'qualified', duration: '6:12', sentiment: 'positive' },
]

const hourlyData = [
  { hour: '9AM', calls: 120 },
  { hour: '10AM', calls: 180 },
  { hour: '11AM', calls: 240 },
  { hour: '12PM', calls: 200 },
  { hour: '1PM', calls: 150 },
  { hour: '2PM', calls: 280 },
  { hour: '3PM', calls: 320 },
  { hour: '4PM', calls: 290 },
]

export default function CallAnalyticsDashboard() {
  const maxCalls = Math.max(...hourlyData.map(d => d.calls))

  return (
    <div className="w-full">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {callMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card-deepgram p-4 sm:p-6 hover-lift"
          >
            <div className="flex items-start justify-between mb-3">
              <metric.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${metric.color}`} />
              <span className={`text-xs sm:text-sm font-semibold ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change}
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-deepgram-text-primary mb-1 font-display">
              {metric.value}
            </div>
            <div className="text-xs sm:text-sm text-deepgram-text-muted">{metric.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Call Volume Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-deepgram p-6 sm:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-deepgram-text-primary">Hourly Call Volume</h3>
            <PhoneCall className="w-5 h-5 text-deepgram-accent-teal" />
          </div>

          <div className="space-y-4">
            {hourlyData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-deepgram-text-muted w-12 sm:w-16">{data.hour}</span>
                  <div className="flex-1 mx-3 sm:mx-4 h-8 sm:h-10 bg-deepgram-dark-lighter rounded-lg overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(data.calls / maxCalls) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      className="h-full bg-deepgram-gradient rounded-lg flex items-center justify-end pr-3"
                    >
                      <span className="text-xs sm:text-sm font-bold text-white">{data.calls}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Calls List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-deepgram p-6 sm:p-8"
        >
          <h3 className="text-lg sm:text-xl font-bold text-deepgram-text-primary mb-6">Recent Calls</h3>

          <div className="space-y-4">
            {recentCalls.map((call, index) => (
              <motion.div
                key={call.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 sm:p-4 bg-deepgram-dark-lighter rounded-lg hover:bg-deepgram-dark-lighter/80 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="text-sm sm:text-base font-semibold text-deepgram-text-primary truncate">
                      {call.name}
                    </p>
                    {call.status === 'qualified' && (
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    )}
                    {call.status === 'not-interested' && (
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-deepgram-text-muted">
                    <span>{call.time}</span>
                    <span>•</span>
                    <span>{call.duration}</span>
                  </div>
                </div>
                <div className="ml-3 flex-shrink-0">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    call.status === 'qualified' ? 'bg-green-500/20 text-green-400' :
                    call.status === 'callback' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {call.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
