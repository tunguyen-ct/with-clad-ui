import { styled } from 'linaria/react';
import theme from '@clad-ui/theme';

const { colors, borderWidths, borderStyles, radii, sizes, space } = theme;

const StyledCheckbox = styled.label`
  position: relative;
  user-select: none;
  cursor: pointer;
  padding-left: 20px;

  &.withLabel {
    padding-left: ${space.xl};
  }

  & > input {
    visibility: hidden;
    width: 0;
    height: 0;
  }

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    border: ${borderWidths.sm} ${borderStyles.solid};
    height: ${sizes.xs};
    width: ${sizes.xs};
    background-color: currentColor;
    border-color: currentColor;
  }

  &:not(.disabled) > input:not(:checked) + span {
    background-color: ${colors.background};
    border-color: ${colors.border};
  }

  & > .checkbox {
    border-radius: ${radii.sm};
  }

  & > .radio {
    border-radius: ${radii.circle};
  }

  &.disabled {
    cursor: auto;
  }

  /* checkbox active color */
  &.neutral > span {
    color: ${colors.neutral};
  }

  &.primary > span {
    color: ${colors.primary};
  }

  &.secondary > span {
    color: ${colors.secondary};
  }

  &.accent > span {
    color: ${colors.accent};
  }

  &.critical > span {
    color: ${colors.critical};
  }

  &.caution > span {
    color: ${colors.caution};
  }

  &.positive > span {
    color: ${colors.positive};
  }

  &.info > span {
    color: ${colors.info};
  }

  &.disabled > span {
    cursor: auto;
    color: ${colors.background};
  }

  &:not(.disabled) > input:checked + .checkbox:after {
    content: '';
    position: absolute;
    left: 6px;
    top: ${space.xxxs};
    width: 7px;
    height: 11px;
    border: ${borderStyles.solid} ${colors.white};
    border-width: ${borderWidths.none} ${borderWidths.md} ${borderWidths.md} ${borderWidths.none};
    transform: rotate(45deg);
  }

  &:not(.disabled) > input:checked + .radio:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 5px;
    width: 8px;
    height: 8px;
    background-color: ${colors.white};
    border-radius: ${radii.circle};
  }
`;

export default StyledCheckbox;
