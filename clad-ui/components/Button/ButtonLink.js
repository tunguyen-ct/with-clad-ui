import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

/**
 * Hyperlinks (anchor tags) that appear like buttons. It has the same props list as [Button component](/docs/components-button--docs)
 * except the `as` prop is always `a`.
 *
 * `🧪Beta`
 *
 * @type {React.ForwardRefExoticComponent< import('../../types').NextLink & {
 *   color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'critical' | 'caution' | 'positive' | 'info',
 *   radius?: 'normal' | 'pill' | 'circle',
 *   size?: 'small' | 'medium' | 'large',
 *   variant?: 'solid' | 'outline',
 *   weight?: 'normal' | 'bold',
 *   children?: any,
 *   disabled?: boolean,
 *   extraClasses?: string
 * }>}
 */
const ButtonLink = React.forwardRef((props, ref) => <Button {...props} as="a" ref={ref} />);

ButtonLink.propTypes = {
  /**
   * Target URL
   */
  href: PropTypes.string.isRequired,

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
  radius: PropTypes.oneOf(['normal', 'pill']),
  /**
   * Font weight of label
   */
  weight: PropTypes.oneOf(['normal', 'bold']),
  /**
   * Button's size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Whether this button is disabled. No events triggered.
   */
  disabled: PropTypes.bool,
  /**
   * Additional classes to be added for customization
   */
  extraClasses: PropTypes.string,
  /**
   * Children
   */
  children: PropTypes.node,
  /**
   * Click event
   */
  onClick: PropTypes.func,
};

ButtonLink.defaultProps = {
  variant: 'solid',
  color: 'primary',
  weight: 'normal',
  radius: 'normal',
  size: 'medium',
  children: null,
  disabled: false,
  extraClasses: null,
  onClick: null,
};

export default ButtonLink;
