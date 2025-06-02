import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description - Renders a logo image inside a styled container.
 * @param props - The component props.
 * @param props.iconUrl - The URL of the logo image to display.
 */
export default function Logo(props: { iconUrl: string }) {
  const { iconUrl } = props
  return (
    <div className={`horizontal h-auto w-auto justify-center backdrop-blur-lg`}>
      <Image
        className={clsx(
          `horizontal h-[2.5625rem] w-[2.5625rem] justify-center rounded-full border-3 border-solid border-amber-600`
        )}
        width={41}
        height={41}
        src={iconUrl}
        alt={`Logo's team`}
      />
    </div>
  )
}
