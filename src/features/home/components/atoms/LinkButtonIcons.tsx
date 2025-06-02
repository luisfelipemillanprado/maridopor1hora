import { MapPinIcon, MagnifyingGlassIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
// --
export default function LinkButtonIcons(props: { icon: string }) {
  const { icon } = props
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'location':
        return { icon: <MapPinIcon className={clsx(`h-[1.125rem] w-[1.125rem]`)} /> }
      case 'services':
        return { icon: <WrenchScrewdriverIcon className={clsx(`h-[1.125rem] w-[1.125rem]`)} /> }
      case 'search':
        return { icon: <MagnifyingGlassIcon className={clsx(`h-[1.125rem] w-[1.125rem]`)} /> }
    }
  }
  return <span className={clsx(`h-auto w-auto`)}>{iconSwitch(icon)?.icon}</span>
}
