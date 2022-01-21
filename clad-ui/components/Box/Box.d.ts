export default Box;
/**
 * @param {string | string[]} value
 * @param {string} defaultValue
 */
export function getSpaces(value: string | string[], defaultValue: string): any[];
/**
 * @param {string | string[]} value
 * @param {string} defaultValue
 */
export function getSizes(value: string | string[], defaultValue: string): any[];
/**
 * @param {string | string[]} value
 * @param {string} defaultValue
 */
export function getBorderWidth(value: string | string[], defaultValue: string): string[];
/**
 * @param {string | string[]} value
 * @param {string} defaultValue
 */
export function getRadiis(value: string | string[], defaultValue: string): any[];
/**
 * @param {string | string[]} value
 * @param {string} defaultValue
 */
export function getShadows(value: string | string[], defaultValue: string): any[];
/**
 * Clad-UI-s theme-aware replacement for \<div \/\> HTML element
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   as?: any,
 *   className?: string,
 *   borderColor?: string,
 *   alignItems?: string,
 *   justifyContent?: string,
 *   textAlign?: string,
 *   color: string,
 *   backgroundColor?: string,
 *   backgroundImage?: string,
 *   style?: any,
 *   padding?: string | string[],
 *   paddingx?: string | string[],
 *   paddingy?: string | string[],
 *   width?: string | string[],
 *   maxWidth?: string | string[],
 *   height?: string | string[],
 *   borderWidth?: string | string[],
 *   borderRadius?: string | string[],
 *   boxShadow?: string | string[],
 *   children?: any,
 *   dangerousHtml?: string,
 * }>}
 */
declare const Box: React.FC<{
    as?: any;
    className?: string;
    borderColor?: string;
    alignItems?: string;
    justifyContent?: string;
    textAlign?: string;
    color: string;
    backgroundColor?: string;
    backgroundImage?: string;
    style?: any;
    padding?: string | string[];
    paddingx?: string | string[];
    paddingy?: string | string[];
    width?: string | string[];
    maxWidth?: string | string[];
    height?: string | string[];
    borderWidth?: string | string[];
    borderRadius?: string | string[];
    boxShadow?: string | string[];
    children?: any;
    dangerousHtml?: string;
}>;
import React from "react";
