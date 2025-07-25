import MainTitle from '@/features/dashboard/components/atoms/MainTitle'
import SearchService from '@/features/dashboard/components/molecules/SearchService'
import TypesOfServices from '@/features/dashboard/components/molecules/TypesOfServices'
import SecondaryTitle from '@/features/dashboard/components/atoms/SecondaryTitle'
import MostBookedServices from '@/features/dashboard/components/molecules/MostBookedServices'
import DetailsServices from '@/features/dashboard/components/molecules/DetailsServices'
import { clsx } from 'clsx'

export default function Main(props: {
  mainTitles: {
    titles: string[]
  }
  searchService: {
    placeholder: string[]
    type: string[]
    name: string[]
    buttonText: string
    labelPlacement: string
    label: string
    serviceType: { key: string; label: string }[]
  }
  typesOfServices: {
    imageUrls: {
      name: string
      imageUrl: string
      key: number
    }[]
  }
  secondaryTitles: {
    title: string[]
  }
  mostBookedServices: {
    bookedServices: {
      text: string
      imageUrl: string
      price: string
      rating: number
      key: number
    }[]
  }
  detailsServices: {
    cleaningPestControl: {
      text: string
      imageUrl: string
      key: number
    }[]
    plumbing: {
      text: string
      imageUrl: string
      key: number
    }[]
    electrician: {
      text: string
      imageUrl: string
      key: number
    }[]
    masonry: {
      text: string
      imageUrl: string
      key: number
    }[]
    carpentry: {
      text: string
      imageUrl: string
      key: number
    }[]
    airConditioning: {
      text: string
      imageUrl: string
      key: number
    }[]
  }
}) {
  const { mainTitles, searchService, typesOfServices, secondaryTitles, mostBookedServices, detailsServices } =
    props
  return (
    <div className={clsx(`vertical h-auto w-full`)}>
      <section aria-label={``} className={clsx(`relative h-auto w-full px-4.5`)}>
        <div className={clsx(`vertical mb-2 w-full gap-y-3.5`)}>
          <MainTitle {...{ title: mainTitles.titles[0] }} />
        </div>
      </section>
      <section aria-label={``} className={clsx(`horizontal relative mb-6 h-auto w-full px-4.5`)}>
        <SearchService
          {...{
            placeholder: searchService.placeholder,
            type: searchService.type,
            name: searchService.name,
            buttonText: searchService.buttonText,
            labelPlacement: searchService.labelPlacement,
            label: searchService.label,
            serviceType: searchService.serviceType,
          }}
        />
      </section>
      <section aria-label={``} className={clsx(`horizontal relative mb-6 h-auto w-full px-4.5`)}>
        <div className={clsx(`horizontal h-auto w-full`)}>
          <TypesOfServices {...{ imageUrls: typesOfServices.imageUrls }} />
        </div>
      </section>
      <section aria-label={``} className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}>
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[0] }} />
          </div>
          <MostBookedServices {...{ bookedServices: mostBookedServices.bookedServices }} />
        </div>
      </section>
      <section aria-label={``} className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}>
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[1] }} />
          </div>
          <DetailsServices {...{ destailsServices: detailsServices.cleaningPestControl }} />
        </div>
      </section>
      <section aria-label={``} className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}>
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[2] }} />
          </div>
          <DetailsServices {...{ destailsServices: detailsServices.plumbing }} />
        </div>
      </section>
      <section aria-label={``} className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}>
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[3] }} />
          </div>
          <DetailsServices {...{ destailsServices: detailsServices.electrician }} />
        </div>
      </section>
      <section aria-label={``} className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}>
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[4] }} />
          </div>
          <DetailsServices {...{ destailsServices: detailsServices.masonry }} />
        </div>
      </section>
      <section aria-label={``} className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}>
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[5] }} />
          </div>
          <DetailsServices {...{ destailsServices: detailsServices.carpentry }} />
        </div>
      </section>
      <section aria-label={``} className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}>
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[6] }} />
          </div>
          <DetailsServices {...{ destailsServices: detailsServices.airConditioning }} />
        </div>
      </section>
    </div>
  )
}
