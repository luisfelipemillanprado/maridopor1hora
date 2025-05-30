'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input } from '@heroui/react'
import Logo from '@/common/gcomponents/navbar/components/atoms/Logo'
import Avatars from '@/common/gcomponents/navbar/components/molecules/Avatar'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
// --
export default function NavBar(props: {
  avatar: {
    imageUrl: string
    content: string
    items: { title: string; key: string; description: string; shortcut: string }[]
  }
  logo: { iconUrl: string }
}) {
  const { avatar, logo } = props
  return (
    <Navbar
      className={clsx(
        `h-14 rounded-tl-[1.25rem] rounded-tr-[1.25rem] bg-inherit backdrop-blur-none`,
        `[&>header]:px-0 [&>header]:pr-5 [&>header]:pl-4`
      )}
    >
      <NavbarContent className={clsx(``)} justify={'start'}>
        <NavbarBrand className={clsx(`mr-4`)}>
          <Logo {...{ iconUrl: logo.iconUrl }} />
        </NavbarBrand>
        <NavbarContent className="hidden gap-3 sm:flex">
          <NavbarItem>
            <Link color="foreground" href="#">
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
      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<MagnifyingGlassIcon className={clsx(`h-4 w-4`)} />}
          type="search"
        />
        <Avatars {...{ imageUrl: avatar.imageUrl, content: avatar.content, items: avatar.items }} />
      </NavbarContent>
    </Navbar>
  )
}
