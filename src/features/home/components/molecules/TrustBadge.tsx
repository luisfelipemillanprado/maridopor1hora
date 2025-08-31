'use client'
import BadgePulse from '@/common/gcomponents/pulse/BadgePulse'
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
  return (
    <Card className={clsx(`bg-content3 border-content4 h-auto w-full border-1 px-1`)} shadow={`md`}>
      <CardHeader className={clsx(`horizontal gap-x-4 pb-2`)}>
        <BadgePulse colorChange={false}>
          <div
            className={clsx(
              `horizontal border-default-400/20 z-50 justify-center rounded-full border-1 p-3 shadow-sm`
            )}
          >
            <div className={clsx(`horizontal bg-content4 justify-center rounded-full p-1 shadow-md`)}>
              <span className={clsx(`horizontal h-auto w-auto`)}>
                <i className={clsx(`bxr bxs-plus-shield`, `text-warning text-7xl`)} />
              </span>
            </div>
          </div>
        </BadgePulse>
        <div className={clsx(`horizontal h-auto w-full justify-between`)}>
          <div className={clsx(`vertical gap-y-2.5`)}>
            <h3
              className={clsx(
                `text-default-900 text-[1.3125rem] font-bold text-shadow-md`,
                `3xl:text-[1.4375rem] 4xl:text-[1.6875rem] xl:text-[1.3125rem] 2xl:text-[1.4375rem]`
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
              className={clsx(`bg-content7 shadow-small h-10 gap-x-0 pr-0`)}
              startContent={
                <span className={clsx(`horizontal h-auto w-auto`)}>
                  <i className={clsx(`bxl bx-trustpilot`, `text-content10 text-3xl`)} />
                </span>
              }
              endContent={
                <span className={clsx(`horizontal h-auto w-auto`)}>
                  <i className={clsx(`bxr bxs-chevron-right`, `text-content10 text-[2.375rem]`)} />
                </span>
              }
              variant={`flat`}
              radius={`full`}
              size={`sm`}
              aria-label={trustBadge.buttonTrustPilot[0]}
              title={trustBadge.buttonTrustPilot[0]}
            >
              <span className={clsx(`text-large text-default-700 ml-2`)}>
                {trustBadge.buttonTrustPilot[0]}
              </span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className={clsx(`horizontal justify-between`)}>
        <div className={clsx(`horizontal h-auto w-auto`, `4xl:pl-3`)}>
          <Button
            className={clsx(`bg-content7 shadow-small gap-x-1 pr-3 pl-2.5`, `3xl:h-9 4xl:h-10`)}
            startContent={
              <span className={clsx(`horizontal h-auto w-auto`)}>
                <i
                  className={clsx(
                    `bxr bxs-bolt`,
                    `text-warning-500 text-2xl`,
                    `3xl:text-[1.75rem] 4xl:text-[2rem] 2xl:text-[1.5625rem]`
                  )}
                />
              </span>
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
/**
 * <div className={clsx(`relative hidden items-center justify-center`, `4xl:flex`)}>
          <span
            className={clsx(
              `bg-default-400 animate-slow-pulse absolute inline-flex h-12.5 w-12.5 rounded-full`
            )}
            style={{ animationDelay: '0s' }}
          />
          <span
            className={clsx(
              `bg-default-400 animate-slow-pulse absolute inline-flex h-12.5 w-12.5 rounded-full`
            )}
            style={{ animationDelay: '0.5s' }}
          />
          <span
            className={clsx(
              `bg-default-400 animate-slow-pulse absolute inline-flex h-12.5 w-12.5 rounded-full`
            )}
            style={{ animationDelay: '1.3s' }}
          />
 */
