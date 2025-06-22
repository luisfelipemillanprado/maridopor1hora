'use client'
import Member from '@/features/home/components/atoms/Member'
import AboutTeam from '@/features/home/components/atoms/AboutTeam'
import JoinTeamButton from '@/features/home/components/atoms/JoinTeamButton'
import clsx from 'clsx'

/**
 * @description - Renders the "Join Our Team" section, displaying team member images, descriptive texts,
 * and a call-to-action button. The component expects a `joinOurTeam` prop containing
 * information about the team, display texts, and button configuration.
 * @param props - The component props.
 * @param props.joinOurTeam - Data for the "Join Our Team" section.
 * @param props.joinOurTeam.team - Array of team member objects, each with an image URL and unique key.
 * @param props.joinOurTeam.firstText - The main descriptive text for the section.
 * @param props.joinOurTeam.secondText - An array of additional descriptive texts.
 * @param props.joinOurTeam.joinOurTeamButton - Configuration for the join button, including text and link.
 */
export default function JoinOurTeam(props: {
  joinOurTeam: {
    team: {
      imageUrl: string
      key: number
    }[]
    firstText: string
    secondText: string[]
    joinOurTeamButton: {
      text: string
      href: string
    }
  }
}) {
  const { joinOurTeam } = props
  return (
    <div
      className={clsx(
        `vertical bg-content3 rounded-large h-auto w-full gap-y-7 px-4 pt-4`,
        `border-content4 shadow-medium mb-5 border-1`
      )}
    >
      <AboutTeam {...{ firstText: joinOurTeam.firstText, secondText: joinOurTeam.secondText }} />
      <div className={clsx(`horizontal mb-1 h-auto w-full justify-center`)}>
        <JoinTeamButton
          {...{
            text: joinOurTeam.joinOurTeamButton.text,
            href: joinOurTeam.joinOurTeamButton.href,
          }}
        />
      </div>
      <div className={clsx(`horizontal ml-5 h-auto w-full justify-center`, `3xl:ml-7`)}>
        <div className={clsx(`grid w-auto grid-cols-12 grid-rows-2 gap-3`)}>
          {joinOurTeam.team.map((item, index) => (
            <Member key={item.key} {...{ imageUrl: item.imageUrl, index }} />
          ))}
        </div>
      </div>
    </div>
  )
}
