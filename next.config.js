/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx'],
  reactStrictMode: true,
  images: {
      domains: ['raw.githubusercontent.com'],
  }
}

module.exports = nextConfig
