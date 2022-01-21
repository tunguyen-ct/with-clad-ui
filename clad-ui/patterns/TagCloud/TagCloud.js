import React from 'react';
import PropTypes from 'prop-types';
import TagCloudSingleActive from './TagCloudSingleActive';
import TagCloudMultiActive from './TagCloudMultiActive';

/**
 * Tag Cloud pattern, including multiple Chip components
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   className?: string,
 *   options?: Array<{value: string, label: string}>,
 *   label?: string,
 *   value?: string | string[],
 *   onChange?: Function,
 *   required?: boolean,
 *   multiple?: boolean,
 *   maxSelection?: number,
 *   tagCloudRef?: any,
 *   status?: string,
 *   helptext?: string,
 * }>}
 */
const TagCloud = ({
  className,
  options,
  label,
  value,
  onChange,
  required,
  multiple,
  maxSelection,
  tagCloudRef,
  status,
  helptext,
}) => {
  const props = {
    className,
    options,
    label,
    value,
    onChange,
    required,
    tagCloudRef,
    status,
    helptext,
  };
  if (multiple) props.maxSelection = maxSelection;

  return multiple ? <TagCloudMultiActive {...props} /> : <TagCloudSingleActive {...props} />;
};

TagCloud.propTypes = {
  /**
   * Tag cloud className
   */
  className: PropTypes.string,
  /**
   * Tag cloud options. Options is an array and each array item is an object with shape of `{value: string, label: string}`.
   */
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  /**
   * Tag Cloud label
   */
  label: PropTypes.string,
  /**
   * Value of the active chip(s)
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  /**
   * Change event
   */
  onChange: PropTypes.func,
  /**
   * Whether this tag cloud requires at least 1 option or not
   */
  required: PropTypes.bool,
  /**
   * Allow multiple options
   */
  multiple: PropTypes.bool,
  /**
   * Maximum number of options (only available when `multiple` is `true`). **0, null and undefined** mean that there is **no limitation**.
   */
  maxSelection: PropTypes.number,
  /**
   * Tag cloud ref
   */
  tagCloudRef: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  /**
   * Tag cloud status (useful when implemented with validation)
   */
  status: PropTypes.oneOf(['error', 'default']),
  /**
   * Promp a helptext below Tag cloud (useful when implemented with validation)
   */
  helptext: PropTypes.string,
};

TagCloud.defaultProps = {
  className: '',
  options: [],
  label: '',
  value: '',
  onChange: null,
  required: false,
  multiple: false,
  tagCloudRef: null,
  maxSelection: 0,
  status: 'default',
  helptext: '',
};

export default TagCloud;
