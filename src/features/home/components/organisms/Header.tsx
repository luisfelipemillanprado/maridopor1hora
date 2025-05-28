import QuickLookCars from '@/features/home/components/molecules/QuickLookCars'
// import Sticky from '@/features/home/components/atoms/Sticky'
import SpeedPeekCars from '@/features/home/components/molecules/SpeedPeekCars'
import Logo from '@/common/components/logo/Logo'
import clsx from 'clsx'

/**
 * @description - HomeHeader component displays the header section for the home page.
 * @param props - The properties for the HomeHeader component.
 * @param props.stickys - An array of sticky items to display.
 * @param props.videoUrls - An array of video URLs to display in the QuickLookCars component.
 */
export default function Header(props: {
  videoUrls: { videoUrl: string; key: number }[]
  imageUrls: { imageUrl: string; key: number }[]
}) {
  const { imageUrls, videoUrls } = props
  return (
    <div className={clsx(`horizontal h-auto w-full p-1`)}>
      <div className={clsx(`relative h-auto w-full`)}>
        <QuickLookCars {...{ videoUrls }} />
        <div className={clsx(`horizontal absolute right-3 bottom-3 left-3 z-10 h-auto w-auto`)}>
          <SpeedPeekCars {...{ imageUrls }} />
        </div>
        <div className={clsx(`horizontal absolute top-4 left-4 z-10 h-auto w-auto`)}>
          <Logo />
        </div>
      </div>
    </div>
  )
}
