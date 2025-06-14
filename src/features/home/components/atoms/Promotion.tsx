import { Card, CardHeader, CardFooter, Image, Button } from '@heroui/react'
import Link from 'next/link'
import clsx from 'clsx'
// --
export default function Promotion(props: { imageUrl: string; href: string }) {
  const { imageUrl, href } = props
  return (
    <Link className={clsx(`horizontal relative h-auto w-auto justify-center`)} href={href}>
      <Card isFooterBlurred className={'h-[222px] w-80'} shadow={`sm`}>
        <CardHeader className="absolute top-1 z-10 flex-col items-start"></CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 h-full w-full object-cover"
          src={imageUrl}
        />
        <CardFooter className="absolute bottom-0 z-10 bg-black/35">
          <div className="flex flex-grow items-center gap-2">
            <Image
              alt="Breathing app icon"
              className="h-8 w-8 rounded-full bg-black"
              src="https://heroui.com/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Breathing App</p>
              <p className="text-tiny text-white/60">Get a good night&#39;s sleep.</p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Get App
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
