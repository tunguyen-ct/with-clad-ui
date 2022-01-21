export default Dropdown;
/**
 * Dropdown component that wraps around HTML Select element
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   className?: string,
 *   id?: string | any,
 *   name?: string,
 *   label?: string,
 *   value?: string | number,
 *   onClick?: Function,
 *   onChange?: Function,
 *   onBlur?: Function,
 *   onFocus?: Function,
 *   disabled?: boolean,
 *   required?: boolean,
 *   status?: string,
 *   helptext?: string,
 *   inputRef?: any,
 *   options?: Array<{value: string, label: string}>,
 *   width?: string,
 * }>}
 */
declare const Dropdown: React.FC<{
    className?: string;
    id?: string | any;
    name?: string;
    label?: string;
    value?: string | number;
    onClick?: Function;
    onChange?: Function;
    onBlur?: Function;
    onFocus?: Function;
    disabled?: boolean;
    required?: boolean;
    status?: string;
    helptext?: string;
    inputRef?: any;
    options?: Array<{
        value: string;
        label: string;
    }>;
    width?: string;
}>;
import React from "react";
