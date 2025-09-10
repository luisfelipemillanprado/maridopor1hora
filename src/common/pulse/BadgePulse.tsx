import clsx from 'clsx'

/**
 * @description - A React component that displays a pulsing badge effect behind its children.
 * The badge consists of three animated circles with staggered pulse delays,
 * visible only on extra-large screens (`4xl:flex`). The `colorChange` prop is
 * reserved for future use and currently has no effect.
 * @param children - The content to be displayed in the center of the badge.
 * @param colorChange - Optional boolean to control color change (not implemented).
 * @returns A JSX element with a pulsing badge effect.
 */
export default function BadgePulse({
  children,
  colorChange,
}: {
  children: React.ReactNode
  colorChange?: boolean
}) {
  return (
    <div className={clsx(`relative hidden items-center justify-center`, `4xl:flex`)}>
      <span
        className={clsx(
          `animate-slow-pulse absolute inline-flex h-12.5 w-12.5 rounded-full`,
          colorChange ? `bg-default-500` : `bg-warning`
        )}
        style={{ animationDelay: '0s' }}
      />
      <span
        className={clsx(
          `animate-slow-pulse absolute inline-flex h-12.5 w-12.5 rounded-full`,
          colorChange ? `bg-default-500` : `bg-warning`
        )}
        style={{ animationDelay: '0.5s' }}
      />
      <span
        className={clsx(
          `animate-slow-pulse absolute inline-flex h-12.5 w-12.5 rounded-full`,
          colorChange ? `bg-default-500` : `bg-warning`
        )}
        style={{ animationDelay: '1.2s' }}
      />
      {children}
    </div>
  )
}
