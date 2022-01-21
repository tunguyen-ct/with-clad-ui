import theme from '@clad-ui/theme';
import React, { useRef } from 'react';
import { cx } from 'linaria';
import PropTypes from 'prop-types';
import { Container, TextAreaWrapper, StyledTextArea, Paragraph } from './TextArea.styles';

const { sizes } = theme;

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
const TextArea = ({
  id,
  name,
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
  resize,
  lines,
  placeholder,
  inputMode,
  width,
  characterLimit,
}) => {
  const defaultInputRef = useRef();
  const ref = inputRef || defaultInputRef;

  const className = cx(value && 'hasValue', required && 'required');
  const attrs = {
    className,
    ref,
    onChange,
    onBlur,
    onFocus,
    value,
    disabled,
    inputMode,
  };

  if (id) attrs.id = id;
  if (name) attrs.name = name;
  if (placeholder) attrs.placeholder = placeholder;
  if (characterLimit) attrs.maxLength = characterLimit;

  const isWithError = status === 'error';
  const resizable = ['both', 'horizontal', 'vertical'].includes(resize);
  const wrapperClassname = cx(
    disabled && 'disabled',
    isWithError && 'error',
    resizable && `resize-${resize}`
  );
  const containerWidth = sizes[width] || 'initial';
  // padding-top: 11px, padding-bottom: 3px, border-top-bottom: 2px => 16
  // label (before float): 20px, each lines: 20px => (lines + 1) * 20
  const wrapperHeight = 16 + (lines + 1) * 20 + 'px';

  const onEmptySpaceClicked = () => {
    ref.current.focus();
  };

  return (
    <Container containerWidth={containerWidth}>
      <TextAreaWrapper className={wrapperClassname} wrapperHeight={wrapperHeight}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div className="focus-capture" onClick={onEmptySpaceClicked} />
        <StyledTextArea {...attrs} />
        {label && <label htmlFor={id}>{label}</label>}
      </TextAreaWrapper>
      <Paragraph>{helptext}</Paragraph>
    </Container>
  );
};

const keysOfSizes = Object.keys(sizes);

TextArea.propTypes = {
  /**
   * TextArea name
   */
  name: PropTypes.string,
  /**
   * TextArea label
   */
  label: PropTypes.string,
  /**
   * TextArea ref (implement with useRef() hooks)
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  /**
   * The TextArea content value
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
   * Disabled TextArea
   */
  disabled: PropTypes.bool,
  /**
   * Whether this TextArea is required or not
   */
  required: PropTypes.bool,
  /**
   * The id of TextArea.
   */
  id: PropTypes.string,
  /**
   * TextArea status (useful when implemented with form validation)
   */
  status: PropTypes.oneOf(['error', 'default']),
  /**
   * Promp a helptext below TextArea (useful when implemented with form validation)
   */
  helptext: PropTypes.string,
  /**
   * Allow user to resize TextArea
   */
  resize: PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),
  /**
   * Number of lines
   */
  lines: PropTypes.number,
  /**
   * TextArea placeholder
   */
  placeholder: PropTypes.string,
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
   * TextArea width
   */
  width: PropTypes.oneOf(keysOfSizes),
  /**
   * Maximum number of characters allowed. 0, null and undefined mean no limitation
   */
  characterLimit: PropTypes.number,
};

TextArea.defaultProps = {
  name: '',
  label: '',
  inputRef: null,
  value: '',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  disabled: false,
  required: false,
  id: '',
  status: 'default',
  helptext: '',
  resize: 'none',
  lines: 5,
  placeholder: '',
  inputMode: 'text',
  width: 'full',
  characterLimit: 0,
};

export default TextArea;
