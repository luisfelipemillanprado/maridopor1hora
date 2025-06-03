import SecondaryTitle from '@/features/home/components/atoms/SecondaryTitle'
import FinishedWorks from '@/features/home/components/molecules/FinishedWorks'
import TrustBadge from '@/features/home/components/molecules/TrustBadge'
import AllOurServices from '@/features/home/components/molecules/AllOurServices'
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
}) {
  const { trustBadge, secondaryTitles, finishedWorks, allOurServices } = props
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
    </div>
  )
}
