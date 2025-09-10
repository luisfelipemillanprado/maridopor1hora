'use client'
import SocialNetwork from '@/common/footer/components/atoms/SocialNetwork'
import clsx from 'clsx'

/**
 * @description - Renders a group of social network icons with a descriptive text.
 * @param props - The component props.
 * @param props.text1 - The text to display above the social network icons.
 * @param props.socialNetworks - An array of social network objects, each containing:
 *   - `url`: The URL of the social network.
 *   - `icon`: The icon name or path for the social network.
 *   - `name`: The display name of the social network.
 *   - `key`: A unique key for the social network item.
 */
export default function SocialNetworks(props: {
  text1: string
  socialNetworks: { url: string; icon: string; name: string; key: number }[]
}) {
  const { text1, socialNetworks } = props
  return (
    <div className={clsx(`vertical h-auto w-full gap-y-4`)}>
      <div className={clsx(`vertical w-full items-center gap-y-2`)}>
        <span className={clsx(`text-default-50 text-[1.1875rem]`, `xl:text-xl`)}>{text1}</span>
      </div>
      <div className={clsx(`horizontal h-auto w-full justify-center gap-x-3`)}>
        {socialNetworks.map((item /*, index */) => (
          <SocialNetwork key={item.key} {...{ icon: item.icon, href: item.url }} />
        ))}
      </div>
    </div>
  )
}
