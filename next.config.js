/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
    images: {
    domains: ['cdn.jsdelivr.net'],
  },
}

module.exports = nextConfig
