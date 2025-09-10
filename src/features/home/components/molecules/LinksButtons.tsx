'use client'
import { Tabs, Tab } from '@heroui/react'
import LinkButtonIcons from '@/features/home/components/atoms/LinkButtonIcons'
import clsx from 'clsx'

/**
 * @description - Renders a group of tabbed buttons based on the provided variants and texts.
 * @param props - The component props.
 * @param props.multipleLinkButtons - Object containing the configuration for the buttons.
 * @param props.multipleLinkButtons.variants - Array of variant objects, each specifying a color and a unique key.
 * @param props.multipleLinkButtons.texts - Array of strings representing the text for each button.
 */
export default function LinksButtons(props: {
  linksButtons: {
    variants: {
      color: string
      key: number
    }
    texts: { text: string; icon: string; key: number }[]
  }
}) {
  const { linksButtons } = props
  const containerClasses = {
    base: 'absolute top-[56%] right-0 left-0 z-10 h-auto w-full',
    breakpoints: '3xl:top-[42.5%] 4xl:top-[41.9%]',
  }
  const wrapperClasses = {
    base: 'horizontal w-full justify-center',
  }
  const tabsClasses = {
    base: '[&>div]:bg-content7] drop-shadow-lg/30 [&>div]:gap-0',
    breakpoints: '3xl:[&>div]:gap-x-1 4xl:[&>div]:h-14 4xl:[&>div]:gap-x-16.5',
  }
  const tabClasses = {
    base: 'relative px-2.5 py-[1.0625rem]',
    conditions: '3xl:flex 3xl:flex-row hidden',
    before: `4xl:before:content-[''] 4xl:before:absolute 4xl:before:-right-8 4xl:before:top-1/2 4xl:before:-translate-y-1/2 4xl:before:w-[0.0625rem] 4xl:before:h-5 4xl:before:bg-content4`,
    breakpoints: '3xl:py-[1.1875rem] 3xl:px-3.5 4xl:py-6 xl:px-[0.5625rem]',
  }
  const titleContainerClasses = {
    base: 'horizontal items-center gap-x-1 pl-0',
    conditions: 'hidden 3xl:flex 3xl:flex-row',
    breakpoints: '3xl:gap-x-2.5 3xl:pr-1 4xl:gap-x-3',
  }
  const titleClasses = {
    base: 'text-default-900 text-[0.9375rem] pt-0',
    conditions: '3xl:pt-0.5 4xl:pt-1.5',
    breakpoints: '3xl:text-large 4xl:text-[1.3125rem] xl:text-[1.0625rem]',
  }
  return (
    <div className={clsx(containerClasses.base, containerClasses.breakpoints)}>
      <div className={clsx(wrapperClasses.base)}>
        <Tabs
          key={linksButtons.variants.key}
          aria-label={`principal-options`}
          className={clsx(tabsClasses.base, tabsClasses.breakpoints)}
          color={`${linksButtons.variants.color as 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'}`}
          variant={`solid`}
          radius={`full`}
          size={`md`}
        >
          {linksButtons.texts.map((item, index) => (
            <Tab
              key={item.key}
              className={clsx(
                index === 3 ? tabClasses.conditions : [tabClasses.base, tabClasses.breakpoints],
                tabClasses.before
              )}
              title={
                <div
                  className={clsx(
                    index === 3 ? titleContainerClasses.conditions : titleContainerClasses.base,
                    titleContainerClasses.breakpoints
                  )}
                >
                  <LinkButtonIcons {...{ icon: item.icon }} />
                  <span
                    className={clsx(
                      index === 3 ? titleClasses.conditions : titleClasses.base,
                      titleClasses.breakpoints
                    )}
                  >
                    {item.text}
                  </span>
                </div>
              }
            />
          ))}
        </Tabs>
      </div>
    </div>
  )
}
