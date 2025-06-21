import { Button, Link } from '@heroui/react'
import { UserGroupIcon } from '@heroicons/react/24/solid'
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
    <div className={clsx(`horizontal h-auto w-auto`)}>
      <Button
        className={clsx(`bg-warning`)}
        endContent={<UserGroupIcon className={clsx(`fill-content5 h-6 w-6`)} />}
        as={Link}
        href={href}
        variant={`shadow`}
        size={`md`}
        radius={`full`}
      >
        <span className={clsx(`text-default-50 text-medium`, `2xl:text-[1.0625rem]`)}>{text}</span>
      </Button>
    </div>
  )
}
