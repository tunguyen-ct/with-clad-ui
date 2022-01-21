import { styled } from 'linaria/react';
import theme from '@clad-ui/theme';

const { colors, radii, space, sizes, fontSizes, mediaQueries, durations, zIndices } = theme;

const SnackWrapper = styled.div`
  position: fixed;
  bottom: ${space.lg};
  left: 0;
  width: ${sizes.full};
  padding: 0 ${space.sm};
  text-align: center;
  z-index: ${zIndices.notification};
`;

const StyledSnack = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 0.8;
      transform: scale(1);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 0.8;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.9);
    }
  }

  color: ${colors.white};
  background-color: ${colors.black};
  border-radius: ${radii.sm};
  padding: ${space.xs} ${space.sm};
  font-size: ${fontSizes.sm};
  line-height: 20px;
  opacity: 0.8;
  animation: fadeIn ${durations.xxs}ms ease 0s;

  &.exit {
    animation-name: fadeOut;
  }

  @media ${mediaQueries.tablet} {
    margin: 0 auto;

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

export { SnackWrapper, StyledSnack };
