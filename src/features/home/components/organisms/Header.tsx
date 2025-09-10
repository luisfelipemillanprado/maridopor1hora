import PeekServices from '@/features/home/components/molecules/PeekServices'
import MainTitle from '@/features/home/components/atoms/MainTitle'
import LinksButtons from '@/features/home/components/molecules/LinksButtons'
import NavBar from '@/common/navbar/components/organisms/NavBar'
import Metrics from '@/features/home/components/molecules/Metrics'
import PopularServices from '@/features/home/components/molecules/PopularServices'
import clsx from 'clsx'

/**
 * @description - Header component for the home feature.
 * @param props - The properties for the Header component.
 * @param props.peekServices - An array of service previews, each containing an `imageUrl` and a unique `key`.
 * @param props.mainTitle - The main title object containing `first` and `second` strings.
 * @param props.linksButtons - Object containing button variants and texts for navigation links.
 * @param props.linksButtons.variants - Button style variants, each with a `color` and unique `key`.
 * @param props.linksButtons.texts - Button texts, each with a `text`, `icon`, and unique `key`.
 * @param props.navbar - Navigation bar configuration.
 * @param props.navbar.avatar - Avatar configuration with `imageUrl` and menu `items`.
 * @param props.navbar.avatar.items - Array of avatar menu items, each with `title`, `key`, `description`, and `shortcut`.
 * @param props.navbar.logo - Logo configuration with `iconUrl`.
 * @param props.navbar.signUpButton - Sign up button configuration with `text`.
 * @param props.navbar.links - Array of navigation links, each with `text`, `href`, and unique `key`.
 * @param props.metrics - Array of metric objects, each with `amount`, `icon`, `text`, `description`, and `change` indicator.
 * @param props.popularServices - Object containing an array of popular services.
 * @param props.popularServices.services - Array of popular service objects, each with `text`, `icon`, and unique `key`.
 */
export default function Header(props: {
  peekServices: { imageUrl: string; key: number }[]
  mainTitle: { first: string; second: string }
  linksButtons: {
    variants: {
      color: string
      key: number
    }
    texts: { text: string; icon: string; key: number }[]
  }
  navbar: {
    avatar: {
      imageUrl: string
      items: { title: string; key: string; description: string; shortcut: string }[]
    }
    logo: { iconUrl: string }
    signUpButton: { text: string }
    links: { text: string; href: string; key: number }[]
  }
  metrics: {
    amount: string
    increase: string
    icon: string
    text: string
    description: string
    change: boolean
    key: number
  }[]
  popularServices: {
    services: { text: string; icon: string; href: string; key: number }[]
  }
}) {
  const { peekServices, mainTitle, linksButtons, navbar, metrics, popularServices } = props
  const sectionClasses = {
    base: 'horizontal h-auto w-full',
  }
  const containerClasses = {
    base: 'relative h-[28.125rem] w-full overflow-hidden rounded-[1.25rem]',
    breakpoints: '3xl:h-[37.5rem] 4xl:h-[48.625rem] 2xl:h-[28.3125rem]',
  }
  const containerNavbarClasses = {
    base: 'horizontal relative h-auto w-full',
  }
  const contentClasses = {
    base: 'horizontal relative h-auto w-full p-2',
    breakpoints: '3xl:px-6 3xl:py-3 4xl:px-[3.75rem] xl:px-3',
  }
  return (
    <section aria-label={`peek-services`} className={clsx(sectionClasses.base)}>
      <div className={clsx(containerClasses.base, containerClasses.breakpoints)}>
        <div className={clsx(containerNavbarClasses.base)}>
          <NavBar {...{ navbar }} />
        </div>
        <div className={clsx(contentClasses.base, contentClasses.breakpoints)}>
          <PeekServices {...{ peekServices }} />
          <MainTitle {...{ mainTitle }} />
          <LinksButtons {...{ linksButtons }} />
          <PopularServices {...{ services: popularServices.services }} />
          <Metrics {...{ metrics }} />
        </div>
      </div>
    </section>
  )
}
