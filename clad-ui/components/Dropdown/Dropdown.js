import theme from '@clad-ui/theme';
import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'linaria';
import noop from '../../utils/noop';
import ArrowDownB from '../../icons/ArrowDownB';

import inputClasses, { Container, InputWrapper, Paragraph } from '../Input/Input.styles.js';

const { sizes } = theme;

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
const Dropdown = ({
  className,
  id,
  name,
  label,
  value,
  onClick,
  onChange,
  onBlur,
  onFocus,
  disabled,
  required,
  status,
  helptext,
  inputRef,
  options,
  width,
}) => {
  const defaultDropdownRef = React.useRef();
  const ref = inputRef || defaultDropdownRef;

  const selectClassName = cx(
    inputClasses,
    'isDropdown',
    value && 'hasValue',
    !label && 'noLabel',
    required && 'required'
  );

  /**
   * @type {{[key: string]: any }}
   */
  const attrs = {
    onMouseDown: onClick,
    onChange,
    onBlur,
    onFocus,
    value,
  };

  if (id) attrs.id = id;
  if (name) attrs.name = name;
  if (disabled) attrs.disabled = 'disabled';

  const isWithError = status === 'error';
  const containerWidth = sizes[width] || 'initial';

  const selectOptions = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  // guiding option
  selectOptions.unshift(
    <option key="_label" disabled value="">
      {label}
    </option>
  );

  // dropdown has no display value initially
  selectOptions.unshift(
    <option key="_initial-value" hidden value="">
      {}
    </option>
  );

  return (
    <Container containerWidth={containerWidth} className={className}>
      <InputWrapper className={cx('wrapper', disabled && 'disabled', isWithError && 'error')}>
        <select className={'select ' + selectClassName} ref={ref} {...attrs}>
          {selectOptions}
        </select>
        {label && (
          <label className="label" htmlFor={id}>
            {label}
          </label>
        )}
        <ArrowDownB className="arrow" />
      </InputWrapper>
      <Paragraph className="helptext">{helptext}</Paragraph>
    </Container>
  );
};

const keysOfSizes = Object.keys(sizes);

Dropdown.propTypes = {
  /**
   * Custom class to override dropdown's style.
   */
  className: PropTypes.string,
  /**
   * Dropdown name
   */
  name: PropTypes.string,
  /**
   * Dropdown label
   */
  label: PropTypes.string,
  /**
   * Dropdown ref (implement with useRef() hooks)
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  /**
   * The Dropdown content value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Callback when user click / tap on the input
   */
  onClick: PropTypes.func,
  /**
   * Callback when user input
   */
  onChange: PropTypes.func,
  /**
   * Callback when user blur
   */
  onBlur: PropTypes.func,
  /**
   * Callback when user focus
   */
  onFocus: PropTypes.func,
  /**
   * Disabled dropdown
   */
  disabled: PropTypes.bool,
  /**
   * Whether this input is required or not
   */
  required: PropTypes.bool,
  /**
   * The id of dropdown.
   */
  id: PropTypes.string,
  /**
   * Dropdown status (usefull when implemented with form validation)
   */
  status: PropTypes.oneOf(['error', 'default']),
  /**
   * Promp a helptext below dropdown (usefull when implemented with form validation)
   */
  helptext: PropTypes.string,
  /**
   * Dropdown options. Options is an array and each array item is an object with shape of `{value: string, label: string}`.
   */
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  /**
   * Dropdown width
   */
  width: PropTypes.oneOf(keysOfSizes),
};

Dropdown.defaultProps = {
  className: '',
  name: '',
  label: '',
  inputRef: null,
  value: '',
  onClick: noop,
  onChange: noop,
  onBlur: noop,
  onFocus: noop,
  disabled: false,
  required: false,
  id: '',
  status: 'default',
  helptext: '',
  options: [],
  width: 'full',
};

export default Dropdown;
