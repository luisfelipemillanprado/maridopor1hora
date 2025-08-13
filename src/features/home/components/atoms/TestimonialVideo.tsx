import { useRef, useEffect } from 'react'
import { Card, Button, Image, useDisclosure, Modal, ModalContent, ModalBody } from '@heroui/react'
import { PlayIcon } from '@/utils/svgs/Svgs'
import clsx from 'clsx'

export default function TestimonialVideo(props: { imageUrl: string; videoUrl: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { imageUrl, videoUrl } = props
  /**
   * This component renders a testimonial video card with an image and a play button.
   */
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }
    if (videoRef.current) {
      if (isOpen) {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch(() => {
          console.warn(`The video could not be played automatically`)
        })
      } else {
        videoRef.current.currentTime = 0
      }
    }
  }, [isOpen])
  return (
    <Card
      as={`div`}
      className={clsx(`horizontal border-content4 border-1.5 relative min-w-[13.75rem]`)}
      radius={`lg`}
      shadow={`sm`}
    >
      <div className={clsx(`horizontal rounded-large h-[12.5rem]`)}>
        <Image
          className={clsx(`h-full w-full object-cover brightness-90`)}
          width={220}
          height={200}
          src={imageUrl}
          alt={`Photo of two`}
          itemProp={`image`}
        />
      </div>
      <div className={clsx(`absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2`)}>
        <Button
          isIconOnly
          onPress={onOpen}
          className={clsx(`bg-content7/60 border-content4 min-h-14 w-14 border-3 pl-1`)}
          radius={`full`}
          size={`md`}
          variant={`shadow`}
        >
          <PlayIcon className={clsx(`fill-warning h-11.5 w-11.5`)} />
        </Button>
        <Modal
          backdrop={`opaque`}
          placement={`center`}
          className={clsx(
            `bg-content7 mx-3`,
            `[&>button:nth-child(2)]:bg-content4 [&>button:nth-child(2)]:z-50`
          )}
          classNames={{
            backdrop: `bg-linear-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20`,
          }}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {() => (
              <ModalBody className={clsx(`p-0`)}>
                <div ref={modalRef} tabIndex={-1}>
                  <video
                    ref={videoRef}
                    className={clsx(`min-h-52 w-full object-cover`)}
                    disablePictureInPicture
                    controls
                    loop
                    controlsList={`nodownload nofullscreen noremoteplayback`}
                    playsInline
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                  </video>
                </div>
              </ModalBody>
            )}
          </ModalContent>
        </Modal>
      </div>
    </Card>
  )
}
