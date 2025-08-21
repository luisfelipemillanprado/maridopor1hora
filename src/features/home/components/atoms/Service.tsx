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
      className={clsx(
        `bg-content3 border-content4 col-span-6 gap-y-2 border-1 p-1`,
        `3xl:p-1.5 4xl:col-span-4 4xl:p-2`
      )}
      shadow={`md`}
    >
      <CardHeader className={clsx(`justify-between pb-2`, `4xl:pb-2.5`)}>
        <Avatar
          isBordered
          className={clsx(`h-11.5 w-11.5`, `4xl:h-15 4xl:w-15 3xl:h-14 3xl:w-14 xl:h-12 xl:w-12`)}
          color={`warning`}
          radius={`full`}
          size={`md`}
          src={imageUrl}
          alt={`Image service ${name}`}
          itemProp={`image`}
        />
      </CardHeader>
      <CardBody className={clsx(`flex-none p-0 px-3 py-0`)}>
        <h3
          className={clsx(
            `text-default-900 text-large font-bold`,
            `4xl:text-[1.375rem] 3xl:text-[1.3125rem] xl:text-xl`
          )}
        >
          {name}
        </h3>
      </CardBody>
      <CardFooter className={clsx(`horizontal items-start pt-0`)}>
        <p
          className={clsx(
            `text-default-800 text-medium truncate`,
            `3xl:overflow-visible 3xl:whitespace-normal 3xl:text-start 2xl:text-large xl:text-[1.0625rem]`
          )}
        >
          {description}
        </p>
      </CardFooter>
    </Card>
  )
}
