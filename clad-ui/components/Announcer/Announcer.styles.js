import { css } from 'linaria';
import { styled } from 'linaria/react';
import theme from '@clad-ui/theme';

const { space, sizes, colors, radii, fontSizes, fontWeights, mediaQueries, borders } = theme;

const typeIconClass = css`
  position: absolute;
  top: ${space.md};
  left: ${space.md};
  font-size: ${sizes.xs};
  color: ${colors.info};

  &.warning {
    color: ${colors.orange2};
  }

  &.success {
    color: ${colors.positive};
  }

  &.error {
    color: ${colors.critical};
  }
`;

const EmptyStateAnnouncer = styled.div`
  background-color: ${colors.background};
  padding: ${space.md};
  font-size: ${fontSizes.xs};
  line-height: 16px;
  color: ${colors.neutralDark};
  text-align: center;
  border-radius: ${radii.sm};

  @media ${mediaQueries.tablet} {
    font-size: ${fontSizes.sm};
    line-height: 20px;
  }

  /* reset all default margin in children's last wrapper element to make sure content is always centered */
  & > *:last-child {
    margin-bottom: 0;
  }
`;

/* limit description to 2 lines */
const lineLimitClass = css`
  max-height: ${sizes.lg};
  overflow: hidden;

  @media ${mediaQueries.tablet} {
    max-height: none;
  }
`;

const ChildrenWrapper = styled.div`
  font-size: ${fontSizes.xs};
  line-height: 16px;
  margin-bottom: ${space.xs};

  /* reset all default margin in children's last wrapper element to make sure content is always centered */
  & > *:last-child {
    margin-bottom: 0;
  }

  @media ${mediaQueries.tablet} {
    font-size: ${fontSizes.body};
    line-height: 20px;
  }
`;

const StyledAnnouncer = styled.div`
  position: relative;
  padding: ${space.md} ${space.md} ${space.md} ${space.xxl};
  border-radius: ${radii.sm};
  text-align: right;
  background-color: ${colors.infoBGLight};

  &.warning {
    background-color: ${colors.orange5};
  }

  &.success {
    background-color: ${colors.positiveBGLight};
  }

  &.error {
    background-color: ${colors.criticalBG};
  }

  & > * {
    text-align: left;
  }

  & > h6 {
    font-size: ${fontSizes.h6};
    font-weight: ${fontWeights.bold};
    line-height: 20px;
    margin: 0 ${space.md} ${space.xxs} 0;
  }

  &.compact {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 ${space.xl} 0 ${space.xxl};
  }

  &.compact > .${typeIconClass} {
    top: 10px;
  }

  &.no-button > ${ChildrenWrapper} {
    margin-bottom: 0;
  }

  &.compact > ${ChildrenWrapper} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0;
  }

  @media ${mediaQueries.tablet} {
    padding-right: ${space.xl};

    & > h6 {
      margin-right: 0;
    }
  }
`;

const ExpandButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: ${space.md};
  color: ${colors.link};
  text-decoration: underline;
  background-color: inherit;
  font-size: ${fontSizes.xs};
  line-height: 16px;
  padding-right: ${space.xxxl};

  &:focus {
    outline: none;
  }

  &::before {
    content: '...';
    position: absolute;
    bottom: 1px;
    left: -${space.sm};
    padding-left: ${space.xxs};
    color: ${colors.text};
    background-color: inherit;
  }

  @media ${mediaQueries.tablet} {
    display: none;
  }
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: ${borders.none};
  /* increase hit box */
  padding: ${space.xxs} ${space.sm};
  margin: -${space.xxs} -${space.sm};
  font-weight: bold;
  font-size: ${fontSizes.xs};
  line-height: 16px;
  text-transform: uppercase;
  color: ${colors.info};

  &.warning {
    color: ${colors.orange2};
  }

  &.success {
    color: ${colors.positive};
  }

  &.error {
    color: ${colors.critical};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${space.sm};
  right: ${space.sm};
  /* increase hit box */
  padding: ${space.xs};
  margin: -${space.xs};
  background-color: transparent;
  font-size: ${sizes.xxxs};
  height: ${sizes.md};

  &:focus {
    outline: none;
  }
`;

export {
  typeIconClass,
  EmptyStateAnnouncer,
  StyledAnnouncer,
  lineLimitClass,
  ExpandButton,
  ActionButton,
  CloseButton,
  ChildrenWrapper,
};
