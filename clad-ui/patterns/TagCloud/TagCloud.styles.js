import { styled } from 'linaria/react';
import theme from '@clad-ui/theme';

const { colors, fontSizes, fontWeights, space, lineHeights, sizes } = theme;

const StyledTagCloud = styled.div`
  /* we keep class name so it's esier to select in overwrite */
  .chip-wrapper > * {
    margin-right: ${space.xs};
    margin-bottom: ${space.xs};
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-size: ${fontSizes.xxs};
  color: ${colors.textLighter};
  line-height: ${lineHeights.xl};
  font-weight: ${fontWeights.bold};

  &.required::after {
    content: '*';
    margin-left: ${space.xxs};
    color: ${colors.critical};
  }
`;

/**
 *  @type {React.FC<any>}
 */
const Paragraph = styled.p`
  color: ${({ helptextColor }) => helptextColor};
  font-size: ${fontSizes.xxs};
  min-height: ${sizes.xxs};
  margin-left: ${space.sm};
  line-height: ${lineHeights.md};
`;

export { StyledTagCloud, StyledLabel, Paragraph };
