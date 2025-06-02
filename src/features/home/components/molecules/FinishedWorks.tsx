'use client'
import FinishedWork from '@/features/home/components/atoms/FinishedWork'
import clsx from 'clsx'

export default function FinishedWorks(props: {
  finishedWorks: {
    imageUrls: { imageUrl: string; key: number }[]
    texts: string[]
  }
}) {
  const { finishedWorks } = props
  return (
    <div className={clsx(`grid w-full grid-cols-12 grid-rows-2 gap-2`)}>
      {finishedWorks.imageUrls.map((item, index) => (
        <FinishedWork
          key={item.key}
          {...{ imageUrl: item.imageUrl, text: finishedWorks.texts[index] }}
        />
      ))}
    </div>
  )
}
