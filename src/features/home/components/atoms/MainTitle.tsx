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
    <div
      className={clsx(`absolute top-[17%] right-0 left-0 z-10 h-auto w-full`, `4xl:top-[11%] xl:top-[16%]`)}
    >
      <div className={clsx(`horizontal h-auto w-full items-center justify-center gap-y-3 px-4`, `2xl:px-3`)}>
        <h1
          className={clsx(
            `text-center text-[1.75rem] leading-9 font-bold text-shadow-lg`,
            `3xl:text-[2.3125rem] 3xl:px-7 3xl:leading-12 4xl:text-[3.375rem] 4xl:px-20 4xl:leading-[4.375rem] xl:text-[1.8125rem] 2xl:text-[1.875rem]`
          )}
          title={`${first} ${second}`}
        >
          <span className={clsx(`text-default-50`)}>{first}</span>
          <span className={clsx(`text-content9 ml-2`, `4xl:ml-4`)}>{second}</span>
        </h1>
      </div>
    </div>
  )
}
