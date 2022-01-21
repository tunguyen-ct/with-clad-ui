export default TagCloud;
/**
 * Tag Cloud pattern, including multiple Chip components
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   className?: string,
 *   options?: Array<{value: string, label: string}>,
 *   label?: string,
 *   value?: string | string[],
 *   onChange?: Function,
 *   required?: boolean,
 *   multiple?: boolean,
 *   maxSelection?: number,
 *   tagCloudRef?: any,
 *   status?: string,
 *   helptext?: string,
 * }>}
 */
declare const TagCloud: React.FC<{
    className?: string;
    options?: Array<{
        value: string;
        label: string;
    }>;
    label?: string;
    value?: string | string[];
    onChange?: Function;
    required?: boolean;
    multiple?: boolean;
    maxSelection?: number;
    tagCloudRef?: any;
    status?: string;
    helptext?: string;
}>;
import React from "react";
