'use client'
import PopularServiceIcon from '@/features/home/components/atoms/PopularServiceIcon'
import { Chip, Link } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Renders a horizontal list of popular service chips, each displaying an icon and text.
 * @param props - The component props.
 * @param props.services - An array of service objects to display.
 * @param props.services[].text - The display text for the service.
 * @param props.services[].icon - The icon identifier for the service.
 * @param props.services[].key - A unique key for each service item.
 */
export default function PopularServices(props: {
  services: { text: string; icon: string; href: string; key: number }[]
}) {
  const { services } = props
  return (
    <div
      className={clsx(
        `absolute top-[61%] right-0 left-0 z-10 hidden h-auto w-full`,
        `3xl:block 4xl:top-[63%]`
      )}
    >
      <div className={clsx(`horizontal justify-center gap-x-4`, `4xl:gap-x-8`)}>
        {services.map((item, index) => (
          <Link
            key={item.key}
            className={clsx(`h-auto w-auto`, index !== 5 ? `flex flex-row` : `4xl:flex hidden`)}
            href={item.href}
            aria-label={item.text}
          >
            <Chip
              className={clsx(`bg-content5/40 horizontal h-9 justify-center pl-2`, `4xl:h-11`)}
              startContent={<PopularServiceIcon {...{ icon: item.icon }} />}
              variant={'shadow'}
            >
              <span className={clsx(`text-default-50 text-[1.0625rem]`, `4xl:text-[1.1875rem]`)}>
                {item.text}
              </span>
            </Chip>
          </Link>
        ))}
      </div>
    </div>
  )
}
