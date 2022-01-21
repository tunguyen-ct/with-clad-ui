import React, { useState, useEffect } from 'react';
import { useLayer, useHover, Arrow } from 'react-laag';
import { cx } from 'linaria';
import PropTypes from 'prop-types';
import theme from '@clad-ui/theme';
import StyledTooltip from './Tooltip.styles';
import cleanHtml from '../../utils/cleanHtml';
import { getSpaceValue } from '../Grid/Grid';

const { colors, durations, space } = theme;

/**
 * Tooltip is a common graphical user interface that appears when user hovers a specific text or component to provide information that user needs to be aware of.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   children?: any,
 *   text?: string,
 *   dangerousHtml?: string,
 *   placement?: any,
 *   manual?: boolean,
 *   variant?: string,
 *   delayEnter?: string,
 *   delayLeave?: string,
 *   arrowOffset?: string,
 *   triggerOffset?: string,
 *   hoverable?: boolean,
 * }>}
 */
const Tooltip = ({
  children,
  text,
  dangerousHtml,
  placement,
  manual,
  variant,
  delayEnter,
  delayLeave,
  arrowOffset,
  triggerOffset,
  hoverable,
}) => {
  // open state is used when hoverable=false
  const [open, setOpen] = useState(true);
  // determine if the tooltip layer should keep rendering, with consideration of fading animation
  const [shouldRender, setShouldRender] = useState(false);
  const [isOver, hoverProps] = useHover({
    delayEnter: durations[delayEnter],
    delayLeave: durations[delayLeave],
  });

  // whether following animation should be in or out
  const isExiting = hoverable ? !isOver : !open;

  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: shouldRender,
    onOutsideClick: () => setOpen(false),
    arrowOffset: getSpaceValue(arrowOffset),
    triggerOffset: getSpaceValue(triggerOffset),
    auto: !manual,
    placement,
  });

  useEffect(() => {
    if (!isExiting) setShouldRender(true);
  }, [isExiting]);

  let tooltipHtml;
  if (typeof dangerousHtml === 'string' && dangerousHtml.trim()) {
    tooltipHtml = {
      __html: cleanHtml(dangerousHtml),
    };
  }

  const onAnimationEnd = () => {
    if (isExiting) {
      setShouldRender(false);
    }
  };

  return (
    <>
      <span {...triggerProps} {...hoverProps}>
        {children}
      </span>
      {shouldRender &&
        renderLayer(
          <StyledTooltip
            {...layerProps}
            className={cx(variant, isExiting && 'exit')}
            onAnimationEnd={onAnimationEnd}
          >
            {/* eslint-disable-next-line react/no-danger */}
            {!tooltipHtml ? text : <span dangerouslySetInnerHTML={tooltipHtml} />}
            <Arrow
              {...arrowProps}
              backgroundColor={variant === 'dark' ? colors.black : colors.white}
              borderColor={variant === 'dark' ? colors.black : colors.line}
            />
          </StyledTooltip>
        )}
    </>
  );
};

const keysOfSpace = Object.keys(space);
const keysOfDurations = Object.keys(durations);

Tooltip.propTypes = {
  /**
   * String or element that the Tooltip wraps
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * A replacement for `text`, rendered via dangerouslySetInnerHTML. Only use either `text` or `dangerousHtml`, not both.
   */
  dangerousHtml: PropTypes.string,
  /**
   * Message that Tooltip will display
   */
  text: PropTypes.string,
  /**
   * Different looks of Tooltip
   */
  variant: PropTypes.oneOf(['dark', 'light']),
  /**
   * Preferred placement of the Tooltip
   */
  placement: PropTypes.oneOf([
    'top-center',
    'top-start',
    'top-end',
    'left-start',
    'left-center',
    'left-end',
    'right-start',
    'right-center',
    'right-end',
    'bottom-start',
    'bottom-center',
    'bottom-end',
    'center',
  ]),
  /**
   * Turn off Tooltip's ability to switch automatically to a placement that is more visible on the screen.
   */
  manual: PropTypes.bool,
  /**
   * Delay time (ms) before Tooltip appears
   */
  delayEnter: PropTypes.oneOf(keysOfDurations),
  /**
   * Delay time (ms) before Tooltip disappears
   */
  delayLeave: PropTypes.oneOf(keysOfDurations),
  /**
   * Minimal distance between arrow and Tooltip edges
   */
  arrowOffset: PropTypes.oneOf(keysOfSpace),
  /**
   * Distance between Tooltip and trigger
   */
  triggerOffset: PropTypes.oneOf(keysOfSpace),
  /**
   * Whether this tooltip should be opened by hovering / tapping on the trigger element.
   *
   * Tooltip is visible when rendered by default and will close when tap or click outside.
   * When `hoverable=true`, it will be invisible by default and will show when user tap or hover on trigger element
   */
  hoverable: PropTypes.bool,
};

Tooltip.defaultProps = {
  children: null,
  dangerousHtml: null,
  text: null,
  variant: 'dark',
  placement: 'bottom-center',
  manual: false,
  delayEnter: 'xs',
  delayLeave: 'xs',
  arrowOffset: 'xs',
  triggerOffset: 'sm',
  hoverable: false,
};

export default Tooltip;
