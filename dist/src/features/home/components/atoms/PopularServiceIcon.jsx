import { ClearIcon, ChipIcon, WaterDropIcon, AirConditionerIcon, CabinetIcon } from '@/utils/svgs/Svgs';
import clsx from 'clsx';
/**
 * @description - Enum representing the types of popular service icons.
 * @enum {string}
 * @property {string} CLEAR - Represents a cleaning service icon.
 * @property {string} ELECTRICIAN - Represents an electrician service icon.
 * @property {string} PLUMBING - Represents a plumbing service icon.
 * @property {string} AIRCONDITIONER - Represents an air conditioner service icon.
 * @property {string} FURNITURE - Represents a furniture service icon.
 */
export var PopularServiceIconType;
(function (PopularServiceIconType) {
    PopularServiceIconType["CLEAR"] = "clear";
    PopularServiceIconType["ELECTRICIAN"] = "electrician";
    PopularServiceIconType["PLUMBING"] = "plumbing";
    PopularServiceIconType["AIRCONDITIONER"] = "airconditioner";
    PopularServiceIconType["FURNITURE"] = "furniture";
})(PopularServiceIconType || (PopularServiceIconType = {}));
/**
 * @description - Returns the corresponding icon component based on the provided icon type.
 * @param icon - The string identifier for the desired icon, typically a value from `PopularServiceIconType`.
 * @returns A React element representing the selected icon, or a fallback element if the icon type is unrecognized.
 */
const iconSwitch = (icon) => {
    switch (icon) {
        case PopularServiceIconType.CLEAR:
            return <ClearIcon aria-label={`clear`} className={clsx(`fill-content9 h-7 w-7`)}/>;
        case PopularServiceIconType.ELECTRICIAN:
            return <ChipIcon aria-label={`electrician`} className={clsx(`fill-content9 h-7 w-7`)}/>;
        case PopularServiceIconType.PLUMBING:
            return <WaterDropIcon aria-label={`plumbing`} className={clsx(`fill-content9 h-7 w-7`)}/>;
        case PopularServiceIconType.AIRCONDITIONER:
            return <AirConditionerIcon aria-label={`airconditioner`} className={clsx(`fill-content9 h-7 w-7`)}/>;
        case PopularServiceIconType.FURNITURE:
            return <CabinetIcon aria-label={`furniture`} className={clsx(`fill-content9 h-7 w-7`)}/>;
        default:
            return <span aria-label={`icon-none`}>?</span>;
    }
};
/**
 * @description - Renders an icon based on the provided `icon` prop.
 * @param props - The component props.
 * @param props.icon - The name of the icon to render. Supported values.
 */
export default function PopularServiceIcon(props) {
    const { icon } = props;
    return <span className={clsx(`h-auto w-auto`)}>{iconSwitch(icon)}</span>;
}
