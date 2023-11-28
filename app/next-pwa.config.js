const runtimeCaching = require('next-pwa/cache')
const withPWA = require("next-pwa")

module.exports = withPWA({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  register: false,
  runtimeCaching,
  buildExcludes: [
    /\/*server\/middleware-chunks\/[0-9]*[a-z]*[A-Z]*\.js$/,
		/middleware-manifest\.json$/,
    /middleware-runtime\.js$/,
    /_middleware\.js$/,
    /^.+\\_middleware\.js$/,
  ],
  publicExcludes: ['!robots.txt'],
})

