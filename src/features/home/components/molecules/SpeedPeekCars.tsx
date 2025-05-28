'use client'

import React from 'react'
import { Card, CardFooter } from '@heroui/card'
import { Image } from '@heroui/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import clsx from 'clsx'

export default function SpeedPeekCars(props: { imageUrls: { imageUrl: string; key: number }[] }) {
  const { imageUrls } = props
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={11}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={clsx(`h-auto w-full`)}
      >
        {imageUrls.map((item /*, index */) => (
          <SwiperSlide key={item.key} className={clsx(`!w-auto`)}>
            <Card
              isFooterBlurred
              className={clsx(`horizontal h-auto w-auto rounded-2xl border-none`)}
            >
              <Image
                alt="Woman listing to music"
                className={clsx(`object-cover`)}
                height={90}
                src={item.imageUrl}
                width={90}
              />
              <CardFooter
                className={clsx(
                  `shadow-small absolute bottom-1 z-10 ml-1 w-auto justify-between overflow-hidden rounded-lg`,
                  `border-1 border-white/20 p-1 before:rounded-full before:bg-white/10`
                )}
              ></CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
