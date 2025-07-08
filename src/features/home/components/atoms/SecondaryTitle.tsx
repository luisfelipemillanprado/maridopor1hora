import clsx from 'clsx'

/**
 * @description - Renders a secondary title element with predefined styles.
 * @param props - The component props.
 * @param props.title - The text to display as the secondary title.
 */
export default function SecondaryTitle(props: { title: string }) {
  const { title } = props
  return (
    <h2
      className={clsx(
        `horizontal text-default-900 h-auto w-full justify-center text-[1.375rem] font-bold text-shadow-sm`,
        `from-default-900 to-warning-500 via-default-600 bg-gradient-to-tr from-50% via-55% to-80%`,
        `bg-clip-text text-transparent`,
        `3xl:text-[1.5625rem] xl:text-[1.4375rem]`
      )}
      aria-label={title}
    >
      <span className={clsx(`h-auto w-auto`)}>{title}</span>
    </h2>
  )
}
