import ContactButton from '@/common/gcomponents/contactus/components/molecules/ContactButton';
import clsx from 'clsx';
/**
 * @description - A floating contact button component that displays a button fixed to the bottom-right corner of the screen.
 * @param props - The props object.
 * @param props.contactFloatButton - The configuration for the contact button.
 * @param props.contactFloatButton.imageUrl - The URL of the image to display on the button.
 * @param props.contactFloatButton.href - The hyperlink reference for the button action.
 */
export default function ContactFloatButton(props) {
    const { contactFloatButton } = props;
    return (<div className={clsx(`horizontal fixed right-4 bottom-4 z-50 h-auto w-auto justify-center`)}>
      <ContactButton {...{ imageUrl: contactFloatButton.imageUrl, href: contactFloatButton.href }}/>
    </div>);
}
