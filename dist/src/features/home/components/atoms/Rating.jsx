import { StarIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
/**
 * @description - Displays a rating value with a row of star icons and the number of reviews.
 * @param props - The component props.
 * @param props.rating - The rating value to display (e.g., "4.5").
 * @param props.reviews - The number of reviews to display (e.g., "123 reviews").
 */
export default function Rating(props) {
    const { rating, reviews } = props;
    return (<div aria-label={`Calificación: ${rating} de 5, ${reviews} reseñas`} className={clsx(`vertical relative h-auto w-auto gap-y-0.5`)}>
      <div className={clsx(`horizontal relative h-auto w-auto justify-center gap-x-1.5`)}>
        <div className={clsx(`horizontal h-auto w-auto`)}>
          <span className={clsx(`text-medium text-default-900 font-bold`, `3xl:text-large 2xl:text-[1.0625rem]`)}>
            {rating}
          </span>
        </div>
        <div className={clsx(`horizontal relative h-auto w-auto gap-x-0.5`)}>
          {[1, 2, 3, 4, 5].map((item, index) => (<span key={index} className={clsx(`bg-content1 h-auto w-auto`)}>
              <StarIcon className={clsx(`fill-warning-500 h-[0.9375rem] w-[0.9375rem]`, `3xl:w-[1.125rem] 3xl:h-[1.125rem] 2xl:h-4 2xl:w-4`)}/>
            </span>))}
        </div>
      </div>
      <div className={clsx(`horizontal h-auto w-auto`)}>
        <span className={clsx(`text-default-700 text-small`, `xl:text-small 3xl:text-[1.0625rem] 2xl:text-[0.9375rem]`)}>
          {reviews}
        </span>
      </div>
    </div>);
}
