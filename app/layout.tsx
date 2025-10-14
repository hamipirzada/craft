import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DeepgramNav from '@/components/DeepgramNav'
import DeepgramFooter from '@/components/DeepgramFooter'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://mindsleek.in'),
  title: {
    default: 'MindSleek - AI & IT Solutions for Modern Businesses | Machine Learning Experts',
    template: '%s | MindSleek'
  },
  description: 'Transform your business with MindSleek\'s cutting-edge AI solutions, custom software development, and intelligent automation. Leading AI IT startup delivering innovation.',
  keywords: ['AI solutions', 'machine learning', 'software development', 'IT consulting', 'automation', 'data analytics', 'cloud solutions', 'business intelligence'],
  authors: [{ name: 'MindSleek' }],
  creator: 'MindSleek',
  publisher: 'MindSleek',
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
    url: 'https://mindsleek.in',
    title: 'MindSleek - AI & IT Solutions for Modern Businesses',
    description: 'Transform your business with MindSleek\'s cutting-edge AI solutions, custom software development, and intelligent automation.',
    siteName: 'MindSleek',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindSleek - AI & IT Solutions for Modern Businesses',
    description: 'Transform your business with MindSleek\'s cutting-edge AI solutions, custom software development, and intelligent automation.',
    creator: '@mindsleek',
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
    name: 'MindSleek',
    url: 'https://mindsleek.in',
    logo: 'https://mindsleek.in/logo.png',
    description: 'Leading AI & IT solutions provider specializing in machine learning, software development, and intelligent automation.',
    email: 'contact@mindsleek.in',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://linkedin.com/company/mindsleek',
      'https://twitter.com/mindsleek',
      'https://github.com/mindsleek',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MindSleek',
    url: 'https://mindsleek.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://mindsleek.in/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="canonical" href="https://mindsleek.in" />
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
