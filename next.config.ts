/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  output: 'export',
  images: { unoptimized: true }, // ✅ disable server-based image optimization
  assetPrefix: isProd ? '/qasem-hashemi-site/' : '',
  basePath: isProd ? '/qasem-hashemi-site' : '',
};

module.exports = nextConfig;
