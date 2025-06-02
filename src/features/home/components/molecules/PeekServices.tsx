'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Scrollbar, Autoplay, Pagination, EffectFade } from 'swiper/modules'
import clsx from 'clsx'

/**
 * @description - Displays a carousel of images using Swiper with fade effect and autoplay.
 * @param props - The component props.
 * @param props.peekServices - An array of image objects to display in the carousel.
 * @param props.peekServices[].imageUrl - The URL of the image to display.
 * @param props.peekServices[].key - A unique key for each image.
 */
export default function PeekServices(props: { peekServices: { imageUrl: string; key: number }[] }) {
  const { peekServices } = props
  return (
    <Swiper
      slidesPerView={1}
      effect={`fade`}
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar, Autoplay, Pagination, EffectFade]}
      className={clsx(
        `h-[18.75rem] w-full rounded-tl-[1.25rem] rounded-tr-[1.25rem] rounded-br-[1.25rem] rounded-bl-[1.25rem]`,
        `outline-warning-200 shadow-md outline-1`
      )}
    >
      {peekServices.map((item, index) => (
        <SwiperSlide className={clsx(``)} key={item.key}>
          <Image
            width={312}
            height={310}
            className={clsx(`block h-full w-full object-cover`)}
            src={item.imageUrl}
            alt={`Service ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
