'use client'
import { Navbar, NavbarBrand, NavbarContent } from '@heroui/react'
import Logo from '@/common/logo/Logo'
import Avatars from '@/common/navbar/components/molecules/Avatar'
import SignUpButton from '@/common/navbar/components/molecules/SignUpButton'
import NavLink from '@/common/navbar/components/atoms/NavLink'
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
    links: { text: string; href: string; key: number }[]
  }
}) {
  const { navbar } = props
  const contentClasses = {
    base: 'h-16 bg-inherit pt-1.5 backdrop-blur-none [&>header]:px-4',
    breakpoints: '3xl:[&>header]:px-8',
  }
  const brandClasses = {
    base: 'mr-10',
  }
  const linksContainerClasses = {
    base: 'hidden gap-x-8',
    breakpoints: 'sm:flex',
  }
  const wrapperClasses = {
    base: 'items-center',
  }
  return (
    <Navbar className={clsx(contentClasses.base, contentClasses.breakpoints)}>
      <NavbarContent justify={`start`}>
        <NavbarBrand className={clsx(brandClasses.base)}>
          <Logo {...{ iconUrl: navbar.logo.iconUrl }} />
        </NavbarBrand>
        <NavbarContent className={clsx(linksContainerClasses.base, linksContainerClasses.breakpoints)}>
          {navbar.links.map((item) => (
            <NavLink key={item.key} {...{ text: item.text, href: item.href }} />
          ))}
        </NavbarContent>
      </NavbarContent>
      <NavbarContent as={`div`} className={clsx(wrapperClasses.base)} justify={`end`}>
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
