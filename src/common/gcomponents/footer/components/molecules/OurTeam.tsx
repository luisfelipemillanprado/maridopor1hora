'use client'
import { AvatarGroup } from '@heroui/react'
import TeamMember from '@/common/gcomponents/footer/components/atoms/TeamMember'
import clsx from 'clsx'

/**
 * @description - Renders the "Our Team" section, displaying a title and a group of team member avatars.
 * @param props - The component props.
 * @param props.ourTeam - An object containing the team members.
 * @param props.ourTeam.members - An array of team member objects, each with an image URL, name, and unique key.
 * @param props.fourthTitle - An array containing title objects with `text1` and `text2` for display.
 */
export default function OurTeam(props: {
  ourTeam: { members: { imageUrl: string; name: string; key: number }[] }
  text1: string
  text2: string
}) {
  const { ourTeam, text1, text2 } = props
  return (
    <div className={clsx(`vertical h-auto w-full gap-y-4`)}>
      <div className={clsx(`vertical w-full items-center gap-y-2`)}>
        <span
          className={clsx(
            `text-default-50 text-[1.1875rem]`,
            `2xl:text-xl`,
            `3xl:text-[1.1875rem]`
          )}
        >
          {text1}
        </span>
        <span className={clsx(`text-warning text-large`)}>{text2}</span>
      </div>
      <div className={clsx(`horizontal h-auto w-full justify-center`)}>
        <AvatarGroup isBordered max={6} total={10} size={`sm`}>
          {ourTeam.members.map((item /*, index */) => (
            <TeamMember key={item.key} {...{ src: item.imageUrl }} />
          ))}
        </AvatarGroup>
      </div>
    </div>
  )
}
