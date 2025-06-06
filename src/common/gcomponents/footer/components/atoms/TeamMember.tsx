import { Avatar } from '@heroui/react'

/**
 * @description - Renders a team member avatar using the provided image source.
 * @param props - The properties for the TeamMember component.
 * @param props.src - The source URL of the team member's avatar image.
 */
export default function TeamMember(props: { src: string }) {
  const { src } = props
  return <Avatar src={src} size={`sm`} color={`warning`} />
}
