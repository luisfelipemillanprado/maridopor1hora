import clsx from 'clsx'
import Metric from '@/features/home/components/atoms/Metric'

/**
 * @description - Renders a horizontal list of metric cards.
 * @param props - The component props.
 * @param props.metrics - An array of metric objects to display.
 * @param props.metrics[].amount - The value or amount to display for the metric.
 * @param props.metrics[].icon - The icon name or path associated with the metric.
 * @param props.metrics[].text - The main label or title for the metric.
 * @param props.metrics[].description - A short description or subtitle for the metric.
 * @param props.metrics[].change - Indicates if the metric has changed (e.g., increased or decreased).
 */
export default function Metrics(props: {
  metrics: {
    amount: string
    icon: string
    text: string
    description: string
    change: boolean
    key: number
  }[]
}) {
  const { metrics } = props
  return (
    <div className={clsx(`horizontal h-auto w-full justify-center gap-x-3`, `3xl:gap-x-5 2xl:gap-x-4`)}>
      {metrics.map((item /*, index*/) => (
        <Metric key={item.key} {...{ metric: item }} />
      ))}
    </div>
  )
}
