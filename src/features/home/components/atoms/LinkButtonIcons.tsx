import { MapPinIcon, MagnifyingGlassIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

/**
 * @description - Renders an icon inside a span based on the provided `icon` prop.
 * @param props - The component props.
 * @param props.icon - The name of the icon to render. Supported values are `'location'`, `'services'`, and `'search'`.
 */
export default function LinkButtonIcons(props: { icon: string }) {
  const { icon } = props
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'location':
        return {
          icon: <MapPinIcon className={clsx(`h-[1.125rem] w-[1.125rem]`, `3xl:h-6 3xl:w-6`)} />,
        }
      case 'services':
        return {
          icon: (
            <WrenchScrewdriverIcon
              className={clsx(`h-[1.125rem] w-[1.125rem]`, `3xl:h-6 3xl:w-6`)}
            />
          ),
        }
      case 'search':
        return {
          icon: (
            <MagnifyingGlassIcon className={clsx(`h-[1.125rem] w-[1.125rem]`, `3xl:h-6 3xl:w-6`)} />
          ),
        }
    }
  }
  return <span className={clsx(`h-auto w-auto`)}>{iconSwitch(icon)?.icon}</span>
}
