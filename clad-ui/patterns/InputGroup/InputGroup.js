import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'linaria';
import { Wrapper, Paragraph } from './InputGroup.styles';

/**
 * Input Group is a pattern that allow grouping Inputs, Buttons and Dropdowns together.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   children?: any,
 *   helptext?: string,
 *   status?: string,
 * }>}
 */
const InputGroup = ({ children, status, helptext }) => {
  const isWithError = status === 'error';
  const wrapperClassname = cx(isWithError && 'error');

  return (
  <>
    <Wrapper className={wrapperClassname}>
      {children}
    </Wrapper>
    <Paragraph>{helptext}</Paragraph>
  </>
  );
};


InputGroup.propTypes = {
  /**
   * Input group content
   */
  children: PropTypes.node.isRequired,
  /**
   * Input group status (useful when implemented with form validation)
   */
  status: PropTypes.oneOf(['error', 'default']),
  /**
   * Promp a helptext below input group (useful when implemented with form validation)
   */
  helptext: PropTypes.string,
};

InputGroup.defaultProps = {
  status: 'default',
  helptext: '',
};

export default InputGroup;
