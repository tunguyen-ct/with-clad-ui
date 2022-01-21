import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'linaria';
import { TabsRoot, TabsScroller, TabsIndicator } from './Tabs.styles';

/**
 * Tabs is used to navigate between groups of content that are related and at the same level of hierarchy.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   children: any,
 *   className?: string,
 *   onChange?: Function,
 *   value?: any,
 *   variant?: string,
 *   indicatorColor?: string,
 * }>}
 */
const Tabs = ({ children: ChildrenProp, onChange, className, value, variant, indicatorColor }) => {
  const indicator = <TabsIndicator color={indicatorColor} />;
  const parentClasses = [variant !== 'standard' ? variant : ''];
  const childrenNumber = Array.isArray(ChildrenProp) ? ChildrenProp.length : 1;
  const scrollerProps = {
    scrollable: variant === 'standard',
  };

  const currentTabs = useRef(null);
  const [tabPosition, setTabPosition] = useState(0);

  const handleKeyDown = (event) => {
    const tabElements = currentTabs.current.childNodes;
    let tempTabPosition = tabPosition;
    if (event.keyCode === 32) {
      const { props: childProps } = ChildrenProp[tempTabPosition] || ChildrenProp;
      onChange(event, childProps.value);
      return;
    }
    if (event.keyCode === 39 && tempTabPosition + 1 < childrenNumber) {
      tempTabPosition = tempTabPosition + 1;
    }
    if (event.keyCode === 37 && tempTabPosition - 1 >= 0) {
      tempTabPosition = tempTabPosition - 1;
    }

    setTabPosition(tempTabPosition);
    tabElements[tempTabPosition].focus();
  };
  return (
    <TabsRoot className={className}>
      <TabsScroller ref={currentTabs} role="tablist" {...scrollerProps} onKeyDown={handleKeyDown}>
        {React.Children.map(ChildrenProp, (child, index) => {
          if (!React.isValidElement(child)) {
            return null;
          }
          const { props } = child;
          const active = props.value === value;
          return React.cloneElement(child, {
            ...props,
            indicator: active ? indicator : null,
            active,
            className: cx(props.className, ...parentClasses),
            onClick: onChange,
            tabIndex: tabPosition === index ? 0 : -1,
          });
        })}
      </TabsScroller>
    </TabsRoot>
  );
};

Tabs.propTypes = {
  /**
   * `Tab` children.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  /**
   * extra class for tabs
   */
  className: PropTypes.string,
  /**
   * handle change tab selected value
   */
  onChange: PropTypes.func,
  /**
   * Current tab selected value
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
  /**
   * Tabs display behavior
   */
  variant: PropTypes.oneOf(['fullWidth', 'standard']),
  /**
   * Indicator color
   */
  indicatorColor: PropTypes.oneOf(['primary', 'secondary']),
};

Tabs.defaultProps = {
  value: false,
  variant: 'standard',
  className: '',
  indicatorColor: 'primary',
  onChange: null,
};

export default Tabs;
