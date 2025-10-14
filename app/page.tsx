'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Brain, Phone, Target,
  Sparkles, ArrowRight, Users, Clock, Shield,
  Zap, Building2, MessageSquare, Calendar, DollarSign,
  Star, PlayCircle, Globe, Award, Cpu, LineChart
} from 'lucide-react'
import DeepgramCard from '@/components/DeepgramCard'
import CallAnalyticsDashboard from '@/components/CallAnalyticsDashboard'
import LeadScoringDashboard from '@/components/LeadScoringDashboard'
import RealTimeMetrics from '@/components/RealTimeMetrics'

// Trusted by logos (simulate - replace with actual logos)
const trustedCompanies = [
  'Real Estate Corp', 'PropTech Inc', 'HomeVentures', 'Estate Global', 'RealtyPro', 'PropertyHub'
]

const coreServices = [
  {
    icon: Phone,
    title: 'AI Voice Agents',
    description: 'Human-like AI agents that handle calls 24/7, qualify leads, answer questions, and book appointments automatically.',
    features: [
      'Natural conversation flow',
      'Multi-language support',
      'Sentiment analysis',
      'CRM auto-sync',
      'Real-time transcription'
    ],
  },
  {
    icon: Brain,
    title: 'Intelligent Lead Scoring',
    description: 'ML-powered lead qualification that identifies high-intent prospects and prioritizes your outreach efforts.',
    features: [
      'Predictive analytics',
      'Behavioral scoring',
      'Intent signals',
      'Auto-categorization',
      'Lead enrichment'
    ],
  },
  {
    icon: MessageSquare,
    title: 'Multi-Channel Automation',
    description: 'Seamlessly engage leads across voice, SMS, email, and WhatsApp with unified AI-powered conversations.',
    features: [
      'Omnichannel orchestration',
      'Follow-up sequences',
      'Personalized messaging',
      'Campaign automation',
      'Response tracking'
    ],
  },
  {
    icon: LineChart,
    title: 'Analytics & Insights',
    description: 'Comprehensive dashboards with real-time metrics, conversion tracking, and actionable business intelligence.',
    features: [
      'Real-time dashboards',
      'Call analytics',
      'ROI tracking',
      'Custom reports',
      'Performance insights'
    ],
  },
]

const useCases = [
  {
    icon: Building2,
    title: 'Real Estate',
    stat: '300% increase',
    description: 'Automate property inquiries, schedule viewings, and qualify buyers 24/7',
    results: '5000+ calls/month'
  },
  {
    icon: Calendar,
    title: 'Healthcare',
    stat: '90% accuracy',
    description: 'Patient appointment booking, reminders, and follow-up calls',
    results: '2000+ bookings/month'
  },
  {
    icon: DollarSign,
    title: 'Financial Services',
    stat: '60% cost reduction',
    description: 'Lead qualification, loan inquiries, and client onboarding',
    results: '40% faster processing'
  },
  {
    icon: Users,
    title: 'Sales Teams',
    stat: '4x more leads',
    description: 'Outbound prospecting, lead nurturing, and meeting scheduling',
    results: '85% connect rate'
  },
]

const features = [
  { icon: Zap, title: 'Lightning Fast Setup', desc: 'Deploy in 15 minutes, no coding required' },
  { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 compliant, HIPAA ready' },
  { icon: Globe, title: '50+ Languages', desc: 'Global reach with native fluency' },
  { icon: Cpu, title: 'Advanced AI Models', desc: 'GPT-4 powered conversational AI' },
  { icon: Target, title: '99.9% Uptime', desc: 'Mission-critical reliability' },
  { icon: Award, title: 'Award Winning', desc: 'Recognized AI innovation leader' },
]

const testimonials = [
  {
    quote: "HyperCraft's AI agents transformed our lead generation. We now handle 5x more inquiries without adding staff.",
    author: "Sarah Mitchell",
    role: "VP Sales, PropTech Solutions",
    company: "Real Estate Corp",
    rating: 5
  },
  {
    quote: "The ROI was immediate. Within 30 days, we saw a 300% increase in qualified leads and 60% cost reduction.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "HomeVentures",
    rating: 5
  },
  {
    quote: "Best decision we made. The AI is so natural, our clients can't tell it's not human. Game changer.",
    author: "Emily Rodriguez",
    role: "CEO",
    company: "RealtyPro",
    rating: 5
  },
]

const stats = [
  { value: '10M+', label: 'Calls Processed', icon: Phone },
  { value: '50K+', label: 'Leads Qualified', icon: Users },
  { value: '99.2%', label: 'Satisfaction Score', icon: Star },
  { value: '24/7', label: 'Always Available', icon: Clock },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section - AI Industry Style */}
      <section className="hero-deepgram section-padding">
        <div className="starry-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deepgram-dark/50 to-deepgram-dark" />

        <div className="container-deepgram relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6 sm:mb-8"
            >
              <div className="inline-flex items-center space-x-2 badge-deepgram">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-deepgram-accent-teal" />
                <span className="text-xs sm:text-sm text-deepgram-text-secondary font-semibold">
                  AI-Powered Business Automation Platform
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-deepgram-text-primary mb-4 sm:mb-6 leading-tight text-center px-4"
            >
              Turn Every Lead Into a
              <br className="hidden sm:block" />
              <span className="text-gradient-deepgram"> Qualified Conversation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-deepgram-text-muted mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-center px-4"
            >
              AI voice agents that work 24/7 to call, qualify, and convert your leads—while you focus on closing deals.
              No more missed opportunities. No more cold leads going stale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto btn-primary-deepgram text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 flex items-center justify-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto btn-secondary-deepgram text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 flex items-center justify-center space-x-2"
              >
                <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Social Proof - Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="glass-deepgram rounded-lg sm:rounded-xl p-4 sm:p-6 hover-lift text-center"
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-deepgram-accent-teal mx-auto mb-2 sm:mb-3" />
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gradient-deepgram mb-1 sm:mb-2 font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-deepgram-text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-deepgram-dark-lighter border-y border-deepgram-border">
        <div className="container-deepgram">
          <p className="text-center text-deepgram-text-muted text-xs sm:text-sm mb-6 sm:mb-8 px-4">
            Trusted by leading businesses worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center px-4">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-deepgram-text-muted hover:text-deepgram-accent-teal transition-colors text-xs sm:text-sm font-semibold"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-deepgram-dark">
        <div className="container-deepgram">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 text-deepgram-text-primary"
            >
              Your Sales Team Can't Scale. <span className="text-gradient-deepgram">Your AI Can.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-deepgram-text-muted leading-relaxed mb-8 sm:mb-12"
            >
              Every day, your team misses calls. Leads go cold. Opportunities slip away.
              Meanwhile, your competitors are using AI to handle 10x more leads—with better results and lower costs.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { stat: '67%', label: 'of leads never get called back' },
                { stat: '$4.2M', label: 'average revenue lost annually' },
                { stat: '5 mins', label: 'optimal response time (most miss it)' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="card-deepgram text-center p-4 sm:p-6"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient-deepgram mb-2 font-display">
                    {item.stat}
                  </div>
                  <p className="text-xs sm:text-sm text-deepgram-text-muted">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-deepgram-dark-lighter">
        <div className="container-deepgram">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 text-deepgram-text-primary">
              Built for <span className="text-gradient-deepgram">Every Industry</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-deepgram-text-muted max-w-3xl mx-auto">
              AI calling agents that understand your business and speak your language
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gradient-border-deepgram hover-lift-strong"
              >
                <div className="gradient-border-content p-6 sm:p-8">
                  <useCase.icon className="w-10 h-10 sm:w-12 sm:h-12 text-deepgram-accent-teal mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-deepgram-text-primary mb-2">{useCase.title}</h3>
                  <div className="text-2xl sm:text-3xl font-black text-gradient-deepgram mb-3 font-display">
                    {useCase.stat}
                  </div>
                  <p className="text-sm text-deepgram-text-muted mb-4">{useCase.description}</p>
                  <div className="badge-deepgram text-xs">{useCase.results}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="section-padding bg-deepgram-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-deepgram opacity-30" />

        <div className="container-deepgram relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 text-deepgram-text-primary">
              Everything You Need to <span className="text-gradient-deepgram">Scale Smarter</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-deepgram-text-muted max-w-3xl mx-auto">
              Enterprise-grade AI platform built for performance, reliability, and results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
            {coreServices.map((service, index) => (
              <DeepgramCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 0.1}
                variant="feature"
              />
            ))}
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-deepgram hover-lift flex items-start space-x-4 p-4 sm:p-6"
              >
                <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-deepgram-accent-teal flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-deepgram-text-primary mb-1">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-deepgram-text-muted">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-deepgram-dark-lighter">
        <div className="container-deepgram">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 text-deepgram-text-primary">
              Loved by <span className="text-gradient-deepgram">Teams Worldwide</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-deepgram-text-muted max-w-3xl mx-auto">
              Join thousands of businesses transforming their sales with AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-deepgram hover-lift p-6 sm:p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-deepgram-accent-teal fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-deepgram-text-light mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-sm sm:text-base font-bold text-deepgram-text-primary">{testimonial.author}</p>
                  <p className="text-xs sm:text-sm text-deepgram-text-muted">{testimonial.role}</p>
                  <p className="text-xs sm:text-sm text-deepgram-accent-teal">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Time Metrics Section */}
      <section className="section-padding bg-deepgram-dark">
        <div className="container-deepgram">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 text-deepgram-text-primary">
              Live Performance <span className="text-gradient-deepgram">Metrics</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-deepgram-text-muted max-w-3xl mx-auto">
              Monitor your AI agents in real-time with comprehensive analytics and insights
            </p>
          </motion.div>

          <div className="px-4">
            <RealTimeMetrics />
          </div>
        </div>
      </section>

      {/* Call Analytics Dashboard Section */}
      <section className="section-padding bg-deepgram-dark-lighter">
        <div className="container-deepgram">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 text-deepgram-text-primary">
              Call Analytics & <span className="text-gradient-deepgram">Insights</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-deepgram-text-muted max-w-3xl mx-auto">
              Deep dive into call performance, success rates, and conversation quality
            </p>
          </motion.div>

          <div className="px-4">
            <CallAnalyticsDashboard />
          </div>
        </div>
      </section>

      {/* Lead Scoring Dashboard Section */}
      <section className="section-padding bg-deepgram-dark">
        <div className="container-deepgram">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 text-deepgram-text-primary">
              Lead Intelligence <span className="text-gradient-deepgram">Dashboard</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-deepgram-text-muted max-w-3xl mx-auto">
              AI-powered lead scoring and qualification to prioritize your highest-value opportunities
            </p>
          </motion.div>

          <div className="px-4">
            <LeadScoringDashboard />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-deepgram-dark-lighter">
        <div className="container-deepgram px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border-deepgram max-w-5xl mx-auto"
          >
            <div className="gradient-border-content p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-deepgram-accent-blue/10 to-deepgram-accent-teal/10" />

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 text-deepgram-text-primary">
                  Ready to <span className="text-gradient-deepgram">10x Your Sales</span>?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-deepgram-text-muted mb-4 max-w-2xl mx-auto">
                  Join 500+ businesses using AI to scale their sales operations.
                  Start your free 14-day trial—no credit card required.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-deepgram-accent-teal mb-8 sm:mb-10 font-semibold">
                  📍 Srinagar, Jammu & Kashmir | 🌐 Serving Globally | 📞 +91-9622415387
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto btn-primary-deepgram text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 flex items-center justify-center space-x-2"
                    >
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                  </Link>
                  <a href="tel:+919622415387" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto btn-secondary-deepgram text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Talk to Sales</span>
                    </motion.button>
                  </a>
                </div>
                <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-deepgram-text-muted">
                  ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
