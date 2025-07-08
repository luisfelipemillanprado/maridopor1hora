import { Button } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Renders a sign-up button with a gradient background and customizable text.
 * @param props - The properties for the SignUpButton component.
 * @param props.text - The text to display inside the button.
 */
export default function SignUpButton(props: { text: string }) {
  const { text } = props
  return (
    <Button className={clsx(`bg-warning shadow-lg`)} variant={`flat`} radius={`full`} size={`sm`}>
      <span className={clsx(`text-default-50 text-medium`, `xl:text-[1.0625rem]`)}>{text}</span>
    </Button>
  )
}
