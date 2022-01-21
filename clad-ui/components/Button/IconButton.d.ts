export default IconButton;
/**
 * Icons as interactive buttons / links. It has the same props list as [Button component](/docs/components-shapeicon--docs)
 *
 * `🧪Beta`
 *
 * @type {React.FC< import('../../types').NextLink & {
 *   as?: any,
 *   color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'critical' | 'caution' | 'positive' | 'info',
 *   disabled?: boolean,
 *   extraClasses?: string,
 *   radius?: 'normal' | 'pill' | 'circle',
 *   size?: 'small' | 'medium' | 'large',
 *   variant?: 'solid' | 'outline',
 *   children?: any,
 * }>}
 */
declare const IconButton: React.FC<import('../../types').NextLink & {
    as?: any;
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'critical' | 'caution' | 'positive' | 'info';
    disabled?: boolean;
    extraClasses?: string;
    radius?: 'normal' | 'pill' | 'circle';
    size?: 'small' | 'medium' | 'large';
    variant?: 'solid' | 'outline';
    children?: any;
}>;
import React from "react";
