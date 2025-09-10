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
    increase: string
    icon: string
    text: string
    description: string
    change: boolean
    key: number
  }[]
}) {
  const { metrics } = props
  const wrapperClasses = {
    base: 'absolute right-0 -bottom-8.5 left-0 z-20',
    breakpoints: '3xl:-bottom-[3.4375rem] 4xl:-bottom-[4.5rem] 2xl:-bottom-9',
  }
  const containerClasses = {
    base: 'horizontal h-auto w-full justify-center gap-x-3',
    breakpoints: '3xl:gap-x-5 4xl:gap-x-12 2xl:gap-x-4',
  }
  return (
    <div className={clsx(wrapperClasses.base, wrapperClasses.breakpoints)}>
      <div className={clsx(containerClasses.base, containerClasses.breakpoints)}>
        {metrics.map((item) => (
          <Metric key={item.key} {...{ metric: item }} />
        ))}
      </div>
    </div>
  )
}
