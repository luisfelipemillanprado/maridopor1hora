import clsx from 'clsx'

/**
 * @description - Enum representing the available navigation icon types.
 * @enum {string}
 * @property {string} ARROWUPRIGHT - Represents an arrow pointing up and to the right.
 * @property {string} PLUS - Represents a plus sign icon.
 */
export enum NavigationIcon {
  ARROWUPRIGHT = 'arrowupright',
  PLUS = 'plus',
}

/**
 * @description - Returns the corresponding icon component based on the provided icon type.
 * @param icon - The string identifier for the desired icon, typically from the `NavigationIcon` enum.
 * @returns The matching icon React component, or a fallback span if the icon type is unrecognized.
 */
const arrowUpRightIconClasses = {
  default: 'bxr bxs-arrow-up-right-stroke bx-tada',
  base: 'text-default-900 text-[2.3125rem]',
  breakpoints: '3xl:text-[2.4375rem] 4xl:text-[2.75rem]',
}
const iconSwitch = (icon: string) => {
  switch (icon) {
    case NavigationIcon.ARROWUPRIGHT:
      return (
        <i
          aria-label={`arrow-up-right`}
          className={clsx(
            arrowUpRightIconClasses.default,
            arrowUpRightIconClasses.base,
            arrowUpRightIconClasses.breakpoints
          )}
        />
      )
    default:
      return <span aria-label={`icon-none`}>?</span>
  }
}

/**
 * @description - Renders an icon inside a styled span based on the provided icon name.
 * @param props - The component props.
 * @param props.icon - The name of the icon to render. Supported values: 'arrrowupright', 'plus'.
 */
export default function NavigationLinkIcons(props: { icon: string }) {
  const { icon } = props
  const iconWrapperClasses = {
    base: 'horizontal bg-content2 h-[2.125rem] w-[2.1875rem] justify-center rounded-full',
    breakpoints: '4xl:h-10 4xl:w-10 3xl:h-[2.3125rem] 3xl:w-[2.3125rem]',
  }
  return (
    <span className={clsx(iconWrapperClasses.base, iconWrapperClasses.breakpoints)}>{iconSwitch(icon)}</span>
  )
}
