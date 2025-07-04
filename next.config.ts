import type { NextConfig } from 'next'

/**
 * @description - Next.js configuration object for the application.
 * @property {object} images - Configuration for the Next.js Image component.
 * @property {Array} images.remotePatterns - Allowed remote image sources with protocol and hostname.
 * @property {Array} images.formats - Supported image formats for optimization.
 * @property {Array} images.deviceSizes - Device widths for responsive images.
 * @property {Array} images.imageSizes - Fixed image sizes for optimization.
 * @property {boolean} devIndicators - Disables the Next.js development indicators.
 * @property {object} typescript - TypeScript configuration.
 * @property {boolean} typescript.ignoreBuildErrors - Whether to ignore TypeScript build errors.
 * @property {object} eslint - ESLint configuration.
 * @property {boolean} eslint.ignoreDuringBuilds - Whether to ignore ESLint errors during builds.
 * @property {object} [turbopack] - Turbopack configuration, only present in non-production environments.
 * @property {Array} [turbopack.resolveExtensions] - File extensions to resolve with Turbopack.
 * @property {string} [basePath] - (Commented) Base path for the application if deployed in a subdirectory.
 * @property {string} [assetPrefix] - (Commented) Asset prefix for serving static assets from a subdirectory.
 */
const nextConfig: NextConfig = {
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
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: 'maridoporunahora.com',
      },
    ],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
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
