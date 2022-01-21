import React from 'react';
import PropTypes from 'prop-types';
import theme from '@clad-ui/theme';
import { cx } from 'linaria';
import createUniversalPortal from '../../utils/createUniversalPortal';
import {
  buttonClass,
  Modal,
  Backdrop,
  PopupHeader,
  StyledPopup,
  PopupContent,
  ChildrenWrapper,
} from './Popup.styles';
import Button from '../../components/Button/Button';
import Close from '../../icons/Close';
import { getBreakpointsValues } from '../../utils';

const { space } = theme;

/**
 * @param {string | string[]} value
 * @param {string} defaultValue
 */
const getSpaces = (value, defaultValue) =>
  getBreakpointsValues(value, defaultValue).map((v) => space[v] || space.none);

/**
 * Popup is a pattern that allow sliding in supplement floating contents (such as filters) on top of current one.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   title?: string,
 *   children?: any,
 *   btnLabel?: string,
 *   desktopSize?: string,
 *   mobileSize?: string,
 *   open?: boolean,
 *   onClose?: import('react').MouseEventHandler,
 *   closeIcon?: any,
 *   rightIcon?: any,
 *   onRightIconClick?: import('react').MouseEventHandler,
 *   onButtonClick?: import('react').MouseEventHandler,
 *   padding?: string | string[],
 * }>}
 */
const Popup = ({
  title,
  children,
  btnLabel,
  desktopSize,
  mobileSize,
  open,
  onClose,
  closeIcon,
  rightIcon,
  onRightIconClick,
  onButtonClick,
  padding,
}) => {
  const closeIconClass = cx(
    (typeof closeIcon === 'string' || typeof closeIcon === 'number') && 'is-text'
  );
  const rightIconClass = cx(
    rightIcon == null && 'hidden',
    (typeof rightIcon === 'string' || typeof rightIcon === 'number') && 'is-text'
  );
  const childrenWrapperClasses = cx(
    mobileSize,
    (typeof children === 'string' || typeof children === 'number') && 'is-single-string',
    typeof btnLabel === 'string' && !btnLabel.trim() && 'no-button'
  );
  /* eslint-disable react/jsx-no-useless-fragment */
  return (
    <>
      {open &&
        createUniversalPortal(
          <Modal>
            <Backdrop onClick={onClose} />
            <StyledPopup className={desktopSize}>
              <PopupHeader>
                <button type="button" className={closeIconClass} onClick={onClose}>
                  {closeIcon}
                </button>
                <h5>{title}</h5>
                <button type="button" className={rightIconClass} onClick={onRightIconClick}>
                  {rightIcon}
                </button>
              </PopupHeader>
              <PopupContent padding={getSpaces(padding, 'none')}>
                <ChildrenWrapper className={childrenWrapperClasses}>{children}</ChildrenWrapper>
                <Button color="accent" extraClasses={buttonClass} onClick={onButtonClick}>
                  {btnLabel}
                </Button>
              </PopupContent>
            </StyledPopup>
          </Modal>
        )}
    </>
  );
};

const keysOfSpace = Object.keys(space);

Popup.propTypes = {
  /**
   * Popup title
   */
  title: PropTypes.string,
  /**
   * Popup content
   */
  children: PropTypes.node.isRequired,
  /**
   * Popup max-width on desktop
   */
  desktopSize: PropTypes.oneOf(['md', 'lg', 'xl']),
  /**
   * Popup max-height on mobile
   */
  mobileSize: PropTypes.oneOf(['half', 'full']),
  /**
   * Popup button label
   */
  btnLabel: PropTypes.string,
  /**
   * Whether this Popup is open or not
   */
  open: PropTypes.bool,
  /**
   * Popup header close icon on the left. Default is **`X`** mark icon. It can be changed by passing another `React component` or a `string`.
   */
  closeIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * Function to set `open` prop
   */
  onClose: PropTypes.func,
  /**
   * Popup header right icon. Set by passing another `React component` or a `string`.
   */
  rightIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * rightIcon click event
   */
  onRightIconClick: PropTypes.func,
  /**
   * Popup main button click event
   */
  onButtonClick: PropTypes.func,
  /**
   * [Responsive Prop] Popup content padding (Popup header excluded)
   */
  padding: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfSpace)),
    PropTypes.oneOf(keysOfSpace),
  ]),
};

Popup.defaultProps = {
  title: '',
  btnLabel: '',
  desktopSize: 'lg',
  mobileSize: 'half',
  open: false,
  onClose: () => {},
  closeIcon: <Close />,
  rightIcon: null,
  onRightIconClick: () => {},
  onButtonClick: () => {},
  padding: ['sm', 'sm', 'lg'],
};

export { getSpaces };
export default Popup;
