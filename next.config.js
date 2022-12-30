/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["toj-img-bucket.s3.ap-northeast-2.amazonaws.com"],
  },
};
