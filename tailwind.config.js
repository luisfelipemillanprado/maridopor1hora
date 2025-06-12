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
        xl: '24.5rem',
        // => @media (min-width: 392px) { ... }
        '2xl': '25rem',
        // => @media (min-width: 400px) { ... }
        '3xl': '31.25rem',
        // => @media (min-width: 500px) { ... }
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
            /* content7: `#dedbd4`, */
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
