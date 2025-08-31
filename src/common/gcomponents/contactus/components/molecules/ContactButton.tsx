'use client'
import ButtonPulse from '@/common/gcomponents/pulse/ButtonPulse'
import { Button, Link } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Renders a contact button with an image, wrapped in a styled Button component.
 * @param props - The properties for the ContactButton component.
 * @param props.imageUrl - The URL of the image to display inside the button.
 * @param props.href - The hyperlink reference for the button.
 */
export default function ContactButton(props: { href: string }) {
  const { href } = props
  return (
    <ButtonPulse type={`soft`} float colorChange rounded={false} overlayMore>
      <Button
        isExternal
        className={clsx(
          `horizontal z-50 h-12.5 w-13 min-w-13 justify-center`,
          `3xl:w-13.5 3xl:h-13 4xl:w-15 4xl:h-14.5`
        )}
        as={Link}
        href={href}
        color={`success`}
        variant={`shadow`}
        radius={`lg`}
        size={`sm`}
      >
        <span className={clsx(`horizontal h-auto w-auto`)}>
          <i
            className={clsx(
              `bxl bx-whatsapp bx-tada`,
              `text-content1 text-[2.875rem]`,
              `3xl:text-5xl 4xl:text-[3.5rem]`
            )}
          />
        </span>
      </Button>
    </ButtonPulse>
  )
}
