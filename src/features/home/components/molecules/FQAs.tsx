'use client'
import { Accordion, AccordionItem } from '@heroui/react'
import FQAIcon from '@/features/home/components/atoms/FQAIcon'
import clsx from 'clsx'

export default function FQAs(props: {
  questions: {
    question: string
    answer: string
    key: number
    icon: string
  }[]
}) {
  const { questions } = props
  return (
    <Accordion disableAnimation className={clsx(`gap-0 gap-y-3 px-0`)} variant={`splitted`}>
      {questions.map((item, index) => (
        <AccordionItem
          key={item.key}
          className={clsx(
            `border-default-200 bg-content3 border-1 pb-3.5`,
            `[&>h2>button]:py-0 [&>h2>button]:pt-3.5 [&>h2>button]:pb-0`
          )}
          aria-label={`FQAs ${index + 1}`}
          startContent={<FQAIcon {...{ icon: item.icon }} />}
          title={
            <span className={clsx(`text-default-900 text-[1.0625rem] font-bold`)}>
              {item.question}
            </span>
          }
        >
          <span className={clsx(`text-default-700 text-[0.9375rem]`)}>{item.answer}</span>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
