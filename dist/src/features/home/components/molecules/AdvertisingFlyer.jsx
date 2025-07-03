'use client';
import { Card, CardHeader, CardBody, Button, Link } from '@heroui/react';
import Image from 'next/image';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import blurEffects from '@/utils/blurs/Blurs';
import clsx from 'clsx';
export default function AdvertisingFlyer(props) {
    const { title, text, buttonText, imageUrl, href } = props;
    return (<Card className={clsx(`gap-y-4.5 px-6 pt-6`, `from-content9 via-content9 to-warning bg-gradient-to-br from-25% via-30% to-80%`, `3xl:flex 3xl:flex-row 3xl:flex-nowrap 3xl:gap-x-10`)}>
      <CardHeader className={clsx(`flex flex-col items-center gap-y-2.5 px-0 py-0`, `3xl:w-1/2 3xl:items-start 3xl:pt-1`)}>
        <h3 className={clsx(`text-default-900 text-[1.3125rem] font-extrabold text-shadow-sm`, `3xl:text-[1.375rem]`)}>
          {title}
        </h3>
        <p className={clsx(`text-default-800 text-medium text-center`, `3xl:text-start 2xl:text-[1.0625rem]`)}>
          {text}
        </p>
        <Button isExternal as={Link} href={href} className={clsx(`bg-content5 mt-2`, `3xl:mt-2 3xl:h-11`)} endContent={<PaperAirplaneIcon className={clsx(`fill-default-50 h-5.5 w-5.5`)}/>} variant={`shadow`} size={`md`} aria-label={`Service Reservation`}>
          <span className={clsx(`text-default-50 text-medium`, `2xl:text-[1.0625rem]`)}>{buttonText}</span>
        </Button>
      </CardHeader>
      <CardBody className={clsx(`flex flex-row justify-center px-1 pt-2 pb-0`, `3xl:w-1/2 3xl:h-52 3xl:justify-start`)}>
        <Image className={clsx(`h-full w-full rounded-t-xl rounded-b-none object-cover`)} src={imageUrl} width={260} height={260} placeholder={`blur`} blurDataURL={blurEffects.blurUrl} alt={`Advertising flyer`}/>
      </CardBody>
    </Card>);
}
