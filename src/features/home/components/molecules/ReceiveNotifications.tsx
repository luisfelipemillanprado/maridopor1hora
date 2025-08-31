'use client'
import { useState, FormEvent } from 'react'
import { Button, Form, Input } from '@heroui/react'
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
  text: string[]
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
        `from-content8 via-content9/30 to-content9/70 bg-gradient-to-br from-25% via-30% to-80%`,
        `4xl:w-[50%] 4xl:gap-y-3`
      )}
      onSubmit={onSubmit}
      aria-label={`Form to receive notifications`}
    >
      <div className={clsx(`horizontal h-auto w-full justify-center`, `3xl:justify-start`)}>
        <h3
          className={clsx(
            `text-default-900 text-[1.3125rem] font-extrabold text-shadow-sm`,
            `3xl:text-[1.4375rem] 4xl:text-[1.5625rem] xl:text-[1.375rem]`
          )}
        >
          {title}
        </h3>
      </div>
      <div className={clsx(`vertical h-auto w-full justify-center gap-y-2`, `3xl:justify-start`)}>
        <p
          className={clsx(
            `text-default-800 text-medium text-center`,
            `3xl:text-start 2xl:text-large xl:text-[1.0625rem]`
          )}
        >
          {text[0]}
        </p>
        <p
          className={clsx(
            `text-default-800 text-medium hidden text-center`,
            `3xl:text-start 2xl:text-large 2xl:flex`
          )}
        >
          {text[1]}
        </p>
      </div>
      <div
        className={clsx(
          `mt-2 flex h-auto w-full flex-col justify-center gap-y-4.5`,
          `3xl:flex-nowrap 3xl:flex-row 3xl:gap-x-4 3xl:justify-start`
        )}
      >
        <Input
          id={name[0]}
          aria-label={name[0]}
          isRequired
          isClearable
          className={clsx(`border-content4 rounded-small border-1`, `3xl:w-1/3`)}
          startContent={
            <span className={clsx(`horizontal h-auto w-auto`)}>
              <i className={clsx(`bxr bxs-user`, `text-default-400 text-[1.5625rem]`)} />
            </span>
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
          aria-label={name[1]}
          isRequired
          isClearable
          className={clsx(`border-content4 rounded-small border-1`, `3xl:w-1/3`)}
          startContent={
            <span className={clsx(`horizontal h-auto w-auto`)}>
              <i className={clsx(`bxr bxs-envelope`, `text-default-400 text-[1.5625rem]`)} />
            </span>
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
        <div className={clsx(`horizontal h-auto w-full justify-center`, `3xl:w-auto`)}>
          <Button
            className={clsx(`shadow-medium mt-2`, `3xl:h-12 3xl:mt-0 3xl:rounded-small`)}
            endContent={
              <span className={clsx(`horizontal h-auto w-auto`)}>
                <i className={clsx(`bxr bxs-trending-up bx-tada`, `text-default-50 text-[2.125rem]`)} />
              </span>
            }
            variant={`solid`}
            color={`warning`}
            type={`submit`}
            size={`md`}
            aria-label={`Send notification form`}
          >
            <span className={clsx(`text-default-50 text-[1.0625rem]`, `2xl:text-large`)}>{buttonText}</span>
          </Button>
        </div>
      </div>
    </Form>
  )
}
