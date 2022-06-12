/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1', 'progue-api.herokuapp.com'],
  },
};

module.exports = nextConfig;
