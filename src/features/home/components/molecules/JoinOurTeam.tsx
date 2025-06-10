'use client'
import Member from '@/features/home/components/atoms/Member'
import AboutTeam from '@/features/home/components/atoms/AboutTeam'
import JoinTeamButton from '@/features/home/components/atoms/JoinTeamButton'
import clsx from 'clsx'

/**
 * @description - Renders a grid of team member images for the "Join Our Team" section.
 * @param props - The component props.
 * @param props.joinOurTeam - Object containing the team array.
 * @param props.joinOurTeam.team - Array of team member objects.
 * @param props.joinOurTeam.team[].imageUrl - The URL of the team member's image.
 * @param props.joinOurTeam.team[].key - Unique key for each team member.
 */
export default function JoinOurTeam(props: {
  joinOurTeam: {
    team: {
      imageUrl: string
      key: number
    }[]
    firstText: string
    secondText: string[]
  }
}) {
  const { joinOurTeam } = props
  return (
    <div
      className={clsx(
        `vertical bg-content3 rounded-large shadow-medium border-content4 h-auto w-full gap-y-7 border-1 px-3 pt-4 pb-0`
      )}
    >
      <AboutTeam {...{ firstText: joinOurTeam.firstText, secondText: joinOurTeam.secondText }} />
      <div className={clsx(`horizontal mb-1 h-auto w-full justify-center`)}>
        <JoinTeamButton {...{ text: `Join Our Team Here`, href: `#` }} />
      </div>
      <div className={clsx(`horizontal ml-5 h-auto w-full justify-center`)}>
        <div className={clsx(`grid w-auto grid-cols-12 grid-rows-2 gap-3`)}>
          {joinOurTeam.team.map((item, index) => (
            <Member key={item.key} {...{ imageUrl: item.imageUrl, index }} />
          ))}
        </div>
      </div>
    </div>
  )
}
