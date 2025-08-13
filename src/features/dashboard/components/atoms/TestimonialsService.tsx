import { Avatar, Card, CardBody, CardHeader } from '@heroui/react'

export default function TestimonialsService() {
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://heroui.com/avatars/avatar-1.png" />
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="text-small text-default-600 leading-none font-semibold">Zoey Lang</h4>
            <h5 className="text-small text-default-400 tracking-tight">@zoeylang</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="text-small text-default-400 px-3 py-0">
        <p>Frontend developer and UI/UX enthusiast. Join me on this coding adventure!</p>
        <span className="pt-2">
          #FrontendWithZoey
          <span aria-label="computer" className="py-2" role="img">
            💻
          </span>
        </span>
      </CardBody>
    </Card>
  )
}
