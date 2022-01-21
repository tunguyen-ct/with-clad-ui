import theme from '@clad-ui/theme';
import { styled } from 'linaria/react';

const {
  colors,
  sizes,
  space,
  radii,
  fontSizes,
  fontWeights,
  lineHeights,
  borderWidths,
  borderStyles,
} = theme;

/**
 *  @type {React.FC<any>}
 */
const Container = styled.div`
  display: table; /* display table will make container width match textarea even after being resized by user */
  position: relative;
  width: ${({ containerWidth }) => containerWidth};
`;

/**
 *  @type {React.FC<any>}
 */
const TextAreaWrapper = styled.div`
  width: ${sizes.full};
  border-radius: ${radii.sm};
  border: ${borderWidths.sm} ${borderStyles.solid} ${colors.border};
  height: ${({ wrapperHeight }) => wrapperHeight};
  min-height: ${sizes.xl}; /* normal input height */
  background-color: ${colors.white};

  /* set resize to the wrapper instead of the textarea to make sure the border move along while resizing */
  &.resize-both {
    resize: both;
    overflow: auto;
  }

  &.resize-vertical {
    resize: vertical;
    overflow: auto;
  }

  &.resize-horizontal {
    resize: horizontal;
    overflow: auto;
  }

  /* clickable space on top of textarea */
  & > .focus-capture {
    cursor: text;
    height: 23px;
  }

  &.disabled > .focus-capture {
    cursor: auto;
  }

  & > label {
    position: absolute;
    top: 11px;
    left: 13px;
    cursor: text;
    user-select: none;
    transform-origin: top left;
    transition: transform 0.1s ease;
    color: ${colors.textLighter};
    font-size: ${fontSizes.sm};
  }

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
`;

/**
 *  @type {React.FC<any>}
 */
const StyledTextArea = styled.textarea`
  border-radius: ${radii.sm};
  width: ${sizes.full};
  padding: 0 ${space.sm} ${space.xxs} ${space.sm};
  outline: none;
  border: none;
  line-height: 20px;
  height: calc(${sizes.full} - 23px); /* minus focus-capture div */
  resize: none;
  background-color: ${colors.white};

  &:disabled {
    background-color: ${colors.neutralBG};
  }

  &::placeholder {
    opacity: 1; /* placeholders in firefox have different opacity */
    color: ${colors.textLighter};
    padding-left: 1px;
    user-select: none;
  }

  &:focus::placeholder {
    color: transparent;
  }

  &.required + label::after {
    content: '*';
    margin-left: ${space.xxs};
    color: ${colors.critical};
  }

  &:not(:focus):not(.hasValue):not(:-webkit-autofill) {
    padding-top: 7px; /* placeholder looks a bit lower than input value */
  }

  &:focus + label,
  &.hasValue + label,
  &:-webkit-autofill + label {
    transform: scale(0.7143) translateY(-6px);
    font-weight: ${fontWeights.bold};
  }
`;

/**
 *  @type {React.FC<any>}
 */
const Paragraph = styled.p`
  color: ${colors.textLighter};
  font-size: ${fontSizes.xxs};
  min-height: ${sizes.xxs};
  margin-left: ${space.sm};
  line-height: ${lineHeights.md};
`;

export { Container, TextAreaWrapper, StyledTextArea, Paragraph };
