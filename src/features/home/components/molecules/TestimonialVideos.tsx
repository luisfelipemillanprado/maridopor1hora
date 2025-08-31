'use client'
import TestimonialVideo from '@/features/home/components/atoms/TestimonialVideo'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import { EffectCube, Pagination } from 'swiper/modules'
import clsx from 'clsx'

/**
 * @description - Displays a carousel of testimonial videos using Swiper.
 * @param props - Component props.
 * @param props.videoTestimonials - An array of testimonial objects, each containing:
 *   - imageUrl: The URL of the thumbnail image for the video.
 *   - videoUrl: The URL of the testimonial video.
 *   - key: A unique key for each testimonial.
 * @returns A Swiper carousel containing testimonial video slides.
 */
export default function TestimonialVideos(props: {
  videoTestimonials: { imageUrl: string; videoUrl: string; durationTime: string; key: number }[]
}) {
  const { videoTestimonials } = props
  return (
    <div>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 1,
          shadowScale: 0,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className={clsx(`h-auto w-full !bg-transparent`, `3xl:w-[18.75rem] 3xl:mx-0 4xl:w-[21.25rem]`)}
        aria-label={`Video testimonials`}
      >
        {videoTestimonials.map((item) => (
          <SwiperSlide key={item.key} className={clsx(``)}>
            <TestimonialVideo
              {...{
                videoUrl: item.videoUrl,
                imageUrl: item.imageUrl,
                durationTime: item.durationTime,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
