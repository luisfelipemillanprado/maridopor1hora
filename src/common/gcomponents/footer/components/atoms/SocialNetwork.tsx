import { Button, Link } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Enum representing supported social network icons.
 * @enum {string}
 * @property {string} FACEBOOK - Represents the Facebook social network.
 * @property {string} YOUTUBE - Represents the YouTube social network.
 * @property {string} INSTAGRAM - Represents the Instagram social network.
 * @property {string} WHATSAPP - Represents the WhatsApp social network.
 * @property {string} TWITTER - Represents the Twitter social network.
 */
export enum SocialIcon {
  FACEBOOK = 'facebook',
  YOUTUBE = 'youtube',
  INSTAGRAM = 'instagram',
  WHATSAPP = 'whatsapp',
  TWITTER = 'twitter',
}

/**
 * @description - Returns the corresponding social network icon component based on the provided icon type.
 * @param icon - The identifier for the social network icon to render. Should be one of the values from the
 * `SocialIcon` enum.
 * @returns The React component representing the requested social network icon, or a fallback span if the
 * icon type is not recognized.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case SocialIcon.FACEBOOK:
      return (
        <i aria-label={`facebook`} className={clsx(`bxl bx-facebook-circle`, `text-default-900 text-4xl`)} />
      )
    case SocialIcon.YOUTUBE:
      return <i aria-label={`youtube`} className={clsx(`bxl bx-youtube`, `text-default-900 text-4xl`)} />
    case SocialIcon.INSTAGRAM:
      return (
        <i aria-label={`instagram`} className={clsx(`bxl bx-instagram-alt`, `text-default-900 text-4xl`)} />
      )
    case SocialIcon.WHATSAPP:
      return (
        <i aria-label={`whatsapp`} className={clsx(`bxl bx-whatsapp-square`, `text-default-900 text-4xl`)} />
      )
    case SocialIcon.TWITTER:
      return (
        <i aria-label={`twitter`} className={clsx(`bxl bx-twitter-x`, `text-default-900 text-[1.9375rem]`)} />
      )
    default:
      return <span aria-label={`icon-none`}>?</span>
  }
}

/**
 * @description - Renders a social network icon button that links to an external URL.
 * @param props - The component props.
 * @param props.icon - The name of the social network (e.g., "facebook", "youtube", "instagram", "whatsapp", "twitter").
 * @param props.href - The URL to navigate to when the icon is clicked.
 * @returns A button component displaying the corresponding social network icon, linking to the provided URL.
 */
export default function SocialNetwork(props: { icon: string; href: string }) {
  const { icon, href } = props
  return (
    <Button
      isIconOnly
      isExternal
      className={clsx(`bg-content7 h-9.5 w-9.5`)}
      aria-label={`social-network-${icon}`}
      as={Link}
      href={href}
      color={`default`}
      variant={`faded`}
      radius={`full`}
      size={`sm`}
    >
      <span className={clsx(`horizontal h-auto w-auto`)}>{iconSwitch(icon)}</span>
    </Button>
  )
}
