import Image from 'next/image'
import clsx from 'clsx'
import { StarIcon } from '@heroicons/react/20/solid'
import blurEffects from '@/utils/blurs/Blurs'
// --
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
            width={55}
            height={55}
            className={clsx(`h-[3.4375rem] w-[3.4375rem] rounded-full shadow-md`)}
            src={imageUrl}
            blurDataURL={blurEffects.blurUrl}
            placeholder={`blur`}
            alt={`Client's avatar`}
          />
        </div>
        <div className={clsx(`horizontal h-auto w-auto justify-between gap-1`)}>
          {score.map((item) => {
            return (
              <span key={item.key} className={clsx(`horizontal h-auto w-auto justify-center`)}>
                <StarIcon className={clsx(`fill-warning-500 h-[1.125rem] w-[1.125rem]`)} />
              </span>
            )
          })}
        </div>
      </div>
      <div className={clsx(`horizontal h-auto w-auto justify-center`)}>
        <p className={clsx(`text-default-800 text-medium text-center`)}>{text}</p>
      </div>
      <div className={clsx(`horzontal mt-1 h-auto w-auto justify-center`)}>
        <span className={clsx(`text-large text-default-900 h-auto w-auto font-bold`)}>{name}</span>
      </div>
    </div>
  )
}
