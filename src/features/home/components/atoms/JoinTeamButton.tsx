'use client'
import ButtonPulse from '@/common/gcomponents/pulse/ButtonPulse'
import { Button, Link } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - A button component that allows users to join a team.
 * @param props - The properties for the JoinTeamButton component.
 * @param props.text - The text to display inside the button.
 * @param props.href - The URL to navigate to when the button is clicked.
 */
export default function JoinTeamButton(props: { text: string; href: string }) {
  const { text, href } = props
  return (
    <ButtonPulse type={`soft`} float colorChange={false} rounded={true} overlayMore={false}>
      <Button
        isExternal
        aria-label={`join-team`}
        className={clsx(`bg-warning z-50`, `3xl:h-[2.6875rem] 4xl:h-11.5`)}
        endContent={
          <span className={clsx(`horizontal h-auto w-auto`, `xl:pt-1`)}>
            <i
              className={clsx(
                `bxr bxs-community bx-tada`,
                `text-content5 text-[2.5rem]`,
                `4xl:text-[2.875rem] 3xl:text-[2.625rem] xl:text-[2.5625rem]`
              )}
            />
          </span>
        }
        as={Link}
        href={href}
        variant={`shadow`}
        size={`md`}
        radius={`full`}
      >
        <span className={clsx(`text-default-50 text-[1.0625rem]`, `4xl:text-[1.1875rem] 2xl:text-large`)}>
          {text}
        </span>
      </Button>
    </ButtonPulse>
  )
}
