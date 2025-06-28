import { MapPinIcon, WrenchScrewdriverIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { SearchIcon } from '@/utils/svgs/Svgs'
import clsx from 'clsx'

/**
 * @description - Enum representing the available icon types for the LinkButton component.
 * @enum
 * @property {string} LOCATION - Represents a location icon.
 * @property {string} SERVICES - Represents a services icon.
 * @property {string} SEARCH - Represents a search icon.
 * @property {string} TEAM - Represents a team icon.
 */
export enum LinkButtonIconType {
  LOCATION = 'location',
  SERVICES = 'services',
  SEARCH = 'search',
  TEAM = 'team',
}

/**
 * @description - Returns a corresponding icon component based on the provided icon type.
 * @param icon - The type of icon to render, expected to be a value from `LinkButtonIconType`.
 * @returns The appropriate icon React component for the given type, or a fallback span if the type
 * is unrecognized.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case LinkButtonIconType.LOCATION:
      return (
        <MapPinIcon
          aria-label={`location`}
          className={clsx(`h-[1.125rem] w-[1.125rem]`, `3xl:h-6 3xl:w-6`)}
        />
      )
    case LinkButtonIconType.SERVICES:
      return (
        <WrenchScrewdriverIcon
          aria-label={`services`}
          className={clsx(`h-[1.125rem] w-[1.125rem]`, `3xl:h-6 3xl:w-6`)}
        />
      )
    case LinkButtonIconType.SEARCH:
      return <SearchIcon aria-label={`search`} className={clsx(`h-6 w-6 fill-current`, `3xl:h-7 3xl:w-7`)} />
    case LinkButtonIconType.TEAM:
      return (
        <UserGroupIcon aria-label={`team`} className={clsx(`h-[1.125rem] w-[1.125rem]`, `3xl:h-6 3xl:w-6`)} />
      )
    default:
      return <span aria-label={`icon-none`}>?</span>
  }
}

/**
 * @description - Renders an icon inside a span based on the provided `icon` prop.
 * @param props - The component props.
 * @param props.icon - The name of the icon to render. Supported values are `'location'`, `'services'`, and `'search'`.
 */
export default function LinkButtonIcons(props: { icon: string }) {
  const { icon } = props
  return <span className={clsx(`h-auto w-auto`)}>{iconSwitch(icon)}</span>
}
