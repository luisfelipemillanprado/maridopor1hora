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
    <Dropdown className={clsx(`border-warning-200 border-1 bg-[#fafbfd]`)}>
      <DropdownTrigger>
        <Button
          className={clsx(`vertical h-11 w-11 min-w-11 items-center p-2`, `3xl:h-12 3xl:w-12`)}
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
              className={clsx(
                `h-[2.1875rem] w-[2.1875rem]`,
                `3xl:h-[2.3125rem] 3xl:w-[2.3125rem] xl:h-9 xl:w-9`
              )}
              isBordered
              size={`sm`}
              color={`warning`}
              src={imageUrl}
            />
          </Badge>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label={`dropdown-avatar-menu`} variant={`faded`}>
        <DropdownSection showDivider title={`Actions`}>
          {items.map((item /* , index */) => (
            <DropdownItem
              key={item.key}
              description={<span className={clsx(`text-small`)}>{item.description}</span>}
              startContent={<MenuIcons {...{ icon: item.key }} />}
            >
              <span className={clsx(`text-medium`, `xl:text-[1.0625rem]`)}>{item.title}</span>
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}
