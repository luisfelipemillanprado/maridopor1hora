'use client'
import DetailService from '@/features/dashboard/components/atoms/DetailService'
import clsx from 'clsx'

export default function AllDetailsServices(props: {
  imageUrls: { name: string; imageUrl: string; key: number }[]
}) {
  const { imageUrls } = props
  return (
    <div className={clsx(`grid w-full grid-cols-3 gap-x-2 gap-y-3`)}>
      {imageUrls.map((item) => (
        <DetailService key={item.key} name={item.name} imageUrl={item.imageUrl} />
      ))}
    </div>
  )
}
