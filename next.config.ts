import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // 移除以启用 API 路由
  // distDir: 'dist', // 使用默认的 .next
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
