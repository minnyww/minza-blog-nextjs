import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  transpilePackages: ["next-mdx-remote"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
