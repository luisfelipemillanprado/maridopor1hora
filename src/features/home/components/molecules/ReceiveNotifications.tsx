'use client'
import { useState, FormEvent } from 'react'
import { Button, Form, Input } from '@heroui/react'
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

export default function ReceiveNotifications() {
  const [submitted, setSubmitted] = useState<{ [k: string]: FormDataEntryValue } | null>(null)
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    setSubmitted(data)
  }
  return (
    <Form
      className={clsx(
        `vertical rounded-large h-auto w-full items-start p-6`,
        `from-content8/40 via-content8/40 to-content8/80 bg-gradient-to-br`
      )}
      onSubmit={onSubmit}
    >
      <div className={clsx(`horizontal h-auto w-full justify-center`)}>
        <span className={clsx(`text-default-900 h-auto w-auto text-xl font-extrabold`)}>
          Recibe ofertas exclusivas
        </span>
      </div>
      <div>
        <p>Registra tu correo electrónico para recibir promociones exclusivas de MaridoPor1Hora.</p>
      </div>
      <Input
        isRequired
        labelPlacement={`outside`}
        name={`name`}
        placeholder={`nombre`}
        type={`text`}
        validate={(value) => {
          if (value.length < 3) {
            return `El numbre debe de tener almenos 3 caracteres`
          }
          return value === `admin` ? `Nice try!` : null
        }}
        startContent={<UserIcon className={clsx(`fill-default-400 pointer-events-none h-5 w-5`)} />}
      />
      <Input
        isRequired
        errorMessage={({ validationDetails, validationErrors }) => {
          if (validationDetails.typeMismatch) {
            return `Please enter a valid email address`
          }
          return validationErrors
        }}
        endContent={
          <div className={clsx(`horizontal pointer-events-none justify-center`)}>
            <span className={clsx(`text-default-400 text-small h-auto w-auto`)}>@gmail.com</span>
          </div>
        }
        labelPlacement={`outside`}
        name={`email`}
        placeholder={`example@gmail.com`}
        type={`email`}
        startContent={
          <EnvelopeIcon className={clsx(`fill-default-400 pointer-events-none h-5 w-5`)} />
        }
      />
      <Button color="primary" type="submit">
        Submit
      </Button>
      {submitted && (
        <div className="text-small text-default-500">
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>
  )
}
