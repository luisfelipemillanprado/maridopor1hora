import PeekServices from '@/features/home/components/molecules/PeekServices'
import MainTitle from '@/features/home/components/atoms/MainTitle'
import LinksButtons from '@/features/home/components/molecules/LinksButtons'
import NavBar from '@/common/gcomponents/navbar/components/organisms/NavBar'
import Metrics from '@/features/home/components/molecules/Metrics'
import clsx from 'clsx'

/**
 * @description - Header component for the home feature.
 * @param props - The properties for the Header component.
 * @param props.imageUrls - An array of image objects to display, each with an `imageUrl` and a unique `key`.
 * @param props.mainTitle - The main title object containing `first`, `second`, and `third` strings for the title sections.
 * @param props.multipleLinkButtons - Configuration for multiple link buttons, including an array of `variants`
 * (with `color` and `key`) and an array of button `texts`.
 * @param props.avatar - Avatar configuration, including the avatar `imageUrl`, `content`, and an array of `items`
 * (each with `title`, `key`, `description`, and `shortcut`).
 * @param props.logo - Logo configuration with an `iconUrl`.
 * @param props.signUpButton - Sign up button configuration with a `text` label.
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
    links: { text: string; key: number }[]
  }
  metrics: { amount: string; text: string; change: boolean }[]
}) {
  const { peekServices, mainTitle, linksButtons, navbar, metrics } = props
  return (
    <div className={clsx(`horizontal h-auto w-full`)}>
      <section
        aria-label={`peek-services`}
        className={clsx(
          `relative h-[27.4375rem] w-full overflow-hidden rounded-tl-[1.25rem] rounded-tr-[1.25rem] rounded-br-[1.25rem]`,
          `rounded-bl-[1.25rem]`,
          `2xl:h-[27.625rem]`
        )}
      >
        <div className={clsx(`horizontal relative h-auto w-full`)}>
          <NavBar {...{ navbar }} />
        </div>
        <div className={clsx(`horizontal relative h-auto w-full p-2`, `xl:px-3`)}>
          <PeekServices {...{ peekServices }} />
          <div className={clsx(`absolute top-[17%] right-0 left-0 z-10 h-auto w-full`)}>
            <MainTitle {...{ mainTitle }} />
          </div>
          <div className={clsx(`absolute top-[56%] right-0 left-0 z-10 h-auto w-full`)}>
            <LinksButtons {...{ linksButtons }} />
          </div>
          <div className={clsx(`absolute right-0 -bottom-8 left-0 z-20`, `2xl:-bottom-9`)}>
            <Metrics {...{ metrics }} />
          </div>
        </div>
      </section>
    </div>
  )
}
