'use client'
import TypeOfService from '@/features/dashboard/components/atoms/TypeOfService'
import clsx from 'clsx'

/**
 * @description - Renders a grid of service types, each displaying an image and a name.
 * @param props - The component props.
 * @param props.imageUrls - An array of objects containing the name, image URL, and a unique key for each service type.
 * @returns A React element displaying the list of service types in a grid layout.
 */
export default function TypesOfServices(props: {
  imageUrls: { name: string; imageUrl: string; key: number }[]
}) {
  const { imageUrls } = props
  return (
    <div className={clsx(`grid w-full grid-cols-3 gap-x-2 gap-y-3`)}>
      {imageUrls.map((item) => (
        <TypeOfService key={item.key} name={item.name} imageUrl={item.imageUrl} />
      ))}
    </div>
  )
}
