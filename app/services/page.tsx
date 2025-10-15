'use client'

import { Brain, Code, Cog, Database, Cloud, TrendingUp, Cpu, Network, Lock, Zap, Phone, Shield, Smartphone, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import dynamic from 'next/dynamic'

// Lazy load 3D components
const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
  ssr: false,
  loading: () => null
})

const FeatureCard3D = dynamic(() => import('@/components/3d/FeatureCard3D'), {
  ssr: false,
  loading: () => <div className="card-deepgram p-6 animate-pulse h-full" />
})

const Card3D = dynamic(() => import('@/components/3d/Card3D'), {
  ssr: false,
  loading: () => <div className="card-deepgram p-6 animate-pulse h-full" />
})

const Button3D = dynamic(() => import('@/components/3d/Button3D'), {
  ssr: false,
  loading: () => <div className="btn-primary animate-pulse" />
})

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
    id: 'web-development',
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge frameworks. From single-page apps to complex enterprise platforms.',
    features: [
      'React, Next.js, Vue.js Development',
      'Progressive Web Apps (PWA)',
      'Server-Side Rendering (SSR)',
      'Responsive & Mobile-First Design',
      'Performance Optimization',
      'SEO & Accessibility Standards',
      'E-commerce Platforms',
      'Custom CMS Solutions'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL'],
    gradient: 'from-accent-purple to-purple-700'
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
    features: [
      'Native iOS & Android Apps',
      'React Native Development',
      'Cross-Platform Solutions',
      'App Store Deployment',
      'Push Notifications',
      'Offline-First Architecture',
      'Payment Integration',
      'Analytics & Crash Reporting'
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase', 'Expo'],
    gradient: 'from-accent-cyan to-blue-700'
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions including AI voice agents, chatbots, predictive analytics, and custom machine learning models.',
    features: [
      'AI Voice Agents & Chatbots',
      'Custom Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'Deep Learning & Neural Networks',
      'Model Training & Fine-tuning',
      'AI Integration & Deployment'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn', 'VAPI'],
    gradient: 'from-primary-500 to-primary-700'
  },
  {
    id: 'cloud-devops',
    icon: Cloud,
    title: 'Cloud Solutions & DevOps',
    description: 'Cloud infrastructure, migration, CI/CD pipelines, and DevOps practices for scalable, reliable operations.',
    features: [
      'AWS, Azure, GCP Implementation',
      'Cloud Migration Services',
      'Infrastructure as Code (Terraform)',
      'CI/CD Pipeline Setup',
      'Container Orchestration (K8s)',
      'Serverless Architecture',
      'Cloud Cost Optimization',
      'Multi-Region Deployment'
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'],
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your applications, data, and infrastructure from threats.',
    features: [
      'Security Audits & Penetration Testing',
      'OWASP Compliance',
      'Data Encryption & Protection',
      'Authentication & Authorization',
      'Security Monitoring & SIEM',
      'Vulnerability Assessment',
      'Incident Response Planning',
      'Compliance Management'
    ],
    technologies: ['OWASP', 'OAuth 2.0', 'JWT', 'SSL/TLS', 'Firewall', 'WAF', 'Snyk', 'SonarQube'],
    gradient: 'from-red-500 to-red-700'
  },
  {
    id: 'automation',
    icon: Cog,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation, RPA, and workflow optimization solutions.',
    features: [
      'Robotic Process Automation (RPA)',
      'Workflow Automation',
      'Business Process Optimization',
      'Integration Automation',
      'Custom Automation Scripts',
      'Document Processing'
    ],
    technologies: ['Python', 'Apache Airflow', 'Zapier', 'n8n', 'Make', 'Node-RED'],
    gradient: 'from-orange-500 to-orange-700'
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
      {/* 3D Background */}
      <Scene3D enableParticles enableShapes />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />
        <div className="absolute top-20 -left-48 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-48 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive <span className="text-gradient">IT Services</span> For Modern Businesses
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              From web and mobile development to AI, cloud infrastructure, and cybersecurity—complete technology solutions under one roof
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions powered by cutting-edge tools and frameworks
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, index) => (
              <div key={service.id} id={service.id}>
                <FeatureCard3D
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  delay={index * 0.1}
                  gradient={service.gradient}
                />
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
              <Card3D
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
                gradient="from-deepgram-accent-blue to-deepgram-accent-teal"
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
                <Button3D
                  icon={ArrowRight}
                  variant="primary"
                  href="/contact"
                  className="text-lg px-8 py-4"
                >
                  Get Free Consultation
                </Button3D>
                <Button3D
                  variant="secondary"
                  href="/solutions"
                  className="text-lg px-8 py-4"
                >
                  View Solutions
                </Button3D>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
