/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages (replaces deprecated 'next export')
  output: "export",

  // GitHub Pages deployment path configuration
  basePath: process.env.GITHUB_PAGES === "true" ? "/MyPortfolio" : "",
  assetPrefix: process.env.GITHUB_PAGES === "true" ? "/MyPortfolio/" : "",

  // Disable image optimization (not supported on GitHub Pages)
  images: {
    unoptimized: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
