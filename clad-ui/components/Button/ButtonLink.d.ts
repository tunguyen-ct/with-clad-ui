export default ButtonLink;
/**
 * Hyperlinks (anchor tags) that appear like buttons. It has the same props list as [Button component](/docs/components-button--docs)
 * except the `as` prop is always `a`.
 *
 * `🧪Beta`
 *
 * @type {React.ForwardRefExoticComponent< import('../../types').NextLink & {
 *   color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'critical' | 'caution' | 'positive' | 'info',
 *   radius?: 'normal' | 'pill' | 'circle',
 *   size?: 'small' | 'medium' | 'large',
 *   variant?: 'solid' | 'outline',
 *   weight?: 'normal' | 'bold',
 *   children?: any,
 *   disabled?: boolean,
 *   extraClasses?: string
 * }>}
 */
declare const ButtonLink: React.ForwardRefExoticComponent<import('../../types').NextLink & {
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'critical' | 'caution' | 'positive' | 'info';
    radius?: 'normal' | 'pill' | 'circle';
    size?: 'small' | 'medium' | 'large';
    variant?: 'solid' | 'outline';
    weight?: 'normal' | 'bold';
    children?: any;
    disabled?: boolean;
    extraClasses?: string;
}>;
import React from "react";
