import {
  IdentificationIcon,
  Cog8ToothIcon,
  BellAlertIcon,
  CloudArrowUpIcon,
  ShareIcon,
  ArrowUpOnSquareStackIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
// --
export default function Sticky(props: { icon: string }) {
  const { icon } = props
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'info':
        return { icon: <IdentificationIcon className={clsx(`h-[1.375rem] w-[1.375rem]`)} /> }
      case 'alert':
        return { icon: <BellAlertIcon className={clsx(`h-[1.375rem] w-[1.375rem]`)} /> }
      case 'setting':
        return { icon: <Cog8ToothIcon className={clsx(`h-[1.375rem] w-[1.375rem]`)} /> }
      case 'link':
        return { icon: <ShareIcon className={clsx(`h-[1.375rem] w-[1.375rem]`)} /> }
      case 'upload':
        return { icon: <CloudArrowUpIcon className={clsx(`h-[1.375rem] w-[1.375rem]`)} /> }
      case 'logout':
        return {
          icon: (
            <ArrowUpOnSquareStackIcon
              className={clsx(`h-[1.375rem] w-[1.375rem]`, 'text-danger')}
            />
          ),
        }
    }
  }
  return <span className={clsx(`h-auto w-auto`)}>{iconSwitch(icon)?.icon}</span>
}
