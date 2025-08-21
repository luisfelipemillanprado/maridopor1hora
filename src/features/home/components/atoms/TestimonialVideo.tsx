import { useRef, useEffect, useState } from 'react'
import {
  Card,
  Button,
  Image,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  Spinner,
  Chip,
} from '@heroui/react'
import { PlayIcon } from '@/utils/svgs/Svgs'
import clsx from 'clsx'

/**
 * @description - Renders a testimonial video card with a preview image and a play button.
 * When the play button is pressed, a modal opens displaying the video.
 * Shows a loading spinner while the video metadata is loading.
 * @param props - The component props.
 * @param props.imageUrl - The URL of the preview image to display.
 * @param props.videoUrl - The URL of the testimonial video to play.
 * @returns A React component that displays a testimonial video in a modal.
 */
export default function TestimonialVideo(props: {
  imageUrl: string
  videoUrl: string
  durationTime: string
}) {
  const { imageUrl, videoUrl, durationTime } = props
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [isLoading, setIsLoading] = useState(false)
  /**
   * Este efecto gestiona el enfoque y la reproducción del video testimonial cuando el modal se abre:
   * - Si el modal está abierto y existe el contenedor del modal, lo enfoca para mejorar la accesibilidad.
   * - Si el modal está abierto y existe el elemento de video:
   *   - Activa el estado de carga (spinner) mientras se cargan los metadatos del video.
   *   - Cuando los metadatos del video se cargan:
   *     - Desactiva el estado de carga.
   *     - Reinicia el video al inicio.
   *     - Intenta reproducir el video automáticamente; si falla, muestra un mensaje en consola.
   *   - Al desmontar el componente o cerrar el modal:
   *     - Elimina el listener de 'loadedmetadata'.
   *     - Pausa el video y lo reinicia al inicio.
   */
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }
    const videoEl = videoRef.current
    if (isOpen && videoEl) {
      setIsLoading(true)
      const handleLoadedMetadata = () => {
        setIsLoading(false)
        videoEl.currentTime = 0
        /* videoEl.play().catch(() => { */
        console.log(`The video could not be played automatically`)
        /*})*/
      }
      videoEl.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true })
      return () => {
        videoEl.removeEventListener('loadedmetadata', handleLoadedMetadata)
        videoEl.pause()
        videoEl.currentTime = 0
      }
    }
  }, [isOpen])
  return (
    <Card
      as={`div`}
      className={clsx(
        `horizontal border-default-50 relative max-w-[13.75rem] border-6`,
        `3xl:max-w-[18.75rem] 4xl:max-w-[23.5rem] xl:max-w-64 2xl:max-w-72`
      )}
      radius={`lg`}
      shadow={`sm`}
    >
      <div
        className={clsx(
          `horizontal rounded-large h-[12.5rem] w-full`,
          `3xl:h-56 4xl:h-80 xl:h-52 2xl:h-[13.125rem]`
        )}
      >
        <Image
          removeWrapper
          className={clsx(`h-full w-full object-cover`)}
          width={220}
          src={imageUrl}
          alt={`Satisfied customer testimonial`}
          itemProp={`image`}
        />
      </div>
      <div className={clsx(`horizontal absolute right-2 bottom-2 z-50 justify-center gap-1`)}>
        <Chip
          className={clsx(
            `text-default-50 bg-content5/40 text-medium [&>span]:font-bold`,
            `3xl:text-[1.0625rem]`
          )}
          variant={`shadow`}
          size={`md`}
          radius={`full`}
        >
          {durationTime}
        </Chip>
      </div>
      <div className={clsx(`absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2`)}>
        <Button
          isIconOnly
          onPress={onOpen}
          className={clsx(
            `bg-content7/50 border-default-50 min-h-14 w-14 border-2 pl-1 shadow-lg`,
            `4xl:h-[4.5rem] 4xl:w-[4.5rem]`
          )}
          radius={`full`}
          size={`md`}
          variant={`shadow`}
          aria-label={`Play testimonial video`}
        >
          <PlayIcon className={clsx(`fill-warning h-11.5 w-11.5`, `4xl:h-16 4xl:w-16`)} />
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
              <ModalBody className={clsx(`border-none p-0`)}>
                <div
                  className={clsx(`h-52 w-full outline-none`, `3xl:h-[16.375rem] xl:h-[13.25rem] 2xl:h-64`)}
                  ref={modalRef}
                  tabIndex={-1}
                >
                  {isLoading ? (
                    <div className={clsx(`horizontal absolute inset-0 z-50 justify-center bg-black/50`)}>
                      <Spinner size={`lg`} color={`warning`} />
                    </div>
                  ) : (
                    <video
                      ref={videoRef}
                      className={clsx(`h-full w-full object-cover`)}
                      disablePictureInPicture
                      autoPlay
                      controls
                      loop
                      controlsList={`nodownload nofullscreen noremoteplayback`}
                      playsInline
                      aria-label={`Video testimonial from a satisfied customer`}
                    >
                      <source src={videoUrl} type={`video/mp4`} />
                      Lo sentimos, tu navegador no soporta la reproducción de video.
                    </video>
                  )}
                </div>
              </ModalBody>
            )}
          </ModalContent>
        </Modal>
      </div>
    </Card>
  )
}
