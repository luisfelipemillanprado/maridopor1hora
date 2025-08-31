import Header from '@/features/home/components/organisms/Header'
import Main from '@/features/home/components/organisms/Main'
import Footer from '@/common/gcomponents/footer/components/organisms/Footer'
import clsx from 'clsx'
import sd from '@/utils/data/Static'

/**
 * @description - The main Home page component for the application.
 * This component structures the landing page into three main sections:
 * - Header: Displays the main navigation, title, metrics, and service links.
 * - Main: Contains trust badges, secondary titles, finished works, services, FAQs, team info, navigation links,
 * benefits, testimonials, introduction, and notification signup.
 * - Footer: Shows company information, team, social networks, additional titles/descriptions, contact info, and terms & conditions.
 * All content is dynamically injected via the `sd` object, which provides structured data for each section.
 */
export default function Home() {
  return (
    <div className={clsx(`relative h-full w-full`)}>
      <header className={clsx(`relative h-auto w-full`)}>
        <Header
          {...{
            peekServices: sd.home.header.sliders.peekServices,
            mainTitle: sd.home.header.mainTitle,
            linksButtons: sd.home.header.linksButtons,
            navbar: sd.navbar,
            metrics: sd.home.header.metrics,
            popularServices: sd.home.header.popularServices,
          }}
        />
      </header>
      <main className={clsx(`relative mt-3 w-full`)}>
        <Main
          {...{
            trustBadge: sd.home.main.trustBadge,
            secondaryTitles: sd.home.main.secondaryTitles,
            finishedWorks: sd.home.main.finishedWorks,
            allOurServices: sd.home.main.allOurServices,
            frequentlyAskedQuestions: sd.home.main.frequentlyAskedQuestions,
            joinOurTeam: sd.home.main.joinOurTeam,
            navigationLinks: sd.home.main.navigationLinks,
            benefits: sd.home.main.whyChooseUs.benefits,
            customerTestimonials: sd.home.main.customerTestimonials,
            introduction: sd.home.main.introduction,
            advertisingFlyer: sd.home.main.advertisingFlyer,
            receiveNotifications: sd.home.main.receiveNotifications,
            certifications: sd.home.main.certifications,
            videoTestimonials: sd.home.main.videoTestimonials,
          }}
        />
      </main>
      <footer className={clsx(`relative w-full`)}>
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
