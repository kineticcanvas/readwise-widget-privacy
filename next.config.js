/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable x-powered-by header for security
  poweredByHeader: false,
  // Optimize for production
  reactStrictMode: true
}

module.exports = nextConfig
