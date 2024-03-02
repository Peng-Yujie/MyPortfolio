/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

module.exports = nextConfig;
