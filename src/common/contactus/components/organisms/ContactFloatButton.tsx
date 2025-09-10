import ContactButton from '@/common/contactus/components/molecules/ContactButton'
import clsx from 'clsx'

/**
 * @description - A floating contact button component that displays a button fixed to the bottom-right corner of the screen.
 * @param props - The props object.
 * @param props.contactFloatButton - The configuration for the contact button.
 * @param props.contactFloatButton.href - The hyperlink reference for the button action.
 */
export default function ContactFloatButton(props: {
  contactFloatButton: {
    href: string
  }
}) {
  const { contactFloatButton } = props
  return (
    <div
      className={clsx(
        `horizontal fixed right-4 bottom-4 z-50 h-auto w-auto justify-center`,
        `4xl:right-9 4xl:bottom-8`
      )}
    >
      <ContactButton {...{ href: contactFloatButton.href }} />
    </div>
  )
}
