'use client'
import FinishedWork from '@/features/home/components/atoms/FinishedWork'
import clsx from 'clsx'

/**
 * @description - Displays a grid of finished works, each represented by an image and a corresponding text.
 * @param props - The component props.
 * @param props.finishedWorks - An object containing arrays of image URLs and texts for finished works.
 * @param props.finishedWorks.imageUrls - Array of objects with `imageUrl` (string) and `key` (number) for each finished work image.
 * @param props.finishedWorks.texts - Array of strings representing the description or text for each finished work.
 */
export default function FinishedWorks(props: {
  finishedWorks: {
    imageUrls: { imageUrl: string; key: number }[]
    texts: string[]
    ratings: number[]
    teams: {
      workers: { src: string; key: number }[]
      maxCount: number
      totalCount: number
    }[]
  }
}) {
  const { finishedWorks } = props
  return (
    <div
      className={clsx(`grid w-full grid-cols-12 grid-rows-3 gap-3`, `3xl:gap-5 4xl:grid-rows-2 4xl:gap-7`)}
    >
      {finishedWorks.imageUrls.map((item, index) => (
        <FinishedWork
          key={item.key}
          {...{
            imageUrl: item.imageUrl,
            text: finishedWorks.texts[index],
            rating: finishedWorks.ratings[index],
            totalCount: finishedWorks.teams[index].totalCount,
            maxCount: finishedWorks.teams[index].maxCount,
            workers: finishedWorks.teams[index].workers,
          }}
        />
      ))}
    </div>
  )
}
