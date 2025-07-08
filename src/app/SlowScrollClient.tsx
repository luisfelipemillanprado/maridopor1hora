'use client'
import useSlowScroll from '@/utils/hooks/useSlowScroll'

/**
 * @description - React client component that applies a slow scroll effect to the page.
 * This component invokes the `useSlowScroll` hook with a delay of 100 milliseconds,
 * which likely modifies the scroll behavior for smoother or slower scrolling.
 * @returns {null} This component does not render any UI.
 */
export default function SlowScrollClient(props: { speed: number; step: number }) {
  const { speed, step } = props
  useSlowScroll(speed, step)
  return null
}
