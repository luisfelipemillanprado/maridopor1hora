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
        `horizontal text-default-900 h-auto w-full justify-center text-xl font-extrabold text-shadow-sm`,
        `from-warning to-content5 via-content6 bg-gradient-to-tr bg-clip-text text-transparent`
      )}
    >
      <span className={clsx(`h-auto w-auto`)}>{title}</span>
    </h2>
  )
}
