import { Button, Link } from '@heroui/react'
import { FacebookIcon, YouTubeIcon, InstagramIcon, TwitterIcon, WhatsappIcon } from '@/utils/svgs/Svgs'
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
        <FacebookIcon
          aria-label={`facebook`}
          className={clsx('h-[1.6875rem] w-[1.6875rem]', 'xl:h-9 xl:w-9')}
        />
      )
    case SocialIcon.YOUTUBE:
      return (
        <YouTubeIcon
          aria-label={`youtube`}
          className={clsx('h-[1.6875rem] w-[1.6875rem]', 'xl:h-9 xl:w-9')}
        />
      )
    case SocialIcon.INSTAGRAM:
      return (
        <InstagramIcon
          aria-label={`instagram`}
          className={clsx('h-[1.6875rem] w-[1.6875rem]', 'xl:h-9 xl:w-9')}
        />
      )
    case SocialIcon.WHATSAPP:
      return (
        <WhatsappIcon
          aria-label={`whatsapp`}
          className={clsx('h-[1.6875rem] w-[1.6875rem]', 'xl:h-9 xl:w-9')}
        />
      )
    case SocialIcon.TWITTER:
      return (
        <TwitterIcon
          aria-label={`twitter`}
          className={clsx('h-[1.5625rem] w-[1.5625rem]', 'xl:h-7 xl:w-7')}
        />
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
      className={clsx(`bg-content3`, `3xl:h-8 3xl:w-8 xl:h-9 xl:w-9`)}
      aria-label={`social-network-${icon}`}
      as={Link}
      href={href}
      color={`default`}
      variant={`faded`}
      radius={`full`}
      size={`sm`}
    >
      {iconSwitch(icon)}
    </Button>
  )
}
