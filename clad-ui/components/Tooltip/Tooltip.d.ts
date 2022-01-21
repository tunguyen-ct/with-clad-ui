export default Tooltip;
/**
 * Tooltip is a common graphical user interface that appears when user hovers a specific text or component to provide information that user needs to be aware of.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   children?: any,
 *   text?: string,
 *   dangerousHtml?: string,
 *   placement?: any,
 *   manual?: boolean,
 *   variant?: string,
 *   delayEnter?: string,
 *   delayLeave?: string,
 *   arrowOffset?: string,
 *   triggerOffset?: string,
 *   hoverable?: boolean,
 * }>}
 */
declare const Tooltip: React.FC<{
    children?: any;
    text?: string;
    dangerousHtml?: string;
    placement?: any;
    manual?: boolean;
    variant?: string;
    delayEnter?: string;
    delayLeave?: string;
    arrowOffset?: string;
    triggerOffset?: string;
    hoverable?: boolean;
}>;
import React from "react";
