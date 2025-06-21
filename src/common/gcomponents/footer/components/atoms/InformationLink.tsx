import { Link } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Renders a styled link component for displaying informational links in the footer.
 * @param props - The props for the InformationLink component.
 * @param props.href - The URL to navigate to when the link is clicked.
 * @param props.text - The text content to display for the link.
 */
export default function InformationLink(props: { href: string; text: string }) {
  const { href, text } = props
  return (
    <Link
      className={clsx(`text-default-400 text-medium`, `2xl:text-[1.0625rem]`)}
      href={href}
      size={`sm`}
    >
      {text}
    </Link>
  )
}
