'use client'
import { Card, CardHeader, CardBody, Button } from '@heroui/react'
import Rating from '@/features/home/components/atoms/Rating'
import { BoltIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description - Renders a trust badge card displaying a slogan, summary, rating, reviews, and a call-to-action button.
 * @param props - The component props.
 * @param props.trustBadge - The trust badge data.
 * @param props.trustBadge.slogan - The main slogan text to display.
 * @param props.trustBadge.summary - A brief summary or description.
 * @param props.trustBadge.rating - The rating value to display.
 * @param props.trustBadge.reviews - The number of reviews to display.
 * @param props.trustBadge.buttonText - The text for the call-to-action button.
 */
export default function TrustBadge(props: {
  trustBadge: {
    slogan: string
    summary: string
    rating: string
    reviews: string
    buttonText: string
  }
}) {
  const { trustBadge } = props
  return (
    <Card className={clsx(`bg-content3 border-content4 h-auto w-full border-1 px-1`)} shadow={`md`}>
      <CardHeader className={clsx(`horizontal pb-2`)}>
        <div className={clsx(``)}></div>
        <div className={clsx(`vertical gap-y-2.5`)}>
          <h3
            className={clsx(
              `text-default-900 text-[1.3125rem] font-bold text-shadow-md`,
              `3xl:text-2xl xl:text-[1.375rem] 2xl:text-[1.4375rem]`
            )}
          >
            {trustBadge.slogan}
          </h3>
          <p className={clsx(`text-default-800 text-medium`, `2xl:text-large xl:text-[1.0625rem]`)}>
            {trustBadge.summary}
          </p>
        </div>
      </CardHeader>
      <CardBody className={clsx(`horizontal justify-between`)}>
        <div className={clsx(`horizontal h-auto w-auto`)}>
          <Button
            className={clsx(`bg-content1`)}
            startContent={
              <BoltIcon
                className={clsx(
                  `fill-warning-500 h-4 w-4`,
                  `3xl:w-5 3xl:h-5 2xl:h-[1.0625rem] 2xl:w-[1.0625rem]`
                )}
                aria-hidden={true}
              />
            }
            variant={`flat`}
            radius={`full`}
            size={`sm`}
            aria-label={trustBadge.buttonText}
            title={trustBadge.buttonText}
          >
            <span
              className={clsx(
                `text-small text-default-700 h-auto w-auto`,
                `2xl:text-medium xl:text-[0.9375rem]`
              )}
            >
              {trustBadge.buttonText}
            </span>
          </Button>
        </div>
        <div className={clsx(`horizontal h-auto w-auto`)}>
          <Rating {...{ rating: trustBadge.rating, reviews: trustBadge.reviews }} />
        </div>
      </CardBody>
    </Card>
  )
}
