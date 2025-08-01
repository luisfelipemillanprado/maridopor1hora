import SecondaryTitle from '@/features/dashboard/components/atoms/SecondaryTitle'
import TertiaryTitle from '@/features/dashboard/components/atoms/TertiaryTitle'
import FQAsService from '@/features/dashboard/components/atoms/FQAsService'
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
import { DotsVerticalIcon } from '@/utils/svgs/Svgs'
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
  moreDetails?: {
    text1: string
    text2: string
    text3: string
    link: {
      href: string
      text: string
    }
    description: string
    phases: { step: string }[]
    frequentlyAskedQuestions: {
      questions: {
        question: string
        answer: string
        key: number
      }[]
    }
    ventajas: string
  }
}) {
  const { imageUrl, title, moreDetails } = props
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <div className={clsx(`absolute top-1 left-1 z-50`)}>
      <Button
        onPress={onOpen}
        isIconOnly
        className={clsx(`bg-content5/35 h-7 min-h-7 w-7 min-w-7`)}
        aria-label={`More description of the service`}
        radius={`full`}
        variant={`shadow`}
      >
        <DotsVerticalIcon className={clsx(`fill-default h-7.5 w-7.5`)} />
      </Button>
      <Modal
        className={clsx(`bg-content7`)}
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
              <div className={clsx(`horizontal rounded-large h-52 w-full justify-center px-4 pb-3.5`)}>
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
                  <span className={clsx(`text-default-900 text-medium`)}>{moreDetails?.description}</span>
                </div>
                <div className={clsx(`horizontal w-full justify-start pb-1`)}>
                  <TertiaryTitle {...{ title: moreDetails?.text1 }} />
                </div>
                <div className={clsx(`vertical w-full gap-y-3 pb-1.5`)}>
                  {moreDetails?.phases?.map((item, index) => (
                    <Chip
                      key={index}
                      className={clsx(
                        `bg-content2 border-content3 text-medium text-default-900 shadow-small border-1 py-4`
                      )}
                      variant={`solid`}
                    >
                      {item.step}
                    </Chip>
                  ))}
                </div>
                <div className={clsx(`horizontal w-full justify-start pb-1`)}>
                  <TertiaryTitle {...{ title: moreDetails?.text2 }} />
                </div>
                <div className={clsx(`horizontal w-full pb-1.5`)}>
                  <FQAsService {...{ questions: moreDetails?.frequentlyAskedQuestions?.questions }} />
                </div>
                <div className={clsx(`horizontal justify-start pb-[0.0625rem]`)}>
                  <TertiaryTitle {...{ title: moreDetails?.text3 }} />
                </div>
                <div className={clsx(`horizontal w-full justify-start`)}>
                  <p className={clsx(`text-default-900 text-medium`)}>{moreDetails?.ventajas}</p>
                </div>
              </div>
            </ModalBody>
            <ModalFooter className={clsx(`px-4 py-2`)}>
              <div className={clsx(`horizontal w-auto`)}>
                <Button
                  className={clsx(`bg-warning shadow-small px-4`)}
                  as={Link}
                  href={moreDetails?.link?.href}
                  color={`warning`}
                  variant={`shadow`}
                  size={`md`}
                  radius={`full`}
                  aria-label={`${moreDetails?.text1} button`}
                >
                  <span className={clsx(`text-default text-medium pt-0.5`)}>{moreDetails?.link?.text}</span>
                </Button>
              </div>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </div>
  )
}
