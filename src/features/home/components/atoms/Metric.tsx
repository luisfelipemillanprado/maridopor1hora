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
        `outline-warning-200 h-[5.125rem] w-[5.5rem] gap-y-0.5 bg-[#fafbfd] outline-1 outline-solid`
      )}
      shadow={`sm`}
    >
      <CardHeader className={clsx(`horizontal justify-center gap-x-0.5 px-1 pt-2 pb-0`)}>
        <span className={clsx(`text-warning text-[1.0625rem]`)}>{metric.amount}</span>
        <span className={clsx(`text-warning text-[1.0625rem]`)}>
          {metric.change ? `k` : <PlusIcon className={clsx(`h-[1.125rem] w-[1.125rem]`)} />}
        </span>
      </CardHeader>
      <CardBody className={clsx(`vertical px-1 pt-0 pb-2.5`)}>
        <span className={clsx(`text-small text-center`)}>{metric.text}</span>
      </CardBody>
    </Card>
  )
}
