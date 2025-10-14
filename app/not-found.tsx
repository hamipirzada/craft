import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-gradient animate-pulse">
            404
          </h1>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/" className="btn-primary inline-flex items-center justify-center space-x-2">
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <Link href="/contact" className="btn-secondary inline-flex items-center justify-center space-x-2">
            <Search className="w-5 h-5" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">You might be looking for:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center justify-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Our Services</span>
            </Link>
            <Link href="/solutions" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center justify-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>AI Solutions</span>
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center justify-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>About Us</span>
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center justify-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
