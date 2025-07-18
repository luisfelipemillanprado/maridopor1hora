import clsx from 'clsx'

/**
 * @description - Renders a paragraph element displaying the provided introduction text.
 * @param props - The component props.
 * @param props.text - The text content to display inside the paragraph.
 */
export default function Introduction(props: { text: string }) {
  const { text } = props
  return (
    <p
      className={clsx(
        `text-medium text-default-900 h-auto w-auto text-center`,
        `3xl:px-0.5 2xl:text-large xl:text-[1.0625rem]`
      )}
    >
      {text}
    </p>
  )
}
