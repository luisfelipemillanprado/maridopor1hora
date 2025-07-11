'use client'
import { Card, CardHeader, CardBody } from '@heroui/react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { MedalStarIcon, CalendarCheckIcon, BadgeCheckIcon } from '@/utils/svgs/Svgs'
import clsx from 'clsx'

/**
 * @description - Enum representing the available metric icons for the home feature.
 * @enum {string}
 * @property {string} FRECUENTES - Icon for "frecuentes" (frequent users or actions).
 * @property {string} SATISFECHOS - Icon for "satisfechos" (satisfied users or actions).
 * @property {string} CALIFICADOS - Icon for "calificados" (rated users or actions).
 */
export enum MetricIcon {
  FRECUENTES = 'frequent',
  SATISFECHOS = 'satisfied',
  CALIFICADOS = 'qualified',
}

/**
 * @description - Returns a corresponding icon component based on the provided icon type.
 * @param icon - The string identifier for the icon type, expected to match a value from `MetricIcon`.
 * @returns A React element representing the selected icon, or a fallback span if no match is found.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case MetricIcon.FRECUENTES:
      return (
        <CalendarCheckIcon
          aria-label={`frequent`}
          className={clsx('fill-default-500 h-[2.0625rem] w-[2.0625rem]')}
        />
      )
    case MetricIcon.SATISFECHOS:
      return (
        <MedalStarIcon
          aria-label={`satisfied`}
          className={clsx('fill-default-500 h-[2.3125rem] w-[2.3125rem]')}
        />
      )
    case MetricIcon.CALIFICADOS:
      return (
        <BadgeCheckIcon
          aria-label={`qualified`}
          className={clsx('fill-default-500 h-[2.3125rem] w-[2.3125rem]')}
        />
      )
    default:
      return <span aria-label={`icon-none`}>?</span>
  }
}

/**
 * @description - Renders a metric card displaying an icon, amount, change indicator, text, and description.
 * @param props - The component props.
 * @param props.metric - The metric data to display.
 * @param props.metric.amount - The main value or amount to show.
 * @param props.metric.icon - The icon identifier for the metric.
 * @param props.metric.text - The main label or text for the metric.
 * @param props.metric.description - Additional description for the metric (hidden by default).
 * @param props.metric.change - Indicates if the metric has changed; affects the change indicator.
 * @returns A styled card component presenting the metric information.
 */
export default function Metric(props: {
  metric: { amount: string; icon: string; text: string; description: string; change: boolean }
}) {
  const { metric } = props
  const changeElement = metric.change ? (
    <span className={clsx(`text-warning text-large font-semibold`, `3xl:text-xl 2xl:text-[1.1875rem]`)}>
      k
    </span>
  ) : (
    <PlusIcon
      className={clsx(`h-[1.1875rem] w-[1.1875rem]`, `3xl:h-[1.375rem] 3xl:w-[1.375rem] 2xl:h-5 2xl:w-5`)}
    />
  )
  return (
    <Card
      isPressable
      className={clsx(
        `outline-warning-200 bg-content7 w-[6.125rem] gap-y-0.5 outline-1 outline-solid`,
        `3xl:w-auto ${metric.change ? 'shadow-md' : '3xl:shadow-medium'} xl:w-[6.375rem]`
      )}
      shadow={`sm`}
    >
      <CardHeader
        className={clsx(
          `horizontal justify-center gap-x-0.5 px-1 pt-2 pb-0`,
          `3xl:px-4 3xl:pt-4 3xl:pb-1.5 3xl:justify-between`
        )}
      >
        <span className={clsx(`hidden h-auto w-auto`, `3xl:flex`)}>{iconSwitch(metric.icon)}</span>
        <div className={clsx(`horizontal h-auto w-auto`, `3xl:pr-4.5`)}>
          <span className={clsx(`text-warning text-[1.1875rem] font-semibold`, `xl:text-xl`)}>
            {metric.amount}
          </span>
          <span className={clsx(`text-warning text-[1.0625rem]`)}>{changeElement}</span>
        </div>
      </CardHeader>
      <CardBody
        className={clsx(`vertical !scrollbar-hide px-1.5 pt-0 pb-2.5`, `3xl:px-5 3xl:pb-5 3xl:gap-y-1.5`)}
      >
        <span
          className={clsx(
            `text-center text-[0.9375rem]`,
            `2xl:text-medium 3xl:text-large 3xl:text-start xl:text-medium`
          )}
        >
          {metric.text}
        </span>
        <p className={clsx(`text-default-700 text-medium hidden`)}>{metric.description}</p>
      </CardBody>
    </Card>
  )
}
