import Header from '@/features/home/components/organisms/Header'
//import Avatars from '@/common/gcomponents/navbar/components/molecules/Avatar'
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
            imageUrls: sd.home.header.sliders.speedPeekCars,
            mainTitle: sd.home.header.mainTitle,
            multipleLinkButtons: sd.home.header.multipleLinkButtons,
            avatar: sd.navbar.avatar,
            logo: sd.navbar.logo,
          }}
        />
      </header>
      <main className={clsx(`horizontal mt-4 w-full pl-24`)}>
        {/*<Avatars
          {...{ imageUrl: sd.avatar.imageUrl, content: sd.avatar.content, items: sd.avatar.items }}
        /> */}
        Aqui el main......
      </main>
      <footer className={clsx(`horizontal w-full`)}> Aqui el footer..... </footer>
    </div>
  )
}
