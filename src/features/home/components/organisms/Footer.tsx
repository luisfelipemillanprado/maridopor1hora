import Footer from '@/common/gcomponents/footer/components/organisms/Footer'

/**
 * @description - Renders the main Footer component for the application.
 * @param props - The properties required to render the footer.
 * @param props.companyInformation - Contains an array of company information links.
 * @param props.ourTeam - Contains an array of team member objects with image, name, and key.
 * @param props.socialNetworks - Contains an array of social network objects with URL, icon, name, and key.
 * @param props.fourthTitle - Contains an array of objects with two text fields for the fourth section title.
 * @param props.secondaryDescription - Contains an array of secondary description strings.
 * @param props.contactUs - Contains an array of contact information objects with icon, name, href, and key.
 * @param props.termsConditions - Contains the terms and conditions text.
 */
export default function HFooter(props: {
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
    <>
      <Footer
        {...{
          companyInformation,
          ourTeam,
          fourthTitle,
          socialNetworks,
          secondaryDescription,
          contactUs,
          termsConditions,
          otherlinks,
        }}
      />
    </>
  )
}
