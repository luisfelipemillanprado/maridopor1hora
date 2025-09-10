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
  const cardClasses = {
    base: 'bg-content3 border-content4 col-span-6 gap-y-2 border-1 p-1',
    breakpoints: '3xl:p-1.5 4xl:col-span-4 4xl:p-2',
  }
  const cardHeaderClasses = {
    base: 'justify-between pb-2',
    breakpoints: '4xl:pb-2.5',
  }
  const avatarClasses = {
    base: 'h-11.5 w-11.5',
    breakpoints: '4xl:h-15 4xl:w-15 3xl:h-14 3xl:w-14 xl:h-12 xl:w-12',
  }
  const cardBodyClasses = {
    base: 'flex-none p-0 px-3 py-0',
  }
  const cardFooterClasses = {
    base: 'horizontal items-start pt-0',
  }
  const titleClasses = {
    base: 'text-default-900 text-large font-bold',
    breakpoints: '4xl:text-[1.375rem] 3xl:text-[1.3125rem] xl:text-xl',
  }
  const textClasses = {
    base: 'text-default-800 text-medium truncate',
    breakpoints: `3xl:overflow-visible 3xl:whitespace-normal 3xl:text-start 2xl:text-large xl:text-[1.0625rem]`,
  }
  return (
    <Card isPressable className={clsx(cardClasses.base, cardClasses.breakpoints)} shadow={`md`}>
      <CardHeader className={clsx(cardHeaderClasses.base, cardHeaderClasses.breakpoints)}>
        <Avatar
          isBordered
          className={clsx(avatarClasses.base, avatarClasses.breakpoints)}
          color={`warning`}
          radius={`full`}
          size={`md`}
          src={imageUrl}
          alt={`Image service ${name}`}
          itemProp={`image`}
        />
      </CardHeader>
      <CardBody className={clsx(cardBodyClasses.base)}>
        <h3 className={clsx(titleClasses.base, titleClasses.breakpoints)}>{name}</h3>
      </CardBody>
      <CardFooter className={clsx(cardFooterClasses.base)}>
        <p className={clsx(textClasses.base, textClasses.breakpoints)}>{description}</p>
      </CardFooter>
    </Card>
  )
}
