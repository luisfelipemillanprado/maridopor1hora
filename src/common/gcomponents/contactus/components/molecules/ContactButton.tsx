'use client'
import Image from 'next/image'
import clsx from 'clsx'
import { Button, Link } from '@heroui/react'

/**
 * @description - Renders a contact button with an image, wrapped in a styled Button component.
 * @param props - The properties for the ContactButton component.
 * @param props.imageUrl - The URL of the image to display inside the button.
 * @param props.href - The hyperlink reference for the button.
 */
export default function ContactButton(props: { imageUrl: string; href: string }) {
  const { imageUrl, href } = props
  return (
    <Button
      isExternal
      className={clsx(`horizontal h-auto w-auto min-w-[3.1875rem] justify-center px-0.5 py-1`)}
      as={Link}
      href={href}
      color={`success`}
      variant={`shadow`}
      radius={`lg`}
    >
      <Image
        className={clsx(`h-10 w-10`)}
        src={imageUrl}
        width={40}
        height={40}
        alt={`Image's contact`}
      />
    </Button>
  )
}
