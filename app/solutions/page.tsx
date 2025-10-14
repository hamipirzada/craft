'use client'

import { MessageSquare, TrendingUp, Eye, Brain, BarChart, FileText, ShoppingCart, Users, Phone } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
// import SolutionCard from '@/components/SolutionCard'

/* export const metadata: Metadata = {
  title: 'AI-Powered Solutions - Intelligent Chatbots, Predictive Analytics & Computer Vision',
  description: 'Innovative AI solutions from HyperCraft: Intelligent chatbots, predictive analytics, computer vision, NLP, and custom machine learning models for your business.',
  openGraph: {
    title: 'AI-Powered Solutions - Intelligent Chatbots, Predictive Analytics & Computer Vision',
    description: 'Innovative AI solutions: Intelligent chatbots, predictive analytics, computer vision, NLP, and custom machine learning models.',
  },
} */

const mainSolutions = [
  {
    icon: Phone,
    title: 'AI Lead Calling Agents',
    description: 'Revolutionary AI-powered calling system that qualifies leads, books appointments, and nurtures prospects 24/7 with human-like conversations that convert.',
    features: [
      'Natural voice conversations with advanced NLP',
      'Intelligent lead scoring and qualification',
      'Automated appointment scheduling and follow-ups',
      'Real-time call transcription and analytics',
      'CRM integration and data synchronization',
      'Multi-language support and local accents'
    ],
    useCases: [
      'Real estate lead qualification',
      'Healthcare appointment booking',
      'Insurance quote generation',
      'E-commerce customer outreach',
      'B2B sales prospecting'
    ],
    gradient: 'bg-gradient-to-br from-accent-neon to-futuristic-cyan'
  },
  {
    icon: MessageSquare,
    title: 'Intelligent Chatbots & Virtual Assistants',
    description: 'AI-powered conversational agents that provide 24/7 customer support, handle inquiries, and enhance user engagement across multiple channels.',
    features: [
      'Natural language understanding (NLU)',
      'Multi-channel deployment (Web, Mobile, WhatsApp, Slack)',
      'Sentiment analysis and emotion detection',
      'Contextual conversation management',
      'Seamless human handoff',
      'Analytics and performance insights'
    ],
    useCases: [
      'Customer support automation',
      'Lead qualification and nurturing',
      'E-commerce product recommendations',
      'FAQ automation',
      'Appointment scheduling'
    ],
    gradient: 'bg-gradient-to-br from-primary-500 to-primary-700'
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
    gradient: 'bg-gradient-to-br from-accent-purple to-purple-700'
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
    gradient: 'bg-gradient-to-br from-accent-cyan to-blue-700'
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
    gradient: 'bg-gradient-to-br from-accent-pink to-pink-700'
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
    gradient: 'bg-gradient-to-br from-green-500 to-green-700'
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
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-700'
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
    gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-700'
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
    gradient: 'bg-gradient-to-br from-teal-500 to-teal-700'
  },
]

export default function SolutionsPage() {
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
              AI-Powered <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl text-gray-400">
              Transform your business with intelligent solutions designed to solve real-world challenges
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {mainSolutions.map((solution, index) => (
              <AnimatedSection key={index}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`w-16 h-16 ${solution.gradient} rounded-xl flex items-center justify-center mb-6`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4">{solution.title}</h2>
                    <p className="text-xl text-gray-400 mb-8">{solution.description}</p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-white">Key Features:</h3>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-400 mr-2 mt-1">✓</span>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Use Cases:</h3>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 glass-effect rounded-full text-sm text-gray-300"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`${solution.gradient} rounded-2xl p-1`}>
                      <div className="glass-effect rounded-xl p-8 bg-dark-900">
                        <div className="aspect-square bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl flex items-center justify-center">
                          <solution.icon className="w-32 h-32 text-white/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
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
                Ready to Implement AI Solutions?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss which solution is right for your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary text-lg px-8 py-4">
                  Schedule Consultation
                </a>
                <a href="/services" className="btn-secondary text-lg px-8 py-4">
                  View Services
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
