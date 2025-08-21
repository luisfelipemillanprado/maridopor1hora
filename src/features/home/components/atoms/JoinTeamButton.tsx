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
        isExternal
        aria-label={`join-team`}
        className={clsx(`bg-warning`, `4xl:h-11.5`)}
        endContent={<UserGroupIcon className={clsx(`fill-content5 h-6.5 w-6.5`, `4xl:h-7.5 4xl:w-7.5`)} />}
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
    </div>
  )
}
