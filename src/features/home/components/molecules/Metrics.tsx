import clsx from 'clsx'
import Metric from '@/features/home/components/atoms/Metric'
/**
 *
 * @returns
 */
export default function Metrics(props: {
  metrics: { amount: string; text: string; change: boolean }[]
}) {
  const { metrics } = props
  return (
    <div className={clsx(`horizontal h-auto w-full justify-center gap-x-2.5`)}>
      {metrics.map((item, index) => (
        <Metric key={index} {...{ metric: item }} />
      ))}
    </div>
  )
}
