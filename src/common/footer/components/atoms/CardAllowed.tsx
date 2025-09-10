import clsx from 'clsx'

/**
 * @description - Enum representing the supported card icon types.
 * @remarks Used to specify the type of payment card or service icon to display.
 * @enum {string}
 * @property {string} VISA - Represents a Visa card.
 * @property {string} MASTERCARD - Represents a Mastercard card.
 * @property {string} PAYPAL - Represents PayPal.
 */
export enum TypeCardIcon {
  VISA = 'visa',
  MASTERCARD = 'mastercard',
  PAYPAL = 'paypal',
}

/**
 * @description - Returns a JSX element representing a credit card icon based on the provided icon type.
 * @param icon - The type of card icon to render. Should be one of the values from `TypeCardIcon`.
 * @returns A JSX element containing the corresponding card icon or a fallback if the type is not recognized.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case TypeCardIcon.VISA:
      return <i aria-label={`visa`} className={clsx(`bxl bx-visa`)} />
    case TypeCardIcon.MASTERCARD:
      return <i aria-label={`mastercard`} className={clsx(`bxl bx-mastercard`)} />
    case TypeCardIcon.PAYPAL:
      return <i aria-label={`paypal`} className={clsx(`bxl bx-paypal`)} />
    default:
      return <span aria-label={`icon-none`}>?</span>
  }
}

/**
 * @description - Renders a span element containing an icon based on the provided icon name.
 * @param props - The properties for the CardAllowed component.
 * @param props.icon - The name of the icon to display.
 * @returns A span element with the corresponding icon.
 */
export default function CardAllowed(props: { icon: string }) {
  return <span className={clsx(`horizontal h-auto w-auto`)}>{iconSwitch(props.icon)}</span>
}
