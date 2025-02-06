import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/next-static',
  assetPrefix: '/next-static/',
  images: {
    unoptimized: true,
    path: '/next-static/_next/image',
    loader: 'custom',
    loaderFile: './image-loader.ts',
  },
};

export default nextConfig;
