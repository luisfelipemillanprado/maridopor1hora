import { Link, Button } from '@heroui/react';
import { EnvelopeIcon, PhoneIcon, MapIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
/**
 * @description - Renders a contact button with an icon and label.
 * @param props - The properties for the Contact component.
 * @param props.icon - The type of icon to display ("email", "phone", or "instagram").
 * @param props.href - The URL or link to navigate to when the button is clicked.
 * @param props.name - The display name or label for the contact method.
 */
export default function Contact(props) {
    var _a;
    const { icon, href, name } = props;
    const iconSwitch = (icon) => {
        switch (icon) {
            case `email`:
                return {
                    icon: <EnvelopeIcon className={clsx(`fill-warning h-5 w-5`)}/>,
                };
            case `phone`:
                return {
                    icon: <PhoneIcon className={clsx(`fill-warning h-5 w-5`)}/>,
                };
            case `instagram`:
                return {
                    icon: <MapIcon className={clsx(`fill-warning h-5 w-5`)}/>,
                };
        }
    };
    return (<Button isExternal as={Link} startContent={(_a = iconSwitch(icon)) === null || _a === void 0 ? void 0 : _a.icon} color={`default`} href={href} variant={`light`} size={`sm`}>
      <span className={clsx(`text-default-50 text-large`)}>{name}</span>
    </Button>);
}
