import clsx from 'clsx'

export default function SecondaryTitle(props: { title: string }) {
  const { title } = props
  return (
    <h2
      className={clsx(
        `horizontal text-default-900 h-auto w-full justify-start text-[1.375rem] font-bold text-shadow-sm`,
        `from-default-900 to-warning-500 via-default-600 bg-gradient-to-tr from-50% via-55% to-80%`,
        `bg-clip-text text-transparent`
      )}
      aria-label={title}
    >
      <span className={clsx(`h-auto w-auto`)}>{title}</span>
    </h2>
  )
}
