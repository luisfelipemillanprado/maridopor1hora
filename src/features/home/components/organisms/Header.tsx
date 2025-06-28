import PeekServices from '@/features/home/components/molecules/PeekServices'
import MainTitle from '@/features/home/components/atoms/MainTitle'
import LinksButtons from '@/features/home/components/molecules/LinksButtons'
import NavBar from '@/common/gcomponents/navbar/components/organisms/NavBar'
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
  return (
    <div className={clsx(`horizontal h-auto w-full`)}>
      <section
        aria-label={`peek-services`}
        className={clsx(
          `relative h-[28.125rem] w-full overflow-hidden rounded-tl-[1.25rem] rounded-tr-[1.25rem] rounded-br-[1.25rem]`,
          `rounded-bl-[1.25rem]`,
          `3xl:h-[34.1875rem] 2xl:h-[28.3125rem]`
        )}
      >
        <div className={clsx(`horizontal relative h-auto w-full`)}>
          <NavBar {...{ navbar }} />
        </div>
        <div className={clsx(`horizontal relative h-auto w-full p-2`, `3xl:px-6 3xl:py-3 xl:px-3`)}>
          <PeekServices {...{ peekServices }} />
          <div className={clsx(`absolute top-[17%] right-0 left-0 z-10 h-auto w-full`, `xl:top-[16%]`)}>
            <MainTitle {...{ mainTitle }} />
          </div>
          <div className={clsx(`absolute top-[56%] right-0 left-0 z-10 h-auto w-full`, `3xl:top-[43.5%]`)}>
            <LinksButtons {...{ linksButtons }} />
          </div>
          <div className={clsx(`absolute top-[65%] right-0 left-0 z-10 hidden h-auto w-full`, `3xl:block`)}>
            <PopularServices {...{ services: popularServices.services }} />
          </div>
          <div className={clsx(`absolute right-0 -bottom-8.5 left-0 z-20`, `3xl:-bottom-10 2xl:-bottom-9`)}>
            <Metrics {...{ metrics }} />
          </div>
        </div>
      </section>
    </div>
  )
}
