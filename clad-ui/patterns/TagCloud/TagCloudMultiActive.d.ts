export default TagCloudMultiActive;
/**
 * @param {string | string[]} currentValue
 * @param {string[]} acceptableValues
 */
export function valueFilter(currentValue: string | string[], acceptableValues: string[]): string | string[];
/**
 * @param {string} key
 * @param {string | string[]} value
 * @param {number} maxSelection
 */
export function chipActiveValuesHandler(key: string, value: string | string[], maxSelection: number): string[];
/**
 * @type {React.FC<{
 *   className?: string,
 *   options?: Array<{value: string, label: string}>,
 *   label?: string,
 *   value?: string | string[],
 *   onChange?: Function,
 *   required?: boolean,
 *   maxSelection?: number,
 *   tagCloudRef?: any,
 *   status?: string,
 *   helptext?: string,
 * }>}
 */
declare const TagCloudMultiActive: React.FC<{
    className?: string;
    options?: Array<{
        value: string;
        label: string;
    }>;
    label?: string;
    value?: string | string[];
    onChange?: Function;
    required?: boolean;
    maxSelection?: number;
    tagCloudRef?: any;
    status?: string;
    helptext?: string;
}>;
import React from "react";
