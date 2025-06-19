/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // For Static Site Generation
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;