import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'AI Solutions', href: '/services#ai' },
    { label: 'Software Development', href: '/services#software' },
    { label: 'Process Automation', href: '/services#automation' },
    { label: 'Data Analytics', href: '/services#analytics' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-space-900 border-t border-neural-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative w-10 h-10 group-hover:rotate-180 transition-transform duration-500">
                <Image
                  src="/nodes.png"
                  alt="MindSleek Logo"
                  width={40}
                  height={40}
                  className="object-contain drop-shadow-[0_0_8px_rgba(22,189,202,0.6)]"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#16BDCA] via-[#0EA5E9] to-[#16BDCA] bg-clip-text text-transparent font-display">MindSleek</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering businesses to scale, innovate, and thrive with future-ready AI & IT solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/mindsleek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neural-cyan transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/mindsleek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neural-cyan transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/mindsleek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neural-cyan transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 group">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-neural-cyan transition-colors" />
                <a href="mailto:contact@mindsleek.in" className="hover:text-neural-cyan transition-colors">
                  contact@mindsleek.in
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 group">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-neural-cyan transition-colors" />
                <a href="tel:+919622415387" className="hover:text-neural-cyan transition-colors">
                  +91-9622415387
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-neural-cyan" />
                <span>Srinagar, Jammu and Kashmir, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neural-cyan/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} MindSleek. All rights reserved. | Founded 2023
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-neural-cyan text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
