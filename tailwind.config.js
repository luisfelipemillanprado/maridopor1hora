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
