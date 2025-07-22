'use client'
import { Button, Input, Select, SelectItem } from '@heroui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
// import { SearchIcon } from '@/utils/svgs/Svgs'
import clsx from 'clsx'

/**
 * @description - SearchService component renders a search input with a selectable service type and a search button.
 * @param props - The properties for the SearchService component.
 * @param props.placeholder - An array of placeholder strings for the input fields.
 * @param props.type - An array of input types for the input fields.
 * @param props.name - An array of names for the input fields.
 * @param props.buttonText - The text to display on the search button.
 * @param props.labelPlacement - The placement of the label for the select component.
 * @param props.label - The label for the select component.
 * @param props.serviceType - An array of objects representing the service types, each with a `key` and `label`.
 * @returns The rendered SearchService component.
 */
export default function SearchService(props: {
  placeholder: string[]
  type: string[]
  name: string[]
  buttonText: string
  labelPlacement: string
  label: string
  serviceType: { key: string; label: string }[]
}) {
  const { placeholder, type, name, buttonText, label, serviceType } = props
  return (
    <div className={clsx(`horizontal mt-2 h-auto w-full justify-between`)}>
      <Select
        key={serviceType[0].key}
        className={clsx(`hidden`)}
        label={label}
        labelPlacement={`inside`}
        placeholder={`Type`}
        aria-label={`Service type`}
      >
        {serviceType.map((item /*, index*/) => (
          <SelectItem key={item.key} aria-label={item.label}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
      <div className={clsx(`horizontal h-auto w-[78%] justify-between gap-x-2`)}>
        <Input
          id={name[0]}
          name={name[0]}
          className={clsx(
            `[&_div_div_div>:nth-child(2)]:text-medium w-full [&_div_div]:h-12 [&_div_div]:min-h-12`,
            `[&_div_div]:border-content4`
          )}
          placeholder={placeholder[0]}
          aria-label={`Search service`}
          startContent={<MagnifyingGlassIcon className={clsx(`fill-default-500 h-5.5 w-5.5`)} />}
          type={type[0]}
          variant={`bordered`}
          radius={`sm`}
        />
      </div>
      <div className={clsx(`horizontal h-auto w-auto justify-center`)}>
        <Button
          className={clsx(`shadow-medium bg-content5 h-12 min-h-12 min-w-14`)}
          endContent={<MagnifyingGlassIcon className={clsx(`fill-default-50 h-5.5 w-5.5`)} />}
          variant={`shadow`}
          type={`button`}
          size={`sm`}
          aria-label={`Send service search request`}
        >
          <span className={clsx(`text-default-50 text-medium hidden`)}>{buttonText}</span>
        </Button>
      </div>
    </div>
  )
}
