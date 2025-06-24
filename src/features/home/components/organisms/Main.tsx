import SecondaryTitle from '@/features/home/components/atoms/SecondaryTitle'
import FinishedWorks from '@/features/home/components/molecules/FinishedWorks'
import TrustBadge from '@/features/home/components/molecules/TrustBadge'
import AllOurServices from '@/features/home/components/molecules/AllOurServices'
import NavigationLink from '@/features/home/components/molecules/NavigationLinks'
import FQAs from '@/features/home/components/molecules/FQAs'
import JoinOurTeam from '@/features/home/components/molecules/JoinOurTeam'
import WhyChooseUs from '@/features/home/components/molecules/WhyChooseUs'
import Introduction from '@/features/home/components/atoms/Introduction'
import CustomerTestimonials from '@/features/home/components/molecules/CustomerTestimonials'
import ReceiveNotifications from '@/features/home/components/molecules/ReceiveNotifications'
import Certifications from '@/features/home/components/molecules/Certifications'
import clsx from 'clsx'

/**
 * @description - Main component for the Home feature, responsible for rendering the primary sections of the homepage.
 * @param props - The properties required to render the Main component.
 * @param props.trustBadge - Information for the trust badge section.
 * @param props.secondaryTitles - Titles for each main section.
 * @param props.finishedWorks - Data for the finished works section.
 * @param props.allOurServices - Data for the services section.
 * @param props.frequentlyAskedQuestions - FAQ section data.
 * @param props.benefits - Array of benefit items for the "Why Choose Us" section.
 * @param props.joinOurTeam - Data for the "Join Our Team" section.
 * @param props.navigationLinks - Navigation links for the services section.
 * @param props.customerTestimonials - Customer testimonials section data.
 * @param props.introduction - Introduction section data.
 * @param props.receiveNotifications - Data for the notifications section.
 */
export default function Main(props: {
  trustBadge: {
    slogan: string
    summary: string
    rating: string
    reviews: string
    buttonText: string
  }
  secondaryTitles: {
    title: string[]
  }
  finishedWorks: {
    imageUrls: { imageUrl: string; key: number }[]
    texts: string[]
  }
  allOurServices: {
    imageUrls: { imageUrl: string; key: number }[]
    name: string[]
    description: string[]
  }
  frequentlyAskedQuestions: {
    questions: {
      question: string
      answer: string
      key: number
      icon: string
    }[]
  }
  benefits: {
    title: string
    description: string
    hrefText: string
    href: string
    icon: string
    key: number
  }[]
  joinOurTeam: {
    team: {
      imageUrl: string
      key: number
    }[]
    firstText: string
    secondText: string[]
    joinOurTeamButton: {
      text: string
      href: string
    }
  }
  navigationLinks: {
    text: string[]
    href: string[]
    icon: string[]
  }
  customerTestimonials: {
    testimonials: {
      name: string
      text: string
      imageUrl: string
      key: number
    }[]
    score: { key: number }[]
  }
  introduction: {
    text: string[]
  }
  receiveNotifications: {
    title: string
    text: string
    buttonText: string
    placeholder: string[]
    type: string[]
    name: string[]
  }
  certifications: {
    imageUrls: { imageUrl: string; key: number }[]
  }
}) {
  const {
    trustBadge,
    secondaryTitles,
    finishedWorks,
    allOurServices,
    frequentlyAskedQuestions,
    benefits,
    joinOurTeam,
    navigationLinks,
    customerTestimonials,
    introduction,
    receiveNotifications,
    certifications,
  } = props
  return (
    <div className={clsx(`vertical h-auto w-full`)}>
      <section aria-label={`trust-badge-card`} className={clsx(`mb-6 w-full px-4.5`, `3xl:px-10`)}>
        <div className={clsx(`horizontal h-auto w-full justify-start`)}>
          <TrustBadge {...{ trustBadge }} />
        </div>
      </section>
      <section
        aria-label={`featured-completed-works`}
        className={clsx(`vertical mb-6 w-full gap-y-3.5 px-4.5`, `3xl:px-10`)}
      >
        <SecondaryTitle {...{ title: secondaryTitles.title[0] }} />
        <FinishedWorks {...{ finishedWorks }} />
      </section>
      <section
        aria-label={`all-our-services`}
        className={clsx(`vertical mb-6 w-full gap-y-3.5 px-4.5`, `3xl:px-10`)}
      >
        <SecondaryTitle {...{ title: secondaryTitles.title[1] }} />
        <AllOurServices {...{ allOurServices }} />
        <div
          className={clsx(`horizontal mt-2.5 mb-0.5 h-auto w-full justify-center`, `3xl:mt-3.5`)}
        >
          <NavigationLink
            {...{
              text: navigationLinks.text[0],
              href: navigationLinks.href[0],
              icon: navigationLinks.icon[0],
            }}
          />
        </div>
      </section>
      <section
        aria-label={`here-are-your-answers`}
        className={clsx(`vertical mb-6 w-full gap-y-3.5 px-4.5`, `3xl:px-10`)}
      >
        <SecondaryTitle {...{ title: secondaryTitles.title[2] }} />
        <FQAs {...{ questions: frequentlyAskedQuestions.questions }} />
      </section>
      <section
        aria-label={`why-choose-us`}
        className={clsx(`vertical mb-3.5 w-full gap-y-1.5 pl-4.5`, `3xl:pl-9`)}
      >
        <SecondaryTitle {...{ title: secondaryTitles.title[3] }} />
        <WhyChooseUs {...{ benefits }} />
      </section>
      <section
        aria-label={`join-our-team`}
        className={clsx(`vertical mb-1 w-full gap-y-3.5 overflow-hidden px-4.5`, `3xl:px-10`)}
      >
        <SecondaryTitle {...{ title: secondaryTitles.title[4] }} />
        <JoinOurTeam {...{ joinOurTeam }} />
      </section>
      <section
        aria-label={`customer-testimonials`}
        className={clsx(`vertical mb-7 w-full gap-y-3.5 px-4.5`, `3xl:px-10 3xl:gap-y-4.5`)}
      >
        <div className={clsx(`vertical h-auto w-auto gap-y-2.5`)}>
          <SecondaryTitle {...{ title: secondaryTitles.title[5] }} />
          <div className={clsx(`horizontal mb-2.5 h-auto w-auto justify-center`)}>
            <Introduction {...{ text: introduction.text[0] }} />
          </div>
        </div>
        <CustomerTestimonials
          {...{
            testimonials: customerTestimonials.testimonials,
            score: customerTestimonials.score,
          }}
        />
      </section>
      <section
        aria-label={`receive-notifications`}
        className={clsx(`horizontal mb-8 w-full justify-center px-6`, `3xl:px-10`)}
      >
        <ReceiveNotifications
          {...{
            title: receiveNotifications.title,
            text: receiveNotifications.text,
            buttonText: receiveNotifications.buttonText,
            placeholder: receiveNotifications.placeholder,
            type: receiveNotifications.type,
            name: receiveNotifications.name,
          }}
        />
      </section>
      <section
        aria-label={`certifications-affiliations`}
        className={clsx(`horizontal bg-content2 w-full justify-center px-6`, `3xl:px-14`)}
      >
        <Certifications {...{ imageUrls: certifications.imageUrls }} />
      </section>
    </div>
  )
}
