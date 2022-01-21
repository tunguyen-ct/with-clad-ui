import { styled } from 'linaria/react';
import { css } from 'linaria';
import theme from '@clad-ui/theme';

const {
  colors,
  radii,
  sizes,
  space,
  breakpoints,
  mediaQueries,
  shadows,
  fontSizes,
  lineHeights,
  zIndices,
} = theme;

const buttonClass = css`
  width: ${sizes.full};
  justify-content: center;
  text-transform: uppercase;

  @media ${mediaQueries.tablet} {
    max-width: ${sizes.buttonMaxWidth};
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${sizes.vW};
  height: ${sizes.vH};
  z-index: ${zIndices.modal};

  /* center popup on desktop */
  @media ${mediaQueries.tablet} {
    display: grid;
    place-items: center;
  }
`;

const Backdrop = styled.div`
  background-color: ${colors.black};
  position: absolute;
  top: 0;
  left: 0;
  width: ${sizes.full};
  height: ${sizes.full};
  opacity: 0.3;
`;

const StyledPopup = styled.div`
  @keyframes scaleToFull {
    0% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes slideFromBottom {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  position: absolute;
  bottom: 0;
  left: 0;
  width: ${sizes.full};
  background-color: ${colors.white};
  border-top-left-radius: ${radii.sm};
  border-top-right-radius: ${radii.sm};
  z-index: ${zIndices.up};
  box-shadow: ${shadows.md};
  animation: 0.2s ease-out 0s 1 slideFromBottom;

  @media ${mediaQueries.tablet} {
    position: static;
    border-radius: ${radii.sm};
    animation: 0.2s ease-out 0s 1 scaleToFull;

    &.md {
      max-width: ${sizes.$md};
    }

    &.lg {
      max-width: ${sizes.$lg};
    }

    &.xl {
      max-width: ${sizes.$xl};
    }
  }
`;

const PopupHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: ${colors.background};
  border-top-left-radius: ${radii.sm};
  border-top-right-radius: ${radii.sm};

  & > h5 {
    position: absolute; /* center h5 using position absolute so that it's stable when button width change */
    width: ${sizes.full};
    top: ${space.xs};
    left: 0;
    text-align: center;
    margin: 0;
    font-size: ${fontSizes.h5};
    line-height: ${lineHeights.md};
    color: ${colors.text};
    font-weight: bold;
  }

  & > button {
    min-width: 40px;
    height: ${sizes.full};
    line-height: ${lineHeights.xs};
    background-color: transparent;
    padding: 0 ${space.sm};
    outline: none;
    white-space: nowrap;
    z-index: ${zIndices.up}; /* make sure button is clickable */
    font-size: ${sizes.xs};
    display: grid;
    place-items: center;
  }

  & > button.hidden {
    visibility: hidden; /* this instead of display: none so that it doesn't affect flexbox positioning */
  }

  & > button.is-text {
    color: ${colors.accent};
    font-size: ${fontSizes.sm};
  }
`;

/**
 * @type {React.FC<any>}
 */
const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ padding }) => padding[0]};

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: ${({ padding }) => padding[1]};
  }

  @media ${mediaQueries.tablet} {
    padding: ${({ padding }) => padding[2]};
  }

  @media ${mediaQueries.desktop} {
    padding: ${({ padding }) => padding[3]};
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    padding: ${({ padding }) => padding[4]};
  }
`;

const ChildrenWrapper = styled.div`
  line-height: ${lineHeights.sm};
  /* move scrollbar to edge so that is doesn't overlie text */
  width: calc(${sizes.full} + ${space.sm} * 2);
  padding: 0 ${space.sm};
  margin: 0 -${space.sm} ${space.sm};
  overflow-y: auto;

  &.no-button {
    margin-bottom: 0;
  }

  &.is-single-string {
    white-space: pre-wrap;
    text-align: center;
  }

  &.no-button + button {
    display: none;
  }

  &.half {
    max-height: calc(
      50vh - 108px
    ); /* minus PopupHeader, Button height and all padding, margin in PopupContent */
  }

  &.half.no-button {
    max-height: calc(50vh - 64px);
  }

  &.full {
    max-height: calc(${sizes.vH} - 120px); /* full popup on mobile has 12px of extra space on top */
  }

  &.full.no-button {
    max-height: calc(${sizes.vH} - 76px);
  }

  @media ${mediaQueries.tablet} {
    /* move scrollbar to edge so that is doesn't overlie text */
    width: calc(${sizes.full} + ${space.lg} * 2);
    padding: 0 ${space.lg};
    margin: 0 -${space.lg} ${space.lg};

    && {
      max-height: calc(${sizes.$lg} - 144px);
    }

    &&.no-button {
      max-height: calc(${sizes.$lg} - 88px);
    }
  }
`;

export { buttonClass, Modal, Backdrop, PopupHeader, StyledPopup, PopupContent, ChildrenWrapper };
