import { Accordion, AccordionItem } from '@heroui/react'
import clsx from 'clsx'

export default function FQAsService(props: {
  questions: {
    question: string
    answer: string
    key: number
  }[]
}) {
  const { questions = [] } = props
  return (
    <Accordion disableAnimation className={clsx(`gap-0 gap-y-4 px-0`)} variant={`splitted`}>
      {questions.map((item, index) => (
        <AccordionItem
          key={item.key}
          className={clsx(
            `border-content3 bg-content7 border-1 pb-3.5`,
            `[&>h2>button]:py-0 [&>h2>button]:pt-3.5 [&>h2>button]:pb-0`
          )}
          aria-label={`FQAs ${index + 1}`}
          title={
            <span className={clsx(`text-default-900 text-[1.0625rem] font-semibold`)}>{item.question}</span>
          }
        >
          <span className={clsx(`text-default-800 text-medium`)}>{item.answer}</span>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
