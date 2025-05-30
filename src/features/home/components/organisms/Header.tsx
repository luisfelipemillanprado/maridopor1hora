import SpeedPeekServices from '@/features/home/components/molecules/SpeedPeekServices'
import MainTitle from '@/features/home/components/atoms/MainTitle'
import MultipleLinkButtons from '@/features/home/components/molecules/MultipleLinkButtons'
import NavBar from '@/features/home/components/molecules/NavBar'
import clsx from 'clsx'

// --
export default function Header(props: {
  imageUrls: { imageUrl: string; key: number }[]
  mainTitle: { first: string; second: string; third: string }
  multipleLinkButtons: {
    variants: {
      color: string
      key: number
    }
    texts: string[]
  }
  avatar: {
    imageUrl: string
    content: string
    items: { title: string; key: string; description: string; shortcut: string }[]
  }
  logo: { iconUrl: string }
}) {
  const { imageUrls, mainTitle, multipleLinkButtons, avatar, logo } = props
  return (
    <div className={clsx(`horizontal h-auto w-full p-1`)}>
      <div className={clsx(`relative h-auto w-full overflow-hidden`)}>
        <SpeedPeekServices {...{ imageUrls }} />
        <div className={clsx(`horizontal absolute top-0 right-0 left-0 z-10 h-auto w-full`)}>
          <NavBar {...{ avatar, logo }} />
        </div>
        <div className={clsx(`horizontal absolute top-[32%] z-10 h-auto w-full justify-center`)}>
          <MainTitle {...{ mainTitle }} />
        </div>
        <div className={clsx(`horizontal absolute top-[60%] z-10 h-auto w-full justify-center`)}>
          <MultipleLinkButtons {...{ multipleLinkButtons }} />
        </div>
      </div>
    </div>
  )
}
