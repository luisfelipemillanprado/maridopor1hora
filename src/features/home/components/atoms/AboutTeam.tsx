import clsx from 'clsx'

/**
 * @description - Renders a team information section with a highlighted title and two lines of descriptive text.
 * @param props - The component props.
 * @param props.firstText - The main heading text to display with a gradient style.
 * @param props.secondText - An array of two strings to display as separate lines below the heading.
 */
export default function AboutTeam(props: { firstText: string; secondText: string[] }) {
  const { firstText, secondText } = props
  return (
    <div className={clsx(`vertical h-auto w-full items-center gap-y-2.5`)}>
      <h4
        className={clsx(
          `from-warning to-content5 via-content6 bg-gradient-to-tr bg-clip-text text-xl font-extrabold text-transparent`,
          `2xl:text-[1.3125rem]`
        )}
      >
        {firstText}
      </h4>
      <p className={clsx(`vertical text-default-800 text-medium text-center`, `2xl:text-[1.0625rem]`)}>
        <span className={clsx(`h-auto w-auto`)}>{secondText[0]}</span>
        <span className={clsx(`h-auto w-auto`)}>{secondText[1]}</span>
      </p>
    </div>
  )
}
