export default Dialog;
/**
 * Dialog informs users about critical information or require decisions.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   className?: string,
 *   title?: string,
 *   children?: any,
 *   btnLabel?: string,
 *   mainIcon?: any,
 *   desktopSize?: string,
 *   open?: boolean,
 *   onClose?: import('react').MouseEventHandler,
 *   closeIcon?: any,
 *   onButtonClick?: import('react').MouseEventHandler,
 * }>}
 */
declare const Dialog: React.FC<{
    className?: string;
    title?: string;
    children?: any;
    btnLabel?: string;
    mainIcon?: any;
    desktopSize?: string;
    open?: boolean;
    onClose?: import('react').MouseEventHandler;
    closeIcon?: any;
    onButtonClick?: import('react').MouseEventHandler;
}>;
import React from "react";
