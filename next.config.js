/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withImages = require("next-images");
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});

module.exports = nextConfig;
