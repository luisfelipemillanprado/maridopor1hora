'use client'
import { Card, CardHeader, CardBody, Chip } from '@heroui/react'
import { GraphicsIcon } from '@/public/svgs/Svgs'
import clsx from 'clsx'

/**
 * @description - Enum representing the available metric icons for the home feature.
 * @enum {string}
 * @property {string} FRECUENTES - Icon for "frecuentes" (frequent users or actions).
 * @property {string} SATISFECHOS - Icon for "satisfechos" (satisfied users or actions).
 * @property {string} CALIFICADOS - Icon for "calificados" (rated users or actions).
 */
export enum MetricIcon {
  FRECUENTES = `frequent`,
  SATISFECHOS = `satisfied`,
  CALIFICADOS = `qualified`,
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
        <i
          aria-label={`frequent`}
          className={clsx(
            `bxr bxs-calendar-detail`,
            `text-default-500 text-4xl`,
            `3xl:text-[2.375rem] 4xl:text-[2.6875rem]`
          )}
        />
      )
    case MetricIcon.SATISFECHOS:
      return (
        <i
          aria-label={`satisfied`}
          className={clsx(
            `bxr bxs-medal-star-alt-2`,
            `text-default-500 text-4xl`,
            `3xl:text-[2.4375rem] 4xl:text-[2.75rem]`
          )}
        />
      )
    case MetricIcon.CALIFICADOS:
      return (
        <i
          aria-label={`qualified`}
          className={clsx(
            `bxr bxs-hard-hat`,
            `text-default-500 text-4xl`,
            `3xl:text-[2.375rem] 4xl:text-[2.75rem]`
          )}
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
  metric: {
    amount: string
    increase: string
    icon: string
    text: string
    description: string
    change: boolean
  }
}) {
  const { metric } = props
  const changeElement = metric.change ? (
    <span className={clsx(`text-warning text-large`, `3xl:text-[1.375rem] 2xl:text-[1.1875rem]`)}>K</span>
  ) : (
    <span className={clsx(`horizontal h-auto w-auto`)}>
      <i
        className={clsx(
          `bxr bxs-plus`,
          `text-warning text-large`,
          `3xl:text-2xl 4xl:text-3xl 2xl:text-[1.3125rem]`
        )}
        aria-label={`plus`}
      />
    </span>
  )
  return (
    <Card
      isPressable
      className={clsx(
        `outline-warning-200 bg-content7 w-[6.125rem] gap-y-0.5 outline-1 outline-solid`,
        `${metric.change ? 'shadow-lg' : 'shadow-medium'}`,
        `3xl:w-52 4xl:w-auto 4xl:gap-y-2.5 xl:w-[6.375rem]`
      )}
      shadow={`sm`}
    >
      <CardHeader
        className={clsx(
          `horizontal justify-center gap-x-0.5 px-1 pt-2 pb-0`,
          `3xl:px-3.5 3xl:pt-3 3xl:pb-1.5 3xl:justify-between`
        )}
      >
        <span className={clsx(`hidden h-auto w-auto`, `3xl:flex`)}>{iconSwitch(metric.icon)}</span>
        <div className={clsx(`horizontal h-auto w-auto`, `3xl:pr-4.5`)}>
          <span
            className={clsx(
              `text-warning text-[1.1875rem] font-semibold`,
              `3xl:text-[1.375rem] 4xl:text-[1.625rem] xl:text-xl`
            )}
          >
            {metric.amount}
          </span>
          {changeElement}
        </div>
      </CardHeader>
      <CardBody className={clsx(`vertical !scrollbar-hide px-0 pt-0 pb-2.5`, `3xl:pb-0 3xl:gap-y-1.5`)}>
        <div className={clsx(`horizontal w-full justify-start px-1.5`, `3xl:px-5 4xl:gap-x-2`)}>
          <span
            className={clsx(
              `text-center text-[0.9375rem]`,
              `3xl:text-large xl:text-medium 4xl:text-[1.1875rem] 3xl:font-semibold`
            )}
          >
            {metric.text}
          </span>
          <Chip
            className={clsx(`[&>span]:text-warning-700 hidden [&>span]:pl-0`, `4xl:flex`)}
            color={`warning`}
            startContent={
              <span className={clsx(`horizontal h-auto w-auto`)}>
                <i className={clsx(`bxr bxs-arrow-up-right text-3xl`)} />
              </span>
            }
            variant={`flat`}
            radius={`sm`}
          >
            {metric.increase}
          </Chip>
        </div>
        <span className={clsx(`hidden`, `3xl:flex`)}>
          <GraphicsIcon className={clsx(``)} />
        </span>
      </CardBody>
    </Card>
  )
}
