/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
