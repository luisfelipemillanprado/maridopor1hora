import {
  Avatar,
  Badge,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from '@heroui/react'
import MenuIcons from '@/common/gcomponents/navbar/components/atoms/MenuIcons'
import clsx from 'clsx'

/**
 * @description - Renders an avatar button with a dropdown menu for user actions.
 * @param props - The component props.
 * @param props.imageUrl - The URL of the avatar image.
 * @param props.content - Optional badge content to display on the avatar.
 * @param props.items - An array of menu items to display in the dropdown.
 * @param props.items[].title - The display title of the menu item.
 * @param props.items[].key - The unique key for the menu item, also used as the icon identifier.
 * @param props.items[].description - A short description for the menu item.
 * @param props.items[].shortcut - The keyboard shortcut for the menu item.
 */
export default function Avatars(props: {
  imageUrl: string
  content?: string
  items: {
    title: string
    key: string
    description: string
    shortcut: string
  }[]
}) {
  const { imageUrl, content, items } = props
  return (
    <Dropdown className={clsx(`border-content4 bg-content7 border-1`)}>
      <DropdownTrigger>
        <Button
          className={clsx(
            `vertical h-[2.875rem] w-[2.875rem] min-w-[2.875rem] items-center p-2`,
            `3xl:h-12 3xl:w-12`
          )}
          variant={`light`}
        >
          <Badge
            color={`success`}
            content={content}
            shape={`circle`}
            variant={`solid`}
            placement={`bottom-right`}
            size={`sm`}
            showOutline={false}
          >
            <Avatar
              className={clsx(`h-[2.375rem] w-[2.375rem]`)}
              isBordered
              size={`sm`}
              color={`warning`}
              src={imageUrl}
              alt={`User Avatar`}
            />
          </Badge>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label={`dropdown-avatar-menu`} variant={`faded`}>
        <DropdownSection>
          {items.map((item /* , index */) => (
            <DropdownItem
              key={item.key}
              className={clsx(
                `[&>:nth-child(2)>:first-child]:text-medium`,
                `xl:[&>:nth-child(2)>:first-child]:text-[1.0625rem]`
              )}
              description={
                <span className={clsx(`text-small`, `xl:text-[0.9375rem]`)}>{item.description}</span>
              }
              startContent={<MenuIcons {...{ icon: item.key }} />}
              aria-label={`${item.title} menu item`}
              title={item.title}
            >
              {item.title}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}
