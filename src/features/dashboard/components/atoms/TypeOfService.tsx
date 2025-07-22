import Image from 'next/image'
import {
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@heroui/react'
import { DotsVerticalIcon } from '@/utils/svgs/Svgs'
import clsx from 'clsx'
import blurEffects from '@/utils/blurs/Blurs'

/**
 * @description - Renders a card component displaying a service type with its name and image.
 * Includes an options button that opens a modal with additional actions or information.
 * @param props - The properties for the component.
 * @param props.name - The name of the service to display.
 * @param props.imageUrl - The URL of the image representing the service.
 * @returns A card UI element with service details and a modal for further actions.
 */
export default function DetailService(props: { name: string; imageUrl: string }) {
  const { imageUrl, name } = props
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <Card isPressable as={`div`} className={clsx(`bg-content2`)} shadow={`sm`}>
      <CardHeader className={clsx(`horizontal relative justify-start px-3`)}>
        <div
          className={clsx(`border-warning h-[3.125rem] w-[3.125rem] overflow-hidden rounded-full border-2`)}
        >
          <Image
            width={50}
            height={50}
            className={`h-full w-full object-cover`}
            placeholder={`blur`}
            blurDataURL={blurEffects.blurUrl}
            src={imageUrl}
            alt={`${name} service`}
          />
        </div>
        <div className={clsx(`absolute top-1 right-0`)}>
          <Button onPress={onOpen} isIconOnly className={clsx(`bg-content2 h-9 min-h-9 w-9 min-w-9`)}>
            <DotsVerticalIcon className={clsx(`fill-content5 h-7.5 w-7.5`)} />
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
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </CardHeader>
      <CardBody className={clsx(`justify-center pt-0 pr-0 pl-3`)}>
        <span className={clsx(`text-default-900 text-[1.0625rem] font-semibold`)}>{name}</span>
      </CardBody>
    </Card>
  )
}
