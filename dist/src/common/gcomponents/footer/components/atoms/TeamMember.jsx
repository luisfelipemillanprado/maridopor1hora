import { Avatar } from '@heroui/react';
import clsx from 'clsx';
/**
 * @description - Renders a team member avatar using the provided image source.
 * @param props - The properties for the TeamMember component.
 * @param props.src - The source URL of the team member's avatar image.
 */
export default function TeamMember(props) {
    const { src } = props;
    return (<Avatar className={clsx(`2xl:h-9 2xl:w-9`, `3xl:h-8 3xl:w-8`)} src={src} size={`sm`} color={`warning`}/>);
}
