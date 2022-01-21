import { styled } from 'linaria/react';
import theme from '@clad-ui/theme';

const { breakpoints, mediaQueries, borderStyles } = theme;

/**
 * @type {React.FC<any>}
 */
const StyledBox = styled.div`
  color: ${({ boxColor }) => boxColor};
  text-align: ${({ textAlign }) => textAlign};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ paddingy, paddingx }) => `${paddingy[0]} ${paddingx[0]}`};
  width: ${({ boxWidth }) => boxWidth[0]};
  max-width: ${({ maxWidth }) => maxWidth[0]};
  height: ${({ boxHeight }) => boxHeight[0]};
  border-width: ${({ borderWidth }) => borderWidth[0]};
  border-style: ${borderStyles.solid};
  border-color: ${({ borderColor }) => borderColor};
  background-image: ${({ backgroundImage }) => backgroundImage};
  border-radius: ${({ borderRadius }) => borderRadius[0]};
  box-shadow: ${({ boxShadow }) => boxShadow[0]};

  &.flex {
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
  }

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: ${({ paddingy, paddingx }) => `${paddingy[1]} ${paddingx[1]}`};
    width: ${({ boxWidth }) => boxWidth[1]};
    max-width: ${({ maxWidth }) => maxWidth[1]};
    height: ${({ boxHeight }) => boxHeight[1]};
    border-width: ${({ borderWidth }) => borderWidth[1]};
    border-radius: ${({ borderRadius }) => borderRadius[1]};
    box-shadow: ${({ boxShadow }) => boxShadow[1]};
  }

  @media ${mediaQueries.tablet} {
    padding: ${({ paddingy, paddingx }) => `${paddingy[2]} ${paddingx[2]}`};
    width: ${({ boxWidth }) => boxWidth[2]};
    max-width: ${({ maxWidth }) => maxWidth[2]};
    height: ${({ boxHeight }) => boxHeight[2]};
    border-width: ${({ borderWidth }) => borderWidth[2]};
    border-radius: ${({ borderRadius }) => borderRadius[2]};
    box-shadow: ${({ boxShadow }) => boxShadow[2]};
  }

  @media ${mediaQueries.desktop} {
    padding: ${({ paddingy, paddingx }) => `${paddingy[3]} ${paddingx[3]}`};
    width: ${({ boxWidth }) => boxWidth[3]};
    max-width: ${({ maxWidth }) => maxWidth[3]};
    height: ${({ boxHeight }) => boxHeight[3]};
    border-width: ${({ borderWidth }) => borderWidth[3]};
    border-radius: ${({ borderRadius }) => borderRadius[3]};
    box-shadow: ${({ boxShadow }) => boxShadow[3]};
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    padding: ${({ paddingy, paddingx }) => `${paddingy[4]} ${paddingx[4]}`};
    width: ${({ boxWidth }) => boxWidth[4]};
    max-width: ${({ maxWidth }) => maxWidth[4]};
    height: ${({ boxHeight }) => boxHeight[4]};
    border-width: ${({ borderWidth }) => borderWidth[4]};
    border-radius: ${({ borderRadius }) => borderRadius[4]};
    box-shadow: ${({ boxShadow }) => boxShadow[4]};
  }
`;

export default StyledBox;
