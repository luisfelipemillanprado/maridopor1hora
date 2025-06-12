'use client'
import { Navbar, NavbarBrand, NavbarContent } from '@heroui/react'
import Logo from '@/common/gcomponents/logo/Logo'
import Avatars from '@/common/gcomponents/navbar/components/molecules/Avatar'
import SignUpButton from '@/common/gcomponents/navbar/components/molecules/SignUpButton'
import NavLink from '@/common/gcomponents/navbar/components/atoms/NavLink'
import clsx from 'clsx'

/**
 * @description - Renders the main navigation bar component.
 * @param props - The properties for the NavBar component.
 * @param props.navbar - The navbar configuration object.
 * @param props.navbar.avatar - Avatar configuration for the user profile.
 * @param props.navbar.avatar.imageUrl - URL of the user's avatar image.
 * @param props.navbar.avatar.items - List of menu items for the avatar dropdown.
 * @param props.navbar.logo - Logo configuration.
 * @param props.navbar.signUpButton - Sign up button configuration.
 * @param props.navbar.links - Array of navigation links.
 */
export default function NavBar(props: {
  navbar: {
    avatar: {
      imageUrl: string
      items: { title: string; key: string; description: string; shortcut: string }[]
    }
    logo: { iconUrl: string }
    signUpButton: { text: string }
    links: { text: string; key: number }[]
  }
}) {
  const { navbar } = props
  return (
    <Navbar className={clsx(`h-14 bg-inherit backdrop-blur-none [&>header]:px-4`)}>
      <NavbarContent className={clsx(``)} justify={`start`}>
        <NavbarBrand className={clsx(`mr-4`)}>
          <Logo {...{ iconUrl: navbar.logo.iconUrl }} />
        </NavbarBrand>
        <NavbarContent className={clsx(`hidden gap-3 sm:flex`)}>
          {navbar.links.map((item /*, index*/) => (
            <NavLink key={item.key} {...{ text: item.text }} />
          ))}
        </NavbarContent>
      </NavbarContent>
      <NavbarContent as={`div`} className={clsx(`items-center`)} justify={`end`}>
        <SignUpButton {...{ text: navbar.signUpButton.text }} />
        <Avatars
          {...{
            imageUrl: navbar.avatar.imageUrl,
            items: navbar.avatar.items,
          }}
        />
      </NavbarContent>
    </Navbar>
  )
}
