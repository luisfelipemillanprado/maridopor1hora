import PeekServices from '@/features/home/components/molecules/PeekServices'
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
  mainTitle: { first: string; second: string; third: string }
  linksButtons: {
    variants: {
      color: string
      key: number
    }
    texts: { text: string; icon: string; key: number }[]
  }
  avatar: {
    imageUrl: string
    content: string
    items: { title: string; key: string; description: string; shortcut: string }[]
  }
  logo: { iconUrl: string }
  signUpButton: { text: string }
  metrics: { amount: string; text: string; change: boolean }[]
}) {
  const { peekServices /* , mainTitle, */, linksButtons, avatar, logo, signUpButton, metrics } =
    props
  return (
    <div className={clsx(`horizontal h-auto w-full`)}>
      <div
        className={clsx(
          `relative h-[25.9375rem] w-full overflow-hidden rounded-tl-[1.25rem] rounded-tr-[1.25rem] rounded-br-[1.25rem]`,
          `rounded-bl-[1.25rem]`
        )}
      >
        <div className={clsx(`horizontal relative h-auto w-full`)}>
          <NavBar {...{ avatar, logo, signUpButton }} />
        </div>
        <div className={clsx(`horizontal relative h-auto w-full p-2`)}>
          <PeekServices {...{ peekServices }} />
          <div className={clsx(`absolute right-0 -bottom-7 left-0 z-10`)}>
            <Metrics {...{ metrics }} />
          </div>
          <div className={clsx(`absolute top-1/2 right-0 left-0 z-10 h-auto w-full`)}>
            <LinksButtons {...{ linksButtons }} />
          </div>
        </div>
      </div>
    </div>
  )
}
