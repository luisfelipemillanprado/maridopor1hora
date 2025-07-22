import NavBar from '@/common/gcomponents/navbar/components/organisms/NavBar'
import Main from '@/features/dashboard/components/organisms/Main'
import clsx from 'clsx'
import sd from '@/utils/data/Static'

export default function MainDashboard() {
  return (
    <div className={clsx(`relative h-full w-full`)}>
      <header className={clsx(`horizontal relative h-auto w-full`)}>
        <NavBar {...{ navbar: sd.navbar }} />
      </header>
      <main className={clsx(`relative mt-3 w-full`)}>
        <Main
          {...{
            mainTitles: sd.dashboard.mainTitles,
            searchService: sd.dashboard.searchService,
            typesOfServices: sd.dashboard.typesOfServices,
            secondaryTitles: sd.dashboard.secondaryTitles,
            mostBookedServices: sd.dashboard.mostBookedServices,
            detailsServices: sd.dashboard.detailsServices,
          }}
        />
      </main>
    </div>
  )
}
