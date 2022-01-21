import theme from '@clad-ui/theme';
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'linaria';
import simulateChangeEvent from '../../utils/_simulateChangeEvent';
import Info from '../../icons/Info';

import inputClasses, {
  Container,
  InputClearIcon,
  inputFocusClasses,
  InputWrapper,
  Paragraph,
  TooltipWrapper,
} from './Input.styles.js';

const { sizes } = theme;

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
const Input = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled,
  required,
  status,
  helptext,
  inputRef,
  allowClear,
  showPassword,
  tooltip,
  i18n,
  inputMode,
  width,
}) => {
  const [isEnoughSpace, setIsEnoughSpace] = useState(true);
  const tooltipIconRef = useRef();
  const defaultInputRef = useRef();
  const showPasswordRef = useRef(null);
  const ref = inputRef || defaultInputRef;

  // check if viewport has enough space for tooltip
  useEffect(() => {
    /** @type {any} */
    const tooltipIconCurrent = tooltipIconRef?.current;
    if (tooltipIconCurrent) {
      const tooltipNumericWidth = parseInt(sizes.$sm, 10);
      const rightSpace = window.innerWidth - tooltipIconCurrent.getBoundingClientRect().right;
      if (rightSpace < tooltipNumericWidth) setIsEnoughSpace(false);
      else setIsEnoughSpace(true);
    }
  }, [tooltip]);

  const className = cx(
    inputClasses,
    inputFocusClasses,
    value && 'hasValue',
    !label && 'noLabel',
    required && 'required'
  );

  const handleClearInput = () => {
    if (allowClear) {
      simulateChangeEvent(ref, '');
    }
  };

  const handleShowPassword = () => {
    const { current: currentInput } = ref;
    const { current: passwordToggle } = showPasswordRef;
    if (currentInput.type === 'password') {
      currentInput.type = 'text';
      passwordToggle.innerText = i18n.hide;
    } else {
      currentInput.type = 'password';
      passwordToggle.innerText = i18n.show;
    }
  };

  let keyStroke;
  let selectAllCombination = false;
  /**
   * @param {object} event
   */
  const getKeyStroke = (event) => {
    keyStroke = event.key.toLowerCase(event.key);
    // metaKey for mac, ctrlKey for windows
    if ((event.metaKey && keyStroke === 'a') || (event.ctrlKey && keyStroke === 'a')) {
      selectAllCombination = true;
    }
  };

  // if user input is invalid, input value with type="number" will be an empty string
  // in this case we prevent calling onChange and keep the previous value
  // delete, backspace keys and ctrl + a combination followed by '-', '+' keys are still allowed
  /**
   * @param {object} event
   */
  const onNumberInputChange = (event) => {
    if (
      event.target.value !== '' ||
      keyStroke === 'backspace' ||
      keyStroke === 'delete' ||
      (selectAllCombination && keyStroke === '-') ||
      (selectAllCombination && keyStroke === '+')
    ) {
      onChange(event);
      selectAllCombination = false;
    }
  };

  // worst case is that the value is wrong from the start and we don't have previous value to keep
  // it stucks there leaving input value="" and will not trigger onChange while typing
  // for example: --2345
  // so we manually trigger onChange and force it to clear the wrong values
  /**
   * @param {object} event
   */
  const onNumberInputBlur = (event) => {
    onBlur(event);
    if (event.target.value === '') {
      // manually trigger onChange
      simulateChangeEvent(ref, '');
    }
  };

  const attrs = {
    className,
    type,
    onFocus,
    value,
    inputMode,
  };

  if (id) attrs.id = id;
  if (name) attrs.name = name;
  if (disabled) attrs.disabled = 'disabled';

  // The clear/Show-password will not be able to displayed at the same time.
  const isAllowClear = !showPassword && allowClear && value;
  const isShowPassword = type === 'password' && showPassword && value;
  const isWithError = status === 'error';
  const isWithTooltip = tooltip && (allowClear ? !value : true);

  const containerWidth = sizes[width] || 'initial';
  const wrapperClassname = cx(disabled && 'disabled', isWithError && 'error');
  const tooltipClassname = cx(
    isWithTooltip && isEnoughSpace && 'tooltip-right',
    isWithTooltip && !isEnoughSpace && 'tooltip-left'
  );

  return (
    <Container containerWidth={containerWidth}>
      <InputWrapper className={wrapperClassname}>
        <input
          {...attrs}
          onBlur={type === 'number' ? onNumberInputBlur : onBlur}
          onChange={type === 'number' ? onNumberInputChange : onChange}
          onKeyDown={type === 'number' ? getKeyStroke : undefined}
          ref={ref}
        />
        {label && <label htmlFor={id}>{label}</label>}
        {isAllowClear && (
          <button tabIndex={-1} type="button" onClick={handleClearInput}>
            <InputClearIcon />
          </button>
        )}
        {isShowPassword && (
          <button
            className="password"
            tabIndex={-1}
            type="button"
            onClick={handleShowPassword}
            ref={showPasswordRef}
          >
            {i18n.show}
          </button>
        )}
        {isWithTooltip && (
          <TooltipWrapper className={tooltipClassname}>
            <span ref={tooltipIconRef}>
              <Info />
            </span>
            <p>{tooltip}</p>
          </TooltipWrapper>
        )}
      </InputWrapper>
      <Paragraph>{helptext}</Paragraph>
    </Container>
  );
};

const keysOfSizes = Object.keys(sizes);

Input.propTypes = {
  /**
   * Input name
   */
  name: PropTypes.string,
  /**
   * The type of input
   */
  type: PropTypes.oneOf(['text', 'email', 'number', 'tel', 'password']),
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
   * If allow to remove input content with clear icon
   */
  allowClear: PropTypes.bool,
  /**
   * Input status (useful when implemented with form validation)
   */
  status: PropTypes.oneOf(['error', 'default']),
  /**
   * Promp a helptext below input (useful when implemented with form validation)
   */
  helptext: PropTypes.string,
  /**
   * Show entered password
   */
  showPassword: PropTypes.bool,
  /**
   * Show a icon that contains tooltip
   */
  tooltip: PropTypes.string,
  /**
   * Translations data for special inner button labels
   */
  i18n: PropTypes.shape({
    show: PropTypes.string,
    hide: PropTypes.string,
  }),
  /**
   * Enumerated attribute that hints at the type of data that might be entered by the user
   */
  inputMode: PropTypes.oneOf([
    'none',
    'text',
    'decimal',
    'numeric',
    'tel',
    'search',
    'email',
    'url',
  ]),
  /**
   * Input width
   */
  width: PropTypes.oneOf(keysOfSizes),
};

Input.defaultProps = {
  name: '',
  type: 'text',
  label: '',
  inputRef: null,
  value: '',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  disabled: false,
  required: false,
  id: '',
  allowClear: false,
  status: 'default',
  helptext: '',
  showPassword: false,
  tooltip: '',
  i18n: {
    show: 'Hiện',
    hide: 'Ẩn',
  },
  inputMode: 'text',
  width: 'full',
};

export default Input;
