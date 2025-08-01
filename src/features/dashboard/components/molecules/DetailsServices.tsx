'use client'
import DetailService from '@/features/dashboard/components/atoms/DetailService'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Autoplay } from 'swiper/modules'
import clsx from 'clsx'

/**
 * @description - Renders a Swiper carousel displaying a list of service details.
 * @param props - The component props.
 * @param props.detaillsServices - An array of service detail objects to display.
 * @param props.detaillsServices[].title - The title of the service.
 * @param props.detaillsServices[].imageUrl - The image URL representing the service.
 * @param props.detaillsServices[].text - Optional short text about the service.
 * @param props.detaillsServices[].description - Optional detailed description of the service.
 * @param props.detaillsServices[].phases - Optional array of phases, each with a step and key.
 * @param props.detaillsServices[].key - Unique key for each service detail.
 * @returns A Swiper component with slides for each service detail.
 */
export default function DetailsServices(props: {
  destailsServices: {
    title: string
    imageUrl: string
    moreDetails: {
      text1: string
      text2: string
      text3: string
      link: {
        href: string
        text: string
      }
      description: string
      phases: { step: string }[]
      questions: {
        question: string
        answer: string
        key: number
      }[]
      ventajas: string
      testimonials: {
        name: string
        text: string
        imageUrl: string
        key: number
      }[]
    }
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
          <DetailService
            {...{
              imageUrl: item.imageUrl,
              title: item.title,
              moreDetails: item.moreDetails,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
