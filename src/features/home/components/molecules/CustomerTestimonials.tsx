'use client'
import Testimonial from '@/features/home/components/atoms/Testimonial'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import { EffectCards, Navigation } from 'swiper/modules'
import clsx from 'clsx'

/**
 * @description - Displays a swiper carousel of customer testimonials.
 * @param props - The component props.
 * @param props.testimonials - An array of testimonial objects, each containing:
 *   - `name`: The customer's name.
 *   - `text`: The testimonial text.
 *   - `imageUrl`: The URL of the customer's image.
 *   - `key`: A unique key for the testimonial.
 * @param props.score - An array of score objects, each containing:
 *   - `key`: A unique key for the score.
 */
export default function CustomerTestimonials(props: {
  testimonials: {
    name: string
    text: string
    imageUrl: string
    key: number
  }[]
  score: { key: number }[]
}) {
  const { testimonials, score } = props
  return (
    <Swiper
      navigation={true}
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards, Navigation]}
      className={clsx(`horizontal h-auto w-56 justify-center !pb-1.5`)}
    >
      {testimonials.map((item /*, index*/) => {
        return (
          <SwiperSlide key={item.key} className={clsx(`bg-content1 shadow-small w-full rounded-xl`)}>
            <Testimonial {...{ name: item.name, text: item.text, imageUrl: item.imageUrl, score }} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
