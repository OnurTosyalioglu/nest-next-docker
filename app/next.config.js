/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const withPWA = require('./next-pwa.config');

const nextConfig = withPWA({
  swcMinify: true,
	i18n,
	experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  output: 'standalone',
  images: {
    domains: [
    ],
  },
})

module.exports = nextConfig
