import { Image } from '@heroui/react'
import Link from 'next/link'
import clsx from 'clsx'
// --
export default function Promotion(props: { imageUrl: string; href: string }) {
  const { imageUrl, href } = props
  return (
    <Link className={clsx(`horizontal relative h-auto w-auto justify-center`)} href={href}>
      <Image
        isZoomed
        className={clsx(`border-content3 h-[13.875rem] w-80 border-1 !opacity-100`)}
        alt={`Promotion`}
        src={imageUrl}
        width={320}
        height={222}
        shadow={`sm`}
      />
      <div className={clsx(`rounded-large bg-content5/20 absolute inset-0 z-10`)} />
    </Link>
  )
}
