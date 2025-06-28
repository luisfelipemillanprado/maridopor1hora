import { InformationCircleIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description - Enum representing the available types of icons for the FQA (Frequently Asked Questions)
 * section.
 * @enum
 * @property {string} QUESTION - Represents a question icon.
 * @property {string} MORE - Represents an icon indicating more options or information.
 */
export enum FQAIconType {
  QUESTION = 'question',
  MORE = 'more',
}

/**
 * @description - Returns a specific icon component based on the provided icon type.
 * @param icon - The type of icon to render. Should be a value from `FQAIconType`.
 * @returns The corresponding icon React element, or `undefined` if the icon type is not recognized.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case FQAIconType.QUESTION:
      return (
        <InformationCircleIcon aria-label={`information`} className={clsx(`fill-warning h-[1.625rem] w-5`)} />
      )
    case FQAIconType.MORE:
      return (
        <EllipsisVerticalIcon aria-label={`ellipsis`} className={clsx(`fill-warning h-[1.625rem] w-5`)} />
      )
    default:
      return <span aria-label={`icon-none`}>?</span>
  }
}

/**
 * @description - Renders an icon based on the provided `icon` prop.
 * @param props - The properties for the FQAIcon component.
 * @param props.icon - The name of the icon to display. Supported values are `'question'` and `'more'`.
 */
export default function FQAIcon(props: { icon: string }) {
  const { icon } = props
  return <span className={clsx(`h-auto w-auto`)}>{iconSwitch(icon)}</span>
}
