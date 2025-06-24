import CompanyInformation from '@/common/gcomponents/footer/components/molecules/CompanyInformation'
import OtherLinks from '@/common/gcomponents/footer/components/molecules/OtherLinks'
import OurTeam from '@/common/gcomponents/footer/components/molecules/OurTeam'
import SocialNetworks from '@/common/gcomponents/footer/components/molecules/SocialNetworks'
import SecondaryDescription from '@/common/gcomponents/footer/components/molecules/SecondaryDescription'
import ContactUs from '@/common/gcomponents/footer/components/molecules/ContactUs'
import TermsConditions from '@/common/gcomponents/footer/components/molecules/TermsConditions'
import clsx from 'clsx'

/**
 * @description - Renders the main Footer component for the application.
 * @param props - The properties for the Footer component.
 * @param props.companyInformation - Object containing an array of company information links.
 * @param props.companyInformation.links - Array of link objects with `href`, `text`, and `key`.
 * @param props.ourTeam - Object containing an array of team member information.
 * @param props.ourTeam.members - Array of member objects with `imageUrl`, `name`, and `key`.
 * @param props.socialNetworks - Array of social network objects with `url`, `icon`, `name`, and `key`.
 * @param props.fourthTitle - Array of objects with `text1` and `text2` for section titles.
 * @param props.secondaryDescription - Array of strings for secondary description content.
 * @param props.contactUs - Array of contact objects with `icon`, `name`, `href`, and `key`.
 * @param props.termsConditions - Object containing the terms and conditions text.
 * @param props.otherlinks - Object containing additional link sections.
 * @param props.otherlinks.titles - Array of section titles.
 * @param props.otherlinks.links - Array of link objects with `text`, `href`, and `key`.
 */
export default function Footer(props: {
  companyInformation: { links: { href: string; text: string; key: number }[] }
  ourTeam: { members: { imageUrl: string; name: string; key: number }[] }
  socialNetworks: { url: string; icon: string; name: string; key: number }[]
  fourthTitle: { text1: string; text2: string }[]
  secondaryDescription: string[]
  contactUs: { icon: string; name: string; href: string; key: number }[]
  termsConditions: { text: string }
  otherlinks: {
    titles: string[]
    links: { text: string; href: string; key: number }[]
  }
}) {
  const {
    companyInformation,
    ourTeam,
    fourthTitle,
    socialNetworks,
    secondaryDescription,
    contactUs,
    termsConditions,
    otherlinks,
  } = props
  return (
    <div
      className={clsx(
        `vertical bg-content5 h-auto w-full !justify-start gap-y-8 rounded-t-3xl pt-7`
      )}
    >
      <section aria-label={`company-information`} className={clsx(`h-auto w-full px-4`)}>
        <CompanyInformation {...{ companyInformation }} />
      </section>
      <div className={clsx(`horizontal h-auto w-full justify-between`, `2xl:px-6`)}>
        <section
          aria-label={`company-links-information`}
          className={clsx(`hidden h-auto w-auto`, `3xl:flex 3xl:flex-row`)}
        >
          <OtherLinks {...{ titles: otherlinks.titles, links: otherlinks.links }} />
        </section>
        <div
          className={clsx(
            `vertical h-auto w-full !justify-start gap-y-9`,
            `3xl:w-auto 3xl:h-[20.8125rem]`
          )}
        >
          <section
            aria-label={`company-team`}
            className={clsx(`horizontal h-auto w-full justify-center px-4`, `3xl:w-auto`)}
          >
            <OurTeam {...{ ourTeam, text1: fourthTitle[0].text1, text2: fourthTitle[0].text2 }} />
          </section>
          <section
            aria-label={`company-social-networks`}
            className={clsx(`horizontal h-auto w-full justify-center px-4`, `3xl:w-auto`)}
          >
            <SocialNetworks {...{ socialNetworks, text1: fourthTitle[1].text1 }} />
          </section>
        </div>
      </div>
      <section
        aria-label={`company-secondary-description`}
        className={clsx(`hidden h-auto w-full justify-center px-4`)}
      >
        <SecondaryDescription {...{ text: secondaryDescription[0] }} />
      </section>
      <section
        aria-label={`company-contact-us`}
        className={clsx(`horizontal h-auto w-full justify-center px-4`)}
      >
        <ContactUs {...{ contactUs }} />
      </section>
      <section
        aria-label={`company-terms-conditions`}
        className={clsx(
          `horizontal border-default-600 h-auto w-full justify-center border-t-1 p-4`
        )}
      >
        <TermsConditions {...{ termsConditions }} />
      </section>
    </div>
  )
}
