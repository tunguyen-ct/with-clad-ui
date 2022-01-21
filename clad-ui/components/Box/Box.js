import React from 'react';
import PropTypes from 'prop-types';
import theme from '@clad-ui/theme';
import { cx } from 'linaria';
import StyledBox from './Box.styles';
import { getBreakpointsValues, cleanHtml } from '../../utils';

const { borderWidths, radii, shadows, colors, space, sizes } = theme;

/**
 * @param {string | string[]} value
 * @param {string} defaultValue
 */
const getSpaces = (value, defaultValue) =>
  getBreakpointsValues(value, defaultValue).map((v) => space[v] || space.none);

/**
 * @param {string | string[]} value
 * @param {string} defaultValue
 */
const getSizes = (value, defaultValue) =>
  getBreakpointsValues(value, defaultValue).map((v) => sizes[v] || 'initial');

/**
 * @param {string | string[]} value
 * @param {string} defaultValue
 */
const getBorderWidth = (value, defaultValue) =>
  getBreakpointsValues(value, defaultValue).map((v) => `${borderWidths[v] || borderWidths.none}`);

/**
 * @param {string | string[]} value
 * @param {string} defaultValue
 */
const getRadiis = (value, defaultValue) =>
  getBreakpointsValues(value, defaultValue).map((v) => radii[v] || radii.none);

/**
 * @param {string | string[]} value
 * @param {string} defaultValue
 */
const getShadows = (value, defaultValue) =>
  getBreakpointsValues(value, defaultValue).map((v) => shadows[v] || shadows.none);

/**
 * Clad-UI-s theme-aware replacement for \<div \/\> HTML element
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   as?: any,
 *   className?: string,
 *   borderColor?: string,
 *   alignItems?: string,
 *   justifyContent?: string,
 *   textAlign?: string,
 *   color: string,
 *   backgroundColor?: string,
 *   backgroundImage?: string,
 *   style?: any,
 *   padding?: string | string[],
 *   paddingx?: string | string[],
 *   paddingy?: string | string[],
 *   width?: string | string[],
 *   maxWidth?: string | string[],
 *   height?: string | string[],
 *   borderWidth?: string | string[],
 *   borderRadius?: string | string[],
 *   boxShadow?: string | string[],
 *   children?: any,
 *   dangerousHtml?: string,
 * }>}
 */
const Box = ({
  as,
  className,
  style,
  borderColor,
  alignItems,
  justifyContent,
  textAlign,
  color,
  backgroundColor,
  backgroundImage,
  padding,
  paddingx,
  paddingy,
  width,
  maxWidth,
  height,
  borderWidth,
  borderRadius,
  boxShadow,
  children,
  dangerousHtml,
}) => {
  const boxClasses = cx(
    className,
    (justifyContent !== 'initial' || alignItems !== 'initial') && 'flex'
  );

  let boxHtml;
  if (typeof dangerousHtml === 'string' && dangerousHtml.trim()) {
    boxHtml = {
      __html: cleanHtml(dangerousHtml),
    };
  }

  // in case user misread and pass justify, align values from grid
  const boxAlignItems =
    (alignItems === 'start' && 'flex-start') || (alignItems === 'end' && 'flex-end') || alignItems;
  const boxJustifyContent =
    (justifyContent === 'start' && 'flex-start') ||
    (justifyContent === 'end' && 'flex-end') ||
    (justifyContent === 'between' && 'space-between') ||
    (justifyContent === 'around' && 'space-around') ||
    justifyContent;
  const paddingxValue = paddingx || padding;
  const paddingyValue = paddingy || padding;
  const boxPaddingx = getSpaces(paddingxValue, 'initial');
  const boxPaddingy = getSpaces(paddingyValue, 'initial');
  return (
    <StyledBox
      as={as}
      textAlign={textAlign}
      style={style}
      className={boxClasses}
      alignItems={boxAlignItems}
      justifyContent={boxJustifyContent}
      paddingx={boxPaddingx}
      paddingy={boxPaddingy}
      boxColor={colors[color] || 'initial'}
      backgroundColor={colors[backgroundColor] || 'transparent'}
      boxWidth={getSizes(width, 'initial')}
      maxWidth={getSizes(maxWidth, 'initial')}
      boxHeight={getSizes(height, 'initial')}
      borderWidth={getBorderWidth(borderWidth, 'initial')}
      borderColor={colors[borderColor] || 'currentColor'}
      backgroundImage={backgroundImage ? `url(${backgroundImage})` : 'none'}
      borderRadius={getRadiis(borderRadius, 'initial')}
      boxShadow={getShadows(boxShadow, 'initial')}
      dangerouslySetInnerHTML={boxHtml}
    >
      {!boxHtml ? children : null}
    </StyledBox>
  );
};

const keysOfColors = Object.keys(colors);
const keysOfSpace = Object.keys(space);
const keysOfSizes = Object.keys(sizes);
const keysOfBorderWidths = Object.keys(borderWidths);
const keysOfRadii = Object.keys(radii);
const keysOfShadows = Object.keys(shadows);

Box.propTypes = {
  /**
   * Element or component to be rendered as
   */
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /**
   * Box className
   */
  className: PropTypes.string,
  /**
   * Box border-color
   */
  borderColor: PropTypes.oneOf(keysOfColors),
  /**
   * [Responsive Prop] Box border-width (if borderColor is not set, Box will use currentColor)
   */
  borderWidth: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfBorderWidths)),
    PropTypes.oneOf(keysOfBorderWidths),
  ]),
  /**
   * Box align-items (Box's css display property will be set to flex if alignItems value is not `initial`)
   */
  alignItems: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'baseline',
    'initial',
    'inherit',
  ]),
  /**
   * Box justify-content (Box's css display property will be set to flex if justifyContent value is not `initial`)
   */
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'initial',
    'inherit',
  ]),
  /**
   * Box text-align
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify', 'inherit', 'initial']),
  /**
   * Box color
   */
  color: PropTypes.oneOf(keysOfColors),
  /**
   * Box background-color
   */
  backgroundColor: PropTypes.oneOf(keysOfColors),
  /**
   * Box background-image
   */
  backgroundImage: PropTypes.string,
  /**
   * [Responsive Prop] Box padding-top, padding-right, padding-bottom and padding-left. `paddingx` and `paddingy` will override `padding`
   */
  padding: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfSpace)),
    PropTypes.oneOf(keysOfSpace),
  ]),
  /**
   * [Responsive Prop] Box padding-left and padding-right
   */
  paddingx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfSpace)),
    PropTypes.oneOf(keysOfSpace),
  ]),
  /**
   * [Responsive Prop] Box padding-top and padding-bottom
   */
  paddingy: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfSpace)),
    PropTypes.oneOf(keysOfSpace),
  ]),
  /**
   * [Responsive Prop] Box width
   */
  width: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfSizes)),
    PropTypes.oneOf(keysOfSizes),
  ]),
  /**
   * [Responsive Prop] Box max-width
   */
  maxWidth: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfSizes)),
    PropTypes.oneOf(keysOfSizes),
  ]),
  /**
   * [Responsive Prop] Box height
   */
  height: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfSizes)),
    PropTypes.oneOf(keysOfSizes),
  ]),
  /**
   * [Responsive Prop] Box border-radius
   */
  borderRadius: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfRadii)),
    PropTypes.oneOf(keysOfRadii),
  ]),
  /**
   * [Responsive Prop] Box box-shadow
   */
  boxShadow: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfShadows)),
    PropTypes.oneOf(keysOfShadows),
  ]),
  /**
   * Box content. Only use either `children` or `dangerousHtml`, not both.
   */
  children: PropTypes.node,
  /**
   * A replacement for `children`, rendered via dangerouslySetInnerHTML. Only use either `children` or `dangerousHtml`, not both.
   */
  dangerousHtml: PropTypes.string,

  /**
   * Additional inline style object
   */
  style: PropTypes.shape({}),
};

Box.defaultProps = {
  as: 'div',
  className: '',
  borderColor: null,
  alignItems: 'initial',
  justifyContent: 'initial',
  textAlign: 'initial',
  color: null,
  backgroundColor: null,
  backgroundImage: '',
  padding: null,
  paddingx: null,
  paddingy: null,
  width: null,
  maxWidth: null,
  height: null,
  borderWidth: 'none',
  borderRadius: 'none',
  boxShadow: 'none',
  children: null,
  dangerousHtml: null,
  style: null,
};

export { getSpaces, getSizes, getBorderWidth, getRadiis, getShadows };

export default Box;
