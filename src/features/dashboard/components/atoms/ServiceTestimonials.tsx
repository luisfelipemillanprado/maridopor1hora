import { Avatar, Card, CardBody, CardHeader } from '@heroui/react'
import clsx from 'clsx'

export default function ServiceTestimonials(props: {
  name: string
  date: string
  text: string
  imageUrl: string
}) {
  const { name, date, text, imageUrl } = props
  return (
    <Card className={clsx(`vertical bg-content7 w-full`)}>
      <CardHeader className={clsx(`justify-between px-4 pt-4`)}>
        <div className={clsx(`horizontal justify-start gap-x-4`)}>
          <Avatar
            className={clsx(`border-warning-500 h-12.5 w-12.5 border-1`)}
            radius={`full`}
            size={`md`}
            src={imageUrl}
            alt={`Image service ${name}`}
            itemProp={`image`}
          />
          <div className={clsx(`vertical items-start justify-center gap-1`)}>
            <span className={clsx(`text-default-900 text-[1.0625rem] leading-none font-semibold`)}>
              {name}
            </span>
            <span className={clsx(`text-default-700 text-[0.9375rem]`)}>{date}</span>
          </div>
        </div>
      </CardHeader>
      <CardBody className={clsx(`px-4 pt-0 pb-4`)}>
        <p className={clsx(`text-default-900 text-medium`)}>{text}</p>
      </CardBody>
    </Card>
  )
}
