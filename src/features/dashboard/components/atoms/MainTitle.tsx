import clsx from 'clsx'

/**
 * @description - Renders a main title for the dashboard section.
 * @param props - The component props.
 * @param props.title - The text to display as the main title.
 * @returns A styled `<h1>` element displaying the provided title.
 */
export default function MainTitle(props: { title: string }) {
  const { title } = props
  return (
    <h1
      className={clsx(
        `horizontal text-default-900 h-auto w-full justify-start text-[1.5625rem] font-bold text-shadow-sm`,
        `from-default-900 to-warning-500 via-default-600 bg-gradient-to-tr from-50% via-55% to-60%`,
        `bg-clip-text text-transparent`
      )}
      aria-label={title}
    >
      <span className={clsx(`h-auto w-auto`)}>{title}</span>
    </h1>
  )
}
