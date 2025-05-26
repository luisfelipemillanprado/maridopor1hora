import Header from '@/features/home/components/organism/Header'
import clsx from 'clsx'
import sd from '@/utils/data/Static'

/**
 * @description - Home page component. Renders the main layout of the home page,
 * including the header, main content, and footer. Utilizes the `clsx` utility for
 * conditional class names.
 */
export default function Home() {
  return (
    <div className={clsx(`w-full h-full`)}>
      <header className={clsx(`w-full h-auto`)}>
        <Header {...{ stickys: sd.home.header.stickys, videoUrls: sd.home.header.slider.quickLookCars }} />
      </header>
      <main className={clsx(`w-full horizontal`)}> Aqui el main...... </main>
      <footer className={clsx(`w-full horizontal`)}> Aqui el footer..... </footer>
    </div>
  )
}
