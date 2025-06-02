import clsx from 'clsx'

/**
 * @description - Renders a secondary title element with predefined styles.
 * @param props - The component props.
 * @param props.title - The text to display as the secondary title.
 */
export default function SecondaryTitle(props: { title: string }) {
  const { title } = props
  return (
    <h2 className={clsx(`horizontal text-default-900 h-auto w-full text-[1.1875rem] font-bold`)}>
      <span className={clsx(`h-auto w-auto`)}>{title}</span>
    </h2>
  )
}
