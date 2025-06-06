'use client'
import { Navbar, NavbarBrand, NavbarContent } from '@heroui/react'
import Logo from '@/common/gcomponents/logo/Logo'
import Avatars from '@/common/gcomponents/navbar/components/molecules/Avatar'
import SignUpButton from '@/common/gcomponents/navbar/components/molecules/SignUpButton'
import NavLink from '@/common/gcomponents/navbar/components/atoms/NavLink'
import clsx from 'clsx'

/**
 * @description - NavBar component renders the main navigation bar for the application.
 * @param props - The properties for the NavBar component.
 * @param props.navbar - The configuration object for the navbar.
 * @param props.navbar.avatar - Avatar section configuration.
 * @param props.navbar.logo - Logo section configuration.
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
