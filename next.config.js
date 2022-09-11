/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx'],
  reactStrictMode: true,
  images: {
      domains: [
        'raw.githubusercontent.com', 
        'play.pokemonshowdown.com'
      ],
  }
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})


module.exports = nextConfig, withBundleAnalyzer(nextConfig)
