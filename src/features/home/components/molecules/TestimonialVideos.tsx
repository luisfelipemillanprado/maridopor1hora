'use client'
import TestimonialVideo from '@/features/home/components/atoms/TestimonialVideo'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
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
  videoTestimonials: { imageUrl: string; videoUrl: string; key: number }[]
}) {
  const { videoTestimonials } = props
  return (
    <Swiper
      slidesPerView={`auto`}
      loop={true}
      className={clsx(`h-auto w-full !py-2.5 !pl-1.5`)}
      aria-label={`Video testimonials`}
    >
      {videoTestimonials.map((item) => (
        <SwiperSlide key={item.key} className={clsx(`mr-5 !h-auto !w-auto`, `3xl:mr-6`)}>
          <TestimonialVideo
            {...{
              videoUrl: item.videoUrl,
              imageUrl: item.imageUrl,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
