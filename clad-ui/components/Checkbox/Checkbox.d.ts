export default Checkbox;
/**
 * Renders a checkbox element.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   id?: string,
 *   className?: string,
 *   name?: string,
 *   value?: string,
 *   checked?: boolean
 *   label?: string,
 *   color?: string,
 *   disabled?: boolean,
 *   onChange?: import('react').ChangeEventHandler<HTMLInputElement>,
 * }>}
 */
declare const Checkbox: React.FC<{
    id?: string;
    className?: string;
    name?: string;
    value?: string;
    checked?: boolean;
    label?: string;
    color?: string;
    disabled?: boolean;
    onChange?: import('react').ChangeEventHandler<HTMLInputElement>;
}>;
import React from "react";
