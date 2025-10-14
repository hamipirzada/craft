'use client'

import { motion } from 'framer-motion'
import { TrendingUp, User, Star, Zap } from 'lucide-react'

const leadDistribution = [
  { category: 'Hot Leads', count: 342, percentage: 28, color: 'bg-red-500', textColor: 'text-red-400' },
  { category: 'Warm Leads', count: 567, percentage: 46, color: 'bg-yellow-500', textColor: 'text-yellow-400' },
  { category: 'Cold Leads', count: 234, percentage: 19, color: 'bg-blue-500', textColor: 'text-blue-400' },
  { category: 'Nurture', count: 89, percentage: 7, color: 'bg-purple-500', textColor: 'text-purple-400' },
]

const topLeads = [
  { id: 1, name: 'Acme Corp', score: 98, industry: 'Real Estate', value: '$45K', engagement: 'Very High' },
  { id: 2, name: 'TechStart Inc', score: 95, industry: 'SaaS', value: '$38K', engagement: 'High' },
  { id: 3, name: 'Global Finance', score: 92, industry: 'Finance', value: '$52K', engagement: 'Very High' },
  { id: 4, name: 'HealthCare Plus', score: 89, industry: 'Healthcare', value: '$31K', engagement: 'High' },
  { id: 5, name: 'Retail Giants', score: 85, industry: 'Retail', value: '$28K', engagement: 'Medium' },
]

const scoringFactors = [
  { factor: 'Engagement Level', weight: 35, score: 92 },
  { factor: 'Budget Match', weight: 25, score: 88 },
  { factor: 'Decision Timeline', weight: 20, score: 75 },
  { factor: 'Company Size', weight: 15, score: 95 },
  { factor: 'Industry Fit', weight: 5, score: 100 },
]

export default function LeadScoringDashboard() {
  return (
    <div className="w-full">
      {/* Lead Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-deepgram p-6 sm:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-deepgram-text-primary">Lead Distribution</h3>
            <TrendingUp className="w-5 h-5 text-deepgram-accent-teal" />
          </div>

          <div className="space-y-6">
            {leadDistribution.map((lead, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm sm:text-base text-deepgram-text-light font-semibold">{lead.category}</span>
                  <div className="flex items-center space-x-3">
                    <span className={`text-sm sm:text-base font-bold ${lead.textColor}`}>{lead.count}</span>
                    <span className="text-xs sm:text-sm text-deepgram-text-muted">({lead.percentage}%)</span>
                  </div>
                </div>
                <div className="w-full h-3 sm:h-4 bg-deepgram-dark-lighter rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lead.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                    className={`h-full ${lead.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-deepgram-border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-deepgram-text-muted">Total Leads</span>
              <span className="text-2xl sm:text-3xl font-black text-gradient-deepgram font-display">
                {leadDistribution.reduce((sum, lead) => sum + lead.count, 0)}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Scoring Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-deepgram p-6 sm:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-deepgram-text-primary">Scoring Factors</h3>
            <Star className="w-5 h-5 text-deepgram-accent-teal" />
          </div>

          <div className="space-y-5">
            {scoringFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm sm:text-base text-deepgram-text-light">{factor.factor}</span>
                    <span className="text-xs text-deepgram-text-muted">({factor.weight}%)</span>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-deepgram-accent-teal">{factor.score}</span>
                </div>
                <div className="relative w-full h-2 sm:h-3 bg-deepgram-dark-lighter rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${factor.score}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                    className="h-full bg-deepgram-gradient rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Leads Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-deepgram p-6 sm:p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-deepgram-text-primary">Top Qualified Leads</h3>
          <Zap className="w-5 h-5 text-deepgram-accent-teal" />
        </div>

        {/* Mobile: Card View */}
        <div className="block lg:hidden space-y-4">
          {topLeads.map((lead, index) => (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-deepgram-dark-lighter rounded-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-deepgram-gradient flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-deepgram-text-primary text-sm">{lead.name}</p>
                    <p className="text-xs text-deepgram-text-muted">{lead.industry}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-gradient-deepgram font-display">{lead.score}</div>
                  <div className="text-xs text-deepgram-text-muted">Score</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-deepgram-text-muted">Value: <span className="text-deepgram-accent-teal font-semibold">{lead.value}</span></span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  lead.engagement === 'Very High' ? 'bg-green-500/20 text-green-400' :
                  lead.engagement === 'High' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {lead.engagement}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-deepgram-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-deepgram-text-muted">Rank</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-deepgram-text-muted">Company</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-deepgram-text-muted">Industry</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-deepgram-text-muted">Score</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-deepgram-text-muted">Value</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-deepgram-text-muted">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {topLeads.map((lead, index) => (
                <motion.tr
                  key={lead.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-deepgram-border/50 hover:bg-deepgram-dark-lighter/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-deepgram-gradient text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-deepgram-gradient flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-deepgram-text-primary">{lead.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-deepgram-text-muted">{lead.industry}</td>
                  <td className="py-4 px-4">
                    <span className="text-2xl font-black text-gradient-deepgram font-display">{lead.score}</span>
                  </td>
                  <td className="py-4 px-4 text-deepgram-accent-teal font-semibold">{lead.value}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      lead.engagement === 'Very High' ? 'bg-green-500/20 text-green-400' :
                      lead.engagement === 'High' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {lead.engagement}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
