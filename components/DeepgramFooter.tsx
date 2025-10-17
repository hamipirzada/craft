import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ExternalLink } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'AI Lead Calling', href: '/services#ai' },
    { label: 'Software Development', href: '/services#software' },
    { label: 'Cloud Solutions', href: '/services#cloud' },
    { label: 'Data Analytics', href: '/services#analytics' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export default function DeepgramFooter() {
  return (
    <footer className="bg-deepgram-dark-darker border-t border-deepgram-border">
      <div className="container-deepgram py-12 md:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column - Takes 2 cols on large screens */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6 group">
              <div className="transition-opacity duration-300 group-hover:opacity-80">
                <Image
                  src="/name.png"
                  alt="MetaCodr Logo"
                  width={750}
                  height={188}
                  className="h-24 md:h-28 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-deepgram-text-muted mb-6 leading-relaxed max-w-md">
              Empowering businesses to scale, innovate, and thrive with future-ready AI & IT solutions. Based in Srinagar, serving globally.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/metacodr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-deepgram-text-muted hover:text-deepgram-accent-teal hover:bg-deepgram-dark-lighter rounded-lg transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/metacodr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-deepgram-text-muted hover:text-deepgram-accent-teal hover:bg-deepgram-dark-lighter rounded-lg transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/metacodr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-deepgram-text-muted hover:text-deepgram-accent-teal hover:bg-deepgram-dark-lighter rounded-lg transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-deepgram-text-primary font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-deepgram-text-muted hover:text-deepgram-accent-teal transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-deepgram-text-primary font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-deepgram-text-muted hover:text-deepgram-accent-teal transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-deepgram-text-primary font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-deepgram-text-muted group">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-deepgram-accent-teal transition-colors" />
                <a
                  href="mailto:contact@metacodr.com"
                  className="hover:text-deepgram-accent-teal transition-colors text-sm"
                >
                  contact@metacodr.com
                </a>
              </li>
              <li className="flex items-start space-x-2 text-deepgram-text-muted group">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-deepgram-accent-teal transition-colors" />
                <a
                  href="tel:+919622415387"
                  className="hover:text-deepgram-accent-teal transition-colors text-sm"
                >
                  +91-9622415387
                </a>
              </li>
              <li className="flex items-start space-x-2 text-deepgram-text-muted">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-deepgram-accent-teal" />
                <span className="text-sm">Model Town-D, Sopore, Kashmir</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-deepgram-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-deepgram-text-muted text-sm">
              &copy; {new Date().getFullYear()} MetaCodr. All rights reserved. | Founded 2023
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-deepgram-text-muted hover:text-deepgram-accent-teal text-sm transition-colors duration-200"
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
