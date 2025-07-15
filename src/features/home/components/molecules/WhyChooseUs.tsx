'use client'
import Benefit from '@/features/home/components/atoms/Benefit'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Autoplay } from 'swiper/modules'
import clsx from 'clsx'

/**
 * @description - Renders a Swiper carousel displaying a list of benefits.
 * @param props - The component props.
 * @param props.benefits - An array of benefit objects to display.
 * @param props.benefits[].title - The title of the benefit.
 * @param props.benefits[].description - The description of the benefit.
 * @param props.benefits[].hrefText - The text for the benefit's link.
 * @param props.benefits[].href - The URL for the benefit's link.
 * @param props.benefits[].icon - The icon representing the benefit.
 * @param props.benefits[].key - A unique key for the benefit.
 */
export default function WhyChooseUs(props: {
  benefits: {
    title: string
    description: string
    hrefText: string
    href: string
    icon: string
    key: number
  }[]
}) {
  const { benefits } = props
  return (
    <Swiper
      slidesPerView={`auto`}
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={clsx(`h-auto w-full !py-2.5 !pl-1.5`)}
      aria-label={`Highlighted benefits`}
    >
      {benefits.map((item) => (
        <SwiperSlide key={item.key} className={clsx(`mr-5 !h-auto !w-auto`, `3xl:mr-6`)}>
          <Benefit
            {...{
              title: item.title,
              description: item.description,
              hrefText: item.hrefText,
              href: item.href,
              icon: item.icon,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
