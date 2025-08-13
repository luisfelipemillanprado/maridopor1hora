import clsx from 'clsx'

/**
 * @description - Renders the main title for the home feature, displaying two parts of the title.
 * @param props - The component props.
 * @param props.mainTitle - An object containing the parts of the main title.
 * @param props.mainTitle.first - The first part of the title to display.
 * @param props.mainTitle.second - The second part of the title to display.
 */
export default function MainTitle(props: { mainTitle: { first: string; second: string } }) {
  const { first, second } = props.mainTitle
  return (
    <div className={clsx(`absolute top-[17%] right-0 left-0 z-10 h-auto w-full`, `xl:top-[16%]`)}>
      <div className={clsx(`horizontal h-auto w-full items-center justify-center gap-y-3 px-4`, `2xl:px-3`)}>
        <h1
          className={clsx(
            `h-auto w-auto text-[1.6875rem] leading-9 font-bold text-shadow-lg`,
            `text-default-50 text-center`,
            `3xl:text-[2rem] 3xl:px-10 xl:text-[1.8125rem] 2xl:text-[1.875rem]`
          )}
          title={`${first} ${second}`}
        >
          {first}
          <span className={clsx(`text-content9 ml-2`)}>{second}</span>
        </h1>
      </div>
    </div>
  )
}
