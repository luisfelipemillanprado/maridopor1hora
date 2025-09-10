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
const clearIconClasses = {
  default: 'bxr bxs-spray-can',
  base: 'text-content9 text-3xl',
  breakpoints: '4xl:text-4xl',
}
const electricianIconClasses = {
  default: 'bxr bxs-light-bulb-alt',
  base: 'text-content9 text-3xl',
  breakpoints: '4xl:text-4xl',
}
const plumbingIconClasses = {
  default: 'bxr bxs-water-alt',
  base: 'text-content9 text-3xl',
  breakpoints: '4xl:text-4xl',
}
const airconditionerIconClasses = {
  default: 'bxr bxs-snowflake',
  base: 'text-content9 text-3xl',
  breakpoints: '4xl:text-4xl',
}
const furnitureIconClasses = {
  default: 'bxr bxs-cabinet',
  base: 'text-content9 text-3xl',
  breakpoints: '4xl:text-4xl',
}
const masonryIconClasses = {
  default: 'bxr bxs-wall',
  base: 'text-content9 text-3xl',
  breakpoints: '4xl:text-4xl',
}

const iconSwitch = (icon: string) => {
  switch (icon) {
    case PopularServiceIconType.CLEAR:
      return (
        <i
          aria-label={`clear`}
          className={clsx(clearIconClasses.default, clearIconClasses.base, clearIconClasses.breakpoints)}
        />
      )
    case PopularServiceIconType.ELECTRICIAN:
      return (
        <i
          aria-label={`electrician`}
          className={clsx(
            electricianIconClasses.default,
            electricianIconClasses.base,
            electricianIconClasses.breakpoints
          )}
        />
      )
    case PopularServiceIconType.PLUMBING:
      return (
        <i
          aria-label={`plumbing`}
          className={clsx(
            plumbingIconClasses.default,
            plumbingIconClasses.base,
            plumbingIconClasses.breakpoints
          )}
        />
      )
    case PopularServiceIconType.AIRCONDITIONER:
      return (
        <i
          aria-label={`airconditioner`}
          className={clsx(
            airconditionerIconClasses.default,
            airconditionerIconClasses.base,
            airconditionerIconClasses.breakpoints
          )}
        />
      )
    case PopularServiceIconType.FURNITURE:
      return (
        <i
          aria-label={`furniture`}
          className={clsx(
            furnitureIconClasses.default,
            furnitureIconClasses.base,
            furnitureIconClasses.breakpoints
          )}
        />
      )
    case PopularServiceIconType.MASONRY:
      return (
        <i
          aria-label={`masonry`}
          className={clsx(
            masonryIconClasses.default,
            masonryIconClasses.base,
            masonryIconClasses.breakpoints
          )}
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
  const iconWrapperClass = { base: 'horizontal h-auto w-auto' }
  return <span className={clsx(iconWrapperClass.base)}>{iconSwitch(icon)}</span>
}
