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
          `border-warning h-[2.5625rem] min-w-[2.5625rem] rounded-full border-3 border-solid`,
          `3xl:min-w-11 3xl:h-11`
        )}
        width={41}
        height={41}
        src={iconUrl}
        alt={`Logo's team`}
      />
    </div>
  )
}
