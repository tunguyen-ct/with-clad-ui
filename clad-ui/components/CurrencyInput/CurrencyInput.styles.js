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
} = theme;

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
const SuffixWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: ${space.sm};
  color: ${colors.textLighter};
`;

export { inputFocusClasses, InputWrapper, Paragraph, Container, SuffixWrapper };
