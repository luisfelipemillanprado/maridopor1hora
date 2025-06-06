'use client'
import InformationLink from '@/common/gcomponents/footer/components/atoms/InformationLink'
import clsx from 'clsx'

/**
 * @returns
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
