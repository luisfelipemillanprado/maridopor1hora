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
    <Dropdown>
      <DropdownTrigger>
        <Button className={clsx(`vertical h-11 w-11 min-w-11 items-center p-2`)} variant={`light`}>
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
              className={clsx(`h-[2.1875rem] w-[2.1875rem]`)}
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
              description={item.description}
              shortcut={item.shortcut}
              startContent={<MenuIcons {...{ icon: item.key }} />}
            >
              {item.title}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}
