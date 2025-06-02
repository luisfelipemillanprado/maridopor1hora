// import SpecialTitle from '@/features/home/components/atoms/SpecialTitle'
// import SpecialOffers from '@/features/home/components/molecules/SpecialOffers'
import TrustBadge from '@/features/home/components/molecules/TrustBadge'
import clsx from 'clsx'

export default function Main(props: {
  trustBadge: {
    slogan: string
    summary: string
    rating: string
    reviews: string
    buttonText: string
  }
}) {
  const { trustBadge } = props
  return (
    <div className={clsx(`horizontal h-auto w-full`)}>
      <section aria-label={`trust-badge`} className={clsx(`vertical w-full px-[1.125rem]`)}>
        <div className={clsx(`horizontal h-auto w-full justify-start`)}>
          <TrustBadge {...{ trustBadge }} />
        </div>
      </section>
    </div>
  )
}
