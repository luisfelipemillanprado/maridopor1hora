import { StarIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 *
 * @param props
 * @returns
 */
export default function Rating(props: { rating: string; reviews: string }) {
  const { rating, reviews } = props
  return (
    <div className={clsx(`vertical relative h-auto w-auto gap-y-0.5`)}>
      <div className={clsx(`horizontal relative h-auto w-auto gap-x-1.5`)}>
        <div className={clsx(`horizontal h-auto w-auto`)}>
          <span className={clsx(``)}>{rating}</span>
        </div>
        <div className={clsx(`horizontal relative h-auto w-auto gap-x-0.5`)}>
          <span className={clsx(`bg-content1 h-auto w-auto`)}>
            <StarIcon className={clsx(`fill-warning-500 h-[0.9375rem] w-[0.9375rem]`)} />
          </span>
          <span className={clsx(`bg-content1 h-auto w-auto`)}>
            <StarIcon className={clsx(`fill-warning-500 h-[0.9375rem] w-[0.9375rem]`)} />
          </span>
          <span className={clsx(`bg-content1 h-auto w-auto`)}>
            <StarIcon className={clsx(`fill-warning-500 h-[0.9375rem] w-[0.9375rem]`)} />
          </span>
          <span className={clsx(`bg-content1 h-auto w-auto`)}>
            <StarIcon className={clsx(`fill-warning-500 h-[0.9375rem] w-[0.9375rem]`)} />
          </span>
          <span className={clsx(`bg-content1 h-auto w-auto`)}>
            <StarIcon className={clsx(`fill-warning-500 h-[0.9375rem] w-[0.9375rem]`)} />
          </span>
        </div>
      </div>
      <div className={clsx(`horizontal h-auto w-auto`)}>
        <span className={clsx(`text-small text-default-700`)}>{reviews}</span>
      </div>
    </div>
  )
}
