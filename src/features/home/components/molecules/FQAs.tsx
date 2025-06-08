'use client'
import { Accordion, AccordionItem } from '@heroui/react'
import FQAIcon from '@/features/home/components/atoms/FQAIcon'
import clsx from 'clsx'

/**
 * @description - Renders a list of Frequently Asked Questions (FQAs) using an accordion UI.
 * @param props - The component props.
 * @param props.questions - An array of question objects to display.
 * @param props.questions[].question - The FAQ question text.
 * @param props.questions[].answer - The answer to the FAQ question.
 * @param props.questions[].key - A unique key for each FAQ item.
 * @param props.questions[].icon - The icon name or identifier for the FAQ item.
 */
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
            `border-default-200 bg-content2 border-1 pb-3.5`,
            `[&>h2>button]:py-0 [&>h2>button]:pt-3.5 [&>h2>button]:pb-0`
          )}
          aria-label={`FQAs ${index + 1}`}
          startContent={<FQAIcon {...{ icon: item.icon }} />}
          title={
            <span className={clsx(`text-default-900 text-[1.0625rem] font-semibold`)}>
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
