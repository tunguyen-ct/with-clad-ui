import theme from '@clad-ui/theme';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'linaria';
import formatValue from './utils/_formatValue';
import cleanValue from './utils/_cleanValue';

import inputClasses, {
  Container,
  inputFocusClasses,
  InputWrapper,
  Paragraph,
  SuffixWrapper,
} from './CurrencyInput.styles.js';

const { sizes } = theme;

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
const CurrencyInput = ({
  id,
  name,
  label,
  value,
  onChange,
  onFormatChange,
  onBlur,
  onFocus,
  disabled,
  required,
  status,
  helptext,
  inputRef,
  width,
  suffix,
  allowNegativeValue,
  separator,
  decimalSeparator,
  maxDigits,
  decimalsLimit,
}) => {

  const formatValueOptions = {
    decimalSeparator,
    separator,
    suffix,
  };

  const formattedStateValue =
    value !== undefined ? formatValue({ ...formatValueOptions, value: String(value) }) : '';

  const cleanValueOptions = {
    decimalSeparator,
    separator,
    decimalsLimit,
    allowNegativeValue,
  };

  const [toggleSuffix, setToggleSuffix] = useState(false);
  const [stateValue, setStateValue] = useState(formattedStateValue);
  const [dirty, setDirty] = useState(false);
  const [cursor, setCursor] = useState(0);
  const defaultInputRef = useRef();
  const ref = inputRef || defaultInputRef;

  // Prevent cursor jumping if editing value
  useEffect(() => {
    if (dirty && stateValue !== '-' && ref && typeof ref === 'object' && ref.current) {
      ref.current.setSelectionRange(cursor, cursor);
    }
  }, [stateValue, cursor, ref, dirty]);

  const className = cx(
    inputClasses,
    inputFocusClasses,
    value && 'hasValue',
    !label && 'noLabel',
    required && 'required'
  );

  const isValidWithMaxDigits = useCallback((valueInput) => {
    let valueToComapre = valueInput;

    if (allowNegativeValue) {
      valueToComapre = valueToComapre.replace('-', '');
    }

    if (decimalsLimit > 0) {
      valueToComapre = valueToComapre.replace(decimalSeparator, '');
    }

    return valueToComapre.length <= maxDigits;
  }, [allowNegativeValue, decimalsLimit, decimalSeparator, maxDigits]);

  const processFormatChange = (inputValue, selectionStart, formatChange) => {
    setDirty(true);
    const valueOnly = cleanValue({ value: inputValue, ...cleanValueOptions });

    if (valueOnly === '') {
      if (formatChange) {
        formatChange(undefined);
      }
      setStateValue('');
      return;
    }

    if (!isValidWithMaxDigits(valueOnly)) {
      return;
    }

    if (valueOnly === '-' || valueOnly === decimalSeparator) {
      if (formatChange) {
        formatChange(undefined);
      }
      setStateValue(inputValue);
      return;
    }

    const formattedValue = formatValue({ value: valueOnly, ...formatValueOptions });

    if (selectionStart !== undefined && selectionStart !== null) {
      // Prevent cursor jumping
      const newCursor = selectionStart + (formattedValue.length - inputValue.length) || 1;
      setCursor(newCursor);
    }

    setStateValue(formattedValue);

    if (formatChange) {
      let changedValue = formattedValue;
      if (+valueOnly === 0) {
        changedValue = '0';
      }
      formatChange(changedValue);
    }
  };

  const handleChange = useCallback((e) => {
    const {
      target: { value: targetValue, selectionStart },
    } = e;

    processFormatChange(targetValue, selectionStart, onFormatChange);

    if (onChange) {
      let valueOnly = cleanValue({ value: targetValue, ...cleanValueOptions });

      if (isValidWithMaxDigits(valueOnly)) {
        if (decimalSeparator && stateValue.includes(decimalSeparator)) {
          valueOnly = valueOnly.replace(decimalSeparator, '.');
        }
        onChange({ ...e, target: { value: valueOnly } });
      }
    }
  }, [stateValue, onFormatChange, onChange]);

  const handleBlur = useCallback((e) => {
    if (!stateValue) {
      setToggleSuffix(false);
    }
    const {
      target: { value: targetValue },
    } = e;

    const valueOnly = cleanValue({ value: targetValue, ...cleanValueOptions });

    if (valueOnly === '-' || !valueOnly) {
      setStateValue('');
      if (onBlur) {
        onBlur(e);
      }
      return;
    }
    const formattedValue = formatValue({
      ...formatValueOptions,
      value: valueOnly,
    });

    setStateValue(formattedValue);

    onBlur(e);
  }, [stateValue, onBlur]);

  const handleFocus = useCallback((e) => {
    setToggleSuffix(true);
    onFocus(e);
  }, [onFocus]);

  const formattedPropsValue =
    value !== undefined
      ? formatValue({
          ...formatValueOptions,
          value: String(value),
        })
      : undefined;

  const attrs = {
    className,
    onChange: (/** @type {Object} */ e) => handleChange(e),
    onBlur: (/** @type {Object} */ e) => handleBlur(e),
    onFocus: (/** @type {Object} */ e) => handleFocus(e),
    value:
      formattedPropsValue !== undefined && stateValue !== '-' && stateValue !== decimalSeparator
        ? formattedPropsValue
        : stateValue,
  };

  if (id) attrs.id = id;
  if (name) attrs.name = name;
  if (disabled) attrs.disabled = 'disabled';

  // The clear/Show-password/Status icons will not be able to displayed at the same time.
  const isWithError = status === 'error';

  const containerWidth = sizes[width] || 'initial';
  const wrapperClassname = cx(disabled && 'disabled', isWithError && 'error');

  return (
    <Container containerWidth={containerWidth}>
      <InputWrapper className={wrapperClassname}>
        <input type="text" inputMode="decimal" {...attrs} ref={ref} />
        {label && <label htmlFor={id}>{label}</label>}
        {suffix && (toggleSuffix || value) && (
          <SuffixWrapper>
            <span>{suffix}</span>
          </SuffixWrapper>
        )}
      </InputWrapper>
      <Paragraph>{helptext}</Paragraph>
    </Container>
  );
};

const keysOfSizes = Object.keys(sizes);

CurrencyInput.propTypes = {
  /**
   * Input name
   */
  name: PropTypes.string,
  /**
   * Input label
   */
  label: PropTypes.string,
  /**
   * Input ref (implement with useRef() hooks)
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  /**
   * The input content value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Callback when user input. Return event value with numeric value in string. eg: 1200.25
   */
  onChange: PropTypes.func,
  /**
   * Callback when user input. Return formatted value. eg: 1.200,25
   */
  onFormatChange: PropTypes.func,
  /**
   * Callback when user blur
   */
  onBlur: PropTypes.func,
  /**
   * Callback when user focus
   */
  onFocus: PropTypes.func,
  /**
   * Disabled input
   */
  disabled: PropTypes.bool,
  /**
   * Whether this input is required or not
   */
  required: PropTypes.bool,
  /**
   * The id of input
   */
  id: PropTypes.string,
  /**
   * Input status (useful when implemented with form validation)
   */
  status: PropTypes.oneOf(['error', 'default']),
  /**
   * Promp a helptext below input (useful when implemented with form validation)
   */
  helptext: PropTypes.string,
  /**
   * Input width
   */
  width: PropTypes.oneOf(keysOfSizes),
  /**
   * Suffix. eg: đ, $ or £,...
   */
  suffix: PropTypes.string,
  /**
   * Separator between thousand, million and billion
   */
  separator: PropTypes.string,
  /**
   * Separator between integer part and fractional part of value
   */
  decimalSeparator: PropTypes.string,
  /**
   * Maximum digits the user can enter.eg: 123,456 (maxDigits = 6)
   */
  maxDigits: PropTypes.number,
  /**
   * Limit length of decimals allowed. Not allow decimals if limit = 0. eg: 123,2222 (decimalsLimit = 4)
   */
  decimalsLimit: PropTypes.number,
  /**
   *  Allow negative value
   */
  allowNegativeValue: PropTypes.bool,
};

CurrencyInput.defaultProps = {
  name: '',
  label: '',
  inputRef: null,
  value: '',
  onChange: () => {},
  onFormatChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  disabled: false,
  required: false,
  id: '',
  status: 'default',
  helptext: '',
  width: 'full',
  suffix: 'đ',
  allowNegativeValue: false,
  separator: '.',
  decimalSeparator: ',',
  maxDigits: 12,
  decimalsLimit: 0,
};

export default CurrencyInput;
