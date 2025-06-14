'use client'
import React from 'react'
import Promotion from '@/features/home/components/atoms/Promotion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Autoplay } from 'swiper/modules'
import clsx from 'clsx'

//--
export default function SomePromotions(props: {
  promotions: {
    imageUrl: string
    href: string
    key: number
  }[]
}) {
  const { promotions } = props
  return (
    <Swiper
      slidesPerView={`auto`}
      spaceBetween={20}
      loop={true}
      /* autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}*/
      modules={[Autoplay]}
      className={clsx(`h-auto w-full !py-2`)}
    >
      {promotions.map((item /*,index*/) => (
        <SwiperSlide key={item.key} className={clsx(`!h-auto !w-auto`)}>
          <Promotion {...{ imageUrl: item.imageUrl, href: item.href }} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
