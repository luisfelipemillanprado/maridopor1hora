import clsx from 'clsx'

/**
 * @description - Displays a rating value with a row of star icons and the number of reviews.
 * @param props - The component props.
 * @param props.rating - The rating value to display (e.g., "4.5").
 * @param props.reviews - The number of reviews to display (e.g., "123 reviews").
 */
export default function Rating(props: { rating: string; reviews: string }) {
  const { rating, reviews } = props
  const contentClasses = {
    base: 'vertical relative h-auto w-auto gap-y-0.5',
  }
  const ratingWrapperClasses = {
    base: 'horizontal relative h-auto w-auto justify-center gap-x-1.5',
  }
  const ratingTextContainerClasses = {
    base: 'horizontal h-auto w-auto',
  }
  const ratingTextClasses = {
    base: 'text-medium text-default-900 font-bold',
    breakpoints: '2xl:text-large 3xl:text-[1.1875rem] 4xl:text-[1.4375rem] xl:text-[1.0625rem]',
  }
  const ratingStarsContainerClasses = {
    base: 'horizontal relative mb-1 h-auto w-auto',
    breakpoints: '4xl:mb-1.5',
  }
  const iconWrapperClasses = {
    base: 'horizontal h-auto w-auto',
  }
  const iconStarClasses = {
    default: 'bxr bxs-star bx-tada',
    base: 'text-warning-500 text-[1.3125rem]',
    breakpoints: '3xl:text-[1.6875rem] 4xl:text-[2.0625rem] 2xl:text-2xl',
  }
  const reviewsContainerClasses = {
    base: 'horizontal h-auto w-auto',
  }
  const reviewsClasses = {
    base: 'text-default-700 text-small',
    breakpoints: '2xl:text-large 4xl:text-[1.3125rem] xl:text-[0.9375rem]',
  }
  return (
    <div
      aria-label={`Calificación: ${rating} de 5, ${reviews} reseñas`}
      className={clsx(contentClasses.base)}
    >
      <div className={clsx(ratingWrapperClasses.base)}>
        <div className={clsx(ratingTextContainerClasses.base)}>
          <span className={clsx(ratingTextClasses.base, ratingTextClasses.breakpoints)}>{rating}</span>
        </div>
        <div className={clsx(ratingStarsContainerClasses.base, ratingStarsContainerClasses.breakpoints)}>
          {[1, 2, 3, 4, 5].map((index) => (
            <span key={index} className={clsx(iconWrapperClasses.base)}>
              <i
                className={clsx(iconStarClasses.default, iconStarClasses.base, iconStarClasses.breakpoints)}
                aria-hidden={true}
              />
            </span>
          ))}
        </div>
      </div>
      <div className={clsx(reviewsContainerClasses.base)}>
        <span className={clsx(reviewsClasses.base, reviewsClasses.breakpoints)}>{reviews}</span>
      </div>
    </div>
  )
}
