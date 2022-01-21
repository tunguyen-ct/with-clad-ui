import { styled } from 'linaria/react';
import theme from '@clad-ui/theme';

const { fontSizes, colors, space, sizes, mediaQueries } = theme;

const StyledBreadcrumbs = styled.ol`
  margin-bottom: 0;
  padding-left: 0;
  font-size: ${fontSizes.xs};
  line-height: 16px;
  list-style: none;
  white-space: nowrap;
  overflow-x: auto;

  & > li {
    display: inline;
  }

  & .separator {
    font-size: 8px;
    color: ${colors.textLighter};
    margin: 0 ${space.xxs};
  }

  /* hide scrollbar on mobile */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }

  /* disable scroll on desktop */
  @media ${mediaQueries.tablet} {
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
`;

const Placeholder = styled.div`
  height: ${sizes.xxs};
`;

export { StyledBreadcrumbs, Placeholder };
