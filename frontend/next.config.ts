const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  output: 'export',               // ✅ Makes Next.js export a static HTML site
  images: { unoptimized: true },  // ✅ Disable server-side image optimization (needed for static export)
  // assetPrefix: isProd ? '/portfolio' : '', // ✅ For GitHub Pages repo path
  // basePath: isProd ? '/portfolio' : '',     // ✅ Ensures routes work correctly on GitHub Pages 
    assetPrefix: '', // custom domain
  basePath:  '',     
};

module.exports = nextConfig;
