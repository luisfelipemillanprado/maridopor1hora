'use client'
import Service from '@/features/home/components/atoms/Service'
import clsx from 'clsx'

/**
 * @description - Renders a grid of all available services, displaying each service using the `Service` component.
 * @param props - The properties for the component.
 * @param props.allOurServices - An object containing information about all services.
 * @param props.allOurServices.imageUrls - An array of objects, each containing an `imageUrl` and a unique `key` for the service.
 * @param props.allOurServices.name - An array of service names.
 * @param props.allOurServices.description - An array of service descriptions.
 */
export default function AllOurServices(props: {
  allOurServices: {
    imageUrls: { imageUrl: string; key: number }[]
    name: string[]
    description: string[]
  }
}) {
  const { allOurServices } = props
  const containerClasses = {
    base: 'grid w-full grid-cols-12 grid-rows-3 gap-3',
    breakpoints: '3xl:gap-5 4xl:grid-rows-2 4xl:gap-7',
  }
  return (
    <div className={clsx(containerClasses.base, containerClasses.breakpoints)}>
      {allOurServices.imageUrls.map((item, index) => (
        <Service
          key={item.key}
          {...{
            imageUrl: item.imageUrl,
            name: allOurServices.name[index],
            description: allOurServices.description[index],
          }}
        />
      ))}
    </div>
  )
}
