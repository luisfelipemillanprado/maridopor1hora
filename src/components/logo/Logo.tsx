import Image from 'next/image'
// --
export default function Logo() {
  return (
    <div className={`w-auto h-auto horizontal justify-center`}>
      <Image
        className={`horizontal justify-center`}
        width={30}
        height={30}
        src={'logo.svg'}
        alt={`Logo's team`}
      />
    </div>
  )
}
