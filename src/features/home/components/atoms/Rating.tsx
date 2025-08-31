import clsx from 'clsx'

/**
 * @description - Displays a rating value with a row of star icons and the number of reviews.
 * @param props - The component props.
 * @param props.rating - The rating value to display (e.g., "4.5").
 * @param props.reviews - The number of reviews to display (e.g., "123 reviews").
 */
export default function Rating(props: { rating: string; reviews: string }) {
  const { rating, reviews } = props
  return (
    <div
      aria-label={`Calificación: ${rating} de 5, ${reviews} reseñas`}
      className={clsx(`vertical relative h-auto w-auto gap-y-0.5`)}
    >
      <div className={clsx(`horizontal relative h-auto w-auto justify-center gap-x-1.5`)}>
        <div className={clsx(`horizontal h-auto w-auto`)}>
          <span
            className={clsx(
              `text-medium text-default-900 font-bold`,
              `2xl:text-large 3xl:text-[1.1875rem] 4xl:text-[1.4375rem] xl:text-[1.0625rem]`
            )}
          >
            {rating}
          </span>
        </div>
        <div className={clsx(`horizontal relative mb-1 h-auto w-auto`, `4xl:mb-1.5`)}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <span key={index} className={clsx(`horizontal h-auto w-auto`)}>
              <i
                className={clsx(
                  `bxr bxs-star bx-tada`,
                  `text-warning-500 text-[1.3125rem]`,
                  `3xl:text-[1.6875rem] 4xl:text-[2.0625rem] 2xl:text-2xl`
                )}
                aria-hidden={true}
              />
            </span>
          ))}
        </div>
      </div>
      <div className={clsx(`horizontal h-auto w-auto`)}>
        <span
          className={clsx(
            `text-default-700 text-small`,
            `2xl:text-large 4xl:text-[1.3125rem] xl:text-[0.9375rem]`
          )}
        >
          {reviews}
        </span>
      </div>
    </div>
  )
}
