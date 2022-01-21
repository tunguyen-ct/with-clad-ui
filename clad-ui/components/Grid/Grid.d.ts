export default Grid;
export function getWidthByPctFromRowCols(rowCols: any): string;
export function getColWidths(span: any, defaultValue: any): string[];
export function getSpaceValue(key: any): number;
export function getGutters(gutter: any, defaultValue: any): number[];
export function getSizesValue(key: any): any;
export function getContainerWidths(width: any, defaultValue: any): any[];
/**
 * Grid component mimic flexbox container
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   width?: "vW" | "vH" | "quarter" | "third" | "half" | "twoThird" | "threeQuarter" | "full",
 *   align?: 'start' | 'end' | 'center' | 'initial',
 *   justify?: 'start' | 'center' | 'end' | 'around' | 'between' | 'initial',
 *   rowCols?: number | number[],
 *   gutter?: string | string[],
 *   gutterx?: string | string[],
 *   guttery?: string | string[],
 *   className?: string,
 *   children?: any,
 * }>}
 */
declare const Grid: React.FC<{
    width?: "vW" | "vH" | "quarter" | "third" | "half" | "twoThird" | "threeQuarter" | "full";
    align?: 'start' | 'end' | 'center' | 'initial';
    justify?: 'start' | 'center' | 'end' | 'around' | 'between' | 'initial';
    rowCols?: number | number[];
    gutter?: string | string[];
    gutterx?: string | string[];
    guttery?: string | string[];
    className?: string;
    children?: any;
}>;
import React from "react";
