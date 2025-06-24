import Certification from '@/features/home/components/atoms/Certification'
import clsx from 'clsx'

export default function Certifications(props: { imageUrls: { imageUrl: string; key: number }[] }) {
  const { imageUrls } = props
  return (
    <div className={clsx(`horizontal h-auto w-full justify-between py-8`)}>
      {imageUrls.map((item, index) => (
        <Certification key={item.key} {...{ href: item.imageUrl, index }} />
      ))}
    </div>
  )
}
