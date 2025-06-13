import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Link, Button, ScrollShadow } from '@heroui/react'
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
        return { icon: <TicketIcon className={clsx(`fill-content2 h-5 w-5`)} /> }
      case 'money':
        return { icon: <BanknotesIcon className={clsx(`fill-content2 h-5 w-5`)} /> }
      case 'clock':
        return { icon: <ClockIcon className={clsx(`fill-content2 h-5 w-5`)} /> }
      case 'gift':
        return { icon: <GiftIcon className={clsx(`fill-content2 h-5 w-5`)} /> }
      case 'shield':
        return { icon: <ShieldCheckIcon className={clsx(`fill-content2 h-5 w-5`)} /> }
      case 'badge':
        return { icon: <PercentBadgeIcon className={clsx(`fill-content2 h-5 w-5`)} /> }
      case 'alert':
        return { icon: <ExclamationTriangleIcon className={clsx(`fill-content2 h-5 w-5`)} /> }
      case 'work':
        return { icon: <WrenchScrewdriverIcon className={clsx(`fill-content2 h-5 w-5`)} /> }
    }
  }
  return (
    <Card
      className={clsx(`bg-content2 border-content3 h-auto w-80 border-1 px-3 py-3.5`)}
      isPressable
      shadow={`sm`}
    >
      <CardHeader className={clsx(`horizontal pt-2`)}>
        <div className={clsx(`vertical h-auto w-full items-start gap-3.5`)}>
          <div
            className={clsx(`border-warning bg-warning h-auto w-auto rounded-full border-1 p-1.5`)}
          >
            <span className={clsx(`h-auto w-auto`)}>{iconSwitch(icon)?.icon}</span>
          </div>
          <span
            className={clsx(`text-default-900 text-left text-[1.1875rem] font-bold text-shadow-sm`)}
          >
            {title}
          </span>
        </div>
      </CardHeader>
      <CardBody className={clsx(`px-3 py-0`)}>
        <ScrollShadow hideScrollBar>
          <p className={clsx(`text-default-800 text-medium text-left text-ellipsis`)}>
            {description}
          </p>
        </ScrollShadow>
      </CardBody>
      <CardFooter className={clsx(`vertical items-start pt-3.5 pb-0`)}>
        <Button
          className={clsx(`bg-content1 border-content5 mb-2.5 border-1 shadow-md`)}
          as={Link}
          href={href}
          variant={`shadow`}
          size={`sm`}
          radius={`full`}
        >
          <span className={clsx(`text-medium text-default-900 h-auto w-auto`)}>{hrefText}</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
