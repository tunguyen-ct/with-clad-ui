import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'linaria';

import buttonClass from './Button.styles.js';

/**
 * Renders a standard button element.
 *
 * `🧪Beta`
 *
 * @type {React.ForwardRefExoticComponent<import('../../types').NextLink & {
 *   as?: any,
 *   color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'critical' | 'caution' | 'positive' | 'info',
 *   disabled?: boolean,
 *   extraClasses?: string
 *   icon?: boolean,
 *   radius?: 'normal' | 'pill' | 'circle',
 *   size?: 'small' | 'medium' | 'large',
 *   stretch?: boolean,
 *   variant?: 'solid' | 'outline',
 *   weight?: 'normal' | 'bold',
 *   children?: any,
 * }>}
 */
const Button = React.forwardRef(
  (
    {
      as,
      children,
      color,
      disabled,
      extraClasses,
      icon,
      onClick,
      radius,
      size,
      stretch,
      variant,
      weight,
      ...props
    },
    ref
  ) => {
    let iconClass = '';
    if (icon) {
      // square/circle icon buttons
      iconClass = 'icon';
    } else {
      // detect icon position and set its margin properly
      iconClass = !children?.length
        ? ''
        : children?.[1]?.type?.displayName?.toLowerCase().includes('svg')
        ? 'i-right'
        : 'i-left';
    }

    const className = cx(
      buttonClass,
      variant === 'outline' ? 'outline o-' + color : color,
      `r-${radius}`,
      size,
      `w-${weight}`,
      iconClass,
      stretch && 'stretch',
      disabled && 'disabled',
      extraClasses
    );

    /**
     * @type {{[key: string]: any }}
     */
    const attrs = {
      ref,
      className,
      ...props,
    };
    // disabled is a boolean attribute
    if (disabled) {
      attrs.disabled = 'disabled';
    } else if (onClick) {
      // only pass onClick event listener if not disable
      attrs.onClick = onClick;
    }

    return React.createElement(as, attrs, children);
  }
);

Button.propTypes = {
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
  radius: PropTypes.oneOf(['normal', 'pill', 'circle']),
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
   * This button has equal and appropriate paddings to cater for icon buttons
   */
  icon: PropTypes.bool,
  /**
   * Whether this button stretch to fill up container's width
   */
  stretch: PropTypes.bool,
  /**
   * Element or component to be rendered as
   */
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * Children
   */
  children: PropTypes.node,
  /**
   * Click event
   */
  onClick: PropTypes.func,
  /**
   * Additional classes to be added for customization
   */
  extraClasses: PropTypes.string,
};

Button.defaultProps = {
  as: 'button',
  variant: 'solid',
  color: 'primary',
  weight: 'normal',
  radius: 'normal',
  size: 'medium',
  children: null,
  disabled: false,
  icon: false,
  stretch: false,
  onClick: null,
  extraClasses: '',
};

export default Button;
