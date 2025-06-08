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
    <Card className={clsx(`bg-content3 h-auto w-full`)} shadow={`md`}>
      <CardHeader className={clsx(`horizontal`)}>
        <div className={clsx(``)}></div>
        <div className={clsx(`vertical gap-y-1.5`)}>
          <h4 className={clsx(`text-default-900 text-[1.1875rem] font-bold text-shadow-md`)}>
            {trustBadge.slogan}
          </h4>
          <p className={clsx(`text-default-800 text-[0.9375rem]`)}>{trustBadge.summary}</p>
        </div>
      </CardHeader>
      <CardBody className={clsx(`horizontal justify-between`)}>
        <div className={clsx(`horizontal h-auto w-auto`)}>
          <Button
            className={clsx(`bg-content1 text-default-700`)}
            startContent={
              <BoltIcon className={clsx(`fill-warning-500 h-[0.8125rem] w-[0.8125rem]`)} />
            }
            variant={`flat`}
            radius={`full`}
            size={`sm`}
          >
            {trustBadge.buttonText}
          </Button>
        </div>
        <div className={clsx(`horizontal h-auto w-auto`)}>
          <Rating {...{ rating: trustBadge.rating, reviews: trustBadge.reviews }} />
        </div>
      </CardBody>
    </Card>
  )
}
