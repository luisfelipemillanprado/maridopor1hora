import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@heroui/react'
import clsx from 'clsx'

export default function Service(props: { imageUrl: string; name: string; description: string }) {
  const { imageUrl, name, description } = props
  return (
    <Card className={clsx(`bg-content3 col-span-6 gap-y-2`)} shadow={`sm`}>
      <CardHeader className={clsx(`justify-between pb-2`)}>
        <Avatar
          isBordered
          className={clsx(``)}
          color={`warning`}
          radius={`full`}
          size={`sm`}
          src={imageUrl}
        />
      </CardHeader>
      <CardBody className={clsx(`px-3 py-0 font-semibold`)}>
        <span className={clsx(`text-default-900 text-[1.0625rem]`)}>{name}</span>
      </CardBody>
      <CardFooter className={clsx(`pt-0`)}>
        <p className={clsx(`text-default-700 truncate text-[0.9375rem]`)}>{description}</p>
      </CardFooter>
    </Card>
  )
}
