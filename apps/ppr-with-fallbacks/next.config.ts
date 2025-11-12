import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  transpilePackages: ['components', 'lib'],

  // experimental: {
  //   staleTimes: {
  //     dynamic: 30,
  //     static: 180,
  //   },
  // },
};

export default nextConfig;
