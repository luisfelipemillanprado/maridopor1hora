import clsx from 'clsx';
/**
 * @description - Renders a secondary description text inside a styled container.
 * @param props - The component props.
 * @param props.text - The description text to display.
 */
export default function SecondaryDescription(props) {
    const { text } = props;
    return (<div className={clsx(`horizontal h-auto w-full justify-center`)}>
      <p className={clsx(`text-default-50 text-center text-[0.9375rem]`)}>{text}</p>
    </div>);
}
