import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'linaria';
import StyledCheckbox from '../Checkbox/Checkbox.styles';

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
const RadioButton = ({ id, className, name, value, checked, label, color, disabled, onChange }) => {
  const type = 'radio';
  const inputAttrs = {
    id,
    name,
    value,
    defaultChecked: checked,
    type,
    disabled,
    onChange,
  };

  const radioClasses = cx(className, disabled && 'disabled', label && 'withLabel', color);

  return (
    // reuse styles from checkbox
    <StyledCheckbox className={radioClasses}>
      <input {...inputAttrs} />
      <span className={type} />
      {label}
    </StyledCheckbox>
  );
};

RadioButton.propTypes = {
  /**
   * Radio button id
   */
  id: PropTypes.string,
  /**
   * Radio button className
   */
  className: PropTypes.string,
  /**
   * Radio button name
   */
  name: PropTypes.string,
  /**
   * Radio button value
   */
  value: PropTypes.string,
  /**
   * Whether this radio button is checked initially or not
   */
  checked: PropTypes.bool,
  /**
   * Radio button label
   */
  label: PropTypes.string,
  /**
   * Change radio buttons active state color
   */
  color: PropTypes.oneOf([
    'neutral',
    'primary',
    'secondary',
    'accent',
    'critical',
    'caution',
    'positive',
    'info',
  ]),
  /**
   * Whether this Radio button is disabled initially or not
   */
  disabled: PropTypes.bool,
  /**
   * Change event
   */
  onChange: PropTypes.func,
};

RadioButton.defaultProps = {
  id: '',
  className: '',
  name: '',
  value: '',
  checked: false,
  label: '',
  color: 'primary',
  disabled: false,
  onChange: null,
};

export default RadioButton;
