import { ArrowUpRightIcon, PlusIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description - Renders an icon inside a styled span based on the provided icon name.
 * @param props - The component props.
 * @param props.icon - The name of the icon to render. Supported values: 'arrrowupright', 'plus'.
 */
export default function NavigationLinkIcons(props: { icon: string }) {
  const { icon } = props
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'arrrowupright':
        return {
          icon: <ArrowUpRightIcon className={clsx(`fill-default-900 h-4 w-4`)} />,
        }
      case 'plus':
        return {
          icon: <PlusIcon className={clsx(`fill-default-900 h-4 w-4`)} />,
        }
    }
  }
  return (
    <span
      className={clsx(
        `horizontal bg-content2 h-[2.125rem] w-[2.1875rem] justify-center rounded-full`
      )}
    >
      {iconSwitch(icon)?.icon}
    </span>
  )
}
