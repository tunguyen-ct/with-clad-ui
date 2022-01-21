import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'linaria';
import { Bell, Selected, Info, Warning, Gift, Close } from '../../icons';
import {
  typeIconClass,
  EmptyStateAnnouncer,
  StyledAnnouncer,
  lineLimitClass,
  ExpandButton,
  ActionButton,
  CloseButton,
  ChildrenWrapper,
} from './Announcer.styles';
import { cleanHtml } from '../../utils';

/**
 * Announcer box is used to displayed system messages, which can be dismissed.
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   open?: boolean,
 *   onClose?: import('react').MouseEventHandler,
 *   onButtonClick?: import('react').MouseEventHandler,
 *   title?: string,
 *   children?: any,
 *   type?: string,
 *   btnLabel?: string,
 *   compact?: boolean,
 *   dangerousHtml?: string,
 * }>}
 */
const Announcer = ({
  open,
  onClose,
  onButtonClick,
  title,
  children,
  type,
  btnLabel,
  compact,
  dangerousHtml,
}) => {
  const ref = useRef();
  const withButton = typeof btnLabel !== 'string' || btnLabel.trim();

  // check if description on mobile is more than 4 lines and needs limitation
  const [limit, setLimit] = useState(!withButton);
  useEffect(() => {
    /** @type {{ scrollHeight: Number; }} */
    const announcerChildren = ref?.current;
    // height of 4 lines on mobile is 64px
    if (announcerChildren && announcerChildren.scrollHeight <= 64) {
      setLimit(false);
    }
  });
  const withTitle = typeof title !== 'string' || title.trim();
  const iconClass = cx(typeIconClass, type);
  const announcerIcon =
    (type === 'info' && <Info className={iconClass} />) ||
    (type === 'time' && <Bell className={iconClass} />) ||
    (type === 'gift' && <Gift className={iconClass} />) ||
    (type === 'warning' && <Warning className={iconClass} />) ||
    (type === 'success' && <Selected className={iconClass} />) ||
    (type === 'error' && <Warning className={iconClass} />);

  let announcerHtml;
  if (typeof dangerousHtml === 'string' && dangerousHtml.trim()) {
    announcerHtml = {
      __html: cleanHtml(dangerousHtml),
    };
  }

  if (type === 'neutral') {
    return (
      <EmptyStateAnnouncer dangerouslySetInnerHTML={announcerHtml}>
        {!announcerHtml ? children : null}
      </EmptyStateAnnouncer>
    );
  }
  if (!open) {
    return null;
  }
  return (
    <StyledAnnouncer className={cx(type, compact && 'compact', !withButton && 'no-button')}>
      {announcerIcon}
      {!compact && withTitle && <h6>{title}</h6>}
      <ChildrenWrapper
        className={limit && lineLimitClass}
        ref={ref}
        dangerouslySetInnerHTML={announcerHtml}
      >
        {!announcerHtml ? children : null}
      </ChildrenWrapper>
      {limit && <ExpandButton onClick={() => setLimit(false)}>Xem thêm</ExpandButton>}
      {typeof onClose === 'function' && (
        <CloseButton type="button" onClick={onClose}>
          <Close />
        </CloseButton>
      )}
      {!compact && withButton && (
        <ActionButton type="button" className={type} onClick={onButtonClick}>
          {btnLabel}
        </ActionButton>
      )}
    </StyledAnnouncer>
  );
};

Announcer.propTypes = {
  /**
   * Whether this Announcer is open or not
   */
  open: PropTypes.bool,
  /**
   * Callback when close icon is clicked. Normally, it is used to update `open` prop to close the Announcer.
   * If the onClose prop is not provided or not a function, the Announcer's close button will be hidden.
   */
  onClose: PropTypes.func,
  /**
   * Callback when Announcer action button is clicked
   */
  onButtonClick: PropTypes.func,
  /**
   * Announcer title
   */
  title: PropTypes.string,
  /**
   * Announcer description
   */
  children: PropTypes.node,
  /**
   * Announcer type
   */
  type: PropTypes.oneOf(['info', 'time', 'gift', 'warning', 'success', 'error', 'neutral']),
  /**
   * Turn Announcer to single line. Useful for short announcement. `compact` does not have effect on Announcer with type=`neutral`.
   */
  compact: PropTypes.bool,
  /**
   * Callback when Announcer action button is clicked
   */
  btnLabel: PropTypes.string,
  /**
   * A replacement for `children`, rendered via dangerouslySetInnerHTML. Only use either `children` or `dangerousHtml`, not both.
   */
  dangerousHtml: PropTypes.string,
};

Announcer.defaultProps = {
  open: false,
  onClose: undefined,
  onButtonClick: () => {},
  title: '',
  children: '',
  type: 'info',
  compact: false,
  btnLabel: '',
  dangerousHtml: null,
};

export default Announcer;
