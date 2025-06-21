import { usePathname } from 'next/navigation'
import { NavbarItem, Link } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - A navigation link component for use within a navbar.
 * @param props - The props for the NavLink component.
 * @param props.text - The text to display for the navigation link.
 */
export default function NavLink(props: { text: string; href: string }) {
  const { text, href } = props
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <NavbarItem className={clsx(`horizontal h-auto w-auto`)}>
      <Link
        aria-current={isActive ? 'page' : undefined}
        className={clsx(`text-default-900 text-large`)}
        href={href}
      >
        {text}
      </Link>
    </NavbarItem>
  )
}
