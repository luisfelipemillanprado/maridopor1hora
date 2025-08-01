import MainTitle from '@/features/dashboard/components/atoms/MainTitle'
import SearchService from '@/features/dashboard/components/molecules/SearchService'
import TypesOfServices from '@/features/dashboard/components/molecules/TypesOfServices'
import SecondaryTitle from '@/features/dashboard/components/atoms/SecondaryTitle'
import MostBookedServices from '@/features/dashboard/components/molecules/MostBookedServices'
import DetailsServices from '@/features/dashboard/components/molecules/DetailsServices'
import { clsx } from 'clsx'

/**
 * Main dashboard component that renders the primary sections of the application.
 *
 * @param props - The properties required to render the dashboard.
 * @param props.mainTitles - Contains the main titles for the dashboard.
 * @param props.mainTitles.titles - Array of main title strings.
 * @param props.searchService - Configuration for the search service section.
 * @param props.typesOfServices - Contains image URLs for different types of services.
 * @param props.typesOfServices.imageUrls - Array of objects with service name, image URL, and key.
 * @param props.secondaryTitles - Contains secondary titles for different sections.
 * @param props.secondaryTitles.title - Array of secondary title strings.
 * @param props.mostBookedServices - Contains information about the most booked services.
 * @param props.mostBookedServices.bookedServices - Array of booked service objects with text, image URL, price, rating, and key.
 * @param props.detailsServices - Detailed information for each service category.
 * @returns The main dashboard layout containing all sections.
 */
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
      title: string
      imageUrl: string
      moreDetails: {
        text1: string
        text2: string
        text3: string
        link: {
          href: string
          text: string
        }
        description: string
        phases: { step: string }[]
        questions: {
          question: string
          answer: string
          key: number
        }[]
        ventajas: string
        testimonials: {
          name: string
          text: string
          imageUrl: string
          key: number
        }[]
      }
      key: number
    }[]
    plumbing: {
      title: string
      imageUrl: string
      moreDetails: {
        text1: string
        text2: string
        text3: string
        link: {
          href: string
          text: string
        }
        description: string
        phases: { step: string }[]
        questions: {
          question: string
          answer: string
          key: number
        }[]
        ventajas: string
        testimonials: {
          name: string
          text: string
          imageUrl: string
          key: number
        }[]
      }
      key: number
    }[]
    electrician: {
      title: string
      imageUrl: string
      moreDetails: {
        text1: string
        text2: string
        text3: string
        link: {
          href: string
          text: string
        }
        description: string
        phases: { step: string }[]
        questions: {
          question: string
          answer: string
          key: number
        }[]
        ventajas: string
        testimonials: {
          name: string
          text: string
          imageUrl: string
          key: number
        }[]
      }
      key: number
    }[]
    masonry: {
      title: string
      imageUrl: string
      moreDetails: {
        text1: string
        text2: string
        text3: string
        link: {
          href: string
          text: string
        }
        description: string
        phases: { step: string }[]
        questions: {
          question: string
          answer: string
          key: number
        }[]
        ventajas: string
        testimonials: {
          name: string
          text: string
          imageUrl: string
          key: number
        }[]
      }
      key: number
    }[]
    carpentry: {
      title: string
      imageUrl: string
      moreDetails: {
        text1: string
        text2: string
        text3: string
        link: {
          href: string
          text: string
        }
        description: string
        phases: { step: string }[]
        questions: {
          question: string
          answer: string
          key: number
        }[]
        ventajas: string
        testimonials: {
          name: string
          text: string
          imageUrl: string
          key: number
        }[]
      }
      key: number
    }[]
    airConditioning: {
      title: string
      imageUrl: string
      moreDetails: {
        text1: string
        text2: string
        text3: string
        link: {
          href: string
          text: string
        }
        description: string
        phases: { step: string }[]
        questions: {
          question: string
          answer: string
          key: number
        }[]
        ventajas: string
        testimonials: {
          name: string
          text: string
          imageUrl: string
          key: number
        }[]
      }
      key: number
    }[]
    plasterboard: {
      title: string
      imageUrl: string
      moreDetails: {
        text1: string
        text2: string
        text3: string
        link: {
          href: string
          text: string
        }
        description: string
        phases: { step: string }[]
        questions: {
          question: string
          answer: string
          key: number
        }[]
        ventajas: string
        testimonials: {
          name: string
          text: string
          imageUrl: string
          key: number
        }[]
      }
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
      <section
        aria-label={`service-search`}
        className={clsx(`horizontal relative mb-6 h-auto w-full px-4.5`)}
      >
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
      <section
        aria-label={`types-services-available`}
        className={clsx(`horizontal relative mb-6 h-auto w-full px-4.5`)}
      >
        <div className={clsx(`horizontal h-auto w-full`)}>
          <TypesOfServices {...{ imageUrls: typesOfServices.imageUrls }} />
        </div>
      </section>
      <section
        aria-label={`most-reserved-services`}
        className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}
      >
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[0] }} />
          </div>
          <MostBookedServices {...{ bookedServices: mostBookedServices.bookedServices }} />
        </div>
      </section>
      <section
        aria-label={`details-services-cleaning-pest-control`}
        className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}
      >
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[1] }} />
          </div>
          <DetailsServices {...{ destailsServices: detailsServices.cleaningPestControl }} />
        </div>
      </section>
      <section
        aria-label={`details-services-plumbing`}
        className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}
      >
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[2] }} />
          </div>
          <DetailsServices {...{ destailsServices: detailsServices.plumbing }} />
        </div>
      </section>
      <section
        aria-label={`details-services-electrician`}
        className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}
      >
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[3] }} />
          </div>
          <DetailsServices {...{ destailsServices: detailsServices.electrician }} />
        </div>
      </section>
      <section
        aria-label={`details-services-masonry`}
        className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}
      >
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[4] }} />
          </div>
          <DetailsServices {...{ destailsServices: detailsServices.masonry }} />
        </div>
      </section>
      <section
        aria-label={`details-services-carpentry`}
        className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}
      >
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[5] }} />
          </div>
          <DetailsServices {...{ destailsServices: detailsServices.carpentry }} />
        </div>
      </section>
      <section
        aria-label={`details-services-air-conditioning`}
        className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}
      >
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[6] }} />
          </div>
          <DetailsServices {...{ destailsServices: detailsServices.airConditioning }} />
        </div>
      </section>
      <section
        aria-label={`details-services-plasterboard`}
        className={clsx(`horizontal relative mb-3 h-auto w-full pl-3`)}
      >
        <div className={clsx(`vertical h-auto w-full items-start gap-y-0.5`)}>
          <div className={clsx(`horizontal w-full justify-center px-1.5`)}>
            <SecondaryTitle {...{ title: secondaryTitles.title[7] }} />
          </div>
          <DetailsServices {...{ destailsServices: detailsServices.plasterboard }} />
        </div>
      </section>
    </div>
  )
}
