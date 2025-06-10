import clsx from 'clsx'

/**
 * @description - Renders a section displaying information about the team.
 * @param props - The component props.
 * @param props.secondText - An array of strings to be displayed in separate spans.
 */
export default function AboutTeam(props: { secondText: string[] }) {
  const { secondText } = props
  return (
    <div className={clsx(`horizontal h-auto w-full justify-center`)}>
      <p className={clsx(`vertical text-default-700 text-medium text-center`)}>
        <span className={clsx(`h-auto w-auto`)}>{secondText[0]}</span>
        <span className={clsx(`h-auto w-auto`)}>{secondText[1]}</span>
      </p>
    </div>
  )
}
