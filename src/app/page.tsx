import Header from '@/features/home/components/organisms/Header'
import Prueba from '@/features/home/components/molecules/Prueba'
import clsx from 'clsx'
import sd from '@/utils/data/Static'

/**
 * @description - Home page component. Renders the main layout of the home page,
 * including the header, main content, and footer. Utilizes the `clsx` utility for
 * conditional class names.
 */
export default function Home() {
  return (
    <div className={clsx(`h-full w-full`)}>
      <header className={clsx(`h-auto w-full`)}>
        <Header
          {...{
            stickys: sd.home.header.stickys,
            videoUrls: sd.home.header.sliders.quickLookCars,
            imageUrls: sd.home.header.sliders.speedPeekCars,
          }}
        />
      </header>
      <main className={clsx(`horizontal w-full`)}>
        <Prueba />
      </main>
      <footer className={clsx(`horizontal w-full`)}> Aqui el footer..... </footer>
    </div>
  )
}
