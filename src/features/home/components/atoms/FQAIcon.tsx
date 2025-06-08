import { InformationCircleIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description - Renders an icon based on the provided `icon` prop.
 * @param props - The properties for the FQAIcon component.
 * @param props.icon - The name of the icon to display. Supported values are `'question'` and `'more'`.
 */
export default function FQAIcon(props: { icon: string }) {
  const { icon } = props
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'question':
        return {
          icon: <InformationCircleIcon className={clsx(`fill-warning h-[1.625rem] w-5`)} />,
        }
      case 'more':
        return {
          icon: <EllipsisVerticalIcon className={clsx(`fill-warning h-[1.625rem] w-5`)} />,
        }
    }
  }
  return <span className={clsx(`h-auto w-auto`)}>{iconSwitch(icon)?.icon}</span>
}
