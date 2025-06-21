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
          icon: <FacebookIcon className={clsx(`h-[1.6875rem] w-[1.6875rem]`, `2xl:h-9 2xl:w-9`)} />,
        }
      case `youtube`:
        return {
          icon: <YouTubeIcon className={clsx(`h-[1.6875rem] w-[1.6875rem]`, `2xl:h-9 2xl:w-9`)} />,
        }
      case `instagram`:
        return {
          icon: (
            <InstagramIcon className={clsx(`h-[1.6875rem] w-[1.6875rem]`, `2xl:h-9 2xl:w-9`)} />
          ),
        }
      case `whatsapp`:
        return {
          icon: <WhatsappIcon className={clsx(`h-[1.6875rem] w-[1.6875rem]`, `2xl:h-9 2xl:w-9`)} />,
        }
      case `twitter`:
        return {
          icon: <TwitterIcon className={clsx(`h-[1.5625rem] w-[1.5625rem]`, `2xl:h-8 2xl:w-8`)} />,
        }
    }
  }
  return (
    <Button
      isIconOnly
      isExternal
      className={clsx(`bg-content3`, `2xl:h-9 2xl:w-9`)}
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
