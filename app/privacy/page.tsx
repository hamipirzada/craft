'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { Shield, Lock, Eye, UserCheck, FileText, Database } from 'lucide-react'
import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
  ssr: false,
  loading: () => null
})

export default function PrivacyPage() {
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
              <Shield className="w-16 h-16 text-primary-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
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
                At MetaCodr, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Database className="w-6 h-6 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, phone number, and company information</li>
                  <li>Project requirements and service inquiries</li>
                  <li>Communication preferences</li>
                  <li>Payment and billing information (processed securely through third-party providers)</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your inquiries and communicate with you</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="w-6 h-6 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">Data Security</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
              </p>
            </div>

            {/* Information Sharing */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">Information Sharing</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With service providers who assist us in operating our business</li>
                  <li>To comply with legal obligations or respond to lawful requests</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <UserCheck className="w-6 h-6 text-primary-400" />
                <h2 className="text-3xl font-bold text-white">Your Rights</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Cookies and Tracking</h2>
              <p className="text-gray-400 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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
