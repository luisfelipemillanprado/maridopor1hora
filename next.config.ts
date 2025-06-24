import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
