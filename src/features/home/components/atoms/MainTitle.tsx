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
  const wrapperClasses = {
    base: 'absolute top-[14%] right-0 left-0 z-10 h-auto w-full',
    breakpoints: '4xl:top-[11%]',
  }
  const containerClasses = {
    base: 'horizontal h-auto w-full items-center justify-center gap-y-3 px-4',
    breakpoints: '2xl:px-3',
  }
  const titleClasses = {
    base: 'text-center text-[1.75rem] leading-9 font-bold text-shadow-lg',
    breakpoints:
      '3xl:text-[2.3125rem] 3xl:px-7 3xl:leading-12 4xl:text-5xl 4xl:px-36 4xl:leading-[4.375rem] xl:text-[1.8125rem] 2xl:text-[1.875rem]',
  }
  const titleFirstClasses = {
    base: 'text-default-50',
  }
  const titleSecondaryClasses = {
    base: 'text-content9 ml-2',
    breakpoints: '4xl:ml-4',
  }
  return (
    <div className={clsx(wrapperClasses.base, wrapperClasses.breakpoints)}>
      <div className={clsx(containerClasses.base, containerClasses.breakpoints)}>
        <h1 className={clsx(titleClasses.base, titleClasses.breakpoints)} title={`${first} ${second}`}>
          <span className={clsx(titleFirstClasses.base)}>{first}</span>
          <span className={clsx(titleSecondaryClasses.base, titleSecondaryClasses.breakpoints)}>
            {second}
          </span>
        </h1>
      </div>
    </div>
  )
}
