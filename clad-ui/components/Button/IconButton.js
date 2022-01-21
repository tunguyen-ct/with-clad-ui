import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

/**
 * Icons as interactive buttons / links. It has the same props list as [Button component](/docs/components-shapeicon--docs)
 *
 * `🧪Beta`
 *
 * @type {React.FC< import('../../types').NextLink & {
 *   as?: any,
 *   color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'critical' | 'caution' | 'positive' | 'info',
 *   disabled?: boolean,
 *   extraClasses?: string,
 *   radius?: 'normal' | 'pill' | 'circle',
 *   size?: 'small' | 'medium' | 'large',
 *   variant?: 'solid' | 'outline',
 *   children?: any,
 * }>}
 */
const IconButton = ({ as, ...props }) => {
  if (!(as === 'a' || as === 'button')) {
    throw new Error(
      `IconButton must be rendered as <a> or <button>. It is currently rendered as ${as}`
    );
  }
  return <Button icon as={as} {...props} />;
};

IconButton.propTypes = {
  /**
   * Different looks of button
   */
  variant: PropTypes.oneOf(['solid', 'outline']),
  /**
   * Color of the background (solid) or stroke (outline) of the button
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
   * Border radius
   */
  radius: PropTypes.oneOf(['normal', 'circle']),
  /**
   * Button's size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Whether this button is disabled. No events triggered.
   */
  disabled: PropTypes.bool,
  /**
   * Element or component to be rendered as
   */
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.node,
  extraClasses: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  as: 'a',
  color: 'primary',
  variant: 'solid',
  radius: 'normal',
  size: 'medium',
  children: null,
  disabled: false,
  extraClasses: null,
  onClick: null,
};

export default IconButton;
