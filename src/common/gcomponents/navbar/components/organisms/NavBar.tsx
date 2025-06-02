'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@heroui/react'
import Logo from '@/common/gcomponents/navbar/components/atoms/Logo'
import Avatars from '@/common/gcomponents/navbar/components/molecules/Avatar'
import SignUpButton from '@/common/gcomponents/navbar/components/molecules/SignUpButton'
import clsx from 'clsx'
// --
export default function NavBar(props: {
  avatar: {
    imageUrl: string
    content: string
    items: { title: string; key: string; description: string; shortcut: string }[]
  }
  logo: { iconUrl: string }
  signUpButton: { text: string }
}) {
  const { avatar, logo, signUpButton } = props
  return (
    <Navbar className={clsx(`h-14 bg-inherit backdrop-blur-none [&>header]:px-4`)}>
      <NavbarContent className={clsx(``)} justify={`start`}>
        <NavbarBrand className={clsx(`mr-4`)}>
          <Logo {...{ iconUrl: logo.iconUrl }} />
        </NavbarBrand>
        <NavbarContent className={clsx(`hidden gap-3 sm:flex`)}>
          <NavbarItem>
            <Link color={`foreground`} href={`#`}>
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="secondary" href="#">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent as={`div`} className={clsx(`items-center`)} justify={`end`}>
        <SignUpButton {...{ text: signUpButton.text }} />
        <Avatars {...{ imageUrl: avatar.imageUrl, content: avatar.content, items: avatar.items }} />
      </NavbarContent>
    </Navbar>
  )
}
