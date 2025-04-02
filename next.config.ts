import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cafely.local",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
