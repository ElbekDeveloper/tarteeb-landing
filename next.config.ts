import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // remove output: "export", basePath, assetPrefix
  images: {
    unoptimized: false, // let Vercel handle images
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
};
export default nextConfig;
