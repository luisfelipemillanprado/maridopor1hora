'use client'
import { Tabs, Tab } from '@heroui/react'
import { MapPinIcon, MagnifyingGlassIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
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
    texts: string[]
  }
}) {
  const { multipleLinkButtons } = props
  return (
    <div className={clsx(`horizontal w-full justify-center`)}>
      <Tabs
        key={multipleLinkButtons.variants.key}
        aria-label={`Principal option`}
        className={clsx(``)}
        color={`${multipleLinkButtons.variants.color as 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'}`}
        radius={'full'}
        size={'sm'}
      >
        <Tab
          key={multipleLinkButtons.texts[0]}
          title={
            <div className={clsx(`flex items-center space-x-1.5`)}>
              <MapPinIcon className={clsx(`h-4 w-4`)} />
              <span>{multipleLinkButtons.texts[0]}</span>
            </div>
          }
        />
        <Tab
          key={multipleLinkButtons.texts[1]}
          title={
            <div className={clsx(`flex items-center space-x-1.5`)}>
              <WrenchScrewdriverIcon className={clsx(`h-4 w-4`)} />
              <span>{multipleLinkButtons.texts[1]}</span>
            </div>
          }
        />
        <Tab
          key={multipleLinkButtons.texts[2]}
          title={
            <div className={clsx(`flex items-center space-x-1.5`)}>
              <MagnifyingGlassIcon className={clsx(`h-4 w-4`)} />
              <span>{multipleLinkButtons.texts[2]}</span>
            </div>
          }
        />
      </Tabs>
    </div>
  )
}
