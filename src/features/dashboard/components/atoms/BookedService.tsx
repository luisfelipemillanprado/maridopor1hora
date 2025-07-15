import { Card, CardFooter, CardHeader, Chip, Image } from '@heroui/react'
import { StarIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

export default function BookedService(props: { imageUrl: string; text: string; price: string }) {
  const { imageUrl, text, price } = props
  return (
    <Card
      isPressable
      as={`div`}
      className={clsx(`bg-content2 border-content2 h-auto w-[12.5rem] border-1`)}
      shadow={`sm`}
    >
      <CardHeader className={clsx(`relative px-1 pt-1 pb-0`)}>
        <div className={clsx(`horizontal absolute top-2 right-2 z-50 justify-center`)}>
          <Chip
            className={clsx(`text-default-50 text-[0.9375rem] [&>span]:pt-0.5 [&>span]:font-semibold`)}
            color={`default`}
            endContent={<StarIcon className={clsx(`fill-warning-500 h-5 w-5`)} />}
            variant={`flat`}
            size={`sm`}
          >
            4.8
          </Chip>
        </div>
        <Image
          className={clsx(`rounded-large h-36 w-full object-cover`)}
          src={imageUrl}
          alt={`Booked Service`}
        />
      </CardHeader>
      <CardFooter className={clsx(`horizontal justify-start`)}>
        <div className={clsx(`vertical items-start gap-y-1.5 text-start`)}>
          <span className={clsx(`text-default-500 text-medium`)}>{price}</span>
          <p className={clsx(`text-default-900 text-medium font-semibold`)}>{text}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
