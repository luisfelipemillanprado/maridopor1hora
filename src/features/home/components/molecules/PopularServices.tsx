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
  const wrapperClasses = {
    base: 'absolute top-[61%] right-0 left-0 z-10 hidden h-auto w-full',
    breakpoints: '3xl:block 4xl:top-[63%]',
  }
  const containerClasses = {
    base: 'horizontal justify-center gap-x-4',
    breakpoints: '4xl:gap-x-8',
  }
  const linkClasses = {
    base: 'h-auto w-auto',
    conditions: 'flex flex-row',
    breakpoints: '4xl:flex hidden',
  }
  const chipClasses = {
    base: 'bg-content5/40 horizontal h-9 justify-center pl-2',
    breakpoints: '4xl:h-11',
  }
  const textClasses = {
    base: 'text-default-50 text-[1.0625rem]',
    breakpoints: '4xl:text-[1.1875rem]',
  }
  return (
    <div className={clsx(wrapperClasses.base, wrapperClasses.breakpoints)}>
      <div className={clsx(containerClasses.base, containerClasses.breakpoints)}>
        {services.map((item, index) => (
          <Link
            key={item.key}
            className={clsx(
              index !== 5 ? linkClasses.conditions : [linkClasses.base, linkClasses.breakpoints]
            )}
            href={item.href}
            aria-label={item.text}
          >
            <Chip
              className={clsx(chipClasses.base, chipClasses.breakpoints)}
              startContent={<PopularServiceIcon {...{ icon: item.icon }} />}
              variant={'shadow'}
            >
              <span className={clsx(textClasses.base, textClasses.breakpoints)}>{item.text}</span>
            </Chip>
          </Link>
        ))}
      </div>
    </div>
  )
}
