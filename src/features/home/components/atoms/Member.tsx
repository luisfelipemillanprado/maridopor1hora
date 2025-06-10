import { Image } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Renders a member's image with specific styles based on the index.
 * @param props - The component props.
 * @param props.imageUrl - The URL of the member's image.
 * @param props.index - The index of the member in the list, used for conditional styling.
 */
export default function Member(props: { imageUrl: string; index: number }) {
  const { imageUrl, index } = props
  return (
    <div className={clsx(`horizontal relative col-span-6`)}>
      <Image
        isZoomed
        removeWrapper
        width={80}
        height={80}
        alt={`member-image`}
        className={clsx(
          `rounded-medium h-full w-full object-cover`,
          `${index == 0 ? 'border-default-50 shadow-small min-h-28 border-4' : ''}`,
          `${index == 1 ? 'border-warning shadow-small absolute top-0 !h-[4.6875rem] w-[4.6875rem] rounded-full border-3' : ''}`,
          `${index == 2 ? 'border-warning shadow-small absolute -top-1 right-10 !h-[4.6875rem] w-[4.6875rem] rounded-full border-3' : ''}`,
          `${index == 3 ? 'border-default-50 shadow-medium absolute -top-10 -left-10 z-10 min-h-28 border-8' : ''}`
        )}
        src={imageUrl}
      />
    </div>
  )
}
