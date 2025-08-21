import { Card, CardHeader, CardBody, CardFooter, Link, Button } from '@heroui/react'
import {
  TicketIcon,
  BanknotesIcon,
  ClockIcon,
  GiftIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
  PercentBadgeIcon,
} from '@heroicons/react/24/solid'
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
const iconSwitch = (icon: string) => {
  switch (icon) {
    case BenefitIcon.DISCOUNT:
      return (
        <TicketIcon
          className={clsx(
            `fill-content2 h-7 w-7`,
            `3xl:h-8 3xl:w-8 4xl:w-9 4xl:h-9 xl:h-7.5 xl:w-7.5 2xl:h-[1.9375rem] 2xl:w-[1.9375rem]`
          )}
        />
      )
    case BenefitIcon.MONEY:
      return (
        <BanknotesIcon
          className={clsx(
            `fill-content2 h-7 w-7`,
            `3xl:h-8 3xl:w-8 4xl:w-9 4xl:h-9 xl:h-7.5 xl:w-7.5 2xl:h-[1.9375rem] 2xl:w-[1.9375rem]`
          )}
        />
      )
    case BenefitIcon.CLOCK:
      return (
        <ClockIcon
          className={clsx(
            `fill-content2 h-7 w-7`,
            `3xl:h-8 3xl:w-8 4xl:w-9 4xl:h-9 xl:h-7.5 xl:w-7.5 2xl:h-[1.9375rem] 2xl:w-[1.9375rem]`
          )}
        />
      )
    case BenefitIcon.GIFT:
      return (
        <GiftIcon
          className={clsx(
            `fill-content2 h-7 w-7`,
            `3xl:h-8 3xl:w-8 4xl:w-9 4xl:h-9 xl:h-7.5 xl:w-7.5 2xl:h-[1.9375rem] 2xl:w-[1.9375rem]`
          )}
        />
      )
    case BenefitIcon.SHIELD:
      return (
        <ShieldCheckIcon
          className={clsx(
            `fill-content2 h-7 w-7`,
            `3xl:h-8 3xl:w-8 4xl:w-9 4xl:h-9 xl:h-7.5 xl:w-7.5 2xl:h-[1.9375rem] 2xl:w-[1.9375rem]`
          )}
        />
      )
    case BenefitIcon.BADGE:
      return (
        <PercentBadgeIcon
          className={clsx(
            `fill-content2 h-7 w-7`,
            `3xl:h-8 3xl:w-8 4xl:w-9 4xl:h-9 xl:h-7.5 xl:w-7.5 2xl:h-[1.9375rem] 2xl:w-[1.9375rem]`
          )}
        />
      )
    case BenefitIcon.ALERT:
      return (
        <ExclamationTriangleIcon
          className={clsx(
            `fill-content2 h-7 w-7`,
            `3xl:h-8 3xl:w-8 4xl:w-9 4xl:h-9 xl:h-7.5 xl:w-7.5 2xl:h-[1.9375rem] 2xl:w-[1.9375rem]`
          )}
        />
      )
    case BenefitIcon.WORK:
      return (
        <WrenchScrewdriverIcon
          className={clsx(
            `fill-content2 h-7 w-7`,
            `3xl:h-8 3xl:w-8 4xl:w-9 4xl:h-9 xl:h-7.5 xl:w-7.5 2xl:h-[1.9375rem] 2xl:w-[1.9375rem]`
          )}
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
  return (
    <Card
      className={clsx(
        `bg-content3 border-content4 h-[19.375rem] w-80 border-1 p-3`,
        `3xl:h-[20.9375rem] 3xl:w-[21.875rem] 4xl:w-[22.8125rem] 4xl:h-[21.875rem] xl:h-[19.5rem] xl:w-[20.9375rem]`
      )}
      shadow={`sm`}
    >
      <CardHeader className={clsx(`horizontal pt-2 pb-2.5`, `4xl:pb-[0.6875rem]`)}>
        <div className={clsx(`vertical h-auto w-full items-start gap-3.5`)}>
          <div
            className={clsx(
              `bg-warning horizontal border-warning shadow-small justify-center rounded-full border-1 p-1.5`,
              `4xl:p-[0.4375rem]`
            )}
          >
            <span className={clsx(`h-auto w-auto`)}>{iconSwitch(icon)}</span>
          </div>
          <h3
            className={clsx(
              `text-default-900 text-left text-[1.1875rem] font-bold text-shadow-sm`,
              `4xl:text-[1.375rem] 3xl:text-[1.3125rem] xl:text-xl`
            )}
            itemProp={title}
          >
            {title}
          </h3>
        </div>
      </CardHeader>
      <CardBody className={clsx(`px-3 py-0`)}>
        <p
          className={clsx(
            `text-default-800 text-medium text-left text-ellipsis`,
            `2xl:text-large xl:text-[1.0625rem]`
          )}
        >
          {description}
        </p>
      </CardBody>
      <CardFooter className={clsx(`vertical items-start pt-3.5 pb-0 pl-2.5`)}>
        <Button
          isExternal
          className={clsx(
            `bg-content1 border-content4 mb-2.5 h-9 border-1 shadow-sm`,
            `4xl:h-10 3xl:h-9.5 2xl:py-4`
          )}
          as={Link}
          href={href}
          variant={`flat`}
          size={`sm`}
          radius={`full`}
          aria-label={hrefText}
        >
          <span className={clsx(`text-medium text-default-900`, `2xl:text-large xl:text-[1.0625rem]`)}>
            {hrefText}
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}
