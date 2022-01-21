import { getWidthByPctFromSpan, getSpans } from './Col';

describe('getWidthByPctFromSpan in components/Grid/Col', () => {
  it('should correctly get column width from a integer', () => {
    expect(getWidthByPctFromSpan(3)).toBe('25%');
    expect(getWidthByPctFromSpan(12)).toBe('100%');
    expect(getWidthByPctFromSpan(0)).toBe('0%');
    expect(getWidthByPctFromSpan(-1)).toBe('0%');
    expect(getWidthByPctFromSpan(-5)).toBe('0%');
    expect(getWidthByPctFromSpan(13)).toBe('100%');
    expect(getWidthByPctFromSpan(15)).toBe('100%');
  });

  it('should correctly get column width from a float value', () => {
    expect(getWidthByPctFromSpan(3.5)).toBe('25%');
    expect(getWidthByPctFromSpan(6.7)).toBe('50%');
    expect(getWidthByPctFromSpan(0.7)).toBe('0%');
    expect(getWidthByPctFromSpan(-0.1)).toBe('0%');
    expect(getWidthByPctFromSpan(-4.3)).toBe('0%');
    expect(getWidthByPctFromSpan(12.1)).toBe('100%');
    expect(getWidthByPctFromSpan(14.7)).toBe('100%');
  });

  it('should correctly get column width from a string', () => {
    expect(getWidthByPctFromSpan('')).toBe('initial');
    expect(getWidthByPctFromSpan('a string')).toBe('initial');
    expect(getWidthByPctFromSpan('12')).toBe('100%');
    expect(getWidthByPctFromSpan('4')).toBe('33.33333333333333%');
    expect(getWidthByPctFromSpan('0')).toBe('0%');
    expect(getWidthByPctFromSpan('-1')).toBe('0%');
    expect(getWidthByPctFromSpan('-5')).toBe('0%');
    expect(getWidthByPctFromSpan('13')).toBe('100%');
    expect(getWidthByPctFromSpan('15')).toBe('100%');
    expect(getWidthByPctFromSpan('4.5')).toBe('33.33333333333333%');
    expect(getWidthByPctFromSpan('6.7')).toBe('50%');
    expect(getWidthByPctFromSpan('0.7')).toBe('0%');
    expect(getWidthByPctFromSpan('-0.1')).toBe('0%');
    expect(getWidthByPctFromSpan('-4.3')).toBe('0%');
    expect(getWidthByPctFromSpan('12.1')).toBe('100%');
    expect(getWidthByPctFromSpan('14.7')).toBe('100%');
  });

  it('should correctly get column width from other value', () => {
    expect(getWidthByPctFromSpan([3])).toBe('25%');
    expect(getWidthByPctFromSpan([6, 7])).toBe('50%');
    expect(getWidthByPctFromSpan([0])).toBe('0%');
    expect(getWidthByPctFromSpan([-4, 2])).toBe('0%');
    expect(getWidthByPctFromSpan([15, 4])).toBe('100%');
    expect(getWidthByPctFromSpan(['6'])).toBe('50%');
    expect(getWidthByPctFromSpan(['6', 4])).toBe('50%');

    expect(getWidthByPctFromSpan({})).toBe('initial');
    expect(getWidthByPctFromSpan({ 5: 5 })).toBe('initial');
    expect(getWidthByPctFromSpan({ key: 5 })).toBe('initial');
    expect(getWidthByPctFromSpan(null)).toBe('initial');
    expect(getWidthByPctFromSpan(undefined)).toBe('initial');
    expect(getWidthByPctFromSpan([null])).toBe('initial');
    expect(getWidthByPctFromSpan([undefined])).toBe('initial');
  });
});

describe('getSpans in components/Grid/Col', () => {
  it('should correctly get column width breakpoint values from a integer', () => {
    expect(getSpans(6, 'initial')).toEqual(['50%', '50%', '50%', '50%', '50%']);
    expect(getSpans(12, 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
    expect(getSpans(3, 'initial')).toEqual(['25%', '25%', '25%', '25%', '25%']);
    expect(getSpans(0, 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getSpans(-1, 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getSpans(-5, 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getSpans(13, 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
    expect(getSpans(15, 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
  });

  it('should correctly get column width breakpoint values from a float', () => {
    expect(getSpans(3.5, 'initial')).toEqual(['25%', '25%', '25%', '25%', '25%']);
    expect(getSpans(6.7, 'initial')).toEqual(['50%', '50%', '50%', '50%', '50%']);
    expect(getSpans(0.7, 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getSpans(-0.1, 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getSpans(-4.3, 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getSpans(12.1, 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
    expect(getSpans(14.7, 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
  });

  it('should correctly get column width breakpoint values from a string', () => {
    expect(getSpans('', 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSpans('a string', 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSpans('12', 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
    expect(getSpans('3', 'initial')).toEqual(['25%', '25%', '25%', '25%', '25%']);
    expect(getSpans('0', 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getSpans('-1', 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getSpans('-5', 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getSpans('13', 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
    expect(getSpans('15', 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
    expect(getSpans('3.5', 'initial')).toEqual(['25%', '25%', '25%', '25%', '25%']);
    expect(getSpans('6.7', 'initial')).toEqual(['50%', '50%', '50%', '50%', '50%']);
    expect(getSpans('0.7', 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getSpans('-0.1', 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getSpans('-4.3', 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getSpans('12.1', 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
    expect(getSpans('14.7', 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
  });

  it('should correctly get column width breakpoint values from an array', () => {
    expect(getSpans([12], 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
    expect(getSpans([12, 6], 'initial')).toEqual(['100%', '50%', '50%', '50%', '50%']);
    expect(getSpans([12, 6, 3], 'initial')).toEqual(['100%', '50%', '25%', '25%', '25%']);
    expect(getSpans([12, 6, 3, 2], 'initial')).toEqual([
      '100%',
      '50%',
      '25%',
      '16.666666666666664%',
      '16.666666666666664%',
    ]);
    expect(getSpans([12, 6, 3, 2, 1], 'initial')).toEqual([
      '100%',
      '50%',
      '25%',
      '16.666666666666664%',
      '8.333333333333332%',
    ]);
    expect(getSpans([-12, 6, 1], 'initial')).toEqual([
      '0%',
      '50%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
    ]);
    expect(getSpans([-1.4, 6, 1.8], 'initial')).toEqual([
      '0%',
      '50%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
    ]);
  });

  it('should correctly get column width breakpoint values from other values', () => {
    expect(getSpans(null, 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSpans(undefined, 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSpans([null], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSpans([undefined], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSpans([undefined, null], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSpans([null, 6, 3, null], 'initial')).toEqual([
      'initial',
      '50%',
      '25%',
      '25%',
      '25%',
    ]);
    expect(getSpans([12, null, 3, null, null], 'initial')).toEqual([
      '100%',
      '100%',
      '25%',
      '25%',
      '25%',
    ]);
    expect(getSpans([undefined, 6, 3, null], 'initial')).toEqual([
      'initial',
      '50%',
      '25%',
      '25%',
      '25%',
    ]);
    expect(getSpans([12, undefined, 3, null, undefined], 'initial')).toEqual([
      '100%',
      '100%',
      '25%',
      '25%',
      '25%',
    ]);
    expect(getSpans(['', undefined, 3, null, undefined], 'initial')).toEqual([
      'initial',
      'initial',
      '25%',
      '25%',
      '25%',
    ]);
    expect(getSpans(['a string', undefined, 3, null, undefined], 'initial')).toEqual([
      'initial',
      'initial',
      '25%',
      '25%',
      '25%',
    ]);
    expect(getSpans(['12', undefined, 3, 'a string', undefined], 'initial')).toEqual([
      '100%',
      '100%',
      '25%',
      'initial',
      'initial',
    ]);
    expect(getSpans([null, '6', 3, 'a string', undefined], 'initial')).toEqual([
      'initial',
      '50%',
      '25%',
      'initial',
      'initial',
    ]);
    expect(getSpans([null, 0, '3', '', undefined], 'initial')).toEqual([
      'initial',
      '0%',
      '25%',
      'initial',
      'initial',
    ]);
  });
});
