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
    <div className={clsx(`horizontal w-full justify-center`)}>
      <Tabs
        key={linksButtons.variants.key}
        aria-label={`principal-options`}
        className={clsx(`[&>div]:bg-content7] drop-shadow-lg/30 [&>div]:gap-0`, `3xl:[&>div]:gap-x-1`)}
        color={`${linksButtons.variants.color as 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'}`}
        variant={`solid`}
        radius={`full`}
        size={`md`}
      >
        {linksButtons.texts.map((item, index) => (
          <Tab
            key={item.key}
            className={clsx(
              `${index == 3 ? 'hidden' : 'py-[1.0625rem]'}`,
              `${index == 3 ? '3xl:flex 3xl:flex-row' : ''} 3xl:py-[1.1875rem]`
            )}
            title={
              <div
                className={clsx(
                  `${index == 3 ? 'hidden' : 'horizontal items-center space-x-1.5'}`,
                  `${index == 3 ? '3xl:flex 3xl:flex-row' : ''} 3xl:space-x-2 3xl:pr-1`
                )}
              >
                <LinkButtonIcons {...{ icon: item.icon }} />
                <span className={clsx(`text-default-900 text-[0.9375rem]`, `xl:text-medium 3xl:text-large`)}>
                  {item.text}
                </span>
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  )
}
