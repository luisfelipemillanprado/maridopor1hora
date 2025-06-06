'use client'
import Contact from '@/common/gcomponents/footer/components/atoms/Contact'
import clsx from 'clsx'

/**
 * @description - Renders a list of contact options using the provided contact information.
 * @param props - The component props.
 * @param props.contactUs - An array of contact objects, each containing:
 *   - icon: The icon name or path to display for the contact method.
 *   - name: The display name of the contact method.
 *   - href: The URL or link for the contact method.
 *   - key: A unique key for each contact item.
 */
export default function ContactUs(props: {
  contactUs: { icon: string; name: string; href: string; key: number }[]
}) {
  const { contactUs } = props
  return (
    <div className={clsx(`vertical h-auto w-full justify-center gap-y-0.5`)}>
      {contactUs.map((contact) => (
        <Contact
          key={contact.key}
          {...{ icon: contact.icon, href: contact.href, name: contact.name }}
        />
      ))}
    </div>
  )
}
