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
  const accordionClasses = {
    base: 'gap-0 gap-y-3 px-0',
    breakpoints: '4xl:gap-y-4',
  }
  const accordionItemClasses = {
    base: 'border-content3 bg-content2 border-1 pb-3.5',
    breakpoints: '[&>h2>button]:py-0 [&>h2>button]:pt-3.5 [&>h2>button]:pb-0',
  }
  const titleClasses = {
    base: 'text-default-900 text-large font-bold',
    breakpoints: 'xl:text-[1.1875rem] 2xl:text-xl',
  }
  const answerClasses = {
    base: 'text-default-800 text-medium',
    breakpoints: '2xl:text-large xl:text-[1.0625rem]',
  }
  return (
    <Accordion
      disableAnimation
      className={clsx(accordionClasses.base, accordionClasses.breakpoints)}
      variant={`splitted`}
    >
      {questions.map((item, index) => (
        <AccordionItem
          key={item.key}
          className={clsx(accordionItemClasses.base, accordionItemClasses.breakpoints)}
          aria-label={`FQAs ${index + 1}`}
          startContent={<FQAIcon {...{ icon: item.icon }} />}
          title={<h3 className={clsx(titleClasses.base, titleClasses.breakpoints)}>{item.question}</h3>}
        >
          <span className={clsx(answerClasses.base, answerClasses.breakpoints)}>{item.answer}</span>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
