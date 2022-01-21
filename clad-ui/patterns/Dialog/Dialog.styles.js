import React from 'react';
import { styled } from 'linaria/react';
import theme from '@clad-ui/theme';

const {
  colors,
  radii,
  sizes,
  space,
  mediaQueries,
  shadows,
  fontSizes,
  lineHeights,
  zIndices,
} = theme;

const DialogMainIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
  >
    <defs>
      <path id="a" d="M0 0h80v80H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill={colors.white}>
        <use xlinkHref="#a" />
      </mask>
      <path
        fill="#F79A1B"
        d="M14.216 12.709L41 1l26.441 9.937A7.033 7.033 0 0172 17.521v30.23C66.2 59.057 55.868 68.807 41 77c-15.343-9.119-25.676-18.868-31-29.25V19.153a7.033 7.033 0 014.216-6.444z"
        mask="url(#b)"
      />
      <path
        fill={colors.primary}
        d="M15.026 14.566L39 5.714l23.974 8.852a7.033 7.033 0 014.597 6.598v26.748C62.551 58.108 53.027 66.9 39 74.286c-14.438-8.222-23.962-17.013-28.571-26.374V21.164a7.033 7.033 0 014.597-6.598z"
        mask="url(#b)"
      />
      <path
        fill={colors.white}
        d="M34.41 55.971L19.17 41.138 25.1 35.35l8.446 8.111 16.703-16.718 6.895 6.044z"
        mask="url(#b)"
      />
      <path
        fill={colors.black}
        d="M36.045 54.286L22.857 41.635l4.396-4.215 8.351 8.013L52.312 28.57l4.83 4.216z"
        mask="url(#b)"
      />
      <path
        stroke={colors.black}
        strokeWidth="2.286"
        d="M39 1.22l28.025 10.452a5.883 5.883 0 013.832 5.519h0v31.774C65.185 60.44 54.553 70.332 39.02 78.691 23.023 69.406 12.372 59.518 7.143 48.965h0V17.191a5.883 5.883 0 013.832-5.519h0L39 1.22z"
        mask="url(#b)"
      />
    </g>
  </svg>
);

const Modal = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: ${sizes.vW};
  height: ${sizes.vH};
  padding: ${space.sm};
  z-index: ${zIndices.modal};
`;

const StyledDialog = styled.div`
  @keyframes scaleToFull {
    0% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }

  position: relative;
  width: ${sizes.full};
  padding: ${space.xl} ${space.sm} ${space.xl};
  background-color: ${colors.white};
  border-radius: ${radii.sm};
  z-index: ${zIndices.up};
  box-shadow: ${shadows.md};
  animation: 0.2s ease-out 0s 1 scaleToFull;
  text-align: center;

  & > h5 {
    margin: ${space.lg} 0 ${space.sm};
    font-size: ${fontSizes.h5};
    line-height: ${lineHeights.sm};
    color: ${colors.text};
    font-weight: bold;
  }

  /* we keep class name so it's esier to select in overwrite */
  & > .main-icon {
    display: grid;
    place-items: center;
    height: ${sizes.xxxl}; /* height should always be 80px even when string is used as main icon */
  }

  & > .main-icon > svg {
    /* most icons need font-size but some special icons need height */
    font-size: ${sizes.xxxl};
    height: ${sizes.xxxl};
  }

  @media ${mediaQueries.tablet} {
    padding: ${space.xl} ${space.lg} ${space.lg};

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

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 40px;
  height: 40px;
  line-height: ${lineHeights.xs};
  background-color: transparent;
  padding: 0 ${space.sm};
  outline: none;
  white-space: nowrap;
  font-size: ${sizes.xs};
  display: grid;
  place-items: center;

  &.is-text {
    color: ${colors.accent};
    font-size: ${fontSizes.sm};
  }
`;

const ChildrenWrapper = styled.div`
  font-size: ${fontSizes.sm};
  line-height: 20px;
  max-height: calc(${sizes.vH} - 280px);
  /* move scrollbar to edge so that is doesn't overlie text */
  width: calc(${sizes.full} + ${space.sm} * 2);
  padding: 0 ${space.sm};
  margin: 0 -${space.sm} ${space.lg};
  overflow-y: auto;
  text-align: left;

  &.no-button {
    max-height: calc(${sizes.vH} - 224px);
    margin-bottom: 0;
  }

  &.no-button + button {
    display: none;
  }

  &.is-single-string {
    white-space: pre-wrap;
    text-align: center;
  }

  @media ${mediaQueries.tablet} {
    /* move scrollbar to edge so that is doesn't overlie text */
    width: calc(${sizes.full} + ${space.lg} * 2);
    padding: 0 ${space.lg};
    margin: 0 -${space.lg} ${space.lg};

    & {
      max-height: calc(${sizes.$lg} - 248px);
    }

    &.no-button {
      max-height: calc(${sizes.$lg} - 192px);
    }
  }
`;

export { DialogMainIcon, Modal, StyledDialog, CloseButton, ChildrenWrapper };
