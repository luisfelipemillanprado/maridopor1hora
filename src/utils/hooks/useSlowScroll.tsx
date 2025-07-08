import { useEffect } from 'react'

export default function useSlowScroll(speed: number = 20, step: number = 10) {
  useEffect(() => {
    let wheelInterval: NodeJS.Timeout | null = null
    let touchInterval: NodeJS.Timeout | null = null
    let lastY = 0

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (wheelInterval) clearInterval(wheelInterval)
      const scrollStep = e.deltaY > 0 ? step : -step
      let scrolled = 0
      wheelInterval = setInterval(() => {
        window.scrollBy(0, scrollStep)
        scrolled += Math.abs(scrollStep)
        if (scrolled >= Math.abs(e.deltaY) && wheelInterval) {
          clearInterval(wheelInterval)
          wheelInterval = null
        }
      }, speed)
    }

    const handleTouchStart = (e: TouchEvent) => {
      lastY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      if (touchInterval) clearInterval(touchInterval)
      const currentY = e.touches[0].clientY
      const deltaY = lastY - currentY
      const scrollStep = deltaY > 0 ? step : -step
      let scrolled = 0
      touchInterval = setInterval(() => {
        window.scrollBy(0, scrollStep)
        scrolled += Math.abs(scrollStep)
        if (scrolled >= Math.abs(deltaY) && touchInterval) {
          clearInterval(touchInterval)
          touchInterval = null
        }
      }, speed)
      lastY = currentY
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      if (wheelInterval) clearInterval(wheelInterval)
      if (touchInterval) clearInterval(touchInterval)
    }
  }, [speed, step])
}
