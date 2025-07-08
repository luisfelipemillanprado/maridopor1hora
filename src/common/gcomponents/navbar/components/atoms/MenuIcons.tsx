import {
  IdentificationIcon,
  Cog8ToothIcon,
  BellAlertIcon,
  CloudArrowUpIcon,
  ShareIcon,
  ArrowUpOnSquareStackIcon,
} from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description - Renders a menu icon based on the provided icon name.
 * @param props - The component props.
 * @param props.icon - The name of the icon to render. Supported values are:
 *   - 'info': Renders the IdentificationIcon.
 *   - 'alert': Renders the BellAlertIcon.
 *   - 'setting': Renders the Cog8ToothIcon.
 *   - 'link': Renders the ShareIcon.
 *   - 'upload': Renders the CloudArrowUpIcon.
 *   - 'logout': Renders the ArrowUpOnSquareStackIcon with a danger color.
 */
export default function MenuIcons(props: { icon: string }) {
  const { icon } = props
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'info':
        return { icon: <IdentificationIcon className={clsx(`fill-default-500 h-6 w-6`)} /> }
      case 'alert':
        return { icon: <BellAlertIcon className={clsx(`fill-default-500 h-6 w-6`)} /> }
      case 'setting':
        return { icon: <Cog8ToothIcon className={clsx(`fill-default-500 h-6 w-6`)} /> }
      case 'link':
        return { icon: <ShareIcon className={clsx(`fill-default-500 h-6 w-6`)} /> }
      case 'upload':
        return { icon: <CloudArrowUpIcon className={clsx(`fill-default-500 h-6 w-6`)} /> }
      case 'logout':
        return {
          icon: <ArrowUpOnSquareStackIcon className={clsx(`h-6 w-6`, 'text-warning')} />,
        }
    }
  }
  return <span className={clsx(`h-auto w-auto`)}>{iconSwitch(icon)?.icon}</span>
}
