'use client'
import { Card, CardHeader, CardBody, Button, Link } from '@heroui/react'
import Image from 'next/image'
import blurEffects from '@/utils/blurs/Blurs'
import clsx from 'clsx'

/**
 * @description - Renders an advertising flyer card component with a title, description text, button, and image.
 * @param props - The properties for the AdvertisingFlyer component.
 * @param props.title - The main title displayed on the flyer.
 * @param props.text - The descriptive text content of the flyer.
 * @param props.buttonText - The text displayed on the action button.
 * @param props.imageUrl - The URL of the image to display on the flyer.
 * @param props.href - The URL to navigate to when the button is clicked.
 * @returns A styled card component presenting an advertising flyer with a call-to-action.
 */
export default function AdvertisingFlyer(props: {
  title: string
  text: string
  buttonText: string
  imageUrl: string
  href: string
}) {
  const { title, text, buttonText, imageUrl, href } = props
  const cardClasses = {
    base: 'gap-y-4.5 bg-gradient-to-br pt-6 pr-[1.375rem] pl-6 from-content9 via-content9 to-warning from-25% via-30% to-80%',
    breakpoints: '3xl:flex 3xl:flex-row 3xl:flex-nowrap 3xl:gap-x-9 4xl:w-[50%]',
  }
  const cardHeaderClasses = {
    base: 'flex flex-col items-center gap-y-2.5 px-0 py-0',
    breakpoints: '3xl:w-1/2 3xl:items-start 3xl:pt-1 3xl:gap-y-4 4xl:gap-y-5',
  }
  const titleClasses = {
    base: 'text-default-900 text-[1.3125rem] font-extrabold text-shadow-sm',
    breakpoints: '3xl:text-[1.4375rem] 4xl:text-[1.5625rem] xl:text-[1.375rem]',
  }
  const textClasses = {
    base: 'text-default-800 text-medium text-center',
    breakpoints: '3xl:text-start 2xl:text-large xl:text-[1.0625rem]',
  }
  const buttonClasses = {
    base: 'bg-content5 mt-2',
    breakpoints: '3xl:mt-2 3xl:h-11 3xl:mb-[1.625rem]',
  }
  const iconWrapperClasses = {
    base: 'horizontal h-auto w-auto',
  }
  const iconSendClasses = {
    default: 'bxr bxs-send bx-tada',
    base: 'text-default-50 text-[2rem]',
  }
  const buttonTextClasses = {
    base: 'text-default-50 text-[1.0625rem]',
    breakpoints: '2xl:text-large',
  }
  const cardBodyClasses = {
    base: 'flex flex-row justify-center px-0 pt-2 pb-0',
    breakpoints: '3xl:w-1/2 3xl:h-60 3xl:pt-0 3xl:justify-start 4xl:h-72 4xl:pt-0',
  }
  const imageClasses = {
    base: 'h-full w-full rounded-t-2xl rounded-b-none object-cover',
  }
  return (
    <Card className={clsx(cardClasses.base, cardClasses.breakpoints)}>
      <CardHeader className={clsx(cardHeaderClasses.base, cardHeaderClasses.breakpoints)}>
        <h3 className={clsx(titleClasses.base, titleClasses.breakpoints)}>{title}</h3>
        <p className={clsx(textClasses.base, textClasses.breakpoints)}>{text}</p>
        <Button
          isExternal
          as={Link}
          href={href}
          className={clsx(buttonClasses.base, buttonClasses.breakpoints)}
          endContent={
            <span className={clsx(iconWrapperClasses.base)}>
              <i className={clsx(iconSendClasses.default, iconSendClasses.base)} />
            </span>
          }
          variant={`shadow`}
          size={`md`}
          aria-label={`Service Reservation`}
        >
          <span className={clsx(buttonTextClasses.base, buttonTextClasses.breakpoints)}>{buttonText}</span>
        </Button>
      </CardHeader>
      <CardBody className={clsx(cardBodyClasses.base, cardBodyClasses.breakpoints)}>
        <Image
          className={clsx(imageClasses.base)}
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
