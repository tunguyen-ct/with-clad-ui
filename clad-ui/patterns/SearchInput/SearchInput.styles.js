import { css } from 'linaria';
import theme from '@clad-ui/theme';

const { colors, zIndices, space, radii, shadows, fontSizes } = theme;

const menuClass = css`
  border-radius: ${radii.sm};
  box-shadow: ${shadows.sm};
  list-style: none;
  margin: 0;
  overflow-y: auto;
  padding: 0;
  position: fixed;
  z-index: ${zIndices.dropdown};
  font-size: ${fontSizes.sm};

  /* create shadow only when menu is scrollable by stacking multible background layers */
  background:
    /* shadow covers */ linear-gradient(#ffffff 50%, transparent),
    linear-gradient(transparent, #ffffff 50%) 0 100%,
    /* shadows */ linear-gradient(rgba(0, 0, 0, 0.3), transparent),
    linear-gradient(transparent, rgba(0, 0, 0, 0.3)) 0 100%;
  background-repeat: no-repeat;
  background-color: ${colors.white};
  background-size: 100% 16px, 100% 16px, 100% 8px, 100% 8px;
  background-attachment: local, local, scroll, scroll;
`;

const optionClass = css`
  cursor: pointer;
  color: ${colors.textLighter};
  padding: ${space.xs} 0 ${space.xs} ${space.sm};

  &.highlight {
    background-color: ${colors.neutralLight};
  }

  & > mark {
    color: ${colors.text};
    background-color: transparent;
    padding: 0;
  }

  & > span {
    color: ${colors.accent};
  }
`;

export { menuClass, optionClass };
