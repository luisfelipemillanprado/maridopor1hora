import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Renders a service card displaying an avatar, service name, and description.
 * @param props - The properties for the Service component.
 * @param props.imageUrl - The URL of the image to display as the avatar.
 * @param props.name - The name of the service.
 * @param props.description - The description of the service.
 */
export default function Service(props: { imageUrl: string; name: string; description: string }) {
  const { imageUrl, name, description } = props
  return (
    <Card
      isPressable
      className={clsx(`bg-content3 border-content4 col-span-6 gap-y-2 border-1`)}
      shadow={`md`}
    >
      <CardHeader className={clsx(`justify-between pb-2`)}>
        <Avatar
          isBordered
          className={clsx(``)}
          color={`warning`}
          radius={`full`}
          size={`md`}
          src={imageUrl}
        />
      </CardHeader>
      <CardBody className={clsx(`flex-none p-0 px-3 py-0`)}>
        <span className={clsx(`text-default-900 text-large font-bold`, `2xl:text-[1.1875rem]`)}>
          {name}
        </span>
      </CardBody>
      <CardFooter className={clsx(`horizontal items-start pt-0`)}>
        <p className={clsx(`text-default-800 text-medium truncate`, `2xl:text-[1.0625rem]`)}>
          {description}
        </p>
      </CardFooter>
    </Card>
  )
}
