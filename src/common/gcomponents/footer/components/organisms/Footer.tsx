import CompanyInformation from '@/common/gcomponents/footer/components/molecules/CompanyInformation'
import OurTeam from '@/common/gcomponents/footer/components/molecules/OurTeam'
import SocialNetworks from '@/common/gcomponents/footer/components/molecules/SocialNetworks'
import SecondaryDescription from '@/common/gcomponents/footer/components/molecules/SecondaryDescription'
import ContactUs from '@/common/gcomponents/footer/components/molecules/ContactUs'
import TermsConditions from '@/common/gcomponents/footer/components/molecules/TermsConditions'
import clsx from 'clsx'

/**
 * @description - Footer component that displays various sections such as company information, team members,
 * social networks, secondary description, contact information, and terms & conditions.
 * @param props - The properties for the Footer component.
 * @param props.companyInformation - Contains an array of company links with `href`, `text`, and `key`.
 * @param props.ourTeam - Contains an array of team members with `imageUrl`, `name`, and `key`.
 * @param props.socialNetworks - Contains an array of social network objects with `url`, `icon`, `name`, and `key`.
 * @param props.fourthTitle - Array of objects for section titles, each with `text1` and `text2`.
 * @param props.secondaryDescription - Array of secondary description strings.
 * @param props.contactUs - Array of contact information with `icon`, `name`, `href`, and `key`.
 * @param props.termsConditions - Object containing the terms and conditions text.
 */
export default function Footer(props: {
  companyInformation: { links: { href: string; text: string; key: number }[] }
  ourTeam: { members: { imageUrl: string; name: string; key: number }[] }
  socialNetworks: { url: string; icon: string; name: string; key: number }[]
  fourthTitle: { text1: string; text2: string }[]
  secondaryDescription: string[]
  contactUs: { icon: string; name: string; href: string; key: number }[]
  termsConditions: { text: string }
}) {
  const {
    companyInformation,
    ourTeam,
    fourthTitle,
    socialNetworks,
    secondaryDescription,
    contactUs,
    termsConditions,
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
      <div className={clsx(`vertical h-auto w-full !justify-start gap-y-9`)}>
        <section
          aria-label={`company-team`}
          className={clsx(`horizontal h-auto w-full justify-center px-4`)}
        >
          <OurTeam {...{ ourTeam, text1: fourthTitle[0].text1, text2: fourthTitle[0].text2 }} />
        </section>
        <section
          aria-label={`company-social-networks`}
          className={clsx(`horizontal h-auto w-full justify-center px-4`)}
        >
          <SocialNetworks {...{ socialNetworks, text1: fourthTitle[1].text1 }} />
        </section>
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
