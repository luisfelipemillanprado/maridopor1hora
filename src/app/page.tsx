import Header from '@/features/home/components/organisms/Header'
import Main from '@/features/home/components/organisms/Main'
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
            peekServices: sd.home.header.sliders.peekServices,
            mainTitle: sd.home.header.mainTitle,
            linksButtons: sd.home.header.linksButtons,
            avatar: sd.navbar.avatar,
            logo: sd.navbar.logo,
            signUpButton: sd.navbar.signUpButton,
            metrics: sd.home.header.metrics,
          }}
        />
      </header>
      <main className={clsx(`mt-3 h-auto w-full`)}>
        <Main
          {...{
            trustBadge: sd.home.main.trustBadge,
            secondaryTitles: sd.home.main.secondaryTitles,
            finishedWorks: sd.home.main.finishedWorks,
            allOurServices: sd.home.main.allOurServices,
          }}
        />
      </main>
      <footer className={clsx(`horizontal w-full`)}> Aqui el footer..... </footer>
    </div>
  )
}
