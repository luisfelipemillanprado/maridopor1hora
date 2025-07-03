import { Card, CardFooter, Image } from '@heroui/react';
import clsx from 'clsx';
/**
 * @description - Displays a finished work card with a background image and a footer containing descriptive text.
 * @param props - The component props.
 * @param props.imageUrl - The URL of the image to display as the card background.
 * @param props.text - The text to display in the card footer.
 */
export default function FinishedWork(props) {
    const { imageUrl, text } = props;
    return (<Card isFooterBlurred isPressable className={clsx(`col-span-6`, `4xl:col-span-4`)} shadow={`md`}>
      <Image removeWrapper alt={`Work ${text} completed satisfactorily`} className={clsx(`z-0 h-full w-full object-cover`)} src={imageUrl}/>
      <CardFooter className={clsx(`absolute bottom-0 z-10 bg-black/0 px-3 py-1`, `3xl:py-2`)}>
        <span className={clsx(`text-default-50 text-medium font-bold`, `2xl:text-large 3xl:text-[1.1875rem]`)}>
          {text}
        </span>
      </CardFooter>
    </Card>);
}
