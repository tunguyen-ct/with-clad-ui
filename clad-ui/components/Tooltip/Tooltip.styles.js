import { styled } from 'linaria/react';
import theme from '@clad-ui/theme';

const { colors, radii, space, fontSizes, sizes, durations, zIndices } = theme;

/**
 *  @type {React.FC<any>}
 */
const StyledTooltip = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.9);
    }
  }

  border-radius: ${radii.sm};
  padding: ${space.xs} ${space.sm};
  max-width: ${sizes.$sm};
  animation: fadeIn ${durations.xxxs}ms ease 0s;
  z-index: ${zIndices.tooltip};
  font-size: ${fontSizes.sm};
  pointer-events: none;
  white-space: pre-wrap;

  &.exit {
    animation-name: fadeOut;
  }

  &.dark {
    color: ${colors.white};
    background-color: ${colors.black};
  }

  &.light {
    color: ${colors.black};
    background-color: ${colors.white};
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
  }
`;

export default StyledTooltip;
