import { NavbarItem, Link } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - A navigation link component for use within a navbar.
 * @param props - The props for the NavLink component.
 * @param props.text - The text to display for the navigation link.
 */
export default function NavLink(props: { text: string }) {
  const { text } = props
  return (
    <NavbarItem className={clsx(``)}>
      <Link aria-current={`page`} color={`foreground`} href="#">
        {text}
      </Link>
    </NavbarItem>
  )
}
