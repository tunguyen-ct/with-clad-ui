/* eslint-disable react/no-danger */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLayer } from 'react-laag';
import { cx } from 'linaria';
import theme from '@clad-ui/theme';

import normalizeArrowKey from '../../utils/_normalizeArrowKey';
import Input from '../../components/Input/Input';
import { menuClass, optionClass } from './SearchInput.styles';

const { sizes } = theme;

/**
 * @typedef {{text: string, html: string, data?: any}} Option
 */

/**
 * Search Input component that carefully takes care of accessibility
and allow keyboard controls.
 *
 * `🧪 Beta`
 *
 * @type {React.FC<{
 *   id?: string,
 *   name?: string,
 *   value: {text: string, selected: Option},
 *   options?: Option[],
 *   onInput?: (event: Event) => void,
 *   onSelect?: (event: Event) => void,
 *   onChange?: (event: Event) => void,
 *   allowClear?: boolean,
 *   disabled?: boolean,
 *   helptext?: string,
 *   inputMode?: "none" | "text" | "email" | "tel" | "decimal" | "numeric" | "search" | "url",
 *   inputRef?: any,
 *   label?: string,
 *   onBlur?: (event: any) => void,
 *   onFocus?: (event: any) => void,
 *   required?: boolean,
 *   status?: string,
 *   tooltip?: string,
 *   type?: string,
 *   width?: string,
 *   menuMaxHeight?: string,
 * }>}
 */
const SearchInput = ({
  id,
  value,
  options,
  onInput,
  onSelect,
  onChange,
  inputRef,
  menuMaxHeight,
  ...inputProps
}) => {
  const textValue = value?.text || '';
  const defaultInputRef = useRef();
  const textFieldRef = inputRef || defaultInputRef;
  const [menuOpen, setMenuOpen] = useState(false);
  const [hiliIndex, setHiliIndex] = useState(-1);
  // only show the menu, when we have actual items to show
  const showMenu = options?.length > 0 && menuOpen;

  // the positioning stuff...
  const {
    renderLayer,
    triggerProps: { ref: setTriggerRef }, // ref from useLayer is a function
    layerProps,
    triggerBounds,
    // layerSide, // unused
  } = useLayer({
    isOpen: showMenu,
    auto: true, // auto find a placement when required
    snap: true, // snap to the possible placements (not in between)
    placement: 'bottom-start', // we prefer placement on the bottom-side
    possiblePlacements: ['top-start', 'bottom-start'], // stick with bottom and top
    triggerOffset: 1, // place the menu directly to the trigger with 1px border offset
    onOutsideClick: () => setMenuOpen(false),
  });

  setTriggerRef(textFieldRef.current);

  const doSelect = (event, selected) => {
    if (selected && event) {
      event.value = {
        text: selected.text,
        selected,
      };
    }
    // close the menu
    setMenuOpen(false);
    // reset hili option
    setHiliIndex(-1);
    // callback
    onSelect?.(event);
    return onChange?.(event);
  };

  const handleInputChange = (e) => {
    // this is vanilla input's value
    const text = e?.target?.value || '';
    // augment event with more complex value object
    if (e) {
      e.value = {
        text,
        selected: null,
      };
    }
    onInput?.(e);
    onChange?.(e);
    setMenuOpen(true);
  };

  const handleKeyUp = (event) => {
    // Prevent click event from emitting in Firefox
    event.preventDefault();
  };

  const handleKeyDown = (event) => {
    const key = normalizeArrowKey(event);
    let next = hiliIndex;
    switch (key) {
      case 'ArrowUp':
        next = next - 1;
        // rotate selection
        if (next < 0) next = options.length - 1;
        // avoid caret jumping
        event.preventDefault();
        break;
      case 'ArrowDown':
        next = next + 1;
        // rotate selection
        if (next >= options.length) next = 0;
        // avoid caret jumping
        event.preventDefault();
        break;
      case 'Enter': {
        const selected = options[hiliIndex];
        return doSelect(event, selected);
      }
      default:
      // nothing
    }
    return setHiliIndex(next);
  };

  const handleOptionClick = (event) => {
    const el = event.currentTarget;
    const selected = options[el.getAttribute('data-index')];
    return doSelect(event, selected);
  };

  const handleMenuMouseOver = (event) => {
    event.preventDefault();
    // currentTarget is <ul>, but target is its children
    const menuItemEl = event.target.closest('[data-index]');
    const itemIndex = menuItemEl.getAttribute('data-index');
    if (itemIndex != null) {
      setHiliIndex(+itemIndex);
    }
  };

  return (
    <div
      id={id ? id : null}
      role="combobox"
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-haspopup="listbox"
      aria-expanded={showMenu}
      aria-controls="search-input-listbox"
    >
      <Input
        {...inputProps}
        inputRef={textFieldRef}
        value={textValue}
        onChange={handleInputChange}
      />
      {showMenu &&
        renderLayer(
          <ul
            id="search-input-listbox"
            role="listbox"
            className={menuClass}
            {...layerProps}
            style={{
              width: triggerBounds?.width, // we want the same width as the input
              maxHeight: sizes[menuMaxHeight],
              ...layerProps.style,
            }}
            onMouseOver={handleMenuMouseOver}
            onFocus={handleMenuMouseOver}
          >
            {options.map((item, index) => (
              <li
                role="menuitem"
                aria-label={item.text}
                key={item.text}
                data-index={index}
                className={cx(optionClass, index === hiliIndex && 'highlight')}
                onClick={handleOptionClick}
                dangerouslySetInnerHTML={{ __html: item.html }}
              />
            ))}
          </ul>
        )}
    </div>
  );
};

const keysOfSizes = Object.keys(sizes);

const optionPropType = PropTypes.exact({
  // to display at input
  text: PropTypes.string,
  // to display in dropdown items
  html: PropTypes.string,
  // arbitrary data object
  data: PropTypes.shape({}),
});

SearchInput.propTypes = {
  /**
   * The id attribute of this component
   */
  id: PropTypes.string,
  /**
   * Value data of this component.
   */
  value: PropTypes.exact({
    text: PropTypes.string,
    selected: optionPropType,
  }),
  /**
   * Options array to provide for the dropdown menu
   */
  options: PropTypes.arrayOf(optionPropType),
  /**
   * Callback when user types in the search text field
   */
  onInput: PropTypes.func,
  /**
   * Callback when user selects an item on the dropdown menu
   */
  onSelect: PropTypes.func,
  /**
   * Callback when user either types in text field or makes selection
   */
  onChange: PropTypes.func,

  // below is from Input

  /**
   * Input name
   */
  name: PropTypes.string,
  /**
   * The type of input
   */
  type: PropTypes.oneOf(['text', 'email', 'tel']),
  /**
   * Input label
   */
  label: PropTypes.string,
  /**
   * Mutable ref object with `.current` point to the &lt;input> element when mounted
   */
  inputRef: PropTypes.shape({
    current: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  }),
  /**
   * Callback when input is blur
   */
  onBlur: PropTypes.func,
  /**
   * Callback when input is focus
   */
  onFocus: PropTypes.func,
  /**
   * Disable the input
   */
  disabled: PropTypes.bool,
  /**
   * Whether this input is required or not
   */
  required: PropTypes.bool,
  /**
   * If allow to remove input content with clear icon
   */
  allowClear: PropTypes.bool,
  /**
   * Input status (useful when implemented with form validation)
   */
  status: PropTypes.oneOf(['error', 'default']),
  /**
   * Promp a helptext below input (useful when implemented with form validation)
   */
  helptext: PropTypes.string,
  /**
   * Show a icon that contains tooltip
   */
  tooltip: PropTypes.string,
  /**
   * Enumerated attribute that hints at the type of data that might be entered by the user
   */
  inputMode: PropTypes.oneOf([
    'none',
    'text',
    'decimal',
    'numeric',
    'tel',
    'search',
    'email',
    'url',
  ]),
  /**
   * Input width
   */
  width: PropTypes.oneOf(keysOfSizes),
  /**
   * Input menu max-height
   */
  menuMaxHeight: PropTypes.oneOf(keysOfSizes),
};

SearchInput.defaultProps = {
  id: null,
  options: null,
  onInput: null,
  onSelect: null,
  onChange: null,
  value: null,
  // input's props:
  name: '',
  type: 'text',
  label: '',
  inputRef: null,
  onBlur: null,
  onFocus: null,
  disabled: false,
  required: false,
  allowClear: false,
  status: 'default',
  helptext: '',
  tooltip: '',
  inputMode: 'text',
  width: 'full',
  menuMaxHeight: '$sm',
};

export default SearchInput;
