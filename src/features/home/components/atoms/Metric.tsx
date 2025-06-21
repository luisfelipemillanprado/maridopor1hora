'use client'
import { Card, CardHeader, CardBody } from '@heroui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

/**
 * @description - Displays a metric with an amount, a plus icon, and a descriptive text.
 * @param props - The component props.
 * @param props.metric - The metric object containing the amount and text.
 * @param props.metric.amount - The numeric value to display.
 * @param props.metric.text - The description or label for the metric.
 */
export default function Metric(props: {
  metric: { amount: string; text: string; change: boolean }
}) {
  const { metric } = props
  return (
    <Card
      className={clsx(
        `outline-warning-200 h-auto w-24 gap-y-0.5 outline-1 outline-solid`,
        `bg-content7`,
        `3xl:w-32 3xl:py-[0.0625rem] 3xl:shadow-medium 2xl:w-[6.3125rem]`
      )}
      shadow={`sm`}
    >
      <CardHeader className={clsx(`horizontal justify-center gap-x-0.5 px-1 pt-2 pb-0`)}>
        <span
          className={clsx(
            `text-warning text-[1.0625rem] font-semibold`,
            `2xl:text-large 3xl:text-[1.3125rem]`
          )}
        >
          {metric.amount}
        </span>
        <span className={clsx(`text-warning text-[1.0625rem]`)}>
          {metric.change ? (
            <span
              className={clsx(
                `text-warning text-[1.0625rem] font-semibold`,
                `2xl:text-large 3xl:text-[1.375rem]`
              )}
            >{`k`}</span>
          ) : (
            <PlusIcon
              className={clsx(`h-[1.125rem] w-[1.125rem]`, `3xl:h-[1.375rem] 3xl:w-[1.375rem]`)}
            />
          )}
        </span>
      </CardHeader>
      <CardBody className={clsx(`vertical !scrollbar-hide px-1.5 pt-0 pb-2.5`)}>
        <span
          className={clsx(
            `text-small text-center`,
            `2xl:text-medium 3xl:text-[1.0625rem] xl:text-[0.9375rem]`
          )}
        >
          {metric.text}
        </span>
      </CardBody>
    </Card>
  )
}
