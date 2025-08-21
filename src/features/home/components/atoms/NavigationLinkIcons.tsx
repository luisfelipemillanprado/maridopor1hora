import { ArrowUpRightIcon, PlusIcon } from '@heroicons/react/24/solid'
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
const iconSwitch = (icon: string) => {
  switch (icon) {
    case NavigationIcon.ARROWUPRIGHT:
      return (
        <ArrowUpRightIcon
          aria-label={`arrow-up-right`}
          className={clsx(`fill-default-900 h-4 w-4`, `h-5.5 w-5.5`)}
        />
      )
    case NavigationIcon.PLUS:
      return <PlusIcon aria-label={`plus`} className={clsx(`fill-default-900 h-4 w-4`, `h-5.5 w-5.5`)} />
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
  return (
    <span
      className={clsx(
        `horizontal bg-content2 h-[2.125rem] w-[2.1875rem] justify-center rounded-full`,
        `4xl:h-10 4xl:w-10`
      )}
    >
      {iconSwitch(icon)}
    </span>
  )
}
