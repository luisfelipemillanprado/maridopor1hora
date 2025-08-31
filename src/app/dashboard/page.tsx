import NavBar from '@/common/gcomponents/navbar/components/organisms/NavBar'
import Main from '@/features/dashboard/components/organisms/Main'
import Footer from '@/common/gcomponents/footer/components/organisms/Footer'
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
      <footer className={clsx(`relative mt-8 w-full`)}>
        <Footer
          {...{
            companyInformation: sd.footer.companyInformation,
            ourTeam: sd.footer.ourTeam,
            socialNetworks: sd.footer.socialNetworks,
            allowedCards: sd.footer.allowedCards,
            fourthTitle: sd.footer.fourthTitle,
            secondaryDescription: sd.footer.secondaryDescription,
            contactUs: sd.footer.contactUs,
            termsConditions: sd.footer.termsConditions,
            otherlinks: sd.footer.otherLinks,
          }}
        />
      </footer>
    </div>
  )
}
