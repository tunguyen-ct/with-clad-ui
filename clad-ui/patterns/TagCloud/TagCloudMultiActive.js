/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import theme from '@clad-ui/theme';
import simulateChangeEvent from '../../utils/_simulateChangeEvent';
import Chip from '../../components/Chip/Chip';
import { StyledTagCloud, StyledLabel, Paragraph } from './TagCloud.styles';

const { colors } = theme;

/**
 * @param {string | string[]} currentValue
 * @param {string[]} acceptableValues
 */
const valueFilter = (currentValue, acceptableValues) => {
  if (Array.isArray(currentValue)) {
    const filteredValue = currentValue.filter((v) => acceptableValues.includes(v));
    return filteredValue;
  }
  const isAcceptable = acceptableValues.includes(currentValue);
  return isAcceptable ? currentValue : null;
};

/**
 * @param {string} key
 * @param {string | string[]} value
 * @param {number} maxSelection
 */
const chipActiveValuesHandler = (key, value, maxSelection) => {
  if (value == null) return key != null ? [key] : [];
  if (Array.isArray(value)) {
    if (key == null) return value;
    const index = value.indexOf(key);
    const newValue = [...value];
    if (index === -1) {
      if (!maxSelection) newValue.push(key);
      else if (value.length < maxSelection) newValue.push(key);
      return newValue;
    }
    newValue.splice(index, 1);
    return newValue;
  }
  if (key == null) return [value];
  if (value !== key) return [value, key];
  return [];
};

/**
 * @type {React.FC<{
 *   className?: string,
 *   options?: Array<{value: string, label: string}>,
 *   label?: string,
 *   value?: string | string[],
 *   onChange?: Function,
 *   required?: boolean,
 *   maxSelection?: number,
 *   tagCloudRef?: any,
 *   status?: string,
 *   helptext?: string,
 * }>}
 */
const TagCloudMultiActive = ({
  className,
  options,
  label,
  value,
  onChange,
  required,
  maxSelection,
  tagCloudRef,
  status,
  helptext,
}) => {
  const defaultRef = useRef();
  const ref = tagCloudRef || defaultRef;

  /**
   * @param {string} key
   * @param {string | string[]} activeValues
   * @param {number} maxChips
   */
  const onChipClicked = (key, activeValues, maxChips) => {
    const newValue = chipActiveValuesHandler(key, activeValues, maxChips);

    onChange(simulateChangeEvent(ref, newValue, value));
  };

  const optionValues = options.map((option) => option.value);
  const filteredValue = valueFilter(value, optionValues);

  const chipComponents = options.map((option) => (
    <Chip
      className="onMultiActiveTagCloud"
      key={option.value}
      active={filteredValue.includes(option.value)}
      as="button"
      onClick={() => onChipClicked(option.value, filteredValue, maxSelection)}
    >
      {option.label}
    </Chip>
  ));

  const labelClasses = required ? 'required' : '';
  const helptextColor = status === 'error' ? colors.critical : colors.textLighter;

  return (
    <StyledTagCloud className={className} ref={ref}>
      {label && <StyledLabel className={labelClasses}>{label}</StyledLabel>}
      <div className="chip-wrapper">{chipComponents}</div>
      <Paragraph helptextColor={helptextColor}>{helptext}</Paragraph>
    </StyledTagCloud>
  );
};

export { valueFilter, chipActiveValuesHandler };

export default TagCloudMultiActive;
