import Image from 'next/image'
import clsx from 'clsx'
import { StarIcon } from '@heroicons/react/20/solid'
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
  return (
    <div className={clsx(`vertical h-full w-full items-center justify-start gap-y-1 p-4`)}>
      <div className={clsx(`vertical mb-1 h-auto w-full items-center gap-y-2`)}>
        <div
          className={clsx(
            `horizontal border-warning-500 border-1.5 h-auto w-auto justify-center rounded-full border-dashed p-1`
          )}
        >
          <Image
            width={57}
            height={57}
            className={clsx(
              `h-[3.5625rem] w-[3.5625rem] rounded-full shadow-md`,
              `2xl:h-[3.75rem] 2xl:w-[3.75rem]`
            )}
            src={imageUrl}
            blurDataURL={blurEffects.blurUrl}
            placeholder={`blur`}
            alt={`Client's avatar ${name}`}
          />
        </div>
        <div className={clsx(`horizontal h-auto w-auto justify-between gap-1`)}>
          {score.map((item) => {
            return (
              <span key={item.key} className={clsx(`horizontal h-auto w-auto justify-center`)}>
                <StarIcon
                  className={clsx(
                    `fill-warning-500 h-[1.125rem] w-[1.125rem]`,
                    `2xl:h-[1.1875rem] 2xl:w-[1.1875rem]`
                  )}
                />
              </span>
            )
          })}
        </div>
      </div>
      <div className={clsx(`horizontal h-auto w-auto justify-center`)}>
        <p className={clsx(`text-default-800 text-medium text-center`, `2xl:text-[1.0625rem]`)}>
          {text}
        </p>
      </div>
      <div className={clsx(`horzontal mt-1 h-auto w-auto justify-center`)}>
        <span
          className={clsx(
            `text-large text-default-900 h-auto w-auto font-bold`,
            `2xl:text-[1.1875rem]`
          )}
        >
          {name}
        </span>
      </div>
    </div>
  )
}
