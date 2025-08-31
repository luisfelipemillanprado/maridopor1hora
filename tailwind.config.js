import { heroui } from '@heroui/react'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '20rem',
        // => @media (min-width: 320px) { ... }
        md: '22.5rem',
        // => @media (min-width: 360px) { ... }
        lg: '23.4375rem',
        // => @media (min-width: 375px) { ... }
        xl: '24.375rem',
        // => @media (min-width: 390px) { ... }
        '2xl': '30.625rem',
        // => @media (min-width: 490px) { ... }
        '3xl': '47.5rem',
        // => @media (min-width: 760px) { ... }
        '4xl': '64rem',
        // => @media (min-width: 1024px) { ... }
      },
      keyframes: {
        slowPulse: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '70%': { transform: 'scale(2.5)', opacity: '0' },
          '100%': { opacity: '0' },
        },
        softPulse: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '70%': { transform: 'scale(1.12)', opacity: '0' },
          '100%': { opacity: '0' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }, // se mueve 6px hacia arriba
        },
      },
      animation: {
        'slow-pulse': 'slowPulse 2.7s ease-out infinite', // Aquí defines la duración
        'soft-pulse': 'softPulse 2.9s ease-in-out infinite', // la nueva
        'float-y': 'floatY 4s ease-in-out infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          layout: {},
          colors: {
            warning: { DEFAULT: `#e2813f` },
            default: { DEFAULT: `#ffffff` },
            content5: `#2d3035`,
            content6: `#8e391c`,
            content7: `#fafbfd`,
            content8: `#fff8eb`,
            content9: `#ffe0a6`,
            content10: `#00b67a`,
          },
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
      },
    }),
  ],
}

export default config
