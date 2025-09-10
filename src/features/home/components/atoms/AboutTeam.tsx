import clsx from 'clsx'

/**
 * @description - Renders a team information section with a highlighted title and two lines of descriptive text.
 * @param props - The component props.
 * @param props.firstText - The main heading text to display with a gradient style.
 * @param props.secondText - An array of two strings to display as separate lines below the heading.
 */
export default function AboutTeam(props: { firstText: string; secondText: string[] }) {
  const { firstText, secondText } = props
  const containerClasses = { base: 'vertical h-auto w-full items-center gap-y-2.5' }
  const titleClasses = {
    base: 'from-warning to-content5 via-content6 bg-gradient-to-tr bg-clip-text text-xl font-extrabold text-transparent',
    breakpoints: '4xl:text-[1.75rem] 3xl:text-[1.4375rem] xl:text-[1.3125rem]',
  }
  const textClasses = {
    base: 'vertical text-default-800 text-medium text-center',
    breakpoints: '2xl:text-large 4xl:px-4 xl:text-[1.0625rem]',
  }
  const wrapperClasses = {
    base: 'h-auto w-auto',
  }
  return (
    <div className={clsx(containerClasses.base)}>
      <h4 className={clsx(titleClasses.base, titleClasses.breakpoints)}>{firstText}</h4>
      <p className={clsx(textClasses.base, textClasses.breakpoints)}>
        <span className={clsx(wrapperClasses.base)}>{secondText[0]}</span>
        <span className={clsx(wrapperClasses.base)}>{secondText[1]}</span>
      </p>
    </div>
  )
}
