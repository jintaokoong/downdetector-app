/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: "edge",
  },
  distDir: "dist",
};

module.exports = nextConfig;
