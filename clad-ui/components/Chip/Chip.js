import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'linaria';
import theme from '@clad-ui/theme';
import StyledChip from './Chip.styles';

const { sizes } = theme;

/**
 * Chip is the atom component to be used as stand-alone Badges, or in patterns like Tag Cloud, Tabs
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   active?: boolean,
 *   className?: string,
 *   href?: string,
 *   as?: any,
 *   onClick?: Function,
 *   minWidth?: string,
 *   children?: any,
 * }>}
 */
const Chip = ({ active, className, href, children, as, onClick, minWidth }) => {
  const chipClasses = cx(active && 'active', className);
  const chipMinWidth = sizes[minWidth] || 'initial';
  const attrs = {
    href,
    onClick,
    as,
  };
  if (as === 'button') attrs.type = 'button'; // <button type="button" />

  return (
    <StyledChip {...attrs} className={chipClasses} minWidth={chipMinWidth}>
      {children}
    </StyledChip>
  );
};

const keysOfSizes = Object.keys(sizes);
keysOfSizes.push('initial');

Chip.propTypes = {
  /**
   * Whether this chip is active or not
   */
  active: PropTypes.bool,
  /**
   * Chip className
   */
  className: PropTypes.string,
  /**
   * Chip href
   */
  href: PropTypes.string,
  /**
   * Chip content
   */
  children: PropTypes.node.isRequired,
  /**
   * Element or component to be rendered as
   */
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * Click event
   */
  onClick: PropTypes.func,
  /**
   * Chip min-width
   */
  minWidth: PropTypes.oneOf(keysOfSizes),
};

Chip.defaultProps = {
  active: false,
  className: '',
  href: null,
  as: 'a',
  onClick: null,
  minWidth: 'initial',
};

export default Chip;
