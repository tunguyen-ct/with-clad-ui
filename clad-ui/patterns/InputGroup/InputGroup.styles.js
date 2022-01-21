import { styled } from 'linaria/react';
import theme from '@clad-ui/theme';

const {
  colors,
  sizes,
  space,
  fontSizes,
  lineHeights,
  radii,
  borderWidths,
  borderStyles,
} = theme;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  >:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    input, select {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      &:focus {
        border-right: 3px solid ${colors.primary};
      }
    }
  }
  >:first-child {
    input, select {
      &:focus {
        border-right: 4px solid ${colors.primary};
      }
    }
  }
  >:not(:first-child) {
    margin-left: -4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    input, select {
      border-color: initial;
      margin-left: -1px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: 1px solid ${colors.line};
      &:focus {
        outline: 1px solid ${colors.primary};
      }
    }
  }
  >* {
    p {
      display: none;
    }
  }
  &.error {
    border: ${borderWidths.sm} ${borderStyles.solid} ${colors.critical};
    border-radius: ${radii.sm};
    input, select, button {
      &:focus {
        outline: 0;
      }
      &:focus-within {
        outline: 0;
      }
    }
  }
  &.error + p {
    color: ${colors.critical};
  }
`;

const Paragraph = styled.p`
  color: ${colors.textLighter};
  font-size: ${fontSizes.xxs};
  min-height: ${sizes.xxs};
  margin-left: ${space.sm};
  line-height: ${lineHeights.md};
`;

export { Wrapper, Paragraph };
