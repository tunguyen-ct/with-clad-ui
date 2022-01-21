export default Input;
/**
 * Text Input component that has floating label, caption, and info tooltip.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   id?: string,
 *   name?: string,
 *   type?: string,
 *   label?: string,
 *   value?: string | number,
 *   onChange?: import('react').ChangeEventHandler,
 *   onBlur?: import('react').FocusEventHandler,
 *   onFocus?: import('react').FocusEventHandler,
 *   disabled?: boolean,
 *   required?: boolean,
 *   status?: string,
 *   helptext?: string,
 *   inputRef?: any,
 *   allowClear?: boolean,
 *   showPassword?: boolean,
 *   tooltip?: string,
 *   i18n?: Object,
 *   inputMode?: "none" | "text" | "email" | "tel" | "decimal" | "numeric" | "search" | "url",
 *   width?: string,
 * }>}
 */
declare const Input: React.FC<{
    id?: string;
    name?: string;
    type?: string;
    label?: string;
    value?: string | number;
    onChange?: import('react').ChangeEventHandler;
    onBlur?: import('react').FocusEventHandler;
    onFocus?: import('react').FocusEventHandler;
    disabled?: boolean;
    required?: boolean;
    status?: string;
    helptext?: string;
    inputRef?: any;
    allowClear?: boolean;
    showPassword?: boolean;
    tooltip?: string;
    i18n?: any;
    inputMode?: "none" | "text" | "email" | "tel" | "decimal" | "numeric" | "search" | "url";
    width?: string;
}>;
import React from "react";
