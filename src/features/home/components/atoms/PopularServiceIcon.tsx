import clsx from 'clsx'

/**
 * @description - Enum representing the types of popular service icons.
 * @enum {string}
 * @property {string} CLEAR - Represents a cleaning service icon.
 * @property {string} ELECTRICIAN - Represents an electrician service icon.
 * @property {string} PLUMBING - Represents a plumbing service icon.
 * @property {string} AIRCONDITIONER - Represents an air conditioner service icon.
 * @property {string} FURNITURE - Represents a furniture service icon.
 */
export enum PopularServiceIconType {
  CLEAR = 'clear',
  ELECTRICIAN = 'electrician',
  PLUMBING = 'plumbing',
  AIRCONDITIONER = 'airconditioner',
  FURNITURE = 'furniture',
  MASONRY = 'masonry',
}

/**
 * @description - Returns the corresponding icon component based on the provided icon type.
 * @param icon - The string identifier for the desired icon, typically a value from `PopularServiceIconType`.
 * @returns A React element representing the selected icon, or a fallback element if the icon type is unrecognized.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case PopularServiceIconType.CLEAR:
      return (
        <i
          aria-label={`clear`}
          className={clsx(`bxr bxs-spray-can`, `text-content9 text-3xl`, `4xl:text-[2.375rem]`)}
        />
      )
    case PopularServiceIconType.ELECTRICIAN:
      return (
        <i
          aria-label={`electrician`}
          className={clsx(`bxr bxs-light-bulb-alt`, `text-content9 text-3xl`, `4xl:text-[2.375rem]`)}
        />
      )
    case PopularServiceIconType.PLUMBING:
      return (
        <i
          aria-label={`plumbing`}
          className={clsx(`bxr bxs-water-alt`, `text-content9 text-3xl`, `4xl:text-[2.375rem]`)}
        />
      )
    case PopularServiceIconType.AIRCONDITIONER:
      return (
        <i
          aria-label={`airconditioner`}
          className={clsx(`bxr bxs-snowflake`, `text-content9 text-3xl`, `4xl:text-[2.375rem]`)}
        />
      )
    case PopularServiceIconType.FURNITURE:
      return (
        <i
          aria-label={`furniture`}
          className={clsx(`bxr bxs-cabinet`, `text-content9 text-3xl`, `4xl:text-[2.375rem]`)}
        />
      )
    case PopularServiceIconType.MASONRY:
      return (
        <i
          aria-label={`masonry`}
          className={clsx(`bxr bxs-wall`, `text-content9 text-3xl`, `4xl:text-[2.375rem]`)}
        />
      )
    default:
      return <span aria-label={`icon-none`}>?</span>
  }
}

/**
 * @description - Renders an icon based on the provided `icon` prop.
 * @param props - The component props.
 * @param props.icon - The name of the icon to render. Supported values.
 */
export default function PopularServiceIcon(props: { icon: string }) {
  const { icon } = props
  return <span className={clsx(`horizontal h-auto w-auto`)}>{iconSwitch(icon)}</span>
}
