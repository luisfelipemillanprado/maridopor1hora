'use client'
import { Card, CardHeader, CardBody, Button } from '@heroui/react'
import Rating from '@/features/home/components/atoms/Rating'
import { BoltIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

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
    <Card className={clsx(`bg-content3 h-auto w-full`)} shadow={`sm`}>
      <CardHeader className={clsx(`horizontal`)}>
        <div className={clsx(``)}></div>
        <div className={clsx(`vertical gap-y-1.5`)}>
          <h4 className={clsx(`text-default-900 text-[1.1875rem] font-semibold drop-shadow-sm`)}>
            {trustBadge.slogan}
          </h4>
          <p className={clsx(`text-default-800 text-[0.9375rem]`)}>{trustBadge.summary}</p>
        </div>
      </CardHeader>
      <CardBody className={clsx(`horizontal justify-between`)}>
        <div className={clsx(``)}>
          <Button
            className={clsx(`bg-content1 text-default-700`)}
            startContent={<BoltIcon className={clsx(`fill-warning-500 h-4 w-4`)} />}
            variant={`flat`}
            radius={`full`}
            size={`sm`}
          >
            {trustBadge.buttonText}
          </Button>
        </div>
        <div className={clsx(``)}>
          <Rating {...{ rating: trustBadge.rating, reviews: trustBadge.reviews }} />
        </div>
      </CardBody>
    </Card>
  )
}
