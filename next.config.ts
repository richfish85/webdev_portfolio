// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // You no longer need MD/MDX in pageExtensions:
  pageExtensions: ["ts", "tsx", "js", "jsx"],

};

export default nextConfig;
