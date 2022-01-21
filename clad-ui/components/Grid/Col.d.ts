export default Col;
export type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12;
/**
 * @typedef { 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 } Cols
 */
export function getWidthByPctFromSpan(span: any): string;
export function getSpans(span: any, defaultValue: any): string[];
/**
 * Col component mimic flexbox item
 *
 * `🧪Beta`
 *
 * @type { React.FC<{
 *   span?: Cols | Cols[],
 *   offset?: number | number[],
 *   align?: 'start' | 'end' | 'center' | 'initial',
 *   order?: Cols | 'first' | 'last' | 'initial',
 *   className?: string,
 *   children: any,
 * }> }
 */
declare const Col: React.FC<{
    span?: Cols | Cols[];
    offset?: number | number[];
    align?: 'start' | 'end' | 'center' | 'initial';
    order?: Cols | 'first' | 'last' | 'initial';
    className?: string;
    children: any;
}>;
import React from "react";
