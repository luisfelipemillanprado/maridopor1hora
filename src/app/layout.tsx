import './styles/globals.css'
/* boxicons-basics */
import '@/app/styles/boxicons/basics/boxicons-rounded.min.css'
import '@/app/styles/boxicons/basics/animations.min.css'
import '@/app/styles/boxicons/basics/transformations.min.css'
/* boxicons-brands */
import '@/app/styles/boxicons/brands/boxicons-brands.css'
import '@/app/styles/boxicons/brands/animations.css'
import '@/app/styles/boxicons/brands/transformations.css'
/* boxicons-styles-ends */
import { Nunito_Sans } from 'next/font/google'
import Provider from '@/app/providers'
import { Metadata } from 'next'
import ContactFloatButton from '@/common/gcomponents/contactus/components/organisms/ContactFloatButton'
import sd from '@/utils/data/Static'
import clsx from 'clsx'

/**
 * @description - Loads the Nunito Sans font with specified weights and subsets for use in the application.
 * @constant
 * @type {ReturnType<typeof Nunito_Sans>}
 * @property {string} variable - The CSS variable name for the font.
 * @property {string[]} weight - The font weights to include (200–900).
 * @property {string[]} subsets - The language subsets to include (e.g., 'latin').
 * @property {string} display - The font display strategy ('swap').
 */
const nunito_sans = Nunito_Sans({
  variable: '--font-nunito',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

/**
 * @description - Metadata object containing SEO-related information for the application.
 * @property {string} title - The title of the website, displayed in the browser tab and used by search engines.
 * @property {string} description - A brief description of the website's services for SEO and social sharing.
 */
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
      lang="es-ES"
    >
      <body className={clsx(`bg-content7`)}>
        <div className={clsx(`no-scrollbar h-screen overflow-auto`)}>
          <Provider
            themeProps={{
              attribute: 'class',
              defaultTheme: 'light',
              themes: ['dark', 'light', 'modern'],
            }}
          >
            {children}
            <ContactFloatButton {...{ contactFloatButton: sd.contactFloatButton }} />
          </Provider>
        </div>
      </body>
    </html>
  )
}
