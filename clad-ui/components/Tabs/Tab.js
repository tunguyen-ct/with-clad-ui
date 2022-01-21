import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'linaria';
import { TabRootClass, TabLabel, TabIconWrapper } from './Tabs.styles';

/**
 * Tab is a Tabs children. That is used to render the label/icon content.
 *
 * `🧪Beta`
 *
 * @type {React.ForwardRefExoticComponent<import('../../types').NextLink & {
 *   className?: string,
 *   disabled?: boolean,
 *   icon?: any,
 *   label?: any,
 *   value: any,
 *   variant?: any,
 *   as?: any,
 *   id?: any,
 *   indicator?: any,
 *   active: boolean,
 *   tabIndex: number,
 * }>}
 */
const Tab = React.forwardRef((props, ref) => {
  const {
    value,
    label,
    indicator,
    icon,
    onClick,
    variant,
    className,
    disabled,
    active,
    as,
    tabIndex,
  } = props;
  const handleClick = (event) => {
    if (onClick && !disabled) {
      onClick(event, value);
    }
  };
  const classes = cx(TabRootClass, className, disabled && 'disabled', active && 'active');
  const valuableProps = {};
  ['id', 'href'].forEach((key) => {
    if (props[key]) valuableProps[key] = props[key];
  });

  const attrs = {
    ...valuableProps,
    ref,
    onClick: handleClick,
    className: classes,
    style: { '--display': variant === 'mobile' ? 'inline-grid' : 'inline-flex' },
    role: 'tab',
    'aria-selected': tabIndex === 0,
    'aria-disabled': !!disabled,
    tabIndex,
  };
  const tabLabelProps = {
    disabled,
  };
  return React.createElement(
    as,
    attrs,
    <>
      {icon && <TabIconWrapper>{icon}</TabIconWrapper>}
      {label && <TabLabel {...tabLabelProps}>{label}</TabLabel>}
      {indicator}
    </>
  );
});

Tab.propTypes = {
  /**
   * Tab icon
   */
  icon: PropTypes.element,
  /**
   * Tab label
   */
  label: PropTypes.string,
  /**
   * Tab value
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /**
   * Disable tab selection
   */
  disabled: PropTypes.bool,
  /**
   * Extra class for tab wrapper
   */
  className: PropTypes.string,
  /**
   * Indicator element. Internal props is passed from `Tabs` component
   */
  indicator: PropTypes.element,
  /**
   * On click event. Internal props is handled by `Tabs` component
   */
  onClick: PropTypes.func,
  /**
   * Tab display behavior
   */
  variant: PropTypes.oneOf(['mobile', 'desktop']),
  /**
   * TabIndex html attribute. Internal props is handled by `Tabs` component
   */
  tabIndex: PropTypes.number,
  /**
   * Is tab selected. Internal props is handled by `Tabs` component.
   */
  active: PropTypes.bool,
  /**
   * Element or component to be rendered as
   */
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * Element Id
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * href attribute for <a> tag
   */
  href: PropTypes.string,
};

Tab.defaultProps = {
  icon: null,
  label: '',
  className: '',
  disabled: false,
  indicator: null,
  variant: 'mobile',
  as: 'button',
  id: '',
  href: '',
  active: false,
  onClick: null,
  tabIndex: -1,
};

export default Tab;
