'use client'
import ButtonPulse from '@/common/gcomponents/pulse/ButtonPulse'
import NavigationLinkIcons from '@/features/home/components/atoms/NavigationLinkIcons'
import { Button, Link } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Renders a navigation link button with an icon and text.
 * @param props - The properties for the navigation link.
 * @param props.text - The display text for the navigation link.
 * @param props.href - The URL to navigate to when the link is clicked.
 * @param props.icon - The name or identifier of the icon to display.
 */
export default function NavigationLink(props: { text: string; href: string; icon: string }) {
  const { text, href, icon } = props
  return (
    <ButtonPulse type={`soft`} float colorChange={false} rounded={true} overlayMore={false}>
      <Button
        className={clsx(`bg-warning shadow-small z-50 pr-[0.1875rem]`, `3xl:h-[2.6875rem] 4xl:h-11.5`)}
        endContent={<NavigationLinkIcons {...{ icon }} />}
        as={Link}
        href={href}
        color={`warning`}
        variant={`shadow`}
        size={`md`}
        radius={`full`}
        aria-label={`${text} button`}
      >
        <span className={clsx(`text-default text-[1.0625rem]`, `4xl:text-[1.1875rem] 2xl:text-large`)}>
          {text}
        </span>
      </Button>
    </ButtonPulse>
  )
}
