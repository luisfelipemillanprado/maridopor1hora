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
export default function MultipleLinkButtons(props: {
  multipleLinkButtons: {
    variants: {
      color: string
      key: number
    }
    texts: { text: string; icon: string; key: number }[]
  }
}) {
  const { multipleLinkButtons } = props
  return (
    <div className={clsx(`horizontal w-full justify-center`)}>
      <Tabs
        key={multipleLinkButtons.variants.key}
        aria-label={`Principal option`}
        className={clsx(`drop-shadow-lg/30 [&>div]:gap-0 [&>div]:bg-[#fafbfd]`)}
        color={`${multipleLinkButtons.variants.color as 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'}`}
        variant={`solid`}
        radius={`full`}
        size={`sm`}
      >
        {multipleLinkButtons.texts.map((item /*, index */) => (
          <Tab
            key={item.key}
            title={
              <div className={clsx(`horizontal items-center space-x-1.5`)}>
                <LinkButtonIcons {...{ icon: item.icon }} />
                <span className={clsx(`text-small`)}>{item.text}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  )
}
