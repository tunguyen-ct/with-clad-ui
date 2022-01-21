export default CurrencyInput;
/**
 * CurrencyInput component allows users to input money amount with numeric keyboard,
 * automatic thousand separators, currency indicator
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   id?: string,
 *   name?: string,
 *   label?: string,
 *   value?: string | number,
 *   onChange?: Function,
 *   onFormatChange?: Function,
 *   onBlur?: Function,
 *   onFocus?: Function,
 *   disabled?: boolean,
 *   required?: boolean,
 *   status?: string,
 *   helptext?: string,
 *   inputRef?: any,
 *   width?: string,
 *   suffix?: string,
 *   allowNegativeValue?: boolean,
 *   separator?: string,
 *   decimalSeparator?: string,
 *   maxDigits?: number,
 *   decimalsLimit?: number,
 * }>}
 */
declare const CurrencyInput: React.FC<{
    id?: string;
    name?: string;
    label?: string;
    value?: string | number;
    onChange?: Function;
    onFormatChange?: Function;
    onBlur?: Function;
    onFocus?: Function;
    disabled?: boolean;
    required?: boolean;
    status?: string;
    helptext?: string;
    inputRef?: any;
    width?: string;
    suffix?: string;
    allowNegativeValue?: boolean;
    separator?: string;
    decimalSeparator?: string;
    maxDigits?: number;
    decimalsLimit?: number;
}>;
import React from "react";
