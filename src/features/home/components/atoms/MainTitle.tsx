import clsx from 'clsx'

/**
 * @description - Renders the main title for the home feature, displaying two parts of the title.
 * @param props - The component props.
 * @param props.mainTitle - An object containing the parts of the main title.
 * @param props.mainTitle.first - The first part of the title to display.
 * @param props.mainTitle.second - The second part of the title to display.
 * @param props.mainTitle.third - The third part of the title (currently unused).
 */
export default function MainTitle(props: { mainTitle: { second: string } }) {
  const { second } = props.mainTitle
  return (
    <div
      className={clsx(
        `vertical h-auto w-full items-center justify-center gap-y-3 px-5`,
        `2xl:px-6`
      )}
    >
      <h1
        className={clsx(
          `text-default h-auto w-auto text-center text-[1.6875rem] font-extrabold text-shadow-2xs`,
          `leading-9`,
          `2xl:text-3xl`
        )}
      >
        {second}
      </h1>
    </div>
  )
}
