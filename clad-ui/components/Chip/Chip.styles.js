import { styled } from 'linaria/react';
import theme from '@clad-ui/theme';

const { colors, space, fontSizes, radii } = theme;

/**
 * @type {any}
 */
const StyledChip = styled.a`
  display: inline-block;
  line-height: 16px;
  padding: ${space.xs} ${space.sm};
  border-radius: ${radii.pill};
  background-color: ${colors.background};
  font-size: ${fontSizes.sm};
  cursor: pointer;
  min-width: ${({ minWidth }) => minWidth};
  text-align: center;

  &:link, /* override global style */
  &:focus,
  &:visited {
    outline: none;
    color: ${colors.text};
  }

  &:not([href]):hover, /* override global style */
  &:hover,
  &.active {
    background-color: ${colors.accentBG};
    color: ${colors.accent};
  }

  /* chips in multi active tag cloud don't have hover color */
  &.onMultiActiveTagCloud:not(.active):hover {
    background-color: ${colors.background};
    color: ${colors.text};
  }
`;

export default StyledChip;
