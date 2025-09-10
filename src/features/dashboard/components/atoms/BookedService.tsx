import Ratings from '@/common/ratings/Ratings'
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
import clsx from 'clsx'

/**
 * @description - Displays a booked service card with image, price, rating, and description modal.
 * @param props - The properties for the BookedService component.
 * @param props.imageUrl - The URL of the service image.
 * @param props.text - The name or description of the service.
 * @param props.price - The price of the service.
 * @param props.rating - The rating value for the service.
 * @returns A card component showing the service details and a modal for more information.
 */
export default function BookedService(props: {
  imageUrl: string
  text: string
  price: string
  rating: number
}) {
  const { imageUrl, text, price, rating } = props
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <Card isPressable as={`div`} className={clsx(`bg-content3 h-auto w-48`)} shadow={`sm`}>
      <CardHeader className={clsx(`relative px-1 pt-1 pb-0`)}>
        <Ratings rating={rating} />
        <div className={clsx(`horizontal rounded-large h-36 w-full justify-start overflow-hidden`)}>
          <Image
            className={clsx(`h-full w-full object-cover`)}
            width={206}
            height={144}
            src={imageUrl}
            alt={`Photo of ${text}`}
            itemProp={`image`}
          />
        </div>
        <div className={clsx(`absolute top-1 left-1 z-50`)}>
          <Button
            onPress={onOpen}
            isIconOnly
            className={clsx(`bg-content5/35 h-8 w-8 min-w-8`)}
            aria-label={`More description of ${text}`}
            radius={`full`}
            variant={`shadow`}
          >
            <span className={clsx(`horizontal h-auto w-auto`)}>
              <i className={clsx(`bxr bxs-dots-vertical-rounded`, `text-default-50 text-3xl`)} />
            </span>
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
                  <ModalHeader className='flex flex-col gap-1'>Modal Title</ModalHeader>
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
                    <Button color='danger' variant='light' onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </CardHeader>
      <CardFooter className={clsx(`horizontal justify-start`)}>
        <div className={clsx(`vertical items-start gap-y-1 text-start`)}>
          <span className={clsx(`text-default-500 text-medium`)}>{price}</span>
          <p className={clsx(`text-default-900 text-medium font-semibold`)}>{text}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
