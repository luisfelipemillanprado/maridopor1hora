import clsx from 'clsx'

/**
 * @description - Renders a sticky main title composed of two parts.
 * @param props - The component props.
 * @param props.mainTitle - An object containing the title parts.
 * @param props.mainTitle.first - The first part of the main title.
 * @param props.mainTitle.second - The second part of the main title.
 * @param props.mainTitle.third - The third part of the main title (currently unused).
 */
export default function Sticky(props: {
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
      <span>{first}</span>
      <span>{second}</span>
    </h1>
  )
}
