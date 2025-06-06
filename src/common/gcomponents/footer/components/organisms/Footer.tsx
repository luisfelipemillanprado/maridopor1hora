import CompanyInformation from '@/common/gcomponents/footer/components/molecules/CompanyInformation'
import OurTeam from '@/common/gcomponents/footer/components/molecules/OurTeam'
import SocialNetworks from '@/common/gcomponents/footer/components/molecules/SocialNetworks'
import SecondaryDescription from '@/common/gcomponents/footer/components/molecules/SecondaryDescription'
import clsx from 'clsx'

export default function Footer(props: {
  companyInformation: { links: { href: string; text: string; key: number }[] }
  ourTeam: { members: { imageUrl: string; name: string; key: number }[] }
  socialNetworks: { url: string; icon: string; name: string; key: number }[]
  fourthTitle: { text1: string; text2: string }[]
  secondaryDescription: string[]
}) {
  const { companyInformation, ourTeam, fourthTitle, socialNetworks, secondaryDescription } = props
  return (
    <div
      className={clsx(
        `vertical bg-content5 h-auto w-full !justify-start gap-y-8 rounded-t-3xl pt-7`
      )}
    >
      <section aria-label={`company-information`} className={clsx(`h-auto w-full px-4`)}>
        <CompanyInformation {...{ companyInformation }} />
      </section>
      <div className={clsx(`vertical h-auto w-full !justify-start gap-y-9`)}>
        <section
          aria-label={`our-team`}
          className={clsx(`horizontal h-auto w-full justify-center px-4`)}
        >
          <OurTeam {...{ ourTeam, text1: fourthTitle[0].text1, text2: fourthTitle[0].text2 }} />
        </section>
        <section
          aria-label={`social-networks`}
          className={clsx(`horizontal h-auto w-full justify-center px-4`)}
        >
          <SocialNetworks {...{ socialNetworks, text1: fourthTitle[1].text1 }} />
        </section>
      </div>
      <section
        aria-label={`company-secondary-description`}
        className={clsx(`horizontal h-auto w-full justify-center px-4`)}
      >
        <SecondaryDescription {...{ text: secondaryDescription[0] }} />
      </section>
    </div>
  )
}
