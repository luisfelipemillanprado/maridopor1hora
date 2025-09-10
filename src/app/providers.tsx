'use client'
import * as React from 'react'
import { ThemeProviderProps } from 'next-themes'
import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

/**
 * @description - Interfaz que define los props que acepta el componente Providers.
 * @property {React.ReactNode} children - The child components to be wrapped by the provider.
 * @property {ThemeProviderProps} [themeProps] - Optional props to customize the theme provider.
 */
export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

/**
 * @description - Cualquier componente hijo (children) que pongas dentro de Providers tendrá
 * acceso a los contextos de HeroUI y de temas.
 * @param children - The React node(s) to be rendered within the providers.
 * @param themeProps - Props to be passed to the NextThemesProvider for theme configuration.
 */
export default function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <HeroUIProvider locale='es-ES'>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  )
}
