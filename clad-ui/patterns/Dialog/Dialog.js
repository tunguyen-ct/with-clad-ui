import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'linaria';
import createUniversalPortal from '../../utils/createUniversalPortal';
import Button from '../../components/Button/Button';
import { buttonClass, Backdrop } from '../Popup/Popup.styles';
import { DialogMainIcon, Modal, StyledDialog, CloseButton, ChildrenWrapper } from './Dialog.styles';
import Close from '../../icons/Close';

/**
 * Dialog informs users about critical information or require decisions.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   className?: string,
 *   title?: string,
 *   children?: any,
 *   btnLabel?: string,
 *   mainIcon?: any,
 *   desktopSize?: string,
 *   open?: boolean,
 *   onClose?: import('react').MouseEventHandler,
 *   closeIcon?: any,
 *   onButtonClick?: import('react').MouseEventHandler,
 * }>}
 */
const Dialog = ({
  className,
  title,
  children,
  btnLabel,
  mainIcon,
  desktopSize,
  open,
  onClose,
  closeIcon,
  onButtonClick,
}) => {
  const closeIconClass = cx(
    (typeof closeIcon === 'string' || typeof closeIcon === 'number') && 'is-text'
  );
  const childrenWrapperClasses = cx(
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
            <StyledDialog className={cx(className, desktopSize)}>
              <div className="main-icon">{mainIcon}</div>
              <CloseButton type="button" className={closeIconClass} onClick={onClose}>
                {closeIcon}
              </CloseButton>
              <h5>{title}</h5>
              <ChildrenWrapper className={childrenWrapperClasses}>{children}</ChildrenWrapper>
              <Button color="accent" extraClasses={buttonClass} onClick={onButtonClick}>
                {btnLabel}
              </Button>
            </StyledDialog>
          </Modal>
        )}
    </>
  );
};

Dialog.propTypes = {
  /**
   * Dialog className (can be used to add more styles to mainIcon by targeting `main-icon` class in case of using a custom string)
   */
  className: PropTypes.string,
  /**
   * Dialog title
   */
  title: PropTypes.string,
  /**
   * Dialog content
   */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
  /**
   * Dialog max-width on desktop
   */
  desktopSize: PropTypes.oneOf(['md', 'lg', 'xl']),
  /**
   * Dialog button label
   */
  btnLabel: PropTypes.string,
  /**
   * Dialog main icon.  It can be changed by passing another `React component` or a `string`.
   */
  mainIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * Whether this Dialog is open or not
   */
  open: PropTypes.bool,
  /**
   * Dialog close icon on the right. Default is **`X`** mark icon. It can be changed by passing another `React component` or a `string`.
   */
  closeIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * Callback when close icon is clicked. Normally, it is used to update `open` prop to close the dialog.
   */
  onClose: PropTypes.func,
  /**
   * Callback when dialog main button is clicked
   */
  onButtonClick: PropTypes.func,
};

Dialog.defaultProps = {
  className: '',
  title: '',
  btnLabel: '',
  mainIcon: <DialogMainIcon />,
  desktopSize: 'lg',
  open: false,
  onClose: () => {},
  closeIcon: <Close />,
  onButtonClick: () => {},
};

export default Dialog;
