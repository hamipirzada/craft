'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Brain, Phone, Target,
  Sparkles, ArrowRight, Users, Clock, Shield,
  Zap, Code, Cloud, Database,
  Star, Globe, Award, Cpu,
  Rocket, Server, Smartphone, Lock
} from 'lucide-react'
import DeepgramCard from '@/components/DeepgramCard'

// Lazy load 3D components for better performance
const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
  ssr: false,
  loading: () => null
})
const Card3D = dynamic(() => import('@/components/3d/Card3D'), {
  ssr: false,
  loading: () => <div className="card-deepgram p-6 animate-pulse" />
})
const FeatureCard3D = dynamic(() => import('@/components/3d/FeatureCard3D'), {
  ssr: false,
  loading: () => <div className="card-deepgram p-8 animate-pulse h-full" />
})
const TestimonialCard3D = dynamic(() => import('@/components/3d/TestimonialCard3D'), {
  ssr: false,
  loading: () => <div className="card-deepgram p-8 animate-pulse h-full" />
})
const Button3D = dynamic(() => import('@/components/3d/Button3D'), {
  ssr: false,
  loading: () => <button className="btn-primary-deepgram">Loading...</button>
})

// Trusted by logos (simulate - replace with actual logos)
const trustedCompanies = [
  'TechCorp', 'FinanceHub', 'HealthTech', 'E-Shop Global', 'EduLearn', 'CloudScale'
]

const coreServices = [
  {
    icon: Code,
    title: 'Web & Mobile Development',
    description: 'Full-stack development services for web, mobile, and progressive web apps using cutting-edge technologies.',
    features: [
      'React, Next.js, Vue.js',
      'iOS & Android apps',
      'Progressive Web Apps',
      'Responsive design',
      'API development'
    ],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions including chatbots, predictive analytics, computer vision, and NLP applications.',
    features: [
      'AI voice agents',
      'Predictive analytics',
      'Computer vision',
      'Natural language processing',
      'ML model training'
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions & DevOps',
    description: 'Cloud infrastructure, migration, optimization, and DevOps implementation for scalable operations.',
    features: [
      'AWS, Azure, GCP',
      'Cloud migration',
      'CI/CD pipelines',
      'Container orchestration',
      'Infrastructure as code'
    ],
  },
  {
    icon: Database,
    title: 'Data Analytics & BI',
    description: 'Transform data into insights with analytics, visualization, data warehousing, and business intelligence.',
    features: [
      'Data visualization',
      'Business intelligence',
      'Big data processing',
      'Real-time analytics',
      'Custom dashboards'
    ],
  },
]

const useCases = [
  {
    icon: Smartphone,
    title: 'E-Commerce',
    stat: '300% growth',
    description: 'Custom web and mobile e-commerce platforms with payment integration',
    results: '50+ stores launched'
  },
  {
    icon: Server,
    title: 'Enterprise',
    stat: '90% efficiency',
    description: 'Cloud migration, microservices architecture, and automation',
    results: '100+ servers managed'
  },
  {
    icon: Lock,
    title: 'FinTech',
    stat: '60% faster',
    description: 'Secure financial platforms, payment gateways, and blockchain',
    results: '99.99% uptime'
  },
  {
    icon: Rocket,
    title: 'Startups',
    stat: '4x faster MVP',
    description: 'Rapid prototyping, MVP development, and product scaling',
    results: '30+ startups launched'
  },
]

const features = [
  { icon: Zap, title: 'Rapid Development', desc: 'Agile methodology, quick iterations' },
  { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 compliant, data protection' },
  { icon: Globe, title: 'Global Deployment', desc: 'Multi-region cloud infrastructure' },
  { icon: Cpu, title: 'Cutting-Edge Tech', desc: 'Latest frameworks and technologies' },
  { icon: Target, title: '99.9% Uptime', desc: 'Robust, scalable architecture' },
  { icon: Award, title: 'Award Winning', desc: 'Recognized technology excellence' },
]

const testimonials = [
  {
    quote: "MetaCodr delivered our e-commerce platform on time and under budget. Their expertise in Next.js and cloud infrastructure was exceptional.",
    author: "Sarah Mitchell",
    role: "CTO",
    company: "TechCorp",
    rating: 5
  },
  {
    quote: "They transformed our legacy systems to modern cloud architecture. Performance improved by 300% and costs dropped by 60%.",
    author: "Michael Chen",
    role: "Head of Engineering",
    company: "FinanceHub",
    rating: 5
  },
  {
    quote: "Best development partner we've worked with. Their AI and machine learning solutions gave us a competitive edge.",
    author: "Emily Rodriguez",
    role: "CEO",
    company: "HealthTech",
    rating: 5
  },
]

const stats = [
  { value: '100+', label: 'Projects Delivered', icon: Rocket },
  { value: '50+', label: 'Happy Clients', icon: Users },
  { value: '99.9%', label: 'Uptime SLA', icon: Star },
  { value: '24/7', label: 'Support Available', icon: Clock },
]

export default function HomePage() {
  return (
    <>
      {/* 3D Background Scene */}
      <Scene3D enableParticles enableShapes />

      {/* Hero Section - Full IT Company Style */}
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
                  Full-Stack Technology Solutions & Innovation
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
              Transform Your Business With
              <br className="hidden sm:block" />
              <span className="text-gradient-deepgram"> Cutting-Edge Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-deepgram-text-muted mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-center px-4"
            >
              From AI-powered solutions to cloud infrastructure, we deliver comprehensive IT services that drive innovation,
              efficiency, and growth. Your vision, powered by our expertise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4"
            >
              <Button3D
                icon={ArrowRight}
                variant="primary"
                href="/contact"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5"
              >
                Start Your Project
              </Button3D>
              <Button3D
                icon={Code}
                variant="secondary"
                href="/services"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5"
              >
                View Services
              </Button3D>
            </motion.div>

            {/* Social Proof - Stats with 3D Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-4">
              {stats.map((stat, index) => (
                <Card3D
                  key={index}
                  icon={stat.icon}
                  title={stat.label}
                  value={stat.value}
                  delay={0.4 + index * 0.1}
                  className="text-center"
                />
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
              Technology That Drives <span className="text-gradient-deepgram">Real Results</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-deepgram-text-muted leading-relaxed mb-8 sm:mb-12"
            >
              In today's digital landscape, the right technology partner makes all the difference.
              We combine cutting-edge development, AI innovation, and cloud expertise to deliver solutions that scale.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { stat: '10+', label: 'Years of expertise' },
                { stat: '50+', label: 'Technologies mastered' },
                { stat: '100+', label: 'Projects delivered' },
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
              <FeatureCard3D
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features.slice(0, 5)}
                delay={index * 0.1}
                gradient={index % 2 === 0 ? 'from-deepgram-accent-blue to-deepgram-accent-teal' : 'from-deepgram-accent-teal to-deepgram-accent-cyan'}
              />
            ))}
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
            {features.map((feature, index) => (
              <Card3D
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.desc}
                delay={index * 0.05}
                gradient={`from-deepgram-accent-${index % 2 === 0 ? 'blue' : 'teal'} to-deepgram-accent-${index % 2 === 0 ? 'teal' : 'cyan'}`}
              />
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
              <TestimonialCard3D
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="section-padding bg-deepgram-dark">
        <div className="container-deepgram">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 text-deepgram-text-primary">
              Powered By <span className="text-gradient-deepgram">Modern Technology</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-deepgram-text-muted max-w-3xl mx-auto">
              We leverage the latest frameworks, languages, and platforms to build scalable, performant solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS',
              'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'GraphQL', 'TensorFlow'
            ].map((tech, index) => (
              <Card3D
                key={index}
                title={tech}
                delay={index * 0.05}
                className="text-center"
                gradient={index % 3 === 0 ? 'from-deepgram-accent-blue to-deepgram-accent-teal' : index % 3 === 1 ? 'from-deepgram-accent-teal to-deepgram-accent-cyan' : 'from-deepgram-accent-cyan to-deepgram-accent-blue'}
              />
            ))}
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
                  Ready to <span className="text-gradient-deepgram">Transform Your Business</span>?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-deepgram-text-muted mb-4 max-w-2xl mx-auto">
                  Join 50+ companies leveraging cutting-edge technology to innovate and grow.
                  Let's discuss your project today.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-deepgram-accent-teal mb-8 sm:mb-10 font-semibold">
                  📍 Srinagar, Jammu & Kashmir | 🌐 Serving Globally | 📞 +91-9622415387
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Button3D
                    icon={ArrowRight}
                    variant="primary"
                    href="/contact"
                    className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5"
                  >
                    Start Your Project
                  </Button3D>
                  <Button3D
                    icon={Phone}
                    variant="secondary"
                    href="tel:+919622415387"
                    className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5"
                  >
                    Call Us Now
                  </Button3D>
                </div>
                <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-deepgram-text-muted">
                  ✓ Free consultation • ✓ Custom solutions • ✓ Flexible engagement models
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
