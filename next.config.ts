import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Desactiva turbopack en producción
  ...(process.env.NODE_ENV === 'production'
    ? {}
    : {
        turbopack: {
          resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
        },
      }),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maridoporunahora.com', // Cambia esto a tu dominio real
      },
    ],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  output: 'standalone', // Importante para despliegue en Plesk/Node
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Si tu app está en un subdirectorio, descomenta y ajusta:
  // basePath: '/subcarpeta',
  // assetPrefix: '/subcarpeta/',
}

export default nextConfig
