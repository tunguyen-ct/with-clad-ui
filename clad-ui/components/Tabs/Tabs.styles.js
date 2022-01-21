import { styled } from 'linaria/react';
import theme from '@clad-ui/theme';
import { css } from 'linaria';

const { colors, fontWeights, fontSizes, borderWidths } = theme;

const TabRootClass = css`
  padding: 8px;
  cursor: pointer;
  opacity: 0.5;
  display: var(--display);
  justify-content: center;
  background-color: transparent;
  position: relative;
  &.fullWidth {
    flex-grow: 1;
    max-width: none;
    flex-basis: 0;
    flex-shrink: 1;
  }
  &.disabled {
    cursor: default;
    pointer-events: none;
    color: ${colors.gray1};
  }
  &.active {
    opacity: 1;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  };
`;
/**
 *  @type {React.FC<any>}
 */
const TabLabel = styled.span`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.xs};
  height: 100%;
  color: ${({ disabled }) => (disabled ? colors.gray1 : colors.black)};
`;

const TabIconWrapper = styled.span`
  height: 100%;
  min-width: 40px;
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const TabsRoot = styled.div`
  display: flex;
  overflow: hidden;
`;

/**
 *  @type {React.FC<any>}
 */
const TabsScroller = styled.div`
  overflow-x: ${({ scrollable }) => (scrollable ? 'auto' : 'hidden')};
  flex: 1 1 auto;
  display: flex;
  position: relative;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const TabsIndicator = styled.span`
  background-color: ${({ color = colors.yellow2 }) => colors[color]};
  bottom: 0;
  height: ${borderWidths.xl};
  position: absolute;
  width: 100%;
`;

export { TabsRoot, TabsScroller, TabsIndicator, TabRootClass, TabLabel, TabIconWrapper };
