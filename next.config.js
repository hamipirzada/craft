/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hypercraft.in',
      },
      {
        protocol: 'https',
        hostname: 'metacodr.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  reactStrictMode: true,
  outputFileTracingRoot: require('path').join(__dirname),
}

module.exports = nextConfig
