import Image from 'next/image'
import clsx from 'clsx'
import blurEffects from '@/utils/blurs/Blurs'

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
        placeholder={`blur`}
        width={151}
        height={112}
        alt={`Member company`}
        blurDataURL={blurEffects.blurUrl}
        className={clsx(
          `object-cover`,
          `${index == 0 ? 'border-default-50 shadow-small rounded-medium min-h-28 border-4' : ''}`,
          `${index == 0 ? '3xl:min-h-44 3xl:w-[13.4375rem] 2xl:min-h-32 2xl:w-[10.4375rem]' : ''}`,
          // --
          `${index == 1 ? 'border-warning shadow-small absolute top-0 h-[4.6875rem] w-[4.6875rem] rounded-full border-3' : ''}`,
          `${index == 1 ? '3xl:w-32 3xl:h-32 2xl:h-[5.625rem] 2xl:w-[5.625rem]' : ''}`,
          // --
          `${index == 2 ? 'border-warning shadow-small absolute -top-1 right-10 h-[4.6875rem] w-[4.6875rem] rounded-full border-3' : ''}`,
          `${index == 2 ? '3xl:w-32 3xl:h-32 3xl:-top-0.5 3xl:right-[2.6875rem] 2xl:h-[5.625rem] 2xl:w-[5.625rem]' : ''}`,
          // --
          `${index == 3 ? 'border-default-50 shadow-medium rounded-medium absolute -top-10 -left-10 z-10 min-h-28 border-8' : ''}`,
          `${index == 3 ? '3xl:min-h-44 3xl:w-[13.4375rem] 3xl:-top-12 3xl:-left-11 2xl:min-h-32 2xl:w-[10.4375rem]' : ''}`
        )}
        src={imageUrl}
      />
    </div>
  )
}
