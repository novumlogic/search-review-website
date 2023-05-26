/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API_KEY: 'AIzaSyDoUPx3ea_X7aCJSkECREralmhrf5UG3PI',
  },
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
module.exports = nextConfig