'use client';
import * as React from 'react';
import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
/**
 * @description - Cualquier componente hijo (children) que pongas dentro de Providers tendrá
 * acceso a los contextos de HeroUI y de temas.
 * @param children - The React node(s) to be rendered within the providers.
 * @param themeProps - Props to be passed to the NextThemesProvider for theme configuration.
 */
export default function Providers({ children, themeProps }) {
    return (<HeroUIProvider locale="es-ES">
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>);
}
