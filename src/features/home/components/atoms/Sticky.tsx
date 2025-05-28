import { JSX } from 'react'
import clsx from 'clsx'
import { BoltIcon, AdjustmentsHorizontalIcon, CpuChipIcon, WifiIcon } from '@heroicons/react/20/solid'
// --
export default function Sticky(props: { icon: string; change?: boolean }) {
  const { icon, change } = props
  const iconSwitch = (icon: string): { icon: JSX.Element } | undefined => {
    switch (icon) {
      case 'bolt':
        return { icon: <BoltIcon className={clsx(`w-5 h-5 fill-[--color-icon-2]`)} /> }
      case 'adjustement':
        return {
          icon: <AdjustmentsHorizontalIcon className={clsx(`w-5 h-5 fill-[--color-text-3]`)} />,
        }
      case 'automatic':
        return { icon: <CpuChipIcon className={clsx(`w-5 h-5 fill-[--color-text-3]`)} /> }
      case 'wifi':
        return { icon: <WifiIcon className={clsx(`w-5 h-5 fill-[--color-text-3]`)} /> }
    }
  }
  return (
    <div
      className={clsx(
        `w-auto h-auto vertical p-2 rounded-xl shadow-lg`,
        change ? 'bg-[--bg-sticky-card]' : 'bg-[--bg-list-options]'
      )}
    >
      <span className={clsx(`w-auto h-auto`)}>{iconSwitch(icon)?.icon}</span>
    </div>
  )
}
