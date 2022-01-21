import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'linaria';
import StyledCheckbox from './Checkbox.styles';

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
const Checkbox = ({ id, className, name, value, checked, label, color, disabled, onChange }) => {
  const type = 'checkbox';
  const inputAttrs = {
    id,
    name,
    value,
    defaultChecked: checked,
    type,
    disabled,
    onChange,
  };

  const checkboxClasses = cx(className, disabled && 'disabled', label && 'withLabel', color);

  return (
    <StyledCheckbox className={checkboxClasses}>
      <input {...inputAttrs} />
      <span className={type} />
      {label}
    </StyledCheckbox>
  );
};

Checkbox.propTypes = {
  /**
   * Checkbox id
   */
  id: PropTypes.string,
  /**
   * Checkbox className
   */
  className: PropTypes.string,
  /**
   * Checkbox name
   */
  name: PropTypes.string,
  /**
   * Checkbox value
   */
  value: PropTypes.string,
  /**
   * Whether this checkbox is checked initially or not
   */
  checked: PropTypes.bool,
  /**
   * Checkbox label
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
   * Whether this checkbox is disabled initially or not
   */
  disabled: PropTypes.bool,
  /**
   * Change event
   */
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
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

export default Checkbox;
