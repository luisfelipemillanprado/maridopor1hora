'use client'
import { Card, CardHeader, CardBody, Button, Link } from '@heroui/react'
import Image from 'next/image'
import { TicketIcon } from '@heroicons/react/24/solid'
import blurEffects from '@/utils/blurs/Blurs'
import clsx from 'clsx'

export default function AdvertisingFlyer(props: {
  title: string
  text: string
  buttonText: string
  imageUrl: string
  href: string
}) {
  const { title, text, buttonText, imageUrl, href } = props
  return (
    <Card
      className={clsx(
        `gap-y-4 px-6 pt-6`,
        `from-content9 via-content9 to-warning bg-gradient-to-br from-25% via-30% to-80%`
      )}
    >
      <CardHeader className={clsx(`flex-col items-center gap-y-2.5 px-0 py-0`)}>
        <h3
          className={clsx(
            `text-default-900 text-[1.3125rem] font-extrabold text-shadow-sm`,
            `3xl:text-[1.375rem]`
          )}
        >
          {title}
        </h3>
        <p className={clsx(`text-default-800 text-medium text-center`, `2xl:text-[1.0625rem]`)}>{text}</p>
        <Button
          isExternal
          as={Link}
          href={href}
          className={clsx(`bg-content5 mt-2`, `3xl:mt-0`)}
          endContent={<TicketIcon className={clsx(`fill-default-50 h-5.5 w-5.5`)} />}
          variant={`shadow`}
          size={`md`}
          aria-label={`Service Reservation`}
        >
          <span className={clsx(`text-default-50 text-medium`, `2xl:text-[1.0625rem]`)}>{buttonText}</span>
        </Button>
      </CardHeader>
      <CardBody className={clsx(`horizontal justify-center pt-2 pb-0`)}>
        <Image
          className={clsx(`h-[16.25rem] w-[16.25rem] rounded-t-xl rounded-b-none`)}
          src={imageUrl}
          width={260}
          height={260}
          placeholder={`blur`}
          blurDataURL={blurEffects.blurUrl}
          alt={`Advertising flyer`}
        />
      </CardBody>
    </Card>
  )
}
