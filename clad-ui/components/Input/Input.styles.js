import React from 'react';
import theme from '@clad-ui/theme';
import { css } from 'linaria';
import { styled } from 'linaria/react';

const {
  colors,
  sizes,
  space,
  radii,
  fontSizes,
  lineHeights,
  fontWeights,
  borderStyles,
  borderWidths,
  durations,
  zIndices,
} = theme;

const InputClearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="1em" height="1em" fill="none">
    <g fill="none" fillRule="evenodd">
      <circle fill={colors.textLighter} cx={6} cy={6} r={6} />
      <path
        d="M3.863 3.863l4.275 4.275m-.001-4.275L3.862 8.138"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
      />
    </g>
  </svg>
);

const inputClasses = css`
  /* Standard style */
  width: ${sizes.full};
  height: ${sizes.full};
  font-size: ${fontSizes.sm};
  color: ${colors.text};
  appearance: none;
  outline: none;
  border: none;
  padding: 14px ${space.sm} 0 ${space.sm};
  border-radius: ${radii.sm};
  background-color: ${colors.white};

  &.required + label::after {
    content: '*';
    margin-left: ${space.xxs};
    color: ${colors.critical};
  }

  &.isDropdown {
    cursor: pointer;
  }

  &:disabled {
    background-color: ${colors.neutralBG};
    cursor: default;
  }

  &.noLabel {
    padding-top: 0;
  }

  &.hasValue + label,
  &:-webkit-autofill + label {
    transform: scale(0.7143) translateY(-10px);
    font-weight: ${fontWeights.bold};
  }
`;

export default inputClasses;

const inputFocusClasses = css`
  &:focus + label {
    transform: scale(0.7143) translateY(-10px);
    font-weight: ${fontWeights.bold};
  }
`;

/**
 *  @type {React.FC<any>}
 */
const Container = styled.div`
  width: ${({ containerWidth }) => containerWidth};
`;

const Paragraph = styled.p`
  color: ${colors.textLighter};
  font-size: ${fontSizes.xxs};
  min-height: ${sizes.xxs};
  margin-left: ${space.sm};
  line-height: ${lineHeights.md};
`;

/**
 *  @type {React.FC<any>}
 */
const InputWrapper = styled.div`
  width: ${sizes.full};
  height: ${sizes.xl};
  position: relative;
  border-radius: ${radii.sm};
  border: ${borderWidths.sm} ${borderStyles.solid} ${colors.border};
  background-color: ${colors.white};

  &:focus-within {
    border-color: ${colors.primary};
  }

  &.error {
    border-color: ${colors.critical};
  }

  &.error + p {
    color: ${colors.critical};
  }

  &.disabled {
    border-color: ${colors.neutralBG};
    background-color: ${colors.neutralBG};
  }

  & > label {
    position: absolute;
    top: 13px;
    left: ${space.sm};
    cursor: text;
    pointer-events: none;
    transform-origin: top left;
    transition: transform 0.1s ease;
    color: ${colors.textLighter};
    font-size: ${fontSizes.sm};
  }

  & > button {
    background: transparent;
    outline: none;
    border: none;
    height: ${sizes.xl};
    min-width: ${sizes.xxs};
    position: absolute;
    top: 0;
    right: ${space.xxs};
    color: ${colors.link};
    padding: ${space.xs};
  }

  & > .password {
    top: -1px;
  }

  & svg {
    font-size: ${fontSizes.xs};
  }

  /* apply for svg in dropdown */
  & > svg {
    height: ${sizes.xl};
    position: absolute;
    top: -1px;
    right: ${space.sm};
    color: ${colors.neutralDark};
    pointer-events: none;
  }

  /* select tag in firefox has 2px of text-indent by default */
  @supports (-moz-appearance: none) {
    & > select {
      text-indent: -2px;
    }
  }
`;

/**
 * @type {any}
 */
const TooltipWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: ${space.sm};
  color: ${colors.textLighter};

  & > p {
    visibility: hidden;
    width: ${sizes.$sm};
    background-color: ${colors.text};
    color: ${colors.white};
    border-radius: ${radii.sm};
    padding: ${space.xs} ${space.sm};
    position: absolute;
    top: 28px;
    opacity: 0;
    transition: all ${durations.xxxs}ms ease;
    z-index: ${zIndices.tooltip};
    font-size: ${fontSizes.sm};
    text-align: left;
    transform: scale(0.9);
  }

  & > p::after {
    content: '';
    position: absolute;
    bottom: calc(100% - 1px); /* prevent white line on mobile */
    border: 8px solid transparent; /* special border for the arrow above tooltip */
    border-bottom-color: ${colors.text};
  }

  &:hover > p {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }

  &.tooltip-left > p {
    transform-origin: 205px 0;
    left: -205px;
  }

  &.tooltip-left > p::after {
    left: 203px;
  }

  &.tooltip-right > p {
    transform-origin: 14px 0;
    left: -14px;
  }

  &.tooltip-right > p::after {
    left: ${space.sm};
  }
`;

export { inputFocusClasses, InputWrapper, Paragraph, Container, TooltipWrapper, InputClearIcon };
