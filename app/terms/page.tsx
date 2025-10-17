'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { FileText, Scale, CheckCircle, AlertCircle, Shield, Users } from 'lucide-react'
import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
  ssr: false,
  loading: () => null
})

export default function TermsPage() {
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
            <div className="flex justify-center mb-6">
              <Scale className="w-16 h-16 text-primary-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-xl text-gray-400">
              Last updated: January 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="glass-effect rounded-2xl p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-400 leading-relaxed">
                Welcome to MetaCodr. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            {/* Services */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">Our Services</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  MetaCodr provides AI and IT solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI Lead Calling solutions</li>
                  <li>Custom software development</li>
                  <li>Process automation</li>
                  <li>Data analytics and business intelligence</li>
                  <li>Cloud solutions and infrastructure</li>
                  <li>Consulting and support services</li>
                </ul>
              </div>
            </div>

            {/* User Obligations */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">User Obligations</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services to transmit harmful or malicious code</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">Intellectual Property</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  All content, features, and functionality of our services, including but not limited to software, text, graphics, logos, and trademarks, are owned by MetaCodr or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="leading-relaxed">
                  Custom work developed specifically for clients will be governed by individual project agreements.
                </p>
              </div>
            </div>

            {/* Payment Terms */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">Payment Terms</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Invoices are due within the timeframe specified in your agreement</li>
                  <li>Late payments may incur additional fees</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                </ul>
              </div>
            </div>

            {/* Warranties and Disclaimers */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">Warranties and Disclaimers</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
                </p>
                <p className="leading-relaxed">
                  Specific warranties for custom development projects will be detailed in individual project agreements.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                To the maximum extent permitted by law, MetaCodr shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Termination</h2>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any reason, including but not limited to breach of these Terms.
                </p>
                <p className="leading-relaxed">
                  Upon termination, your right to use our services will immediately cease.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-gray-400 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-400">
                <p>Email: <a href="mailto:contact@metacodr.com" className="text-primary-400 hover:text-primary-300">contact@metacodr.com</a></p>
                <p>Phone: <a href="tel:+919622415387" className="text-primary-400 hover:text-primary-300">+91 9622415387</a></p>
                <p>Address: Model Town-D, Sopore, Kashmir</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
