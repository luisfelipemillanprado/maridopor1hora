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
 * @description - Enum representing the available types of menu icons.
 * @enum
 * @property {string} INFO - Represents an informational icon.
 * @property {string} ALERT - Represents an alert or warning icon.
 * @property {string} SETTING - Represents a settings or configuration icon.
 * @property {string} LINK - Represents a link or external resource icon.
 * @property {string} UPLOAD - Represents an upload action icon.
 * @property {string} LOGOUT - Represents a logout or sign-out icon.
 */
export enum MenuIconType {
  INFO = 'info',
  ALERT = 'alert',
  SETTING = 'setting',
  LINK = 'link',
  UPLOAD = 'upload',
  LOGOUT = 'logout',
}

/**
 * @description - Returns a corresponding icon React element based on the provided icon type.
 * @param icon - The type of icon to render, expected to be a value from `MenuIconType`.
 * @returns A React element representing the selected icon, or a fallback span if the type is unrecognized.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case MenuIconType.INFO:
      return <IdentificationIcon aria-label={`info`} className={clsx('fill-default-500 h-6 w-6')} />
    case MenuIconType.ALERT:
      return <BellAlertIcon aria-label={`alert`} className={clsx('fill-default-500 h-6 w-6')} />
    case MenuIconType.SETTING:
      return <Cog8ToothIcon aria-label={`setting`} className={clsx('fill-default-500 h-6 w-6')} />
    case MenuIconType.LINK:
      return <ShareIcon aria-label={`link`} className={clsx('fill-default-500 h-6 w-6')} />
    case MenuIconType.UPLOAD:
      return <CloudArrowUpIcon aria-label={`upload`} className={clsx('fill-default-500 h-6 w-6')} />
    case MenuIconType.LOGOUT:
      return <ArrowUpOnSquareStackIcon aria-label={`logout`} className={clsx('h-6 w-6', 'text-warning')} />
    default:
      return <span aria-label={`icon-none`}>?</span>
  }
}

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
  return <span className={clsx(`h-auto w-auto`)}>{iconSwitch(icon)}</span>
}
