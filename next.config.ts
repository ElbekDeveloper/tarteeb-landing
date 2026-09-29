import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // remove output: "export", basePath, assetPrefix
  images: {
    unoptimized: false, // let Vercel handle images
  },
};
export default nextConfig;
