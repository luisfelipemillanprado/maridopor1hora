import clsx from 'clsx'
import Metric from '@/features/home/components/atoms/Metric'

/**
 * @description - Renders a horizontal list of metric items.
 * @param props - The component props.
 * @param props.metrics - An array of metric objects to display.
 * @param props.metrics[].amount - The value or amount to display for the metric.
 * @param props.metrics[].text - The label or description for the metric.
 * @param props.metrics[].change - Indicates if the metric has changed (e.g., increased or decreased).
 */
export default function Metrics(props: {
  metrics: { amount: string; text: string; change: boolean }[]
}) {
  const { metrics } = props
  return (
    <div className={clsx(`horizontal h-auto w-full justify-center gap-x-3`, `2xl:gap-x-4`)}>
      {metrics.map((item, index) => (
        <Metric key={index} {...{ metric: item }} />
      ))}
    </div>
  )
}
