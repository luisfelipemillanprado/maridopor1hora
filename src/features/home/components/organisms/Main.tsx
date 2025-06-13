import SecondaryTitle from '@/features/home/components/atoms/SecondaryTitle'
import FinishedWorks from '@/features/home/components/molecules/FinishedWorks'
import TrustBadge from '@/features/home/components/molecules/TrustBadge'
import AllOurServices from '@/features/home/components/molecules/AllOurServices'
import NavigationLink from '@/features/home/components/molecules/NavigationLinks'
import FQAs from '@/features/home/components/molecules/FQAs'
import JoinOurTeam from '@/features/home/components/molecules/JoinOurTeam'
import WhyChooseUs from '@/features/home/components/molecules/WhyChooseUs'
import clsx from 'clsx'

/**
 * @description - Main component for the home page, responsible for rendering all major sections including:
 * - Trust badge
 * - Featured completed works
 * - All our services
 * - Frequently asked questions
 * - Join our team
 * @param props - The properties required to render the main sections of the home page.
 * @param props.trustBadge - Information for the trust badge section, including slogan, summary, rating, reviews, and button text.
 * @param props.secondaryTitles - Titles for each major section of the page.
 * @param props.finishedWorks - Data for the featured completed works section, including image URLs and descriptive texts.
 * @param props.allOurServices - Data for the services section, including images, names, and descriptions of services.
 * @param props.frequentlyAskedQuestions - List of frequently asked questions, each with a question, answer, key, and icon.
 * @param props.joinOurTeam - Information for the join our team section, including team images, texts, and a join button.
 * @param props.navigationLinks - Navigation links for the services section, including text, href, and icon for each link.
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
  } = props
  return (
    <div className={clsx(`vertical h-auto w-full gap-y-6`)}>
      <section aria-label={`trust-badge`} className={clsx(`w-full px-[1.125rem]`)}>
        <div className={clsx(`horizontal h-auto w-full justify-start`)}>
          <TrustBadge {...{ trustBadge }} />
        </div>
      </section>
      <section
        aria-label={`featured-completed-works`}
        className={clsx(`vertical w-full gap-y-3.5 px-[1.125rem]`)}
      >
        <SecondaryTitle {...{ title: secondaryTitles.title[0] }} />
        <FinishedWorks {...{ finishedWorks }} />
      </section>
      <section
        aria-label={`all-our-services`}
        className={clsx(`vertical w-full gap-y-3.5 px-[1.125rem]`)}
      >
        <SecondaryTitle {...{ title: secondaryTitles.title[1] }} />
        <AllOurServices {...{ allOurServices }} />
        <div className={clsx(`horizontal mt-2.5 mb-0.5 h-auto w-full justify-center`)}>
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
        className={clsx(`vertical w-full gap-y-3.5 px-[1.125rem]`)}
      >
        <SecondaryTitle {...{ title: secondaryTitles.title[2] }} />
        <FQAs {...{ questions: frequentlyAskedQuestions.questions }} />
      </section>
      <section aria-label={`why-choose-us`} className={clsx(`vertical w-full gap-y-3.5`)}>
        <SecondaryTitle {...{ title: secondaryTitles.title[3] }} />
        <WhyChooseUs {...{ benefits }} />
      </section>
      <section
        aria-label={`join-our-team`}
        className={clsx(`vertical w-full gap-y-3.5 overflow-hidden px-[1.125rem]`)}
      >
        <SecondaryTitle {...{ title: secondaryTitles.title[4] }} />
        <JoinOurTeam {...{ joinOurTeam }} />
      </section>
    </div>
  )
}
