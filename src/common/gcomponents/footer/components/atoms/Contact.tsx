import { Link, Button } from '@heroui/react'
import { EnvelopeIcon, PhoneIcon, MapIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description - Enum representing the types of contact icons available.
 * @enum {string}
 * @property {string} EMAIL - Represents an email contact icon.
 * @property {string} PHONE - Represents a phone contact icon.
 * @property {string} LOCATION - Represents a location/contact address icon.
 */
export enum ContactIconType {
  EMAIL = 'email',
  PHONE = 'phone',
  LOCATION = 'location',
}

/**
 * @description - Returns a corresponding icon component based on the provided icon type.
 * @param icon - The type of icon to render. Should be one of the values from `ContactIconType`.
 * @returns A React element representing the requested icon, or a fallback span if the type is unrecognized.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case ContactIconType.EMAIL:
      return (
        <EnvelopeIcon
          className={clsx(`fill-warning h-[1.3125rem] w-[1.3125rem]`, `3xl:h-6 3xl:w-6 xl:h-5.5 xl:w-5.5`)}
          aria-label={`email`}
        />
      )
    case ContactIconType.PHONE:
      return (
        <PhoneIcon
          className={clsx(`fill-warning h-[1.3125rem] w-[1.3125rem]`, `3xl:h-6 3xl:w-6 xl:h-5.5 xl:w-5.5`)}
          aria-label={`phone`}
        />
      )
    case ContactIconType.LOCATION:
      return (
        <MapIcon
          className={clsx(`fill-warning h-[1.3125rem] w-[1.3125rem]`, `3xl:h-6 3xl:w-6 xl:h-5.5 xl:w-5.5`)}
          aria-label={`location`}
        />
      )
    default:
      return <span aria-label={`icon-none`}>?</span>
  }
}

/**
 * @description - Renders a contact button with an icon and label.
 * @param props - The properties for the Contact component.
 * @param props.icon - The type of icon to display ("email", "phone", or "instagram").
 * @param props.href - The URL or link to navigate to when the button is clicked.
 * @param props.name - The display name or label for the contact method.
 */
export default function Contact(props: { icon: string; href: string; name: string }) {
  const { icon, href, name } = props
  return (
    <Button
      isExternal
      as={Link}
      startContent={iconSwitch(icon)}
      color={`default`}
      href={href}
      variant={`light`}
      size={`sm`}
    >
      <span className={clsx(`text-default-50 text-large`)}>{name}</span>
    </Button>
  )
}
