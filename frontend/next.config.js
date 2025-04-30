/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['apollo-yourconsult.cdn.prismic.io', 'www.apollohospitals.com'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
