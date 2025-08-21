'use client'
import { Card, CardHeader, CardBody, Button } from '@heroui/react'
import Rating from '@/features/home/components/atoms/Rating'
import { BoltIcon, ShieldCheckIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { SparklesIcon } from '@/utils/svgs/Svgs'
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
    buttonMaridoPor1Hora: string[]
    buttonTrustPilot: string[]
  }
}) {
  const { trustBadge } = props
  return (
    <Card className={clsx(`bg-content3 border-content4 h-auto w-full border-1 px-1`)} shadow={`md`}>
      <CardHeader className={clsx(`horizontal gap-x-4 pb-2`)}>
        <div
          className={clsx(
            `hidden`,
            `4xl:flex 4xl:flex-row 4xl:border-1.5 4xl:justify-center 4xl:rounded-full 4xl:border-content4/50 4xl:p-3`
          )}
        >
          <div
            className={clsx(
              `horizontal border-default-400/40 border-1.5 h-auto w-auto justify-center rounded-full p-3 shadow-md`
            )}
          >
            <div
              className={clsx(
                `horizontal bg-content4 h-auto w-auto justify-center rounded-full p-3 shadow-md`
              )}
            >
              <ShieldCheckIcon className={clsx(`fill-warning h-12 w-12`)} aria-hidden={true} />
            </div>
          </div>
        </div>
        <div className={clsx(`horizontal h-auto w-full justify-between`)}>
          <div className={clsx(`vertical gap-y-2.5`)}>
            <h3
              className={clsx(
                `text-default-900 text-[1.3125rem] font-bold text-shadow-md`,
                `3xl:text-[1.4375rem] 4xl:text-2xl xl:text-[1.3125rem] 2xl:text-[1.4375rem]`
              )}
            >
              {trustBadge.slogan}
            </h3>
            <p className={clsx(`text-default-800 text-medium`, `2xl:text-large xl:text-[1.0625rem]`)}>
              {trustBadge.summary}
            </p>
          </div>
          <div className={clsx(`hidden`, `4xl:mb-2 4xl:h-auto 4xl:w-auto 4xl:pr-3.5 4xl:flex 4xl:flex-row`)}>
            <Button
              className={clsx(`bg-content7 shadow-small h-10`)}
              startContent={
                <SparklesIcon className={clsx(`fill-warning-500 h-10 w-10`)} aria-hidden={true} />
              }
              endContent={
                <ChevronRightIcon className={clsx(`fill-warning-500 h-7 w-7`)} aria-hidden={true} />
              }
              variant={`flat`}
              radius={`full`}
              size={`sm`}
              aria-label={trustBadge.buttonTrustPilot[0]}
              title={trustBadge.buttonTrustPilot[0]}
            >
              <span className={clsx(`text-large text-default-700 h-auto w-auto`)}>
                {trustBadge.buttonTrustPilot[0]}
              </span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className={clsx(`horizontal justify-between`)}>
        <div className={clsx(`horizontal h-auto w-auto`, `4xl:pl-3`)}>
          <Button
            className={clsx(`bg-content7 shadow-small`, `4xl:h-10`)}
            startContent={
              <BoltIcon
                className={clsx(
                  `fill-warning-500 h-4 w-4`,
                  `3xl:w-5 3xl:h-5 4xl:h-5.5 4xl:w-5.5 2xl:h-[1.0625rem] 2xl:w-[1.0625rem]`
                )}
                aria-hidden={true}
              />
            }
            variant={`flat`}
            radius={`full`}
            size={`sm`}
            aria-label={trustBadge.buttonMaridoPor1Hora[0]}
            title={trustBadge.buttonMaridoPor1Hora[0]}
          >
            <span
              className={clsx(
                `text-small text-default-700 h-auto w-auto`,
                `2xl:text-medium 4xl:text-large xl:text-[0.9375rem]`
              )}
            >
              {trustBadge.buttonMaridoPor1Hora[0]}
            </span>
          </Button>
        </div>
        <div className={clsx(`horizontal h-auto w-auto`, `4xl:pr-3.5 4xl:mb-0.5`)}>
          <Rating {...{ rating: trustBadge.rating, reviews: trustBadge.reviews }} />
        </div>
      </CardBody>
    </Card>
  )
}
