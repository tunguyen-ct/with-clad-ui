export default TextArea;
/**
 * TextArea component that has floating label, caption and resizability.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   id?: string,
 *   name?: string,
 *   label?: string,
 *   value?: string | number,
 *   onChange?: Function,
 *   onBlur?: Function,
 *   onFocus?: Function,
 *   disabled?: boolean,
 *   required?: boolean,
 *   status?: string,
 *   helptext?: string,
 *   inputRef?: any,
 *   resize?: "none" | "both" | "horizontal" | "vertical",
 *   lines?: number,
 *   placeholder?: string,
 *   inputMode?: "none" | "text" | "email" | "tel" | "decimal" | "numeric" | "search" | "url",
 *   width?: string,
 *   characterLimit?: number,
 * }>}
 */
declare const TextArea: React.FC<{
    id?: string;
    name?: string;
    label?: string;
    value?: string | number;
    onChange?: Function;
    onBlur?: Function;
    onFocus?: Function;
    disabled?: boolean;
    required?: boolean;
    status?: string;
    helptext?: string;
    inputRef?: any;
    resize?: "none" | "both" | "horizontal" | "vertical";
    lines?: number;
    placeholder?: string;
    inputMode?: "none" | "text" | "email" | "tel" | "decimal" | "numeric" | "search" | "url";
    width?: string;
    characterLimit?: number;
}>;
import React from "react";
