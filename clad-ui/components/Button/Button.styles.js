import theme from '@clad-ui/theme';
import { css } from 'linaria';

const { colors, radii, fontSizes } = theme;

const buttonClass = css`
  /* Regular buttton */
  cursor: pointer;
  display: inline-flex;
  font-weight: normal;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  text-decoration: none;

  /* Stretch */
  &.stretch {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  /* Inner icons */
  &.i-left > svg {
    margin-right: 0.5em;
    margin-left: 0;
  }

  &.i-right > svg {
    margin-right: 0;
    margin-left: 0.5em;
  }

  /* Sizes */
  &.small {
    /* outer height: 24px */
    font-size: ${fontSizes.xs};
    line-height: 1;
    padding: 5px 11px; /* minus borders */

    &.icon {
      font-size: ${fontSizes.xs};
      padding: 0.3rem; /* 20% * 24px */
    }

    &.i-right > svg,
    &.i-left > svg {
      font-size: ${fontSizes.xs};
    }
  }

  &,
  &.medium {
    /* outer height: 32px */
    font-size: ${fontSizes.sm};
    line-height: 1;
    padding: 8px 16px;

    &.icon {
      font-size: ${fontSizes.md};
      padding: 0.4rem; /* 20% * 32px */
    }

    &.i-right > svg,
    &.i-left > svg {
      font-size: ${fontSizes.md};
    }
  }

  &.large {
    /* outer height: 40px */
    font-size: ${fontSizes.md};
    line-height: 1.25;
    padding: 9px 19px; /* minus borders */

    &.icon {
      font-size: ${fontSizes.xl};
      padding: 0.5rem; /* 20% * 40px */
    }

    &.i-right > svg,
    &.i-left > svg {
      font-size: ${fontSizes.xl};
    }
  }

  &,
  &.primary {
    color: ${colors.white};
    background-color: ${colors.primary};
    border-color: ${colors.primary};
    &:hover {
      color: ${colors.white};
      background-color: ${colors.primaryLight};
      border-color: ${colors.primaryLight};
    }
    &:active {
      color: ${colors.white};
      background-color: ${colors.primaryDark};
      border-color: ${colors.primaryDark};
    }
  }
  &.info {
    color: ${colors.white};
    background-color: ${colors.info};
    border-color: ${colors.info};
    &:hover {
      color: ${colors.white};
      background-color: ${colors.infoLight};
      border-color: ${colors.infoLight};
    }
    &:active {
      color: ${colors.white};
      background-color: ${colors.infoDark};
      border-color: ${colors.infoDark};
    }
  }
  &.critical {
    color: ${colors.white};
    background-color: ${colors.critical};
    border-color: ${colors.critical};
    &:hover {
      color: ${colors.white};
      background-color: ${colors.criticalLight};
      border-color: ${colors.criticalLight};
    }
    &:active {
      color: ${colors.white};
      background-color: ${colors.criticalDark};
      border-color: ${colors.criticalDark};
    }
  }
  &.caution {
    color: ${colors.white};
    background-color: ${colors.caution};
    border-color: ${colors.caution};
    &:hover {
      color: ${colors.white};
      background-color: ${colors.cautionLight};
      border-color: ${colors.cautionLight};
    }
    &:active {
      color: ${colors.white};
      background-color: ${colors.cautionDark};
      border-color: ${colors.cautionDark};
    }
  }
  &.positive {
    color: ${colors.white};
    background-color: ${colors.positive};
    border-color: ${colors.positive};
    &:hover {
      color: ${colors.white};
      background-color: ${colors.positiveLight};
      border-color: ${colors.positiveLight};
    }
    &:active {
      color: ${colors.white};
      background-color: ${colors.positiveDark};
      border-color: ${colors.positiveDark};
    }
  }
  &.accent {
    color: ${colors.white};
    background-color: ${colors.accent};
    border-color: ${colors.accent};
    &:hover {
      color: ${colors.white};
      background-color: ${colors.accentLight};
      border-color: ${colors.accentLight};
    }
    &:active {
      color: ${colors.white};
      background-color: ${colors.accentDark};
      border-color: ${colors.accentDark};
    }
  }
  &.secondary {
    color: ${colors.white};
    background-color: ${colors.secondary};
    border-color: ${colors.secondary};
    &:hover {
      color: ${colors.white};
      background-color: ${colors.secondaryLight};
      border-color: ${colors.secondaryLight};
    }
    &:active {
      color: ${colors.white};
      background-color: ${colors.secondaryDark};
      border-color: ${colors.secondaryDark};
    }
  }

  /* Outline button */
  &.outline,
  &.outline.o-primary {
    color: ${colors.primary};
    background: transparent;
    border-color: currentColor;

    &:hover {
      color: ${colors.primaryLight};
      background: ${colors.primaryBG};
      border-color: currentColor;
    }
    &:active {
      color: ${colors.primaryDark};
      background: transparent;
      border-color: currentColor;
    }
  }

  &.o-info {
    color: ${colors.info};
    &:hover {
      background: ${colors.infoBG};
      color: ${colors.infoLight};
    }
    &:active {
      color: ${colors.infoDark};
    }
  }
  &.o-critical {
    color: ${colors.critical};
    &:hover {
      background: ${colors.criticalBG};
      color: ${colors.criticalLight};
    }
    &:active {
      color: ${colors.criticalDark};
    }
  }
  &.o-caution {
    color: ${colors.caution};
    &:hover {
      background: ${colors.cautionBG};
      color: ${colors.cautionLight};
    }
    &:active {
      color: ${colors.cautionDark};
    }
  }
  &.o-positive {
    color: ${colors.positive};
    &:hover {
      background: ${colors.positiveBG};
      color: ${colors.positiveLight};
    }
    &:active {
      color: ${colors.positiveDark};
    }
  }
  &.o-accent {
    color: ${colors.accent};
    &:hover {
      background: ${colors.accentBG};
      color: ${colors.accentLight};
    }
    &:active {
      color: ${colors.accentDark};
    }
  }
  &.o-secondary {
    color: ${colors.secondary};
    &:hover {
      background: ${colors.secondaryBG};
      color: ${colors.secondaryLight};
    }
    &:active {
      color: ${colors.secondaryDark};
    }
  }

  /* disabled override all colors */
  &.disabled,
  &:disabled,
  &[disabled] {
    color: ${colors.white};
    background-color: ${colors.neutral};
    border-color: ${colors.neutral};
    cursor: default;

    &:hover,
    &:active {
      color: ${colors.white};
      background-color: ${colors.neutral};
      border-color: ${colors.neutral};
    }
  }

  &.outline.disabled,
  &.outline:disabled,
  &.outline[disabled] {
    color: ${colors.neutral};
    background-color: transparent;
    border-color: ${colors.neutral};

    &:hover,
    &:active {
      color: ${colors.neutral};
      background-color: transparent;
      border-color: ${colors.neutral};
    }
  }

  /* Border radius */
  &.r-normal {
    border-radius: ${radii.sm};
  }
  &.r-pill {
    border-radius: ${radii.pill};
  }
  &.r-circle {
    border-radius: ${radii.circle};
  }

  /* Label font weight */
  &.w-normal {
    font-weight: normal;
  }

  &.w-bold {
    font-weight: bold;
  }
`;

export default buttonClass;
