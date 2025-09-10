import Image from 'next/image'
import clsx from 'clsx'
import blurEffects from '@/utils/blurs/Blurs'

/**
 * @description - Displays a testimonial card with a client's avatar, name, testimonial text, and a score represented by star icons.
 * @param props - The properties for the Testimonial component.
 * @param props.name - The name of the client giving the testimonial.
 * @param props.text - The testimonial text provided by the client.
 * @param props.imageUrl - The URL of the client's avatar image.
 * @param props.score - An array representing the testimonial score, where each item corresponds to a star.
 */
export default function Testimonial(props: {
  name: string
  text: string
  imageUrl: string
  score: { key: number }[]
}) {
  const { name, text, score, imageUrl } = props
  const contentClasses = {
    base: 'vertical h-full w-full items-center justify-start gap-y-1 p-4',
    breakpoints: '4xl:gap-y-1.5 xl:p-4.5',
  }
  const firstWrapperClasses = {
    base: 'vertical mb-1 h-auto w-full items-center gap-y-2',
    breakpoints: '4xl:gap-y-3 xl:gap-y-2.5',
  }
  const secondWrapperClasses = {
    base: 'horizontal h-auto w-auto justify-center',
  }
  const thirdWrapperClasses = {
    base: 'horizontal mt-1 h-auto w-auto justify-center',
  }
  const imageContainerClasses = {
    base: 'horizontal border-warning-500 border-1.5 h-auto w-auto justify-center rounded-full border-dashed p-1',
  }
  const imageClasses = {
    base: 'h-[3.5625rem] w-[3.5625rem] rounded-full shadow-md',
    breakpoints: '4xl:h-[4.0625rem] 4xl:w-[4.0625rem] 2xl:h-[3.75rem] 2xl:w-[3.75rem]',
  }
  const scoreContainerClasses = {
    base: 'horizontal h-auto w-auto justify-between gap-1',
  }
  const iconWrapperClasses = {
    base: 'horizontal h-auto w-auto',
  }
  const iconStarClasses = {
    default: 'bxr bxs-star',
    base: 'text-warning-500 text-[1.625rem]',
    breakpoints: '3xl:text-[1.75rem] 4xl:text-3xl xl:text-[1.6875rem]',
  }
  const textClasses = {
    base: 'text-default-800 text-medium text-center',
    breakpoints: '2xl:text-large xl:text-[1.0625rem]',
  }
  const titleClasses = {
    base: 'text-large text-default-900 h-auto w-auto font-bold',
    breakpoints: 'xl:text-[1.1875rem] 2xl:text-xl',
  }
  return (
    <div className={clsx(contentClasses.base, contentClasses.breakpoints)}>
      <div className={clsx(firstWrapperClasses.base, firstWrapperClasses.breakpoints)}>
        <div className={clsx(imageContainerClasses.base)}>
          <Image
            width={57}
            height={57}
            className={clsx(imageClasses.base, imageClasses.breakpoints)}
            src={imageUrl}
            blurDataURL={blurEffects.blurUrl}
            placeholder={`blur`}
            alt={`Photo by ${name}, satisfied customer`}
            itemProp={`image`}
          />
        </div>
        <div className={clsx(scoreContainerClasses.base)}>
          {score.map((item) => {
            return (
              <span key={item.key} className={clsx(iconWrapperClasses.base)}>
                <i
                  className={clsx(iconStarClasses.default, iconStarClasses.base, iconStarClasses.breakpoints)}
                />
              </span>
            )
          })}
        </div>
      </div>
      <div className={clsx(secondWrapperClasses.base)}>
        <p className={clsx(textClasses.base, textClasses.breakpoints)}>{text}</p>
      </div>
      <div className={clsx(thirdWrapperClasses.base)}>
        <h4 className={clsx(titleClasses.base, titleClasses.breakpoints)}>{name}</h4>
      </div>
    </div>
  )
}
