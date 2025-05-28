'use client'
import { Button } from '@heroui/react'

export default function Prueba() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
  )
}
