export default Announcer;
/**
 * Announcer box is used to displayed system messages, which can be dismissed.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   open?: boolean,
 *   onClose?: import('react').MouseEventHandler,
 *   onButtonClick?: import('react').MouseEventHandler,
 *   title?: string,
 *   children?: any,
 *   type?: string,
 *   btnLabel?: string,
 *   compact?: boolean,
 *   dangerousHtml?: string,
 * }>}
 */
declare const Announcer: React.FC<{
    open?: boolean;
    onClose?: import('react').MouseEventHandler;
    onButtonClick?: import('react').MouseEventHandler;
    title?: string;
    children?: any;
    type?: string;
    btnLabel?: string;
    compact?: boolean;
    dangerousHtml?: string;
}>;
import React from "react";
