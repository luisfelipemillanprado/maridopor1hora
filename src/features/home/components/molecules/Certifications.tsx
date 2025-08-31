import Certification from '@/features/home/components/atoms/Certification'
import clsx from 'clsx'

/**
 * @description - Renders a horizontal list of certification images.
 * @param props - The component props.
 * @param props.imageUrls - An array of objects containing image URLs and unique keys for each certification.
 */
export default function Certifications(props: { imageUrls: { imageUrl: string; key: number }[] }) {
  const { imageUrls } = props
  return (
    <div className={clsx(`horizontal h-auto w-full justify-between py-8`, `4xl:py-11`)}>
      {imageUrls.map((item, index) => (
        <Certification key={item.key} {...{ href: item.imageUrl, index }} />
      ))}
    </div>
  )
}
