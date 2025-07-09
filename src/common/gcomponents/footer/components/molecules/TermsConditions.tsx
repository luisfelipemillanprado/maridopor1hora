import clsx from 'clsx'

/**
 * @description - Renders the Terms and Conditions text inside a styled container.
 * @param props - The component props.
 * @param props.termsConditions - An object containing the terms and conditions text.
 * @param props.termsConditions.text - The string to display as the terms and conditions.
 */
export default function TermsConditions(props: { termsConditions: { text: string } }) {
  const { termsConditions } = props
  return (
    <div className={clsx(`horizontal h-auto w-full justify-center`)}>
      <span className={clsx(`text-default-50 text-medium text-center`, `xl:text-[1.0625rem]`)}>
        {termsConditions.text}
      </span>
    </div>
  )
}
