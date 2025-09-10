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

const frecuentesIconClasses = {
  default: 'bxr bxs-calendar-detail',
  base: 'text-default-500 text-4xl',
  breakpoints: '3xl:text-[2.375rem] 4xl:text-[2.6875rem]',
}
const satisfechosIconClasses = {
  default: 'bxr bxs-medal-star-alt-2',
  base: 'text-default-500 text-4xl',
  breakpoints: '3xl:text-[2.4375rem] 4xl:text-[2.75rem]',
}
const calificadosIconClasses = {
  default: 'bxr bxs-hard-hat',
  base: 'text-default-500 text-4xl',
  breakpoints: '3xl:text-[2.375rem] 4xl:text-[2.75rem]',
}
const iconSwitch = (icon: string) => {
  switch (icon) {
    case MetricIcon.FRECUENTES:
      return (
        <i
          aria-label={`frequent`}
          className={clsx(
            frecuentesIconClasses.default,
            frecuentesIconClasses.base,
            frecuentesIconClasses.breakpoints
          )}
        />
      )
    case MetricIcon.SATISFECHOS:
      return (
        <i
          aria-label={`satisfied`}
          className={clsx(
            satisfechosIconClasses.default,
            satisfechosIconClasses.base,
            satisfechosIconClasses.breakpoints
          )}
        />
      )
    case MetricIcon.CALIFICADOS:
      return (
        <i
          aria-label={`qualified`}
          className={clsx(
            calificadosIconClasses.default,
            calificadosIconClasses.base,
            calificadosIconClasses.breakpoints
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
  const kletterClasses = {
    base: 'text-warning text-large',
    breakpoints: '3xl:text-[1.375rem] 2xl:text-[1.1875rem]',
  }
  const iconWrapperClasses = {
    base: 'horizontal h-auto w-auto',
    otherBase: 'hidden h-auto w-auto',
    breakpoints: '3xl:flex',
  }
  const plusIconClasses = {
    default: 'bxr bxs-plus',
    base: 'text-warning text-large',
    breakpoints: '3xl:text-2xl 4xl:text-3xl 2xl:text-[1.3125rem]',
  }
  const cardClasses = {
    base: 'outline-warning-200 bg-content7 w-[6.125rem] gap-y-0.5 outline-1 outline-solid',
    conditions: { first: 'shadow-lg', second: 'shadow-medium' },
    breakpoints: '3xl:w-52 4xl:w-auto 4xl:gap-y-2.5 xl:w-[6.375rem]',
  }
  const cardHeaderClasses = {
    base: 'horizontal justify-center gap-x-0.5 px-1 pt-2 pb-0',
    breakpoints: '3xl:px-3.5 3xl:pt-3 3xl:pb-1.5 3xl:justify-between',
  }
  const amountContainerClasses = {
    base: 'horizontal h-auto w-auto',
    breakpoints: '3xl:pr-4.5',
  }
  const amountClasses = {
    base: 'text-warning text-[1.1875rem] font-semibold',
    breakpoints: '3xl:text-[1.375rem] 4xl:text-[1.625rem] xl:text-xl',
  }
  const CardBodyClasses = {
    base: 'vertical !scrollbar-hide px-0 pt-0 pb-2.5',
    breakpoints: '3xl:pb-0 3xl:gap-y-1.5',
  }
  const metricTextContainerClasses = {
    base: 'horizontal w-full justify-start px-1.5',
    breakpoints: '3xl:px-5 4xl:gap-x-2',
  }
  const metricTextClasses = {
    base: 'text-center text-[0.9375rem]',
    breakpoints: '3xl:text-large xl:text-medium 4xl:text-[1.1875rem] 3xl:font-semibold',
  }
  const chipClasses = {
    base: '[&>span]:text-warning-700 hidden [&>span]:pl-0',
    breakpoints: '4xl:flex',
  }
  const arrowUpRightIconClasses = {
    default: 'bxr bxs-arrow-up-right',
    base: 'text-3xl',
  }
  const graphicsIconClasses = {
    base: 'hidden',
    breakpoints: '3xl:flex',
  }
  const changeElement = metric.change ? (
    <span className={clsx(kletterClasses.base, kletterClasses.breakpoints)}>K</span>
  ) : (
    <span className={clsx(iconWrapperClasses.base)}>
      <i
        className={clsx(plusIconClasses.default, plusIconClasses.base, plusIconClasses.breakpoints)}
        aria-label={`plus`}
      />
    </span>
  )
  return (
    <Card
      isPressable
      className={clsx(
        cardClasses.base,
        metric.change ? cardClasses.conditions.first : cardClasses.conditions.second,
        cardClasses.breakpoints
      )}
    >
      <CardHeader className={clsx(cardHeaderClasses.base, cardHeaderClasses.breakpoints)}>
        <span className={clsx(iconWrapperClasses.otherBase, iconWrapperClasses.breakpoints)}>
          {iconSwitch(metric.icon)}
        </span>
        <div className={clsx(amountContainerClasses.base, amountContainerClasses.breakpoints)}>
          <span className={clsx(amountClasses.base, amountClasses.breakpoints)}>{metric.amount}</span>
          {changeElement}
        </div>
      </CardHeader>
      <CardBody className={clsx(CardBodyClasses.base, CardBodyClasses.breakpoints)}>
        <div className={clsx(metricTextContainerClasses.base, metricTextContainerClasses.breakpoints)}>
          <span className={clsx(metricTextClasses.base, metricTextClasses.breakpoints)}>{metric.text}</span>
          <Chip
            className={clsx(chipClasses.base, chipClasses.breakpoints)}
            color={`warning`}
            startContent={
              <span className={clsx(iconWrapperClasses.base)}>
                <i className={clsx(arrowUpRightIconClasses.default, arrowUpRightIconClasses.base)} />
              </span>
            }
            variant={`flat`}
            radius={`sm`}
          >
            {metric.increase}
          </Chip>
        </div>
        <span className={clsx(graphicsIconClasses.base, graphicsIconClasses.breakpoints)}>
          <GraphicsIcon />
        </span>
      </CardBody>
    </Card>
  )
}
