'use client'
import { Button, Link } from '@heroui/react'
import NavigationLinkIcons from '@/features/home/components/atoms/NavigationLinkIcons'
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
    <div className={clsx(`horizontal h-auto w-auto`)}>
      <Button
        className={clsx(`bg-warning shadow-small pr-[0.1875rem]`)}
        endContent={<NavigationLinkIcons {...{ icon }} />}
        as={Link}
        href={href}
        color={`warning`}
        variant={`shadow`}
        size={`md`}
        radius={`full`}
        aria-label={`${text} button`}
      >
        <span
          className={clsx(
            `text-default text-medium pt-0.5`,
            `3xl:text-large 2xl:text-large xl:text-[1.0625rem]`
          )}
        >
          {text}
        </span>
      </Button>
    </div>
  )
}
