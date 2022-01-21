export default RadioButton;
/**
 * Renders a radio button element.
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
declare const RadioButton: React.FC<{
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
