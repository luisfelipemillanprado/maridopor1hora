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
const locationIconClasses = {
  default: 'bxr bxs-location',
  base: 'text-default-500 text-[1.75rem]',
  breakpoints: '3xl:text-[2rem] 4xl:text-[2.375rem] xl:text-[1.8125rem]',
}
const servicesIconClasses = {
  default: 'bxr bxs-spanner bx-rotate-270',
  base: 'text-default-500 text-[1.75rem]',
  breakpoints: '3xl:text-[2rem] 4xl:text-[2.375rem] xl:text-[1.8125rem]',
}
const searchIconClasses = {
  default: 'bxr bxs-search-alt',
  base: 'text-default-500 text-[1.75rem]',
  breakpoints: '3xl:text-[2rem] 4xl:text-[2.375rem] xl:text-[1.8125rem]',
}
const teamIconClasses = {
  default: 'bxr bxs-group',
  base: 'text-default-500',
  breakpoints: '3xl:text-[2.125rem] 4xl:text-[2.4375rem]',
}
const iconSwitch = (icon: string) => {
  switch (icon) {
    case LinkButtonIconType.LOCATION:
      return (
        <i
          aria-label={`location`}
          className={clsx(
            locationIconClasses.default,
            locationIconClasses.base,
            locationIconClasses.breakpoints
          )}
        />
      )
    case LinkButtonIconType.SERVICES:
      return (
        <i
          aria-label={`services`}
          className={clsx(
            servicesIconClasses.default,
            servicesIconClasses.base,
            servicesIconClasses.breakpoints
          )}
        />
      )
    case LinkButtonIconType.SEARCH:
      return (
        <i
          aria-label={`search`}
          className={clsx(searchIconClasses.default, searchIconClasses.base, searchIconClasses.breakpoints)}
        />
      )
    case LinkButtonIconType.TEAM:
      return (
        <i
          aria-label={`team`}
          className={clsx(teamIconClasses.default, teamIconClasses.base, teamIconClasses.breakpoints)}
        />
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
  const iconWrapperClasses = {
    base: 'horizontal h-auto w-auto',
  }
  return <span className={clsx(iconWrapperClasses.base)}>{iconSwitch(icon)}</span>
}
