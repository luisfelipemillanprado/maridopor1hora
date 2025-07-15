import MainTitle from '@/features/dashboard/components/atoms/MainTitle'
import SearchService from '@/features/dashboard/components/molecules/SearchService'
import AllDetailsServices from '@/features/dashboard/components/molecules/AllDetailsServices'
import SecondaryTitle from '@/features/dashboard/components/atoms/SecondaryTitle'
import MostBookedServices from '@/features/dashboard/components/molecules/MostBookedServices'
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
  allDetailsServices: {
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
      key: number
    }[]
  }
}) {
  const { mainTitles, searchService, allDetailsServices, secondaryTitles, mostBookedServices } = props
  return (
    <div className={clsx(`vertical h-auto w-full`)}>
      <section aria-label={``} className={clsx(`relative h-auto w-full px-4.5`)}>
        <div className={clsx(`vertical mb-2 w-full gap-y-3.5`)}>
          <MainTitle {...{ title: mainTitles.titles[0] }} />
        </div>
      </section>
      <section aria-label={``} className={clsx(`horizontal relative mb-5 h-auto w-full px-4.5`)}>
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
      <section aria-label={``} className={clsx(`horizontal relative mb-5 h-auto w-full px-4.5`)}>
        <div className={clsx(`horizontal h-auto w-full`)}>
          <AllDetailsServices {...{ imageUrls: allDetailsServices.imageUrls }} />
        </div>
      </section>
      <section aria-label={``} className={clsx(`horizontal relative h-auto w-full pl-3`)}>
        <div className={clsx(`vertical h-auto w-full items-start gap-y-1`)}>
          <div className={clsx(`horizontal justify-start px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[0] }} />
          </div>
          <MostBookedServices {...{ bookedServices: mostBookedServices.bookedServices }} />
        </div>
      </section>
      <p>lcmwekcmqeflcvefmkvcmefvcefkmcvelkmcekol</p>
      <p>lcmwekcmqeflcvefmkvcmefvcefkmcvelkmcekol</p>
      <p>lcmwekcmqeflcvefmkvcmefvcefkmcvelkmcekol</p>
      <p>lcmwekcmqeflcvefmkvcmefvcefkmcvelkmcekol</p>
      <p>lcmwekcmqeflcvefmkvcmefvcefkmcvelkmcekol</p>
      <p>lcmwekcmqeflcvefmkvcmefvcefkmcvelkmcekol</p>
      <p>lcmwekcmqeflcvefmkvcmefvcefkmcvelkmcekol</p>
      <p>lcmwekcmqeflcvefmkvcmefvcefkmcvelkmcekol</p>
    </div>
  )
}
