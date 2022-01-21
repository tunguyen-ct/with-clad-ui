export default SearchInput;
export type Option = {
    text: string;
    html: string;
    data?: any;
};
/**
 * @typedef {{text: string, html: string, data?: any}} Option
 */
/**
 * Search Input component that carefully takes care of accessibility
and allow keyboard controls.
 *
 * `🧪 Beta`
 *
 * @type {React.FC<{
 *   id?: string,
 *   name?: string,
 *   value: {text: string, selected: Option},
 *   options?: Option[],
 *   onInput?: (event: Event) => void,
 *   onSelect?: (event: Event) => void,
 *   onChange?: (event: Event) => void,
 *   allowClear?: boolean,
 *   disabled?: boolean,
 *   helptext?: string,
 *   inputMode?: "none" | "text" | "email" | "tel" | "decimal" | "numeric" | "search" | "url",
 *   inputRef?: any,
 *   label?: string,
 *   onBlur?: (event: any) => void,
 *   onFocus?: (event: any) => void,
 *   required?: boolean,
 *   status?: string,
 *   tooltip?: string,
 *   type?: string,
 *   width?: string,
 *   menuMaxHeight?: string,
 * }>}
 */
declare const SearchInput: React.FC<{
    id?: string;
    name?: string;
    value: {
        text: string;
        selected: Option;
    };
    options?: Option[];
    onInput?: (event: Event) => void;
    onSelect?: (event: Event) => void;
    onChange?: (event: Event) => void;
    allowClear?: boolean;
    disabled?: boolean;
    helptext?: string;
    inputMode?: "none" | "text" | "email" | "tel" | "decimal" | "numeric" | "search" | "url";
    inputRef?: any;
    label?: string;
    onBlur?: (event: any) => void;
    onFocus?: (event: any) => void;
    required?: boolean;
    status?: string;
    tooltip?: string;
    type?: string;
    width?: string;
    menuMaxHeight?: string;
}>;
import React from "react";
