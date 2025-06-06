import { Button, Link } from '@heroui/react'
import {
  FacebookIcon,
  YouTubeIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsappIcon,
} from '@/utils/svgs/Svgs'
import clsx from 'clsx'

export default function SocialNetwork(props: { icon: string; href: string }) {
  const { icon, href } = props
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case `facebook`:
        return {
          icon: <FacebookIcon className={clsx(`h-[1.6875rem] w-[1.6875rem]`)} />,
        }
      case `youtube`:
        return {
          icon: <YouTubeIcon className={clsx(`h-[1.6875rem] w-[1.6875rem]`)} />,
        }
      case `instagram`:
        return {
          icon: <InstagramIcon className={clsx(`h-[1.6875rem] w-[1.6875rem]`)} />,
        }
      case `whatsapp`:
        return {
          icon: <WhatsappIcon className={clsx(`h-[1.6875rem] w-[1.6875rem]`)} />,
        }
      case `twitter`:
        return {
          icon: <TwitterIcon className={clsx(`h-[1.5625rem] w-[1.5625rem]`)} />,
        }
    }
  }
  return (
    <Button
      isIconOnly
      className={clsx(`bg-content3`)}
      aria-label={`social-network-${icon}`}
      as={Link}
      href={href}
      color={`default`}
      variant={`faded`}
      radius={`full`}
      size={`sm`}
    >
      {iconSwitch(icon)?.icon}
    </Button>
  )
}
