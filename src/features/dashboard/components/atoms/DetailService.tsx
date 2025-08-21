import MoreDetails from '@/features/dashboard/components/atoms/MoreDetails'
import { Card, CardFooter, CardHeader, Image } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Renders a detailed service card with an image, title, and optional text, description, and phases.
 * @param props - The component props.
 * @param props.imageUrl - The URL of the service image.
 * @param props.title - The title of the service.
 * @param props.text - Optional short text about the service.
 * @param props.description - Optional detailed description of the service.
 * @param props.phases - Optional array of phases, each with a step and key.
 * @returns A card component displaying the service details.
 */
export default function DetailService(props: {
  imageUrl: string
  title: string
  moreDetails: {
    subTitles: string[]
    link: {
      href: string
      text: string
    }
    description: string
    phases: { step: string }[]
    questions: {
      question: string
      answer: string
      key: number
    }[]
    ventajas: string
    testimonials: {
      name: string
      date: string
      text: string
      imageUrl: string
      key: number
    }[]
  }
}) {
  const { imageUrl, title, moreDetails } = props
  return (
    <Card
      isPressable
      as={`div`}
      className={clsx(`bg-content2 border-content2 h-auto w-48 border-1`)}
      shadow={`sm`}
    >
      <CardHeader className={clsx(`relative p-1`)}>
        <div className={clsx(`horizontal rounded-large h-40 justify-start overflow-hidden`)}>
          <Image
            className={clsx(`h-full w-full object-cover`)}
            height={160}
            width={206}
            src={imageUrl}
            alt={`Photo of ${title}`}
            itemProp={`image`}
          />
        </div>
        <MoreDetails {...{ imageUrl, title, moreDetails }} />
      </CardHeader>
      <CardFooter
        className={clsx(
          `rounded-b-large bg-content5/40 absolute bottom-1 z-50 ml-1 w-[calc(100%_-_8px)] px-3 py-1.5`
        )}
      >
        <p className={clsx(`text-default-50 truncate text-[1.0625rem] font-semibold`)}>{title}</p>
      </CardFooter>
    </Card>
  )
}
