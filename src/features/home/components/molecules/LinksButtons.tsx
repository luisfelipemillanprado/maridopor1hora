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
  return (
    <div
      className={clsx(
        `absolute top-[56%] right-0 left-0 z-10 h-auto w-full`,
        `3xl:top-[42.5%] 4xl:top-[41.9%]`
      )}
    >
      <div className={clsx(`horizontal w-full justify-center`)}>
        <Tabs
          key={linksButtons.variants.key}
          aria-label={`principal-options`}
          className={clsx(
            `[&>div]:bg-content7] drop-shadow-lg/30 [&>div]:gap-0`,
            `3xl:[&>div]:gap-x-1 4xl:[&>div]:h-14 4xl:[&>div]:gap-x-16.5`
          )}
          color={`${linksButtons.variants.color as 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'}`}
          variant={`solid`}
          radius={`full`}
          size={`md`}
        >
          {linksButtons.texts.map((item, index) => (
            <Tab
              key={item.key}
              className={clsx(
                `${index == 3 ? 'hidden' : 'relative px-2.5 py-[1.0625rem]'}`,
                `${index == 3 ? '3xl:flex 3xl:flex-row' : "4xl:before:content-[''] 4xl:before:absolute 4xl:before:-right-8 4xl:before:top-1/2 4xl:before:-translate-y-1/2 4xl:before:w-0.5 4xl:before:h-5 4xl:before:bg-content3"} 3xl:py-[1.1875rem] 3xl:px-3.5 4xl:py-6 xl:px-[0.5625rem]`
              )}
              title={
                <div
                  className={clsx(
                    `${index == 3 ? 'hidden' : 'horizontal items-center gap-x-1 pl-0'}`,
                    `${index == 3 ? '3xl:flex 3xl:flex-row' : ''} 3xl:gap-x-2.5 3xl:pr-1 4xl:gap-x-3`
                  )}
                >
                  <LinkButtonIcons {...{ icon: item.icon }} />
                  <span
                    className={clsx(
                      `text-default-900 text-[0.9375rem]`,
                      `${index == 3 ? '3xl:pt-0.5 4xl:pt-1.5' : 'pt-0'}`,
                      `3xl:text-large 4xl:text-[1.3125rem] xl:text-[1.0625rem]`
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
