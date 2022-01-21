import { styled } from 'linaria/react';
import theme from '@clad-ui/theme';

const { mediaQueries, breakpoints } = theme;

/**
 * @type {any}
 */
const StyledCol = styled.div`
  flex: 1 0 0%;
  align-self: ${({ alignSelf }) => alignSelf};
  order: ${({ colOrder }) => colOrder};

  &.withSpan {
    flex: 0 0 ${({ spans }) => spans[0]};
    max-width: ${({ spans }) => spans[0]};
  }

  &.withOffset {
    margin-left: ${({ offsets }) => offsets[0]};
  }

  @media screen and (min-width: ${breakpoints.sm}) {
    &.withSpan {
      flex: 0 0 ${({ spans }) => spans[1]};
      max-width: ${({ spans }) => spans[1]};
    }

    &.withOffset {
      margin-left: ${({ offsets }) => offsets[1]};
    }
  }

  @media ${mediaQueries.tablet} {
    &.withSpan {
      flex: 0 0 ${({ spans }) => spans[2]};
      max-width: ${({ spans }) => spans[2]};
    }

    &.withOffset {
      margin-left: ${({ offsets }) => offsets[2]};
    }
  }

  @media ${mediaQueries.desktop} {
    &.withSpan {
      flex: 0 0 ${({ spans }) => spans[3]};
      max-width: ${({ spans }) => spans[3]};
    }

    &.withOffset {
      margin-left: ${({ offsets }) => offsets[3]};
    }
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    &.withSpan {
      flex: 0 0 ${({ spans }) => spans[4]};
      max-width: ${({ spans }) => spans[4]};
    }

    &.withOffset {
      margin-left: ${({ offsets }) => offsets[4]};
    }
  }
`;

/**
 * @type {any}
 */
const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};

  &.withRowCols ${StyledCol} {
    flex: 0 0 auto;
    width: ${({ colWidths }) => colWidths[0]};
  }

  @media screen and (min-width: ${breakpoints.sm}) {
    &.withRowCols ${StyledCol} {
      width: ${({ colWidths }) => colWidths[1]};
    }
  }

  @media ${mediaQueries.tablet} {
    &.withRowCols ${StyledCol} {
      width: ${({ colWidths }) => colWidths[2]};
    }
  }

  @media ${mediaQueries.desktop} {
    &.withRowCols ${StyledCol} {
      width: ${({ colWidths }) => colWidths[3]};
    }
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    &.withRowCols ${StyledCol} {
      width: ${({ colWidths }) => colWidths[4]};
    }
  }
`;

/**
 * @type {React.FC<any>}
 */
const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  &.withWidth {
    width: ${({ containerWidths }) => containerWidths[0]};
  }

  &.withGutter {
    padding-left: ${({ gutterxs }) => gutterxs[0] / 2}px;
    padding-right: ${({ gutterxs }) => gutterxs[0] / 2}px;
  }

  &.withGutter ${StyledGrid} {
    margin-top: ${({ gutterys }) => gutterys[0] * -1}px;
    margin-right: ${({ gutterxs }) => gutterxs[0] * -1}px;
    margin-left: ${({ gutterxs }) => gutterxs[0] * -1}px;
  }

  &.withGutter ${StyledGrid} ${StyledCol} {
    margin-top: ${({ gutterys }) => gutterys[0]}px;
    padding-right: ${({ gutterxs }) => gutterxs[0] / 2}px;
    padding-left: ${({ gutterxs }) => gutterxs[0] / 2}px;
  }

  @media screen and (min-width: ${breakpoints.sm}) {
    &.withWidth {
      width: ${({ containerWidths }) => containerWidths[1]};
    }

    &.withGutter {
      padding-left: ${({ gutterxs }) => gutterxs[1] / 2}px;
      padding-right: ${({ gutterxs }) => gutterxs[1] / 2}px;
    }

    &.withGutter ${StyledGrid} {
      margin-top: ${({ gutterys }) => gutterys[1] * -1}px;
      margin-right: ${({ gutterxs }) => gutterxs[1] * -1}px;
      margin-left: ${({ gutterxs }) => gutterxs[1] * -1}px;
    }

    &.withGutter ${StyledGrid} ${StyledCol} {
      margin-top: ${({ gutterys }) => gutterys[1]}px;
      padding-right: ${({ gutterxs }) => gutterxs[1] / 2}px;
      padding-left: ${({ gutterxs }) => gutterxs[1] / 2}px;
    }
  }

  @media ${mediaQueries.tablet} {
    &.withWidth {
      width: ${({ containerWidths }) => containerWidths[2]};
    }

    &.withGutter {
      padding-left: ${({ gutterxs }) => gutterxs[2] / 2}px;
      padding-right: ${({ gutterxs }) => gutterxs[2] / 2}px;
    }

    &.withGutter ${StyledGrid} {
      margin-top: ${({ gutterys }) => gutterys[2] * -1}px;
      margin-right: ${({ gutterxs }) => gutterxs[2] * -1}px;
      margin-left: ${({ gutterxs }) => gutterxs[2] * -1}px;
    }

    &.withGutter ${StyledGrid} ${StyledCol} {
      margin-top: ${({ gutterys }) => gutterys[2]}px;
      padding-right: ${({ gutterxs }) => gutterxs[2] / 2}px;
      padding-left: ${({ gutterxs }) => gutterxs[2] / 2}px;
    }
  }

  @media ${mediaQueries.desktop} {
    &.withWidth {
      width: ${({ containerWidths }) => containerWidths[3]};
    }

    &.withGutter {
      padding-left: ${({ gutterxs }) => gutterxs[3] / 2}px;
      padding-right: ${({ gutterxs }) => gutterxs[3] / 2}px;
    }

    &.withGutter ${StyledGrid} {
      margin-top: ${({ gutterys }) => gutterys[3] * -1}px;
      margin-right: ${({ gutterxs }) => gutterxs[3] * -1}px;
      margin-left: ${({ gutterxs }) => gutterxs[3] * -1}px;
    }

    &.withGutter ${StyledGrid} ${StyledCol} {
      margin-top: ${({ gutterys }) => gutterys[3]}px;
      padding-right: ${({ gutterxs }) => gutterxs[3] / 2}px;
      padding-left: ${({ gutterxs }) => gutterxs[3] / 2}px;
    }
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    &.withWidth {
      width: ${({ containerWidths }) => containerWidths[4]};
    }

    &.withGutter {
      padding-left: ${({ gutterxs }) => gutterxs[4] / 2}px;
      padding-right: ${({ gutterxs }) => gutterxs[4] / 2}px;
    }

    &.withGutter ${StyledGrid} {
      margin-top: ${({ gutterys }) => gutterys[4] * -1}px;
      margin-right: ${({ gutterxs }) => gutterxs[4] * -1}px;
      margin-left: ${({ gutterxs }) => gutterxs[4] * -1}px;
    }

    &.withGutter ${StyledGrid} ${StyledCol} {
      margin-top: ${({ gutterys }) => gutterys[4]}px;
      padding-right: ${({ gutterxs }) => gutterxs[4] / 2}px;
      padding-left: ${({ gutterxs }) => gutterxs[4] / 2}px;
    }
  }
`;

export { Container, StyledGrid, StyledCol };
