/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/v1/shorten',
        destination: 'https://cleanuri.com/api/v1/shorten',
      },
    ]
  },
};

export default nextConfig;
