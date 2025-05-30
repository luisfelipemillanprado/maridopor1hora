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
        className={`horizontal h-[2.688rem] w-[2.688rem] justify-center`}
        width={43}
        height={43}
        src={iconUrl}
        alt={`Logo's team`}
      />
    </div>
  )
}
