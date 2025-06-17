'use client'
import { useState, FormEvent } from 'react'
import { Button, Form, Input } from '@heroui/react'
import { EnvelopeIcon, UserIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description - A form component for receiving notifications, typically used to collect user information such as name and email.
 * @param props - The properties for the ReceiveNotifications component.
 * @param props.title - The title displayed at the top of the form.
 * @param props.text - The descriptive text shown below the title.
 * @param props.buttonText - The text displayed on the submit button.
 * @param props.placeholder - An array of placeholder strings for the input fields.
 * @param props.type - An array of input types for the input fields (e.g., "text", "email").
 * @param props.name - An array of names for the input fields, used as form field names and IDs.
 */
export default function ReceiveNotifications(props: {
  title: string
  text: string
  buttonText: string
  placeholder: string[]
  type: string[]
  name: string[]
}) {
  const { title, text, buttonText, placeholder, type, name } = props
  const [submitted, setSubmitted] = useState<{ [k: string]: FormDataEntryValue } | null>(null)
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    setSubmitted(data)
  }
  return (
    <Form
      className={clsx(
        `vertical rounded-large border-content3 shadow-small h-auto w-full gap-y-2.5 border-1 p-6`,
        `from-content8 via-content9/30 to-content9/70 bg-gradient-to-br from-25% via-30% to-80%`
      )}
      onSubmit={onSubmit}
    >
      <div className={clsx(`horizontal h-auto w-full justify-center`)}>
        <span className={clsx(`text-default-900 text-[1.3125rem] font-extrabold text-shadow-sm`)}>
          {title}
        </span>
      </div>
      <div className={clsx(`horizontal h-auto w-full justify-center`)}>
        <p className={clsx(`text-default-800 text-medium h-auto w-auto text-center`)}>{text}</p>
      </div>
      <div className={clsx(`vertical mt-2 h-auto w-full items-center gap-y-4.5`)}>
        <Input
          id={name[0]}
          isRequired
          isClearable
          className={clsx(`border-content4 rounded-small border-1`)}
          startContent={
            <UserIcon className={clsx(`fill-default-400 pointer-events-none h-5 w-5`)} />
          }
          validate={(value) => {
            if (value.length < 3) {
              return `El numbre debe de tener almenos 3 caracteres`
            }
            return value === `admin` ? `Nice try!` : null
          }}
          labelPlacement={`outside`}
          name={name[0]}
          placeholder={placeholder[0]}
          type={type[0]}
          autoComplete={`names`}
          size={`lg`}
          radius={`sm`}
        />
        <Input
          id={name[1]}
          isRequired
          isClearable
          className={clsx(`border-content4 rounded-small border-1`)}
          startContent={
            <EnvelopeIcon className={clsx(`fill-default-400 pointer-events-none h-5 w-5`)} />
          }
          errorMessage={({ validationDetails, validationErrors }) => {
            if (validationDetails.typeMismatch) {
              return `Please enter a valid email address`
            }
            return validationErrors
          }}
          labelPlacement={`outside`}
          name={name[1]}
          placeholder={placeholder[1]}
          type={type[1]}
          autoComplete={`emails`}
          size={`lg`}
          radius={`sm`}
        />
        <Button
          className={clsx(`shadow-medium mt-2`)}
          endContent={<ArrowTrendingUpIcon className={clsx(`fill-default-50 h-5 w-5`)} />}
          variant={`solid`}
          color={`warning`}
          type={`submit`}
          size={`md`}
        >
          <span className={clsx(`text-default-50 text-medium`)}>{buttonText}</span>
        </Button>
      </div>
    </Form>
  )
}
