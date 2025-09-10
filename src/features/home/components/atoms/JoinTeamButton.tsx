'use client'
import ButtonPulse from '@/common/pulse/ButtonPulse'
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
  const buttonClasses = {
    base: 'bg-warning z-50',
    breakpoints: '3xl:h-[2.6875rem] 4xl:h-11.5',
  }
  const iconWrapperClasses = {
    base: 'horizontal h-auto w-auto',
    breakpoints: 'xl:pt-1',
  }
  const communityIconClasses = {
    default: 'bxr bxs-community bx-tada',
    base: 'text-content5 text-[2.5rem]',
    breakpoints: '4xl:text-[2.875rem] 3xl:text-[2.625rem] xl:text-[2.5625rem]',
  }
  const textClasses = {
    base: 'text-default-50 text-[1.0625rem]',
    breakpoints: '4xl:text-[1.1875rem] 2xl:text-large',
  }
  return (
    <ButtonPulse type={`soft`} float colorChange={false} rounded={true} overlayMore={false}>
      <Button
        isExternal
        aria-label={`join-team`}
        className={clsx(buttonClasses.base, buttonClasses.breakpoints)}
        endContent={
          <span className={clsx(iconWrapperClasses.base, iconWrapperClasses.breakpoints)}>
            <i
              className={clsx(
                communityIconClasses.default,
                communityIconClasses.base,
                communityIconClasses.breakpoints
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
        <span className={clsx(textClasses.base, textClasses.breakpoints)}>{text}</span>
      </Button>
    </ButtonPulse>
  )
}
