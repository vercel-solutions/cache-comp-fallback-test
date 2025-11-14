import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // reactCompiler: true,
  transpilePackages: ["@repo/components", "@repo/lib"],

  experimental: {
    //   staleTimes: {
    //     dynamic: 18000,
    //     static: 18000,
    //   },
  },
};

export default nextConfig;
