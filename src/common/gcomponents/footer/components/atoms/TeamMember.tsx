import { Avatar } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Renders a team member avatar using the provided image source.
 * @param props - The properties for the TeamMember component.
 * @param props.src - The source URL of the team member's avatar image.
 */
export default function TeamMember(props: { src: string }) {
  const { src } = props
  return <Avatar className={clsx(`xl:h-9 xl:w-9`)} src={src} size={`sm`} color={`warning`} />
}
