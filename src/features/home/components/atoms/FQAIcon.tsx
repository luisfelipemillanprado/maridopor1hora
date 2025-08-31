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
    case FQAIconType.MORE:
      return (
        <i
          aria-label={`ellipsis`}
          className={clsx(`bxr bxs-dots-vertical-rounded`, `text-warning text-2xl`, `3xl:text-[1.625rem]`)}
        />
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
  return <span className={clsx(`horizontal h-auto w-auto`)}>{iconSwitch(icon)}</span>
}
