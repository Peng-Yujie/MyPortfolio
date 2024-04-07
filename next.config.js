/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
};

module.exports = withOptimizedImages(nextConfig);
