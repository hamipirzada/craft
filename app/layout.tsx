import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DeepgramNav from '@/components/DeepgramNav'
import DeepgramFooter from '@/components/DeepgramFooter'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://metacodr.com'),
  title: {
    default: 'MetaCodr - AI & IT Solutions for Modern Businesses | Machine Learning Experts',
    template: '%s | MetaCodr'
  },
  description: 'Transform your business with MetaCodr\'s cutting-edge AI solutions, custom software development, and intelligent automation. Leading AI IT startup delivering innovation.',
  keywords: ['AI solutions', 'machine learning', 'software development', 'IT consulting', 'automation', 'data analytics', 'cloud solutions', 'business intelligence'],
  authors: [{ name: 'MetaCodr' }],
  creator: 'MetaCodr',
  publisher: 'MetaCodr',
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
    url: 'https://metacodr.com',
    title: 'MetaCodr - AI & IT Solutions for Modern Businesses',
    description: 'Transform your business with MetaCodr\'s cutting-edge AI solutions, custom software development, and intelligent automation.',
    siteName: 'MetaCodr',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetaCodr - AI & IT Solutions for Modern Businesses',
    description: 'Transform your business with MetaCodr\'s cutting-edge AI solutions, custom software development, and intelligent automation.',
    creator: '@metacodr',
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
    name: 'MetaCodr',
    url: 'https://metacodr.com',
    logo: 'https://metacodr.com/logo.png',
    description: 'Leading AI & IT solutions provider specializing in machine learning, software development, and intelligent automation.',
    email: 'contact@metacodr.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://linkedin.com/company/metacodr',
      'https://twitter.com/metacodr',
      'https://github.com/metacodr',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MetaCodr',
    url: 'https://metacodr.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://metacodr.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="canonical" href="https://metacodr.com" />
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
