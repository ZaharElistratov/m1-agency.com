/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"]
  },
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    TOKEN: process.env.TOKEN,
    CHAT_ID: process.env.CHAT_ID
  },
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru'
  }
}

module.exports = nextConfig
