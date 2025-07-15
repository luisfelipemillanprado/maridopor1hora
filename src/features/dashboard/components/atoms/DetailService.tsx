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

export default function DetailService(props: { name: string; imageUrl: string }) {
  const { imageUrl, name } = props
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <Card isPressable as={`div`} className={clsx(`bg-content3`)} shadow={`sm`}>
      <CardHeader className={clsx(`horizontal relative justify-start px-3`)}>
        <div
          className={clsx(`border-warning h-[2.9375rem] w-[2.9375rem] overflow-hidden rounded-full border-2`)}
        >
          <Image
            width={46}
            height={46}
            className={`h-full w-full object-cover`}
            placeholder={`blur`}
            blurDataURL={blurEffects.blurUrl}
            src={imageUrl}
            alt={`${name} service`}
          />
        </div>
        <div className={clsx(`absolute top-1 right-0`)}>
          <Button onPress={onOpen} isIconOnly className={clsx(`bg-content3 h-9 min-h-9 w-9 min-w-9`)}>
            <DotsVerticalIcon className={clsx(`fill-content5 h-6.5 w-6.5`)} />
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
        <span className={clsx(`text-medium text-default-900`)}>{name}</span>
      </CardBody>
    </Card>
  )
}
