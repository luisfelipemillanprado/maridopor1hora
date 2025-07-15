'use client'
import BookedService from '@/features/dashboard/components/atoms/BookedService'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Autoplay } from 'swiper/modules'
import clsx from 'clsx'

export default function MostBookedServices(props: {
  bookedServices: {
    text: string
    imageUrl: string
    price: string
    key: number
  }[]
}) {
  const { bookedServices } = props
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
      {bookedServices.map((item) => (
        <SwiperSlide key={item.key} className={clsx(`mr-4 !h-auto !w-auto`)}>
          <BookedService {...{ imageUrl: item.imageUrl, text: item.text, price: item.price }} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
