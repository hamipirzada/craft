'use client'

import { Brain, Code, Cog, Database, Cloud, TrendingUp, Cpu, Network, Lock, Zap, Phone } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import ServiceCard from '@/components/ServiceCard'

/* export const metadata: Metadata = {
  title: 'AI & IT Services - Custom Solutions by MindSleek | ML, Development & More',
  description: 'Explore MindSleek\'s comprehensive AI and IT services: Machine Learning, Software Development, Process Automation, Data Analytics, Cloud Solutions, and Business Intelligence.',
  openGraph: {
    title: 'AI & IT Services - Custom Solutions by MindSleek',
    description: 'Comprehensive AI and IT services: Machine Learning, Software Development, Process Automation, Data Analytics, Cloud Solutions, and Business Intelligence.',
  },
} */

const serviceDetails = [
  {
    id: 'lead-calling',
    icon: Phone,
    title: 'AI Lead Calling Agents',
    description: 'Revolutionary AI-powered calling agents that automate lead generation, qualification, and conversion with human-like conversations that drive real results.',
    features: [
      'Natural Voice Conversations with Advanced NLP',
      'Intelligent Lead Scoring & Qualification',
      'Automated Appointment Scheduling',
      'Real-Time Call Transcription & Analytics',
      'CRM Integration & Data Sync',
      'Multi-Language & Accent Support',
      '24/7 Automated Follow-ups',
      'Sentiment Analysis & Call Quality Monitoring'
    ],
    technologies: ['OpenAI GPT-4', 'Whisper API', 'VAPI', 'Twilio', 'Dialogflow', 'Azure Speech'],
    gradient: 'from-accent-neon to-futuristic-cyan',
    featured: true
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Solutions',
    description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.',
    features: [
      'Custom Machine Learning Models',
      'Deep Learning & Neural Networks',
      'AI Model Training & Fine-tuning',
      'Model Deployment & Integration',
      'Performance Optimization',
      'Continuous Model Monitoring'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Hugging Face'],
    gradient: 'from-primary-500 to-primary-700'
  },
  {
    id: 'software',
    icon: Code,
    title: 'Software Development',
    description: 'Full-stack development services to build robust, scalable applications tailored to your needs.',
    features: [
      'Web Application Development',
      'Mobile App Development (iOS & Android)',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'Microservices Architecture',
      'Legacy System Modernization'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'React Native', 'Python', 'Go'],
    gradient: 'from-accent-purple to-purple-700'
  },
  {
    id: 'automation',
    icon: Cog,
    title: 'Process Automation',
    description: 'Streamline your operations with intelligent automation solutions that save time and reduce errors.',
    features: [
      'Robotic Process Automation (RPA)',
      'Workflow Automation',
      'Intelligent Document Processing',
      'Business Process Optimization',
      'Integration Automation',
      'Custom Automation Scripts'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Python', 'Apache Airflow', 'Zapier'],
    gradient: 'from-accent-cyan to-blue-700'
  },
  {
    id: 'analytics',
    icon: Database,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    features: [
      'Data Visualization & Dashboards',
      'Predictive Analytics',
      'Big Data Processing',
      'Real-time Analytics',
      'Statistical Analysis',
      'Custom Reporting Solutions'
    ],
    technologies: ['Tableau', 'Power BI', 'Apache Spark', 'Pandas', 'D3.js', 'Plotly'],
    gradient: 'from-accent-pink to-pink-700'
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Leverage cloud infrastructure for scalability, reliability, and cost-effective operations.',
    features: [
      'Cloud Migration Services',
      'Cloud Architecture Design',
      'AWS/Azure/GCP Implementation',
      'DevOps & CI/CD Pipelines',
      'Container Orchestration',
      'Cloud Security & Compliance'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    id: 'business-intelligence',
    icon: TrendingUp,
    title: 'Business Intelligence',
    description: 'Make data-driven decisions with comprehensive BI solutions and strategic insights.',
    features: [
      'BI Strategy & Consulting',
      'Dashboard Development',
      'KPI Tracking & Monitoring',
      'Data Warehousing',
      'ETL Pipeline Development',
      'Self-Service Analytics'
    ],
    technologies: ['Power BI', 'Tableau', 'Looker', 'Snowflake', 'dbt', 'Apache Superset'],
    gradient: 'from-green-500 to-green-700'
  },
]

const additionalServices = [
  { icon: Cpu, title: 'Edge Computing', description: 'Deploy AI at the edge for real-time processing' },
  { icon: Network, title: 'IoT Solutions', description: 'Connect and manage IoT devices intelligently' },
  { icon: Lock, title: 'Cybersecurity', description: 'Protect your data and systems with advanced security' },
  { icon: Zap, title: 'Performance Optimization', description: 'Optimize applications for speed and efficiency' },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />
        <div className="absolute top-20 -left-48 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-48 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Powered <span className="text-gradient">Services</span> That Drive Results
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              From revolutionary AI Lead Calling Agents to comprehensive IT solutions—technology that transforms your business
            </p>
            <div className="inline-flex items-center space-x-2 glass-effect-strong px-6 py-3 rounded-full neon-border">
              <Phone className="w-5 h-5 text-accent-neon" />
              <span className="text-sm font-bold text-accent-neon">Specializing in AI Lead Calling</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {serviceDetails.map((service, index) => (
              <div key={service.id} id={service.id}>
              <AnimatedSection>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} ${service.featured ? 'glass-effect-strong rounded-3xl p-8 neon-border' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    {service.featured && (
                      <div className="inline-flex items-center space-x-2 px-3 py-1 bg-accent-neon/20 border border-accent-neon rounded-full mb-4">
                        <Zap className="w-3 h-3 text-accent-neon" />
                        <span className="text-xs font-bold text-accent-neon">FEATURED SERVICE</span>
                      </div>
                    )}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 ${service.featured ? 'neon-glow floating' : ''}`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className={`text-4xl font-bold mb-4 ${service.featured ? 'text-gradient' : ''}`}>{service.title}</h2>
                    <p className="text-xl text-gray-400 mb-6">{service.description}</p>

                    <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-400 mr-2">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 glass-effect rounded-full text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`glass-effect rounded-2xl p-8 bg-gradient-to-br ${service.gradient} bg-opacity-10`}>
                      <div className="aspect-video bg-dark-800/50 rounded-xl flex items-center justify-center">
                        <service.icon className="w-24 h-24 text-white/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Additional <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized services to meet your unique technology needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="glass-effect rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our services can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary text-lg px-8 py-4">
                  Get Free Consultation
                </a>
                <a href="/solutions" className="btn-secondary text-lg px-8 py-4">
                  View Solutions
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
