'use client'
import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import clsx from 'clsx'

/**
 * @description - Displays a Swiper carousel of videos for a quick look at cars. Each
 * slide contains a video that auto-plays when its slide is active. Videos are managed
 * with refs for playback control and resource cleanup.
 * @param props - Component props.
 * @param props.videoUrls - Array of video items to display in the carousel.
 */
export default function QuickLookCars(props: {
  videoUrls: {
    videoUrl: string
    key: number
  }[]
}) {
  const { videoUrls } = props
  const swiperRef = useRef<SwiperCore | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const abortControllers = useRef<AbortController[]>([])

  /**
   * @description - This `useEffect` hook is responsible for cleaning up resources when
   * the `QuickLookCars` component unmounts. The cleanup function, defined in the `return`
   * statement, performs two main tasks.
   */
  useEffect(() => {
    return () => {
      abortControllers.current.forEach((controller) => controller.abort())
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause()
          video.removeAttribute('src')
          video.load()
        }
      })
    }
  }, [])

  /**
   * @description - This `useEffect` hook is responsible for synchronizing and managing
   * the arrays of video element references (videoRefs) and abort controllers
   * (abortControllers).
   */
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videoUrls.length)
    abortControllers.current = videoUrls.map(() => new AbortController())
    return () => {
      abortControllers.current.forEach((controller) => controller.abort())
    }
  }, [videoUrls])

  /**
   * @description - Handles the slide change event for a Swiper instance. For each video element
   * referenced in `videoRefs.current` this function attempts to play the video corresponding to the
   * currently active slide (`currentIndex`).
   * @param swiper - The SwiperCore instance representing the current Swiper slider.
   * @returns A Promise that resolves when all video play/pause operations are complete.
   */
  const handleSlideChange = async (swiper: SwiperCore) => {
    try {
      const currentIndex = swiper.realIndex
      await Promise.all(
        videoRefs.current.map(async (video, index) => {
          if (!video) return
          if (index === currentIndex) {
            try {
              video.controls = false
              // Try to play, but timeout after 5s if not resolved
              const playPromise = video.play()
              const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Play timeout')), 5000)
              )
              await Promise.race([playPromise, timeoutPromise])
            } catch (error) {
              console.error('Error playing video:', error)
              video.controls = true
            }
          } else {
            video.pause()
            video.currentTime = 0
          }
        })
      )
    } catch (error) {
      console.error('Error in slide change handler:', error)
    }
  }
  // --
  return (
    <Swiper
      autoplay={{
        delay: 28000,
        disableOnInteraction: false,
      }}
      pagination={true}
      loop={true}
      effect={'fade'}
      onSlideChange={handleSlideChange}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Autoplay, Pagination, EffectFade]}
      className={clsx(`w-full rounded-tr-[1.25rem] rounded-tl-[1.25rem] rounded-br-[1.25rem]`)}
    >
      {videoUrls.map((item, index) => (
        <SwiperSlide key={item.key}>
          <div className={clsx(`relative flex h-[55vh] shrink-0 flex-col items-center justify-center`)}>
            <video
              className={clsx(`w-full h-screen absolute object-cover`)}
              ref={(el) => {
                videoRefs.current[index] = el
              }}
              muted
              playsInline
              disablePictureInPicture
              preload="metadata"
            >
              <source src={item.videoUrl} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
