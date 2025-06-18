import './globals.css'
import { Nunito_Sans } from 'next/font/google'
import Provider from '@/app/providers'
import { Metadata } from 'next'
import clsx from 'clsx'

const nunito_sans = Nunito_Sans({
  variable: '--font-nunito',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: `Compañía MaridoPor1Hora - Servicios profesionales a domicilio.`,
  description: `Soluciones para tu hogar, simples y rápidas. ¡Contrata con confianza!`,
}

/**
 * @description - Root layout component for the application. Sets up the HTML document with language
 * and hydration warning suppression. Applies global font variables and antialiasing to the body. Wraps
 * children with a `Provider` for theme management, supporting 'light', 'dark', and 'modern' themes.
 * @param children - The React node(s) to be rendered within the layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      suppressHydrationWarning
      className={clsx(`${nunito_sans.className} scroll-smooth antialiased`)}
      lang="en-US"
    >
      <body className={clsx(`bg-[#fafbfd]`)}>
        <Provider
          themeProps={{
            attribute: 'class',
            defaultTheme: 'light',
            themes: ['dark', 'light', 'modern'],
          }}
        >
          {children}
        </Provider>
      </body>
    </html>
  )
}
