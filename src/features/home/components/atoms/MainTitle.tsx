import clsx from 'clsx'

/**
 * @description - Renders the main title for the home feature, displaying two parts of the title.
 * @param props - The component props.
 * @param props.mainTitle - An object containing the parts of the main title.
 * @param props.mainTitle.first - The first part of the title to display.
 * @param props.mainTitle.second - The second part of the title to display.
 * @param props.mainTitle.third - The third part of the title (currently unused).
 */
export default function MainTitle(props: {
  mainTitle: { first: string; second: string; third: string }
}) {
  const { first, second /*, third */ } = props.mainTitle
  return (
    <h1
      className={clsx(
        `vertical h-auto w-auto text-2xl font-bold text-white text-shadow-lg/30`,
        `$`
      )}
    >
      <span className={clsx(``)}>{first}</span>
      <span className={clsx(`ml-2.5`)}>{second}</span>
    </h1>
  )
}
