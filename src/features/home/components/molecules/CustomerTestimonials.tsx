'use client'
import { useRef } from 'react'
import Testimonial from '@/features/home/components/atoms/Testimonial'
import { Button } from '@heroui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCards } from 'swiper/modules'
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
  const swiperRef = useRef<SwiperType | null>(null)
  return (
    <div className={clsx(`relative`)}>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        navigation={false}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className={clsx(
          `horizontal h-auto w-56 justify-center !pb-1.5`,
          `4xl:w-[15.5rem] 2xl:w-[14.9375rem]`
        )}
      >
        {testimonials.map((item /*, index*/) => {
          return (
            <SwiperSlide key={item.key} className={clsx(`bg-content1 shadow-small w-full rounded-xl`)}>
              <Testimonial {...{ name: item.name, text: item.text, imageUrl: item.imageUrl, score }} />
            </SwiperSlide>
          )
        })}
        <Button
          isIconOnly
          onPress={() => swiperRef.current?.slidePrev()}
          className={clsx(`bg-content1 absolute top-5/12 -left-4 z-50 shadow-lg`)}
          variant={`shadow`}
          radius={`full`}
          size={`lg`}
          aria-label={`See previous testimony`}
        >
          <ChevronLeftIcon className={clsx(`fill-warning-500 h-12 w-12`)} />
        </Button>
        <Button
          isIconOnly
          onPress={() => swiperRef.current?.slideNext()}
          className={clsx(`bg-content1 absolute top-5/12 -right-4 z-50 shadow-lg`)}
          variant={`shadow`}
          radius={`full`}
          size={`lg`}
          aria-label={`See next testimony`}
        >
          <ChevronRightIcon className={clsx(`fill-warning-500 h-12 w-12`)} />
        </Button>
      </Swiper>
    </div>
  )
}
