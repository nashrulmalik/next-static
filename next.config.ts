import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',             // Important for GitHub Pages deployment
  basePath: '/next-static',     // Replace with your repository name
  assetPrefix: '/next-static/', // Important for assets
  images: {
    unoptimized: true,          // Required for static export of images
  },
};

export default nextConfig;
