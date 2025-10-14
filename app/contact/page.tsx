import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact HyperCraft - Get Your Free AI Consultation Today',
  description: 'Ready to transform your business with AI? Contact HyperCraft for a free consultation. Let\'s discuss your AI and IT solution needs.',
  openGraph: {
    title: 'Contact HyperCraft - Get Your Free AI Consultation',
    description: 'Ready to transform your business with AI? Contact HyperCraft for a free consultation.',
  },
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'contact@hypercraft.in',
    link: 'mailto:contact@hypercraft.in'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91-XXXXXXXXXX',
    link: 'tel:+91XXXXXXXXXX'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'India',
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
              <AnimatedSection key={index} delay={index * 0.1}>
                <a
                  href={info.link}
                  className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300 block group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                  <p className="text-gray-400">{info.content}</p>
                </a>
              </AnimatedSection>
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

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass-effect rounded-2xl p-2">
              <div className="bg-dark-800 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                  <p className="text-gray-400">Map integration coming soon</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
