import clsx from 'clsx'

/**
 * @description - Renders the main title for the home feature, displaying two parts of the title.
 * @param props - The component props.
 * @param props.mainTitle - An object containing the parts of the main title.
 * @param props.mainTitle.first - The first part of the title to display.
 * @param props.mainTitle.second - The second part of the title to display.
 * @param props.mainTitle.third - The third part of the title (currently unused).
 */
export default function MainTitle(props: { mainTitle: { first: string; second: string } }) {
  const { first, second } = props.mainTitle
  return (
    <div className={clsx(`vertical w- h-auto items-center justify-center gap-y-2`)}>
      <h1
        className={clsx(
          `text-default-50 h-auto w-auto text-4xl font-extrabold text-shadow-lg`,
          `from-default to-default via-warning bg-gradient-to-tr from-40% via-50% to-60%`,
          `bg-clip-text text-transparent`
        )}
      >
        {first}
      </h1>
      <p className={clsx(`text-default text-medium h-auto w-auto text-center font-bold`)}>
        {second}
      </p>
    </div>
  )
}
