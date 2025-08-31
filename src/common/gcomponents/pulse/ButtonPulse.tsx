import clsx from 'clsx'

/**
 * @description - Enum representing the available types of pulse animations.
 * @enum {string}
 * @property {string} SOFT - Represents a soft pulse animation.
 * @property {string} SLOW - Represents a slow pulse animation.
 */
export enum AnimationType {
  SOFT = 'soft',
  SLOW = 'slow',
}

/**
 * @description - Returns an animation configuration object based on the provided animation type.
 * @param type - The type of animation to apply. Should correspond to a value from `AnimationType`.
 * @returns An object containing the animation type string for use in class names.
 * Supported animation types:
 * - AnimationType.SOFT: Applies a soft pulse animation.
 * - AnimationType.SLOW: Applies a slow pulse animation.
 * - Any other value: No animation is applied.
 */
const animationSwitch = (type: string) => {
  switch (type) {
    case AnimationType.SOFT:
      return { type: `animate-soft-pulse` }
    case AnimationType.SLOW:
      return { type: `animate-slow-pulse` }
    default:
      return { type: `animate-none` }
  }
}

/**
 * @description - Renders a pulsing animation effect behind its children.
 * @param children - The content to be rendered inside the pulse effect.
 * @param type - The type of animation to use, passed to `animationSwitch`.
 * @param float - If true, applies a floating animation to the pulse.
 * @param colorChange - If true, uses the `bg-success` color; otherwise, uses `bg-warning`.
 * @param rounded - If true, applies a fully rounded shape; otherwise, uses a less rounded style.
 * @param overlayMore - If true, increases the overlay inset for the pulse effect.
 * @returns A React component that displays a pulsing background animation behind its children.
 */
export default function Pulse({
  children,
  type,
  float,
  colorChange,
  rounded,
  overlayMore,
}: {
  children: React.ReactNode
  type: string
  float?: boolean
  colorChange?: boolean
  rounded?: boolean
  overlayMore?: boolean
}) {
  return (
    <div className={clsx(`horizontal relative h-auto w-auto`, { 'animate-float-y': float })}>
      <span
        className={clsx(
          `${animationSwitch(type).type} absolute z-10 opacity-50`,
          colorChange ? `bg-success` : `bg-warning`,
          rounded ? `rounded-full` : `rounded-2xl`,
          overlayMore ? `-inset-[0.1875rem]` : `-inset-0.5`
        )}
        style={{ animationDelay: '0s' }}
      />
      <span
        className={clsx(
          `${animationSwitch(type).type} absolute z-10 opacity-50`,
          colorChange ? `bg-success` : `bg-warning`,
          rounded ? `rounded-full` : `rounded-2xl`,
          overlayMore ? `-inset-[0.1875rem]` : `-inset-0.5`
        )}
        style={{ animationDelay: '0.7s' }}
      />
      <span
        className={clsx(
          `${animationSwitch(type).type} absolute z-10 opacity-50`,
          colorChange ? `bg-success` : `bg-warning`,
          rounded ? `rounded-full` : `rounded-2xl`,
          overlayMore ? `-inset-[0.1875rem]` : `-inset-0.5`
        )}
        style={{ animationDelay: '1.5s' }}
      />
      {children}
    </div>
  )
}
