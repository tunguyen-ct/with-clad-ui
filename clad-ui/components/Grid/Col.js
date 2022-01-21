import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'linaria';
import { StyledCol } from './Grid.styles';
import { getBreakpointsValues } from '../../utils';

/**
 * @typedef { 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 } Cols
 */

const getWidthByPctFromSpan = (span) => {
  let width = parseInt(span, 10);
  if (isNaN(width)) return 'initial';
  if (width < 0) width = 0;
  if (width > 12) width = 12;
  if (width === 0) return '0%';
  return (1 / (12 / width)) * 100 + '%';
};
const getSpans = (span, defaultValue) =>
  getBreakpointsValues(span, defaultValue).map((value) => getWidthByPctFromSpan(value));

/**
 * Col component mimic flexbox item
 *
 * `🧪Beta`
 *
 * @type { React.FC<{
 *   span?: Cols | Cols[],
 *   offset?: number | number[],
 *   align?: 'start' | 'end' | 'center' | 'initial',
 *   order?: Cols | 'first' | 'last' | 'initial',
 *   className?: string,
 *   children: any,
 * }> }
 */
const Col = ({ span, offset, align, order, className, children }) => {
  const classes = cx(className, span && 'withSpan', offset && 'withOffset');
  const alignSelf = (align === 'start' && 'flex-start') || (align === 'end' && 'flex-end') || align; // no need to transform 'center'
  const colOrder = (order === 'first' && '-1') || (order === 'last' && '13') || order;
  const spans = getSpans(span, 'initial');
  const offsets = getSpans(offset, 'initial');

  const attrs = {
    className: classes,
    alignSelf,
    colOrder,
    spans,
    offsets,
  };

  return <StyledCol {...attrs}>{children}</StyledCol>;
};

Col.propTypes = {
  /**
   * [Responsive Prop] Column span
   */
  // @ts-ignore
  span: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  /**
   * [Responsive Prop] Increase the left margin of a column by span
   */
  offset: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  /**
   * Column vertical alignment
   */
  align: PropTypes.oneOf(['start', 'end', 'center', 'initial']),
  /**
   * Order in grid
   */
  // @ts-ignore
  order: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'first', 'last', 'initial']),
  /**
   * Column classname
   */
  className: PropTypes.string,
  /**
   * Content inside column
   */
  children: PropTypes.node.isRequired,
};

Col.defaultProps = {
  span: null,
  offset: null,
  align: 'initial',
  order: 'initial',
  className: '',
};

export { getWidthByPctFromSpan, getSpans };

export default Col;
