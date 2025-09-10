import { Card, CardHeader, CardBody, CardFooter, Link, Button } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Enum representing the available icons for benefits.
 * @remarks Each value corresponds to a specific icon that can be used to visually represent a benefit in the UI.
 * @enum
 * @property {string} DISCOUNT - Represents a discount benefit.
 * @property {string} MONEY - Represents a monetary benefit.
 * @property {string} CLOCK - Represents a time-related benefit.
 * @property {string} GIFT - Represents a gift or reward benefit.
 * @property {string} SHIELD - Represents a protection or security benefit.
 * @property {string} BADGE - Represents an achievement or badge benefit.
 * @property {string} ALERT - Represents an alert or warning benefit.
 * @property {string} WORK - Represents a work or service-related benefit.
 */
export enum BenefitIcon {
  DISCOUNT = 'discount',
  MONEY = 'money',
  CLOCK = 'clock',
  GIFT = 'gift',
  SHIELD = 'shield',
  BADGE = 'badge',
  ALERT = 'alert',
  WORK = 'work',
}

/**
 * @description - Returns the corresponding icon component based on the provided `icon` type.
 * @param icon - The string identifier for the desired benefit icon. Should be one of the values from `BenefitIcon`.
 * @returns The corresponding React icon component with predefined styling, or `undefined` if the icon type is not recognized.
 */
const discountIconClasses = {
  default: 'bxr bxs-ticket-star',
  base: 'text-content2 text-[2.1875rem]',
  breakpoints: '3xl:text-[2.3125rem] 4xl:text-[2.4375rem] xl:text-4xl',
}
const moneyIconClasses = {
  default: 'bxr bxs-currency-note',
  base: 'text-content2 text-[2.1875rem]',
  breakpoints: '3xl:text-[2.3125rem] 4xl:text-[2.4375rem] xl:text-4xl',
}
const clockIconClasses = {
  default: 'bxr bxs-clock-5',
  base: 'text-content2 text-[2.1875rem]',
  breakpoints: '3xl:text-[2.3125rem] 4xl:text-[2.4375rem] xl:text-4xl',
}
const giftIconClasses = {
  default: 'bxr bxs-gift',
  base: 'text-content2 text-[2.1875rem]',
  breakpoints: '3xl:text-[2.3125rem] 4xl:text-[2.4375rem] xl:text-4xl',
}
const shieldIconClasses = {
  default: 'bxr bxs-like',
  base: 'text-content2 text-[2.1875rem]',
  breakpoints: '3xl:text-[2.3125rem] 4xl:text-[2.4375rem] xl:text-4xl',
}
const badgeIconClasses = {
  default: 'bxr bxs-star-square',
  base: 'text-content2 text-[2.1875rem]',
  breakpoints: '3xl:text-[2.3125rem] 4xl:text-[2.4375rem] xl:text-4xl',
}
const alertIconClasses = {
  default: 'bxr bxs-alert-octagon',
  base: 'text-content2 text-[2.1875rem]',
  breakpoints: '3xl:text-[2.3125rem] 4xl:text-[2.4375rem] xl:text-4xl',
}
const workIconClasses = {
  default: 'bxr bxs-gear',
  base: 'text-content2 text-[2.1875rem]',
  breakpoints: '3xl:text-[2.3125rem] 4xl:text-[2.4375rem] xl:text-4xl',
}
const iconSwitch = (icon: string) => {
  switch (icon) {
    case BenefitIcon.DISCOUNT:
      return (
        <i
          aria-label={`discount`}
          className={clsx(
            discountIconClasses.default,
            discountIconClasses.base,
            discountIconClasses.breakpoints
          )}
        />
      )
    case BenefitIcon.MONEY:
      return (
        <i
          aria-label={`money`}
          className={clsx(moneyIconClasses.default, moneyIconClasses.base, moneyIconClasses.breakpoints)}
        />
      )
    case BenefitIcon.CLOCK:
      return (
        <i
          aria-label={`clock`}
          className={clsx(clockIconClasses.default, clockIconClasses.base, clockIconClasses.breakpoints)}
        />
      )
    case BenefitIcon.GIFT:
      return (
        <i
          aria-label={`gift`}
          className={clsx(giftIconClasses.default, giftIconClasses.base, giftIconClasses.breakpoints)}
        />
      )
    case BenefitIcon.SHIELD:
      return (
        <i
          aria-label={`shield`}
          className={clsx(shieldIconClasses.default, shieldIconClasses.base, shieldIconClasses.breakpoints)}
        />
      )
    case BenefitIcon.BADGE:
      return (
        <i
          aria-label={`badge`}
          className={clsx(badgeIconClasses.default, badgeIconClasses.base, badgeIconClasses.breakpoints)}
        />
      )
    case BenefitIcon.ALERT:
      return (
        <i
          aria-label={`alert`}
          className={clsx(alertIconClasses.default, alertIconClasses.base, alertIconClasses.breakpoints)}
        />
      )
    case BenefitIcon.WORK:
      return (
        <i
          aria-label={`work`}
          className={clsx(workIconClasses.default, workIconClasses.base, workIconClasses.breakpoints)}
        />
      )
  }
}

/**
 * @description - Renders a benefit card displaying an icon, title, description, and a link.
 * @param props - The properties for the Benefit component.
 * @param props.title - The title of the benefit.
 * @param props.description - The description of the benefit.
 * @param props.hrefText - The text for the link.
 * @param props.href - The URL for the link.
 * @param props.icon - The name of the icon to display. Supported values:
 * 'discount', 'money', 'clock', 'gift', 'shield', 'badge', 'alert', 'work'.
 */
export default function Benefit(props: {
  title: string
  description: string
  hrefText: string
  href: string
  icon: string
}) {
  const { title, description, icon, hrefText, href } = props
  /**
   *
   */
  const cardClasses = {
    base: 'bg-content3 border-content4 h-[19.5rem] w-80 border-1 p-3',
    breakpoints:
      '3xl:h-[21rem] 3xl:w-[21.875rem] 4xl:w-[22.8125rem] 4xl:h-[21.875rem] xl:h-[19.625rem] xl:w-[21.25rem]',
  }
  const cardHeaderClasses = {
    base: 'horizontal pt-2 pb-2.5',
    breakpoints: '4xl:pb-[0.6875rem]',
  }
  const iconWrapperClasses = {
    base: 'horizontal h-auto w-auto',
  }
  const contentClasses = {
    base: 'vertical h-auto w-full items-start gap-3.5',
  }
  const iconContainerClasses = {
    base: 'bg-warning horizontal border-warning shadow-small justify-center rounded-full border-1 p-1',
    breakpoints: '4xl:p-[0.4375rem]',
  }
  const titleClasses = {
    base: 'text-default-900 text-left text-[1.1875rem] font-bold text-shadow-sm',
    breakpoints: '4xl:text-[1.375rem] 3xl:text-[1.3125rem] xl:text-xl',
  }
  const cardBodyClasses = {
    base: 'px-3 py-0',
  }
  const descriptionClasses = {
    base: 'text-default-800 text-medium text-left text-ellipsis',
    breakpoints: '2xl:text-large xl:text-[1.0625rem]',
  }
  const cardFooterClasses = {
    base: 'vertical items-start pt-3.5 pb-0 pl-2.5',
  }
  const buttomClasses = {
    base: 'bg-content1 border-content4 mb-2.5 h-9 border-1 shadow-sm',
    breakpoints: '4xl:h-10 3xl:h-9.5 2xl:py-4',
  }
  const linkClasses = {
    base: 'text-medium text-default-900',
    breakpoints: '2xl:text-large xl:text-[1.0625rem]',
  }
  /**
   *
   */
  return (
    <Card className={clsx(cardClasses.base, cardClasses.breakpoints)} shadow={`sm`}>
      <CardHeader className={clsx(cardHeaderClasses.base, cardHeaderClasses.breakpoints)}>
        <div className={clsx(contentClasses.base)}>
          <div className={clsx(iconContainerClasses.base, iconContainerClasses.breakpoints)}>
            <span className={clsx(iconWrapperClasses.base)}>{iconSwitch(icon)}</span>
          </div>
          <h3 className={clsx(titleClasses.base, titleClasses.breakpoints)} itemProp={title}>
            {title}
          </h3>
        </div>
      </CardHeader>
      <CardBody className={clsx(cardBodyClasses.base)}>
        <p className={clsx(descriptionClasses.base, descriptionClasses.breakpoints)}>{description}</p>
      </CardBody>
      <CardFooter className={clsx(cardFooterClasses.base)}>
        <Button
          isExternal
          className={clsx(buttomClasses.base, buttomClasses.breakpoints)}
          as={Link}
          href={href}
          variant={`flat`}
          size={`sm`}
          radius={`full`}
          aria-label={hrefText}
        >
          <span className={clsx(linkClasses.base, linkClasses.breakpoints)}>{hrefText}</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
