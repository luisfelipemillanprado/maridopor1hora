import QuickLookCars from '@/features/home/components/molecule/QuickLookCars'
import Sticky from '@/features/home/components/atom/Sticky'
import Logo from '@/components/logo/Logo'
import clsx from 'clsx'

/**
 * @description - HomeHeader component displays the header section for the home page.
 * @param props - The properties for the HomeHeader component.
 * @param props.stickys - An array of sticky items to display.
 * @param props.videoUrls - An array of video URLs to display in the QuickLookCars component.
 */
export default function HomeHeader(props: {
  stickys: { icon: string; change: boolean; key: number }[]
  videoUrls: { videoUrl: string; key: number }[]
}) {
  const { stickys, videoUrls } = props
  return (
    <div className={clsx(`w-full h-auto horizontal p-1`)}>
      <div className={clsx(`w-full h-auto relative`)}>
        <QuickLookCars {...{ videoUrls }} />
        <div className={clsx(`w-auto h-auto absolute top-4 right-4 z-10 vertical gap-3`)}>
          {stickys.map((sticky) => {
            return <Sticky key={sticky.key} {...{ icon: sticky.icon, change: sticky.change }} />
          })}
        </div>
        <div className={clsx(`w-auto h-auto absolute top-4 left-4 z-10 horizontal`)}>
          <Logo />
        </div>
      </div>
    </div>
  )
}
