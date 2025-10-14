/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hypercraft.in'],
    formats: ['image/webp', 'image/avif'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
