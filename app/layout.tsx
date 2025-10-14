import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DeepgramNav from '@/components/DeepgramNav'
import DeepgramFooter from '@/components/DeepgramFooter'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hypercraft.in'),
  title: {
    default: 'HyperCraft - AI & IT Solutions for Modern Businesses | Machine Learning Experts',
    template: '%s | HyperCraft'
  },
  description: 'Transform your business with HyperCraft\'s cutting-edge AI solutions, custom software development, and intelligent automation. Leading AI IT startup delivering innovation.',
  keywords: ['AI solutions', 'machine learning', 'software development', 'IT consulting', 'automation', 'data analytics', 'cloud solutions', 'business intelligence'],
  authors: [{ name: 'HyperCraft' }],
  creator: 'HyperCraft',
  publisher: 'HyperCraft',
  icons: {
    icon: [
      { url: '/icon' },
      { url: '/icon', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hypercraft.in',
    title: 'HyperCraft - AI & IT Solutions for Modern Businesses',
    description: 'Transform your business with HyperCraft\'s cutting-edge AI solutions, custom software development, and intelligent automation.',
    siteName: 'HyperCraft',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HyperCraft - AI & IT Solutions for Modern Businesses',
    description: 'Transform your business with HyperCraft\'s cutting-edge AI solutions, custom software development, and intelligent automation.',
    creator: '@hypercraft',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HyperCraft',
    url: 'https://hypercraft.in',
    logo: 'https://hypercraft.in/logo.png',
    description: 'Leading AI & IT solutions provider specializing in machine learning, software development, and intelligent automation.',
    email: 'contact@hypercraft.in',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://linkedin.com/company/hypercraft',
      'https://twitter.com/hypercraft',
      'https://github.com/hypercraft',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HyperCraft',
    url: 'https://hypercraft.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://hypercraft.in/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="canonical" href="https://hypercraft.in" />
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
      </head>
      <body className={inter.className}>
        <DeepgramNav />
        <main className="min-h-screen pt-16 md:pt-20">
          {children}
        </main>
        <DeepgramFooter />
      </body>
    </html>
  )
}
