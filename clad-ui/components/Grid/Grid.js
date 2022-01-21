import React from 'react';
import PropTypes from 'prop-types';
import theme from '@clad-ui/theme';
import { cx } from 'linaria';
import { Container, StyledGrid } from './Grid.styles';
import { getBreakpointsValues } from '../../utils';

/**
 * Based on Bootstrap Grid system.
 */

const { sizes, space } = theme;

const getWidthByPctFromRowCols = (rowCols) => {
  let width = parseInt(rowCols, 10);
  if (isNaN(width)) return 'initial';
  if (width < 0) width = 0;
  if (width > 12) width = 12;
  if (width === 0) return '0%';
  return (1 / width) * 100 + '%';
};
const getColWidths = (span, defaultValue) =>
  getBreakpointsValues(span, defaultValue).map((value) => getWidthByPctFromRowCols(value));

// return space in number format
const getSpaceValue = (key) => {
  if (!space[key]) return 0;
  return +space[key].slice(0, space[key].length - 2); // remove 'px' at the end
};
const getGutters = (gutter, defaultValue) =>
  getBreakpointsValues(gutter, defaultValue).map((value) => getSpaceValue(value));

const getSizesValue = (key) => sizes[key] || 'initial';
const getContainerWidths = (width, defaultValue) =>
  getBreakpointsValues(width, defaultValue).map((value) => getSizesValue(value));
/**
 * Grid component mimic flexbox container
 *
 * `🧪Beta`
 *
 * @type {React.FC<{
 *   width?: "vW" | "vH" | "quarter" | "third" | "half" | "twoThird" | "threeQuarter" | "full",
 *   align?: 'start' | 'end' | 'center' | 'initial',
 *   justify?: 'start' | 'center' | 'end' | 'around' | 'between' | 'initial',
 *   rowCols?: number | number[],
 *   gutter?: string | string[],
 *   gutterx?: string | string[],
 *   guttery?: string | string[],
 *   className?: string,
 *   children?: any,
 * }>}
 */
const Grid = ({
  width,
  align,
  justify,
  rowCols,
  gutter,
  gutterx,
  guttery,
  className,
  children,
}) => {
  const gridClasses = cx(className, rowCols && 'withRowCols');
  const alignItems =
    (align === 'start' && 'flex-start') || (align === 'end' && 'flex-end') || align; // no need to transform 'center'
  const justifyContent =
    (justify === 'start' && 'flex-start') ||
    (justify === 'end' && 'flex-end') ||
    (justify === 'between' && 'space-between') ||
    (justify === 'around' && 'space-around') ||
    justify; // no need to transform 'center'
  const colWidths = getColWidths(rowCols, 'initial');

  const gridAttrs = {
    className: gridClasses,
    alignItems,
    justifyContent,
    colWidths,
  };

  const containerClasses = cx(
    className,
    width && 'withWidth',
    (gutter || gutterx || guttery) && 'withGutter'
  );
  const containerWidths = getContainerWidths(width, 'initial');
  const gutterxValue = gutterx || gutter || 'none';
  const gutteryValue = guttery || gutter || 'none';

  const containerAttrs = {
    className: containerClasses,
    containerWidths,
    gutterxs: getGutters(gutterxValue, 0),
    gutterys: getGutters(gutteryValue, 0),
  };

  return (
    <Container {...containerAttrs}>
      <StyledGrid {...gridAttrs}>{children}</StyledGrid>
    </Container>
  );
};

const keysOfSizes = Object.keys(sizes);
const keysOfSpace = Object.keys(space);

Grid.propTypes = {
  /**
   * [Responsive Prop] Width of the grid
   */
  // @ts-ignore not compatible with literal string union type
  width: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfSizes)),
    PropTypes.oneOf(keysOfSizes),
  ]),
  /**
   * Vertical alignment (flexbox `align-items`)
   */
  align: PropTypes.oneOf(['start', 'end', 'center', 'initial']),
  /**
   * Horizontal alignment (flexbox `justify-content`)
   */
  justify: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between', 'initial']),
  /**
   * [Responsive Prop]  Uniformed number of column per row. **Do not override span prop in \<Col \/\>**.
   */
  rowCols: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  /**
   * [Responsive Prop] The gaps (gutters) between columns
   */
  gutter: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfSpace)),
    PropTypes.oneOf(keysOfSpace),
  ]),
  /**
   * [Responsive Prop] Horizontal gutters
   */
  gutterx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfSpace)),
    PropTypes.oneOf(keysOfSpace),
  ]),
  /**
   * [Responsive Prop] Vertical gutters.
   */
  guttery: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(keysOfSpace)),
    PropTypes.oneOf(keysOfSpace),
  ]),
  /**
   * Grid classname
   */
  className: PropTypes.string,
  /**
   * Columns nested inside Grid
   */
  children: PropTypes.node.isRequired,
};

Grid.defaultProps = {
  width: null,
  align: 'initial',
  justify: 'initial',
  rowCols: null,
  gutter: null,
  gutterx: null,
  guttery: null,
  className: '',
};

export {
  getWidthByPctFromRowCols,
  getColWidths,
  getSpaceValue,
  getGutters,
  getSizesValue,
  getContainerWidths,
};

export default Grid;
