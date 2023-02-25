/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir: "dist",
  experimental: {
    runtime: "edge",
  },
};

module.exports = nextConfig;
