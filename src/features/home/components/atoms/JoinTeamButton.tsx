import { Button, Link } from '@heroui/react'
import { UserGroupIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

export default function JoinTeamButton(props: { text: string; href: string }) {
  const { text, href } = props
  return (
    <div className={clsx(`horizontal h-auto w-auto`)}>
      <Button
        className={clsx(``)}
        endContent={<UserGroupIcon className={clsx(`fill-content5 h-6 w-6`)} />}
        as={Link}
        href={href}
        color={`warning`}
        variant={`shadow`}
        size={`md`}
        radius={`full`}
      >
        <span className={clsx(`text-default-50 text-medium`)}>{text}</span>
      </Button>
    </div>
  )
}
