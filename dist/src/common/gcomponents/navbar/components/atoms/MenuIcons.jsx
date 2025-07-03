import { IdentificationIcon, Cog8ToothIcon, BellAlertIcon, CloudArrowUpIcon, ShareIcon, ArrowUpOnSquareStackIcon, } from '@heroicons/react/24/outline';
import clsx from 'clsx';
/**
 * @description - Renders a menu icon based on the provided icon name.
 * @param props - The component props.
 * @param props.icon - The name of the icon to render. Supported values are:
 *   - 'info': Renders the IdentificationIcon.
 *   - 'alert': Renders the BellAlertIcon.
 *   - 'setting': Renders the Cog8ToothIcon.
 *   - 'link': Renders the ShareIcon.
 *   - 'upload': Renders the CloudArrowUpIcon.
 *   - 'logout': Renders the ArrowUpOnSquareStackIcon with a danger color.
 */
export default function MenuIcons(props) {
    var _a;
    const { icon } = props;
    const iconSwitch = (icon) => {
        switch (icon) {
            case 'info':
                return { icon: <IdentificationIcon className={clsx(`h-[1.375rem] w-[1.375rem]`)}/> };
            case 'alert':
                return { icon: <BellAlertIcon className={clsx(`h-[1.375rem] w-[1.375rem]`)}/> };
            case 'setting':
                return { icon: <Cog8ToothIcon className={clsx(`h-[1.375rem] w-[1.375rem]`)}/> };
            case 'link':
                return { icon: <ShareIcon className={clsx(`h-[1.375rem] w-[1.375rem]`)}/> };
            case 'upload':
                return { icon: <CloudArrowUpIcon className={clsx(`h-[1.375rem] w-[1.375rem]`)}/> };
            case 'logout':
                return {
                    icon: (<ArrowUpOnSquareStackIcon className={clsx(`h-[1.375rem] w-[1.375rem]`, 'text-danger')}/>),
                };
        }
    };
    return <span className={clsx(`h-auto w-auto`)}>{(_a = iconSwitch(icon)) === null || _a === void 0 ? void 0 : _a.icon}</span>;
}
