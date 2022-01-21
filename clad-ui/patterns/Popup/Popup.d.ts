export default Popup;
/**
 * @param {string | string[]} value
 * @param {string} defaultValue
 */
export function getSpaces(value: string | string[], defaultValue: string): any[];
/**
 * Popup is a pattern that allow sliding in supplement floating contents (such as filters) on top of current one.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   title?: string,
 *   children?: any,
 *   btnLabel?: string,
 *   desktopSize?: string,
 *   mobileSize?: string,
 *   open?: boolean,
 *   onClose?: import('react').MouseEventHandler,
 *   closeIcon?: any,
 *   rightIcon?: any,
 *   onRightIconClick?: import('react').MouseEventHandler,
 *   onButtonClick?: import('react').MouseEventHandler,
 *   padding?: string | string[],
 * }>}
 */
declare const Popup: React.FC<{
    title?: string;
    children?: any;
    btnLabel?: string;
    desktopSize?: string;
    mobileSize?: string;
    open?: boolean;
    onClose?: import('react').MouseEventHandler;
    closeIcon?: any;
    rightIcon?: any;
    onRightIconClick?: import('react').MouseEventHandler;
    onButtonClick?: import('react').MouseEventHandler;
    padding?: string | string[];
}>;
import React from "react";
