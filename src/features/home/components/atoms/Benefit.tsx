import React from 'react'
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
  const iconSwitch = (icon: string) => {
    switch (icon) {
      case 'discount':
        return {
          icon: (
            <TicketIcon
              className={clsx(`fill-content2 h-[1.4375rem] w-[1.4375rem]`, `2xl:h-6 2xl:w-6`)}
            />
          ),
        }
      case 'money':
        return {
          icon: (
            <BanknotesIcon
              className={clsx(`fill-content2 h-[1.4375rem] w-[1.4375rem]`, `2xl:h-6 2xl:w-6`)}
            />
          ),
        }
      case 'clock':
        return {
          icon: (
            <ClockIcon
              className={clsx(`fill-content2 h-[1.4375rem] w-[1.4375rem]`, `2xl:h-6 2xl:w-6`)}
            />
          ),
        }
      case 'gift':
        return {
          icon: (
            <GiftIcon
              className={clsx(`fill-content2 h-[1.4375rem] w-[1.4375rem]`, `2xl:h-6 2xl:w-6`)}
            />
          ),
        }
      case 'shield':
        return {
          icon: (
            <ShieldCheckIcon
              className={clsx(`fill-content2 h-[1.4375rem] w-[1.4375rem]`, `2xl:h-6 2xl:w-6`)}
            />
          ),
        }
      case 'badge':
        return {
          icon: (
            <PercentBadgeIcon
              className={clsx(`fill-content2 h-[1.4375rem] w-[1.4375rem]`, `2xl:h-6 2xl:w-6`)}
            />
          ),
        }
      case 'alert':
        return {
          icon: (
            <ExclamationTriangleIcon
              className={clsx(`fill-content2 h-[1.4375rem] w-[1.4375rem]`, `2xl:h-6 2xl:w-6`)}
            />
          ),
        }
      case 'work':
        return {
          icon: (
            <WrenchScrewdriverIcon
              className={clsx(`fill-content2 h-[1.4375rem] w-[1.4375rem]`, `2xl:h-6 2xl:w-6`)}
            />
          ),
        }
    }
  }
  return (
    <Card
      className={clsx(
        `bg-content2 border-content3 h-[18.9375rem] w-80 border-1 px-3 py-3.5`,
        `2xl:h-[19.5rem] 2xl:w-[20.9375rem]`
      )}
      shadow={`sm`}
    >
      <CardHeader className={clsx(`horizontal pt-2 pb-2.5`)}>
        <div className={clsx(`vertical h-auto w-full items-start gap-3.5`)}>
          <div
            className={clsx(
              `bg-warning hrizontal h-auto w-auto justify-center rounded-full p-1.5`,
              `border-warning shadow-small border-1`
            )}
          >
            <span className={clsx(`h-auto w-auto`)}>{iconSwitch(icon)?.icon}</span>
          </div>
          <span
            className={clsx(
              `text-default-900 text-left text-[1.1875rem] font-bold text-shadow-sm`,
              `2xl:text-xl`
            )}
          >
            {title}
          </span>
        </div>
      </CardHeader>
      <CardBody className={clsx(`px-3 py-0`)}>
        <p
          className={clsx(
            `text-default-800 text-medium text-left text-ellipsis`,
            `2xl:text-[1.0625rem]`
          )}
        >
          {description}
        </p>
      </CardBody>
      <CardFooter className={clsx(`vertical items-start pt-3.5 pb-0 pl-2.5`)}>
        <Button
          className={clsx(
            `bg-content1 border-content4 mb-2.5 border-1 shadow-sm`,
            `2xl:min-h-8 2xl:py-4`
          )}
          as={Link}
          href={href}
          variant={`flat`}
          size={`sm`}
          radius={`full`}
        >
          <span
            className={clsx(`text-medium text-default-900 h-auto w-auto`, `2xl:text-[1.0625rem]`)}
          >
            {hrefText}
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}
