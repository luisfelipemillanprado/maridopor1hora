import Image from 'next/image';
import clsx from 'clsx';
import blurEffects from '@/utils/blurs/Blurs';
/**
 * @description - Renders a certification image inside a horizontal container.
 * @param props - The component props.
 * @param props.href - The source URL of the certification image.
 * @param props.index - The index of the certification, used for the alt text.
 */
export default function Certification(props) {
    const { href, index } = props;
    return (<div className={clsx(`h-auto w-auto ${index == 3 ? 'hidden' : 'flex flex-row'}`, `${index == 3 ? '3xl:flex 3xl:flex-row' : ''}`)}>
      <Image src={href} width={48} height={48} placeholder={`blur`} blurDataURL={blurEffects.blurUrl} className={clsx(`${index == 0 ? 'h-14 w-14' : ''}`, `${index == 0 ? '3xl:h-[4.125rem] 3xl:w-[4.125rem] xl:h-16 xl:w-16' : ''}`, 
        // --
        `${index == 1 ? 'h-12 w-12' : ''}`, `${index == 1 ? 'xl:h-[3.3125rem] xl:w-[3.3125rem]' : ''}`, 
        // --
        `${index == 2 ? 'h-[4.1875rem] w-[4.1875rem]' : ''}`, `${index == 2 ? 'xl:h-20 xl:w-20' : ''}`, 
        // --
        `${index == 3 ? 'hidden h-16 w-16' : ''}`, `${index == 3 ? '3xl:flex 3xl:flex-row' : ''}`, 
        // --
        `${index == 4 ? 'h-8 w-24' : ''}`, `${index == 4 ? 'xl:h-9 xl:w-[6.5625rem]' : ''}`)} alt={`Certification ${index + 1}`}/>
    </div>);
}
