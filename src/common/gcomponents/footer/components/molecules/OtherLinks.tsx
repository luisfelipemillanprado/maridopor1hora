'use client'
import { Link } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Renders a section of other links, typically used in a footer component.
 * @param props - The component props.
 * @param props.titles - An array of section titles (currently unused).
 * @param props.links - An array of link objects to display, each containing:
 *   - text: The display text for the link.
 *   - href: The URL the link points to.
 *   - key: A unique key for the link.
 */
export default function OtherLinks(props: {
  titles: string[]
  links: { text: string; href: string; key: number }[]
}) {
  const { links, titles } = props
  return (
    <div className={clsx(`vertical items-center`)}>
      <div className={clsx(`horizontal mb-2 h-auto w-full justify-between`)}>
        <div className={clsx(`horizontal justify-start`)}>
          <span className={clsx(`text-default-50 text-[1.1875rem] font-bold`)}>{titles[0]}</span>
        </div>
        <div className={clsx(`horizontal justify-start`)}>
          <span className={clsx(`text-default-50 pr-[1.1875rem] text-[1.1875rem] font-bold`)}>
            {titles[1]}
          </span>
        </div>
        <div className={clsx(`horizontal justify-start`)}>
          <span className={clsx(`text-default-50 pr-[4.1875rem] text-[1.1875rem] font-bold`)}>
            {titles[2]}
          </span>
        </div>
      </div>
      <div className={clsx(`grid grid-cols-3 grid-rows-5 gap-x-5 gap-y-3.5`)}>
        {links.map((item, index) => (
          <Link key={index} isExternal href={`#`}>
            <span className={clsx(`text-default-50 text-[1.0625rem]`)}>{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
