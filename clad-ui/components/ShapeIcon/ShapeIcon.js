/**
 * Copyright 2020, ChoTot Ltd. Licensed under the Apache License, Version 2.0.
 *
 * Developer's Notes:
 * This is an example of component whose styles are highly dynamic and
 * dependent on many props.
 *
 * The reason we wrap the StyledComponent with another FunctionComponent is that
 * Storybook will pick up the JSDoc and prop type desription correctly.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'linaria/react';
import theme from '@clad-ui/theme';

/**
 * NOTE:
 * - font-size to control icon's size
 * - color to control icon's color
 * - StyledComponent has an `as` prop which allows changing the HTML element later so span here is just for generic inline component
 *
 * @type {React.FC<any>}
 */
const StyledComponent = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ radius }) => theme.radii[radius]};
  color: ${({ color }) => theme.colors[color]};
  background-color: ${({ bg }) => (bg.toLowerCase() === 'none' ? 'transparent' : theme.colors[bg])};
  font-size: ${({ size }) => parseInt(theme.sizes[size], 10) * (60 / 100)}px;
  width: ${({ size }) => theme.sizes[size]};
  height: ${({ size }) => theme.sizes[size]};
`;

/**
 * This component allows icons to have background and decorated shape
 *
 * `🧪Beta`
 *
 * @example:
 *
 * ```jsx
 * <ShapeIcon radius="circle" bg="positive" color="white"><SvgHeart /><ShapeIcon>
 * ```
 */
const ShapeIcon = (props) => <StyledComponent {...props} />;

ShapeIcon.propTypes = {
  /** Element name or Component for the icon wrapper to be render as */
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * Icon size
   */
  size: PropTypes.oneOf(Object.keys(theme.sizes)),
  /** Border radius */
  radius: PropTypes.oneOf(Object.keys(theme.radii)),
  /** Background color, "none" or a theme\'s color name */
  bg: PropTypes.string,
  /** Icon color, one of theme's color name */
  color: PropTypes.string,
  /** The SVG Icon component to be decorated */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

ShapeIcon.defaultProps = {
  as: 'span',
  bg: 'none',
  color: 'text',
  radius: 0,
  size: 0,
};

export default ShapeIcon;
