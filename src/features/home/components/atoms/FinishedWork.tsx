import { Card, CardFooter, Image } from '@heroui/react'
import clsx from 'clsx'

/**
 *
 * @param props
 * @returns
 */
export default function FinishedWork(props: { imageUrl: string; text: string }) {
  const { imageUrl, text } = props
  return (
    <Card isFooterBlurred className={clsx(`col-span-6`)} shadow={`sm`}>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 h-full w-full object-cover"
        src={imageUrl}
      />
      <CardFooter className={clsx(`absolute bottom-0 z-10 bg-black/0 px-3 py-1`)}>
        <span className={clsx(`text-content1 text-[0.9375rem]`)}>{text}</span>
      </CardFooter>
    </Card>
  )
}
