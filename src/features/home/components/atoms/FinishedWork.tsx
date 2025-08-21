import Ratings from '@/common/gcomponents/ratings/Ratings'
import { Avatar, AvatarGroup, Card, CardFooter, Image } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Displays a finished work card with an image, text, and rating.
 * @param props - The component props.
 * @param props.imageUrl - The URL of the image to display.
 * @param props.text - The text description of the finished work.
 * @param props.rating - The rating of the finished work.
 */
export default function FinishedWork(props: {
  imageUrl: string
  text: string
  rating: number
  maxCount: number
  totalCount: number
  workers: { src: string; key: number }[]
}) {
  const { imageUrl, text, rating, maxCount, workers } = props
  return (
    <Card isFooterBlurred isPressable className={clsx(`relative col-span-6`, `4xl:col-span-4`)} shadow={`md`}>
      <Ratings rating={rating} />
      <Image
        removeWrapper
        alt={`Work ${text} completed satisfactorily`}
        className={clsx(`z-0 h-full w-full object-cover`)}
        src={imageUrl}
      />
      <CardFooter
        className={clsx(
          `horizontal absolute bottom-0 z-10 bg-black/0 px-3 py-1`,
          `3xl:py-2.5 3xl:gap-x-4 3xl:px-4`
        )}
      >
        <AvatarGroup
          isBordered
          className={clsx(
            `hidden [&>span]:h-7.5 [&>span]:w-7.5`,
            `3xl:flex 4xl:[&>span]:h-12 4xl:[&>span]:w-12 3xl:[&>span]:h-11 3xl:[&>span]:w-11`
          )}
          color={`warning`}
          max={maxCount}
          renderCount={(/*count*/) => <></>}
          size={`sm`}
        >
          {workers.map((item /*, index */) => (
            <Avatar className={clsx(``)} key={item.key} src={item.src} />
          ))}
        </AvatarGroup>
        <span
          className={clsx(
            `text-default-50 text-medium font-bold`,
            `2xl:text-large 3xl:text-[1.1875rem] 4xl:text-[1.3125rem] xl:text-[1.0625rem]`
          )}
        >
          {text}
        </span>
      </CardFooter>
    </Card>
  )
}
