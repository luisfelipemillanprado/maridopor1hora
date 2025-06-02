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
      extend: {
        colors: {
          white: '#FFFFFF',
          black: '#000000',
          blue: {
            50: '#e6f1fe',
            100: '#cce3fd',
            200: '#99c7fb',
            300: '#66aaf9',
            400: '#338ef7',
            500: '#006FEE',
            600: '#005bc4',
            700: '#004493',
            800: '#002e62',
            900: '#001731',
          },
          // .. rest of the colors
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            warning: { DEFAULT: '#e2813f' },
          }, // light theme colors
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
