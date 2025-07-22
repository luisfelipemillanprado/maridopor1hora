'use client'
import DetailService from '@/features/dashboard/components/atoms/DetailService'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Autoplay } from 'swiper/modules'
import clsx from 'clsx'

export default function DetailsServices(props: {
  destailsServices: {
    text: string
    imageUrl: string
    key: number
  }[]
}) {
  const { destailsServices } = props
  return (
    <Swiper
      slidesPerView={`auto`}
      loop={true}
      /* autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}*/
      modules={[Autoplay]}
      className={clsx(`h-auto w-full !py-2.5 !pl-1.5`)}
      aria-label={`Most outstanding services`}
    >
      {destailsServices.map((item) => (
        <SwiperSlide key={item.key} className={clsx(`mr-4 !h-auto !w-auto`)}>
          <DetailService {...{ imageUrl: item.imageUrl, text: item.text }} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
