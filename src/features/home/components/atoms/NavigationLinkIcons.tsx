import { ArrowUpRightIcon, PlusIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

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
    <span className={clsx(`horizontal bg-content1 h-9 w-9 justify-center rounded-full`)}>
      {iconSwitch(icon)?.icon}
    </span>
  )
}
