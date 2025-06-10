import clsx from 'clsx'

/**
 * @description - Renders a section displaying information about the team.
 * @param props - The component props.
 * @param props.secondText - An array of strings to be displayed in separate spans.
 */
export default function AboutTeam(props: { firstText: string; secondText: string[] }) {
  const { firstText, secondText } = props
  return (
    <div className={clsx(`vertical h-auto w-full items-center gap-y-2.5`)}>
      <h4
        className={clsx(
          `from-warning to-content5 via-content6 bg-gradient-to-tr bg-clip-text text-xl font-extrabold text-transparent`
        )}
      >
        {firstText}
      </h4>
      <p className={clsx(`vertical text-default-700 text-medium text-center`)}>
        <span className={clsx(`h-auto w-auto`)}>{secondText[0]}</span>
        <span className={clsx(`h-auto w-auto`)}>{secondText[1]}</span>
      </p>
    </div>
  )
}
