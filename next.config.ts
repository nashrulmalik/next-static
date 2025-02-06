import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/next-static',
  assetPrefix: '/next-static/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
