import { GlobalWhatsappIcon } from '@/utils/svgs/Svgs'
import clsx from 'clsx'

/**
 * Renders an icon inside a span element based on the provided icon name.
 *
 * @param props - The properties for the ContactButtonIcon component.
 * @param props.icon - The name of the icon to render. Currently supports 'contactus'.
 */
export default function ContactButtonIcon(props: { icon: string }) {
  const { icon } = props
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'contactus':
        return { icon: <GlobalWhatsappIcon className={clsx(`h-6 w-6`)} /> }
    }
  }
  return <span className={clsx(`h-auto w-auto`)}>{iconSwitch(icon)?.icon}</span>
}
