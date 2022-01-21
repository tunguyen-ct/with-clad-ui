/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import theme from '@clad-ui/theme';
import Chip from '../../components/Chip/Chip';
import { StyledTagCloud, StyledLabel, Paragraph } from './TagCloud.styles';
import simulateChangeEvent from '../../utils/_simulateChangeEvent';

const { colors } = theme;

/**
 * @type {React.FC<{
 *   className?: string,
 *   options?: Array<{value: string, label: string}>,
 *   label?: string,
 *   value?: string | string[],
 *   onChange?: Function,
 *   required?: boolean,
 *   tagCloudRef?: any,
 *   status?: string,
 *   helptext?: string,
 * }>}
 */
const TagCloudSingleActive = ({
  className,
  options,
  label,
  value,
  onChange,
  required,
  tagCloudRef,
  status,
  helptext,
}) => {
  const defaultRef = useRef();
  const ref = tagCloudRef || defaultRef;

  const onChipClicked = (key) => {
    onChange(simulateChangeEvent(ref, key));
  };

  const chipComponents = options.map((option) => (
    <Chip
      key={option.value}
      active={option.value === value}
      as="button"
      onClick={() => onChipClicked(option.value)}
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

export default TagCloudSingleActive;
