'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle, ChevronDown } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import ContactForm from '@/components/ContactForm'
import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
  ssr: false,
  loading: () => null
})

const Card3D = dynamic(() => import('@/components/3d/Card3D'), {
  ssr: false,
  loading: () => <div className="card-deepgram p-6 animate-pulse h-full" />
})

/* export const metadata: Metadata = {
  title: 'Contact MetaCodr - Get Your Free AI Consultation Today',
  description: 'Ready to transform your business with AI? Contact MetaCodr for a free consultation. Let\'s discuss your AI and IT solution needs.',
  openGraph: {
    title: 'Contact MetaCodr - Get Your Free AI Consultation',
    description: 'Ready to transform your business with AI? Contact MetaCodr for a free consultation.',
  },
} */

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'contact@metacodr.com',
    link: 'mailto:contact@metacodr.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 9622415387',
    link: 'tel:+919622415387'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Model Town-D, Sopore, Kashmir',
    link: '#'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Fri: 9:00 AM - 6:00 PM IST',
    link: '#'
  },
]

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer comprehensive AI and IT services including Machine Learning, Software Development, Process Automation, Data Analytics, Cloud Solutions, and Business Intelligence.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. Simple integrations can take 2-4 weeks, while complex AI solutions may take 2-6 months. We provide detailed timelines during consultation.'
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we provide 24/7 support and maintenance packages to ensure your solutions run smoothly. We also offer training and documentation for your team.'
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work across various industries including E-commerce, Healthcare, Finance, Manufacturing, Retail, and Technology. Our solutions are tailored to meet industry-specific needs.'
  },
  {
    question: 'How do you ensure data security?',
    answer: 'We follow industry-standard security practices, including encryption, secure APIs, compliance with data protection regulations, and regular security audits.'
  },
]

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

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
              Let's Build Something <span className="text-gradient">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-400">
              Get in touch with our team to discuss your project and receive a free consultation
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link}>
                <Card3D
                  icon={info.icon}
                  title={info.title}
                  description={info.content}
                  delay={index * 0.1}
                  gradient="from-deepgram-accent-blue to-deepgram-accent-teal"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
              <ContactForm />
            </AnimatedSection>

            {/* Right Column - Additional Info */}
            <AnimatedSection delay={0.2}>
              <div className="glass-effect rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageCircle className="w-8 h-8 text-primary-400" />
                  <h3 className="text-2xl font-bold">Why Choose Us?</h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Free initial consultation and project assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Expert team with 10+ years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Transparent pricing and flexible engagement models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">24/7 support and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Proven track record with 50+ successful projects</span>
                  </li>
                </ul>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-semibold mb-4">Quick Response Time</h4>
                  <p className="text-gray-400">
                    We understand the importance of timely communication. Our team typically responds to
                    inquiries within 4-6 business hours.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <HelpCircle className="w-8 h-8 text-primary-400" />
              <h2 className="text-4xl font-bold">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </div>
            <p className="text-xl text-gray-400">
              Find answers to common questions about our services
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="glass-effect rounded-xl overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-primary-400 flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-5 text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MapPin className="w-8 h-8 text-primary-400" />
              <h2 className="text-4xl font-bold">
                Find <span className="text-gradient">Us</span>
              </h2>
            </div>
            <p className="text-xl text-gray-400">
              Visit our office in Model Town-D, Sopore, Kashmir
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="glass-effect rounded-2xl p-2">
              <div className="rounded-xl overflow-hidden h-96 md:h-[500px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3307.234567890!2d74.442811!3d34.305306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDE4JzE5LjEiTiA3NMKwMjYnMzQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="MetaCodr Office Location - Model Town-D, Sopore, Kashmir"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-deepgram-accent-teal/5 to-deepgram-accent-blue/5 mix-blend-overlay"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
