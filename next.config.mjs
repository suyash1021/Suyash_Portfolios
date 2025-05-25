/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: "/Suyash_Portfolios", // Match your repo name
  assetPrefix: "/Suyash_Portfolios/",
};

module.exports = nextConfig;
