import { Chip } from '@heroui/react'
import { StarIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description - Displays a rating value inside a styled chip component with a star icon.
 * @param props - The component props.
 * @param props.rating - The numeric rating value to display.
 * @returns A React element displaying the rating with a star icon.
 */
export default function Ratings(props: { rating: number }) {
  const { rating } = props
  return (
    <div
      className={clsx(`horizontal absolute top-1.5 right-1.5 z-50 justify-center`, `3xl:top-3 3xl:right-3`)}
      aria-label={`Rating: ${rating} 5 stars`}
    >
      <Chip
        className={clsx(
          `text-default-50 bg-content5/35 text-[0.9375rem] [&>span]:pt-0.5 [&>span]:font-semibold`,
          `xl:text-medium 3xl:text-[1.0625rem]`
        )}
        endContent={
          <StarIcon
            className={clsx(`fill-warning-500 h-5 w-5`, `3xl:h-6 3xl:w-6 xl:h-5.5 xl:w-5.5`)}
            title={`Rating: ${rating} 5 stars`}
          />
        }
        variant={`shadow`}
        size={`md`}
      >
        {rating}
      </Chip>
    </div>
  )
}
