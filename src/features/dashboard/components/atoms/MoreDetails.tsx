import { useRef, useEffect } from 'react'
import SecondaryTitle from '@/features/dashboard/components/atoms/SecondaryTitle'
import TertiaryTitle from '@/features/dashboard/components/atoms/TertiaryTitle'
import FQAsService from '@/features/dashboard/components/atoms/FQAsService'
import ServiceTestimonials from '@/features/dashboard/components/atoms/ServiceTestimonials'
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
  Chip,
  Link,
} from '@heroui/react'
import clsx from 'clsx'

/**
 * @description - Displays a button that opens a modal with more details about a service.
 * @param props - The properties for the MoreDetails component.
 * @param props.imageUrl - The URL of the image to display in the modal.
 * @param props.title - The title of the service.
 * @param props.description - (Optional) The description of the service.
 * @param props.text - (Optional) Additional text to display in the modal.
 * @param props.phases - (Optional) An array of phase objects, each containing a step description and a key.
 * @remarks
 * - Shows a modal with an image, title, text, and a list of phases when the button is pressed.
 * - Uses `useDisclosure` for modal state management.
 * - Utilizes custom styling and components for layout and appearance.
 */
export default function MoreDetails(props: {
  imageUrl: string
  title: string
  moreDetails: {
    subTitles: string[]
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
      date: string
      text: string
      imageUrl: string
      key: number
    }[]
  }
}) {
  const { imageUrl, title, moreDetails } = props
  const modalRef = useRef<HTMLDivElement | null>(null)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  /**
   * Cuando el modal se abre (`isOpen` es true), este efecto intenta enfocar el div referenciado por `modalRef`.
   * Esto mejora la accesibilidad, permitiendo que el usuario navegue el contenido del modal usando el teclado.
   */
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }
  }, [isOpen])
  return (
    <div className={clsx(`absolute top-1 left-1 z-50`)}>
      <Button
        onPress={onOpen}
        isIconOnly
        className={clsx(`bg-content5/35 h-8 w-8 min-w-8`)}
        aria-label={`More description of the service`}
        radius={`full`}
        variant={`shadow`}
      >
        <span className={clsx(`horizontal h-auto w-auto`)}>
          <i className={clsx(`bxr bxs-dots-vertical-rounded`, `text-default-50 text-3xl`)} />
        </span>
      </Button>
      <Modal
        className={clsx(
          `bg-content7 [&>button:nth-child(2)]:bg-content4 overflow-hidden [&>button:nth-child(2)]:z-50`
        )}
        backdrop={`opaque`}
        scrollBehavior={`inside`}
        classNames={{
          backdrop: `bg-linear-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20`,
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <>
            <ModalBody className={clsx(`px-0 pt-6`)}>
              <div
                className={clsx(
                  `horizontal rounded-large h-52 w-full justify-center px-4 pb-3.5 outline-none`
                )}
                ref={modalRef}
                tabIndex={-1}
              >
                <Image
                  isZoomed
                  removeWrapper
                  className={clsx(`border-content3 h-52 w-full border-4 object-cover`)}
                  src={imageUrl}
                  alt={`Photo of ${title}`}
                  itemProp={`image`}
                  shadow={`sm`}
                />
              </div>
              <div className={clsx(`vertical w-full gap-y-3 px-5`)}>
                <div className={clsx(`horizontal justify-start`)}>
                  <SecondaryTitle {...{ title }} />
                </div>
                <div className={clsx(`horizontal w-full justify-start`)}>
                  <span className={clsx(`text-default-900 text-medium`)}>{moreDetails.description}</span>
                </div>
                <div className={clsx(`vertical w-full gap-y-[1.0625rem] pb-[0.5625rem]`)}>
                  <TertiaryTitle {...{ title: moreDetails.subTitles[0] }} />
                  <div className={clsx(`vertical w-full gap-y-3`)}>
                    {moreDetails.phases.map((item, index) => (
                      <Chip
                        key={index}
                        className={clsx(
                          `bg-content7 border-content3 text-medium text-default-900 shadow-small border-1 py-4`
                        )}
                        variant={`solid`}
                      >
                        {item.step}
                      </Chip>
                    ))}
                  </div>
                </div>
                <div className={clsx(`vertical w-full gap-y-3 pb-0.5`)}>
                  <TertiaryTitle {...{ title: moreDetails.subTitles[1] }} />
                  <div className={clsx(`horizontal w-full justify-start`)}>
                    <p className={clsx(`text-default-900 text-medium`)}>{moreDetails.ventajas}</p>
                  </div>
                </div>
                <div className={clsx(`vertical w-full gap-y-[1.0625rem] pb-[0.5625rem]`)}>
                  <TertiaryTitle {...{ title: moreDetails.subTitles[2] }} />
                  <div className={clsx(`horizontal w-full`)}>
                    <FQAsService {...{ questions: moreDetails.questions }} />
                  </div>
                </div>
                <div className={clsx(`vertical w-full gap-y-[1.0625rem] pb-[0.0625rem]`)}>
                  <TertiaryTitle {...{ title: moreDetails.subTitles[3] }} />
                  <div className={clsx(`vertical w-full gap-y-4`)}>
                    {moreDetails.testimonials.map((item, index) => (
                      <ServiceTestimonials
                        key={index}
                        {...{
                          name: item.name,
                          date: item.date,
                          text: item.text,
                          imageUrl: item.imageUrl,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter className={clsx(`px-4 py-2`)}>
              <div className={clsx(`horizontal`)}>
                <Button
                  className={clsx(`bg-warning shadow-small px-4`)}
                  as={Link}
                  href={moreDetails.link.href}
                  color={`warning`}
                  variant={`shadow`}
                  size={`md`}
                  radius={`full`}
                  aria-label={`${moreDetails.link.text} button`}
                >
                  <span className={clsx(`text-default text-medium pt-0.5`)}>{moreDetails.link.text}</span>
                </Button>
              </div>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </div>
  )
}
