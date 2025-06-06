'use client'
import InformationLink from '@/common/gcomponents/footer/components/atoms/InformationLink'
import clsx from 'clsx'

/**
 * @description - Displays a list of company information links in a horizontal layout.
 * @param props - The component props.
 * @param props.companyInformation - An object containing an array of link objects.
 * @param props.companyInformation.links - The array of link objects to display.
 * @param props.companyInformation.links[].href - The URL for the link.
 * @param props.companyInformation.links[].text - The display text for the link.
 * @param props.companyInformation.links[].key - A unique key for each link.
 */
export default function CompanyInformation(props: {
  companyInformation: { links: { href: string; text: string; key: number }[] }
}) {
  const { companyInformation } = props
  return (
    <div className={clsx(`horizontal h-auto w-full justify-center gap-x-5`)}>
      {companyInformation.links.map((item /*, index */) => (
        <InformationLink key={item.key} {...{ href: item.href, text: item.text }} />
      ))}
    </div>
  )
}
