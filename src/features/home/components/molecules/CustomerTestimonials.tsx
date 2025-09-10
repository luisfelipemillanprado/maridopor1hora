'use client'
import { useRef } from 'react'
import Testimonial from '@/features/home/components/atoms/Testimonial'
import { Button } from '@heroui/react'
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
  const swiperClasses = {
    base: 'horizontal h-auto w-56 justify-center !pb-1.5',
    breakpoints: '4xl:w-[15.5rem] 2xl:w-[14.9375rem]',
  }
  const slidePrevClasses = {
    base: 'bg-content1 absolute top-5/12 -left-4 z-50 shadow-lg',
  }
  const slideNextClasses = {
    base: 'bg-content1 absolute top-5/12 -right-4 z-50 shadow-lg',
  }
  const iconWrapperClasses = {
    base: 'horizontal w-auto h-auto',
  }
  const chevronLeftIconClasses = {
    default: 'bxr bxs-chevron-left',
    base: 'text-warning-500 text-[4.75rem]',
  }
  const chevronRightIconClasses = {
    default: 'bxr bxs-chevron-right',
    base: 'text-warning-500 text-[4.75rem]',
  }
  /**
   *
   */
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
        className={clsx(swiperClasses.base, swiperClasses.breakpoints)}
      >
        {testimonials.map((item) => {
          return (
            <SwiperSlide key={item.key} className={clsx(`bg-content1 shadow-small w-full rounded-xl`)}>
              <Testimonial {...{ name: item.name, text: item.text, imageUrl: item.imageUrl, score }} />
            </SwiperSlide>
          )
        })}
        <Button
          isIconOnly
          onPress={() => swiperRef.current?.slidePrev()}
          className={clsx(slidePrevClasses.base)}
          variant={`shadow`}
          radius={`full`}
          size={`lg`}
          aria-label={`See previous testimony`}
        >
          <span className={clsx(iconWrapperClasses.base)}>
            <i className={clsx(chevronLeftIconClasses.default, chevronLeftIconClasses.base)} />
          </span>
        </Button>
        <Button
          isIconOnly
          onPress={() => swiperRef.current?.slideNext()}
          className={clsx(slideNextClasses.base)}
          variant={`shadow`}
          radius={`full`}
          size={`lg`}
          aria-label={`See next testimony`}
        >
          <span className={clsx(iconWrapperClasses.base)}>
            <i className={clsx(chevronRightIconClasses.default, chevronRightIconClasses.base)} />
          </span>
        </Button>
      </Swiper>
    </div>
  )
}
