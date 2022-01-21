import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import theme from '@clad-ui/theme';
import { cx } from 'linaria';
import { SnackWrapper, StyledSnack } from './Snack.styles';
import createUniversalPortal from '../../utils/createUniversalPortal';

const { durations } = theme;

/**
 * Snack is used to inform user of a process that has just been performed or will perform.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   children?: any,
 *   desktopSize?: string,
 *   onClose?: Function,
 *   autoHideDuration?: string,
 * }>}
 */
const Snack = ({ children, onClose, desktopSize, autoHideDuration }) => {
  const [isExiting, setIsExiting] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, durations[autoHideDuration]);
    return () => {
      clearTimeout(timer);
    };
  });

  const onAnimationEnd = () => {
    if (isExiting) {
      onClose();
    }
  };

  return (
    <>
      {createUniversalPortal(
        <SnackWrapper>
          <StyledSnack
            className={cx(desktopSize, isExiting && 'exit')}
            onAnimationEnd={onAnimationEnd}
          >
            {children}
          </StyledSnack>
        </SnackWrapper>
      )}
    </>
  );
};

const keysOfDurations = Object.keys(durations);

Snack.propTypes = {
  /**
   * Snack content
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  /**
   * Callback when snack is closed
   */
  onClose: PropTypes.func,
  /**
   * Snack max-width on desktop
   */
  desktopSize: PropTypes.oneOf(['md', 'lg', 'xl']),
  /**
   * Delay time before disappearing
   */
  autoHideDuration: PropTypes.oneOf(keysOfDurations),
};

Snack.defaultProps = {
  onClose: () => {},
  desktopSize: 'lg',
  autoHideDuration: 'xl',
};

export default Snack;
