import { Chip } from '@heroui/react'
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
      aria-label={`Rating: ${rating} stars`}
    >
      <Chip
        className={clsx(
          `text-default-50 bg-content5/35 horizontal text-[0.9375rem] [&>span]:font-semibold`,
          `xl:text-medium 3xl:text-large 4xl:text-xl`
        )}
        endContent={
          <span className={clsx(`horizontal h-auto w-auto`)}>
            <i
              title={`Rating: ${rating} stars`}
              className={clsx(
                `bxr bxs-star`,
                `text-warning-500 text-[1.625rem]`,
                `3xl:text-[1.75rem] 4xl:text-3xl xl:text-[1.6875rem]`
              )}
            />
          </span>
        }
        variant={`shadow`}
        size={`md`}
      >
        {rating}
      </Chip>
    </div>
  )
}
