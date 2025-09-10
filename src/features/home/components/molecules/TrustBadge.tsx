'use client'
import BadgePulse from '@/common/pulse/BadgePulse'
import Rating from '@/features/home/components/atoms/Rating'
import { Card, CardHeader, CardBody, Button } from '@heroui/react'
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
  const cardClasses = {
    base: `bg-content3 border-content4 h-auto w-full border-1 px-1`,
  }
  const cardHeaderClasses = {
    base: 'horizontal gap-x-4 pb-2',
  }
  const secondCircleClasses = {
    base: 'horizontal border-default-400/20 z-50 justify-center rounded-full border-1 p-3 shadow-sm',
  }
  const firstCircleClasses = {
    base: 'horizontal bg-content4 justify-center rounded-full p-1 shadow-md',
  }
  const iconWrapperClasses = {
    base: 'horizontal h-auto w-auto',
  }
  const plusShieldIconClasses = {
    default: 'bxr bxs-plus-shield',
    base: 'text-warning text-7xl',
  }
  const trustpilotIconClasses = {
    default: 'bxl bx-trustpilot',
    base: 'text-content10 text-3xl',
  }
  const chevronRightIconClasses = {
    default: 'bxr bxs-chevron-right',
    base: 'text-content10 text-[2.375rem]',
  }
  const boltIconClasses = {
    default: 'bxr bxs-bolt',
    base: 'text-warning-500 text-2xl',
    breakpoints: '3xl:text-[1.75rem] 4xl:text-[2rem] 2xl:text-[1.5625rem]',
  }
  const textsWrapperClasses = {
    base: 'horizontal h-auto w-full justify-between',
  }
  const textsContainerClasses = {
    base: 'vertical gap-y-2.5',
  }
  const sloganClasses = {
    base: 'text-default-900 text-[1.3125rem] font-bold text-shadow-md',
    breakpoints: '3xl:text-[1.4375rem] 4xl:text-[1.6875rem] xl:text-[1.3125rem] 2xl:text-[1.4375rem]',
  }
  const summaryClasses = {
    base: 'text-default-800 text-medium',
    breakpoints: '2xl:text-large xl:text-[1.0625rem]',
  }
  const trustpilotContainerClasses = {
    base: 'hidden',
    breakpoints: '4xl:mb-2 4xl:h-auto 4xl:w-auto 4xl:pr-3.5 4xl:flex 4xl:flex-row',
  }
  const trustpilotButtonClasses = {
    base: 'bg-content7 shadow-small h-10 gap-x-0 pr-0',
  }
  const trustpilotTextClasses = {
    base: 'text-large text-default-700 ml-2',
  }
  const cardBodyClasses = {
    base: 'horizontal justify-between',
  }
  const boltContainerClasses = {
    base: 'horizontal h-auto w-auto',
    breakpoints: '4xl:pl-3',
  }
  const boltButtonClasses = {
    base: 'bg-content7 shadow-small gap-x-1 pr-3 pl-2.5',
    breakpoints: '3xl:h-9 4xl:h-10',
  }
  const boltButtonTextClasses = {
    base: 'text-small text-default-700 h-auto w-auto',
    breakpoints: '2xl:text-medium 4xl:text-large xl:text-[0.9375rem]',
  }
  const ratingContainerClasses = {
    base: 'horizontal h-auto w-auto',
    breakpoints: '4xl:pr-3.5 4xl:mb-0.5',
  }
  return (
    <Card className={clsx(cardClasses.base)} shadow={`md`}>
      <CardHeader className={clsx(cardHeaderClasses.base)}>
        <BadgePulse colorChange={false}>
          <div className={clsx(secondCircleClasses.base)}>
            <div className={clsx(firstCircleClasses.base)}>
              <span className={clsx(iconWrapperClasses.base)}>
                <i className={clsx(plusShieldIconClasses.default, plusShieldIconClasses.base)} />
              </span>
            </div>
          </div>
        </BadgePulse>
        <div className={clsx(textsWrapperClasses.base)}>
          <div className={clsx(textsContainerClasses.base)}>
            <h3 className={clsx(sloganClasses.base, sloganClasses.breakpoints)}>{trustBadge.slogan}</h3>
            <p className={clsx(summaryClasses.base, summaryClasses.breakpoints)}>{trustBadge.summary}</p>
          </div>
          <div className={clsx(trustpilotContainerClasses.base, trustpilotContainerClasses.breakpoints)}>
            <Button
              className={clsx(trustpilotButtonClasses.base)}
              startContent={
                <span className={clsx(iconWrapperClasses.base)}>
                  <i className={clsx(trustpilotIconClasses.default, trustpilotIconClasses.base)} />
                </span>
              }
              endContent={
                <span className={clsx(iconWrapperClasses.base)}>
                  <i className={clsx(chevronRightIconClasses.default, chevronRightIconClasses.base)} />
                </span>
              }
              variant={`flat`}
              radius={`full`}
              size={`sm`}
              aria-label={trustBadge.buttonTrustPilot[0]}
              title={trustBadge.buttonTrustPilot[0]}
            >
              <span className={clsx(trustpilotTextClasses.base)}>{trustBadge.buttonTrustPilot[0]}</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className={clsx(cardBodyClasses.base)}>
        <div className={clsx(boltContainerClasses.base, boltContainerClasses.breakpoints)}>
          <Button
            className={clsx(boltButtonClasses.base, boltButtonClasses.breakpoints)}
            startContent={
              <span className={clsx(iconWrapperClasses.base)}>
                <i
                  className={clsx(boltIconClasses.default, boltIconClasses.base, boltIconClasses.breakpoints)}
                />
              </span>
            }
            variant={`flat`}
            radius={`full`}
            size={`sm`}
            aria-label={trustBadge.buttonMaridoPor1Hora[0]}
            title={trustBadge.buttonMaridoPor1Hora[0]}
          >
            <span className={clsx(boltButtonTextClasses.base, boltButtonTextClasses.breakpoints)}>
              {trustBadge.buttonMaridoPor1Hora[0]}
            </span>
          </Button>
        </div>
        <div className={clsx(ratingContainerClasses.base, ratingContainerClasses.breakpoints)}>
          <Rating {...{ rating: trustBadge.rating, reviews: trustBadge.reviews }} />
        </div>
      </CardBody>
    </Card>
  )
}
