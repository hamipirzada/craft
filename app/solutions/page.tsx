'use client'

import { MessageSquare, TrendingUp, Eye, Brain, BarChart, FileText, ShoppingCart, Users, Phone, Smartphone, Server, Heart, GraduationCap, Building, Factory, ArrowRight } from 'lucide-react'
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

const Button3D = dynamic(() => import('@/components/3d/Button3D'), {
  ssr: false,
  loading: () => <div className="btn-primary animate-pulse" />
})

/* export const metadata: Metadata = {
  title: 'AI-Powered Solutions - Intelligent Chatbots, Predictive Analytics & Computer Vision',
  description: 'Innovative AI solutions from MindSleek: Intelligent chatbots, predictive analytics, computer vision, NLP, and custom machine learning models for your business.',
  openGraph: {
    title: 'AI-Powered Solutions - Intelligent Chatbots, Predictive Analytics & Computer Vision',
    description: 'Innovative AI solutions: Intelligent chatbots, predictive analytics, computer vision, NLP, and custom machine learning models.',
  },
} */

const mainSolutions = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce Platforms',
    description: 'Complete e-commerce solutions with payment gateways, inventory management, and customer engagement tools.',
    features: [
      'Custom storefront design',
      'Payment gateway integration',
      'Inventory management system',
      'Order tracking and fulfillment',
      'Customer analytics',
      'Mobile-responsive design'
    ],
    useCases: [
      'Online retail stores',
      'Marketplace platforms',
      'Subscription services',
      'B2B e-commerce',
      'Digital product delivery'
    ],
    gradient: 'from-green-500 to-emerald-700'
  },
  {
    icon: Heart,
    title: 'Healthcare IT Solutions',
    description: 'HIPAA-compliant healthcare management systems, telemedicine platforms, and patient engagement solutions.',
    features: [
      'Electronic health records (EHR)',
      'Telemedicine integration',
      'Patient portal development',
      'Appointment scheduling',
      'HIPAA compliance',
      'Medical billing systems'
    ],
    useCases: [
      'Hospital management systems',
      'Clinic management software',
      'Telehealth platforms',
      'Patient engagement apps',
      'Medical practice management'
    ],
    gradient: 'from-red-500 to-pink-700'
  },
  {
    icon: Building,
    title: 'FinTech Solutions',
    description: 'Secure financial platforms, payment processing, blockchain integration, and banking applications.',
    features: [
      'Secure payment processing',
      'Blockchain integration',
      'Digital wallet development',
      'Regulatory compliance',
      'Fraud detection systems',
      'Real-time transactions'
    ],
    useCases: [
      'Digital banking apps',
      'Payment gateways',
      'Cryptocurrency platforms',
      'Lending platforms',
      'Insurance tech solutions'
    ],
    gradient: 'from-blue-500 to-indigo-700'
  },
  {
    icon: GraduationCap,
    title: 'EdTech Platforms',
    description: 'Learning management systems, virtual classrooms, and educational content delivery platforms.',
    features: [
      'Learning management system (LMS)',
      'Virtual classroom integration',
      'Content management',
      'Student progress tracking',
      'Interactive assessments',
      'Video conferencing'
    ],
    useCases: [
      'Online course platforms',
      'School management systems',
      'Corporate training portals',
      'E-learning marketplaces',
      'Student information systems'
    ],
    gradient: 'from-purple-500 to-purple-700'
  },
  {
    icon: Server,
    title: 'Enterprise Software',
    description: 'Custom enterprise resource planning, customer relationship management, and business automation tools.',
    features: [
      'ERP system development',
      'CRM customization',
      'Workflow automation',
      'Business intelligence',
      'Data integration',
      'API development'
    ],
    useCases: [
      'Custom ERP systems',
      'CRM platforms',
      'Supply chain management',
      'HR management systems',
      'Project management tools'
    ],
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning Solutions',
    description: 'Custom AI applications including chatbots, voice agents, predictive analytics, and intelligent automation.',
    features: [
      'AI chatbots & voice agents',
      'Predictive analytics',
      'Computer vision applications',
      'Natural language processing',
      'Recommendation engines',
      'Anomaly detection'
    ],
    useCases: [
      'Customer support automation',
      'AI-powered lead calling',
      'Fraud detection systems',
      'Personalization engines',
      'Intelligent document processing'
    ],
    gradient: 'from-cyan-500 to-blue-700'
  },
  {
    icon: Factory,
    title: 'Manufacturing & IoT',
    description: 'Smart factory solutions, IoT integration, predictive maintenance, and industrial automation systems.',
    features: [
      'IoT device integration',
      'Real-time monitoring',
      'Predictive maintenance',
      'Quality control automation',
      'Supply chain visibility',
      'Data analytics'
    ],
    useCases: [
      'Smart factory systems',
      'Asset tracking',
      'Preventive maintenance',
      'Production optimization',
      'Quality assurance'
    ],
    gradient: 'from-orange-500 to-red-700'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics & Forecasting',
    description: 'Leverage machine learning to forecast trends, predict customer behavior, and make data-driven decisions that drive business growth.',
    features: [
      'Demand forecasting and inventory optimization',
      'Customer churn prediction',
      'Sales forecasting and revenue prediction',
      'Risk assessment and fraud detection',
      'Market trend analysis',
      'Dynamic pricing optimization'
    ],
    useCases: [
      'Retail inventory management',
      'Financial risk modeling',
      'Customer lifetime value prediction',
      'Supply chain optimization',
      'Marketing campaign optimization'
    ],
    gradient: 'from-accent-purple to-purple-700'
  },
  {
    icon: Eye,
    title: 'Computer Vision & Image Recognition',
    description: 'Advanced visual intelligence solutions for automated image and video analysis, object detection, and quality control.',
    features: [
      'Object detection and tracking',
      'Image classification and tagging',
      'Facial recognition and verification',
      'OCR and document scanning',
      'Defect detection and quality inspection',
      'Real-time video analytics'
    ],
    useCases: [
      'Manufacturing quality control',
      'Security and surveillance',
      'Medical image analysis',
      'Retail shelf monitoring',
      'Automated document processing'
    ],
    gradient: 'from-accent-cyan to-blue-700'
  },
  {
    icon: Brain,
    title: 'Natural Language Processing (NLP)',
    description: 'Extract insights from unstructured text data with advanced NLP techniques for text analysis, classification, and understanding.',
    features: [
      'Sentiment analysis and opinion mining',
      'Text classification and categorization',
      'Named entity recognition (NER)',
      'Document summarization',
      'Language translation',
      'Intent detection and extraction'
    ],
    useCases: [
      'Social media monitoring',
      'Customer feedback analysis',
      'Legal document review',
      'Content moderation',
      'Knowledge extraction'
    ],
    gradient: 'from-accent-pink to-pink-700'
  },
  {
    icon: BarChart,
    title: 'Business Intelligence & Data Insights',
    description: 'Transform your data into actionable insights with intelligent dashboards, automated reporting, and advanced analytics.',
    features: [
      'Interactive dashboards and visualizations',
      'Automated report generation',
      'KPI monitoring and alerts',
      'Real-time data streaming',
      'Custom metric tracking',
      'Self-service analytics'
    ],
    useCases: [
      'Executive dashboards',
      'Sales performance tracking',
      'Marketing ROI analysis',
      'Operational efficiency monitoring',
      'Financial reporting'
    ],
    gradient: 'from-green-500 to-green-700'
  },
  {
    icon: FileText,
    title: 'Document Intelligence & Automation',
    description: 'Automate document processing with AI-powered extraction, classification, and intelligent workflows.',
    features: [
      'Intelligent document classification',
      'Data extraction from PDFs and images',
      'Form processing automation',
      'Invoice and receipt processing',
      'Contract analysis',
      'Workflow automation'
    ],
    useCases: [
      'Invoice processing',
      'Contract review and analysis',
      'Insurance claims processing',
      'HR document management',
      'Legal document review'
    ],
    gradient: 'from-orange-500 to-orange-700'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Personalization',
    description: 'Boost sales and customer satisfaction with AI-driven product recommendations and personalized shopping experiences.',
    features: [
      'Personalized product recommendations',
      'Dynamic pricing strategies',
      'Customer segmentation',
      'Search relevance optimization',
      'Visual search capabilities',
      'Abandoned cart recovery'
    ],
    useCases: [
      'Product recommendation engines',
      'Personalized email campaigns',
      'Dynamic homepage customization',
      'Size and fit recommendations',
      'Cross-sell and upsell strategies'
    ],
    gradient: 'from-indigo-500 to-indigo-700'
  },
  {
    icon: Users,
    title: 'Customer Analytics & Segmentation',
    description: 'Understand your customers better with AI-powered analytics, segmentation, and behavioral insights.',
    features: [
      'Customer behavior analysis',
      'Advanced segmentation models',
      'Lifetime value prediction',
      'Churn risk identification',
      'Journey mapping and optimization',
      'Next best action recommendations'
    ],
    useCases: [
      'Targeted marketing campaigns',
      'Customer retention programs',
      'Loyalty program optimization',
      'Personalized customer experiences',
      'Market basket analysis'
    ],
    gradient: 'from-teal-500 to-teal-700'
  },
]

export default function SolutionsPage() {
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
              Industry-Specific <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl text-gray-400">
              Tailored technology solutions for every industry—from e-commerce to healthcare, fintech to education
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry-specific solutions tailored to your unique business needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainSolutions.map((solution, index) => (
              <FeatureCard3D
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                delay={index * 0.05}
                gradient={solution.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="glass-effect rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our solutions can solve your unique business challenges
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
                  href="/services"
                  className="text-lg px-8 py-4"
                >
                  Explore Services
                </Button3D>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
