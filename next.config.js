/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
};

module.exports = withPWA(withOptimizedImages(nextConfig));
