import SecondaryTitle from '@/features/home/components/atoms/SecondaryTitle'
import FinishedWorks from '@/features/home/components/molecules/FinishedWorks'
import TrustBadge from '@/features/home/components/molecules/TrustBadge'
import AllOurServices from '@/features/home/components/molecules/AllOurServices'
import FQAs from '@/features/home/components/molecules/FQAs'
import JoinOurTeam from '@/features/home/components/molecules/JoinOurTeam'

import clsx from 'clsx'

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
  joinOurTeam: {
    team: {
      imageUrl: string
      key: number
    }[]
    firstText: string
    secondText: string[]
  }
}) {
  const {
    trustBadge,
    secondaryTitles,
    finishedWorks,
    allOurServices,
    frequentlyAskedQuestions,
    joinOurTeam,
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
      </section>
      <section
        aria-label={`here-are-your-answers`}
        className={clsx(`vertical w-full gap-y-3.5 px-[1.125rem]`)}
      >
        <SecondaryTitle {...{ title: secondaryTitles.title[2] }} />
        <FQAs {...{ questions: frequentlyAskedQuestions.questions }} />
      </section>
      <section
        aria-label={`join-our-team`}
        className={clsx(`vertical w-full gap-y-3.5 overflow-x-hidden px-[1.125rem]`)}
      >
        <SecondaryTitle {...{ title: secondaryTitles.title[3] }} />
        <JoinOurTeam {...{ joinOurTeam }} />
      </section>
    </div>
  )
}
