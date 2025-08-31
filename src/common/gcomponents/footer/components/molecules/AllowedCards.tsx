import CardAllowed from '@/common/gcomponents/footer/components/atoms/CardAllowed'
import clsx from 'clsx'

export default function AllowedCards(props: {
  text1: string
  allowedCards: { icon: string; key: number }[]
}) {
  const { text1, allowedCards } = props
  return (
    <div className={clsx(`vertical h-auto w-full gap-y-4`)}>
      <div className={clsx(`horizontal w-full justify-center`)}>
        <span className={clsx(`text-default-50 text-[1.1875rem]`, `xl:text-xl`)}>{text1}</span>
      </div>
      <div className={clsx(`horizontal w-full justify-center gap-x-3`)}>
        {allowedCards.map((item /*, index*/) => (
          <CardAllowed key={item.key} {...{ icon: item.icon }} />
        ))}
      </div>
    </div>
  )
}
