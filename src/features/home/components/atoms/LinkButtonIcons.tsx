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
        <i
          aria-label={`location`}
          className={clsx(
            `bxr bxs-location`,
            `text-default-500 text-[1.75rem]`,
            `3xl:text-[2rem] 4xl:text-[2.375rem] xl:text-[1.8125rem]`
          )}
        />
      )
    case LinkButtonIconType.SERVICES:
      return (
        <i
          aria-label={`services`}
          className={clsx(
            `bxr bxs-spanner bx-rotate-270`,
            `text-default-500 text-[1.75rem]`,
            `3xl:text-[2rem] 4xl:text-[2.375rem] xl:text-[1.8125rem]`
          )}
        />
      )
    case LinkButtonIconType.SEARCH:
      return (
        <i
          aria-label={`search`}
          className={clsx(
            `bxr bxs-search-alt`,
            `text-default-500 text-[1.75rem]`,
            `3xl:text-[2rem] 4xl:text-[2.375rem] xl:text-[1.8125rem]`
          )}
        />
      )
    case LinkButtonIconType.TEAM:
      return (
        <i
          aria-label={`team`}
          className={clsx(`bxr bxs-group`, `text-default-500`, `3xl:text-[2rem] 4xl:text-[2.4375rem]`)}
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
  return <span className={clsx(`horizontal h-auto w-auto`)}>{iconSwitch(icon)}</span>
}
