// import Ratings from '@/common/gcomponents/ratings/Ratings'
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/react'
import { DotsHorizontalIcon } from '@/utils/svgs/Svgs'
import clsx from 'clsx'

/**
 * @description - Displays a card representing a booked service with an image, description, price, and rating.
 * Includes a button to open a modal with more details about the service.
 * @param props - The properties for the BookedService component.
 * @param props.imageUrl - The URL of the service image.
 * @param props.text - The description or name of the service.
 * @param props.price - The price of the service.
 * @param props.rating - The rating of the service.
 * @returns A card UI element displaying the service details and a modal for additional information.
 */
export default function DetailService(props: { imageUrl: string; text: string }) {
  const { imageUrl, text } = props
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <Card
      isPressable
      as={`div`}
      className={clsx(`bg-content2 border-content2 h-auto w-[13.125rem] border-1`)}
      shadow={`sm`}
    >
      <CardHeader className={clsx(`relative px-1 py-1`)}>
        <div className={clsx(`horizontal rounded-large h-40 justify-start overflow-hidden`)}>
          <Image
            className={clsx(`h-full w-full object-cover`)}
            height={160}
            width={206}
            src={imageUrl}
            alt={`Photo of ${text}`}
            itemProp={`image`}
          />
        </div>
        <div className={clsx(`absolute top-1 left-1 z-50`)}>
          <Button
            onPress={onOpen}
            isIconOnly
            className={clsx(`bg-content5/35 h-7 min-h-7 w-7 min-w-7`)}
            aria-label={`More description of ${text}`}
            radius={`full`}
            variant={`shadow`}
          >
            <DotsHorizontalIcon className={clsx(`fill-default h-7.5 w-7.5`)} />
          </Button>
          <Modal
            backdrop={`opaque`}
            classNames={{
              backdrop: `bg-linear-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20`,
            }}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
                      hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
                      hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                      adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
                      eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                      consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
                      nostrud ad veniam.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </CardHeader>
      <CardFooter
        className={clsx(
          `rounded-b-large absolute bottom-1 z-50 ml-1 w-[calc(100%_-_8px)] px-3 py-1.5`,
          `bg-content5/40`
        )}
      >
        <p className={clsx(`text-default-50 truncate text-[1.0625rem] font-semibold`)}>{text}</p>
      </CardFooter>
    </Card>
  )
}
