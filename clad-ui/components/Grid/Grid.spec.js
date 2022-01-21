import {
  getWidthByPctFromRowCols,
  getColWidths,
  getSpaceValue,
  getGutters,
  getSizesValue,
  getContainerWidths,
} from './Grid';

describe('getWidthByPctFromRowCols in components/Grid/Grid', () => {
  it('should correctly get column width from a integer', () => {
    expect(getWidthByPctFromRowCols(1)).toBe('100%');
    expect(getWidthByPctFromRowCols(3)).toBe('33.33333333333333%');
    expect(getWidthByPctFromRowCols(0)).toBe('0%');
    expect(getWidthByPctFromRowCols(-1)).toBe('0%');
    expect(getWidthByPctFromRowCols(-5)).toBe('0%');
    expect(getWidthByPctFromRowCols(13)).toBe('8.333333333333332%');
    expect(getWidthByPctFromRowCols(15)).toBe('8.333333333333332%');
  });

  it('should correctly get column width from a float', () => {
    expect(getWidthByPctFromRowCols(4.5)).toBe('25%');
    expect(getWidthByPctFromRowCols(2.7)).toBe('50%');
    expect(getWidthByPctFromRowCols(0.7)).toBe('0%');
    expect(getWidthByPctFromRowCols(-0.1)).toBe('0%');
    expect(getWidthByPctFromRowCols(-4.3)).toBe('0%');
    expect(getWidthByPctFromRowCols(12.1)).toBe('8.333333333333332%');
    expect(getWidthByPctFromRowCols(14.7)).toBe('8.333333333333332%');
  });

  it('should correctly get column width from a string', () => {
    expect(getWidthByPctFromRowCols('')).toBe('initial');
    expect(getWidthByPctFromRowCols('a string')).toBe('initial');
    expect(getWidthByPctFromRowCols('1')).toBe('100%');
    expect(getWidthByPctFromRowCols('3')).toBe('33.33333333333333%');
    expect(getWidthByPctFromRowCols('0')).toBe('0%');
    expect(getWidthByPctFromRowCols('-1')).toBe('0%');
    expect(getWidthByPctFromRowCols('-5')).toBe('0%');
    expect(getWidthByPctFromRowCols('13')).toBe('8.333333333333332%');
    expect(getWidthByPctFromRowCols('15')).toBe('8.333333333333332%');
    expect(getWidthByPctFromRowCols('4.5')).toBe('25%');
    expect(getWidthByPctFromRowCols('2.7')).toBe('50%');
    expect(getWidthByPctFromRowCols('0.7')).toBe('0%');
    expect(getWidthByPctFromRowCols('-0.1')).toBe('0%');
    expect(getWidthByPctFromRowCols('-4.3')).toBe('0%');
    expect(getWidthByPctFromRowCols('12.1')).toBe('8.333333333333332%');
    expect(getWidthByPctFromRowCols('14.7')).toBe('8.333333333333332%');
  });

  it('should correctly get column width from other values', () => {
    expect(getWidthByPctFromRowCols([4])).toBe('25%');
    expect(getWidthByPctFromRowCols([2, 3])).toBe('50%');
    expect(getWidthByPctFromRowCols([0])).toBe('0%');
    expect(getWidthByPctFromRowCols([-4, 2])).toBe('0%');
    expect(getWidthByPctFromRowCols([15, 4])).toBe('8.333333333333332%');
    expect(getWidthByPctFromRowCols(['2'])).toBe('50%');
    expect(getWidthByPctFromRowCols(['2', 4])).toBe('50%');

    expect(getWidthByPctFromRowCols({})).toBe('initial');
    expect(getWidthByPctFromRowCols({ 5: 5 })).toBe('initial');
    expect(getWidthByPctFromRowCols({ key: 5 })).toBe('initial');
    expect(getWidthByPctFromRowCols(null)).toBe('initial');
    expect(getWidthByPctFromRowCols(undefined)).toBe('initial');
    expect(getWidthByPctFromRowCols([null])).toBe('initial');
    expect(getWidthByPctFromRowCols([undefined])).toBe('initial');
  });
});

describe('getColWidths in components/Grid/Grid', () => {
  it('should correctly get column width breakpoint values from a integer', () => {
    expect(getColWidths(2, 'initial')).toEqual(['50%', '50%', '50%', '50%', '50%']);
    expect(getColWidths(1, 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
    expect(getColWidths(4, 'initial')).toEqual(['25%', '25%', '25%', '25%', '25%']);
    expect(getColWidths(0, 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getColWidths(-1, 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getColWidths(-5, 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getColWidths(13, 'initial')).toEqual([
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
    ]);
    expect(getColWidths(15, 'initial')).toEqual([
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
    ]);
  });

  it('should correctly get column width breakpoint values from a float', () => {
    expect(getColWidths(4.5, 'initial')).toEqual(['25%', '25%', '25%', '25%', '25%']);
    expect(getColWidths(2.7, 'initial')).toEqual(['50%', '50%', '50%', '50%', '50%']);
    expect(getColWidths(0.7, 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getColWidths(-0.1, 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getColWidths(-4.3, 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getColWidths(12.1, 'initial')).toEqual([
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
    ]);
    expect(getColWidths(14.7, 'initial')).toEqual([
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
    ]);
  });

  it('should correctly get column width breakpoint values from a string', () => {
    expect(getColWidths('', 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getColWidths('a string', 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getColWidths('1', 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
    expect(getColWidths('4', 'initial')).toEqual(['25%', '25%', '25%', '25%', '25%']);
    expect(getColWidths('0', 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getColWidths('-1', 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getColWidths('-5', 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getColWidths('13', 'initial')).toEqual([
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
    ]);
    expect(getColWidths('15', 'initial')).toEqual([
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
    ]);
    expect(getColWidths('4.5', 'initial')).toEqual(['25%', '25%', '25%', '25%', '25%']);
    expect(getColWidths('2.7', 'initial')).toEqual(['50%', '50%', '50%', '50%', '50%']);
    expect(getColWidths('0.7', 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getColWidths('-0.1', 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getColWidths('-4.3', 'initial')).toEqual(['0%', '0%', '0%', '0%', '0%']);
    expect(getColWidths('12.1', 'initial')).toEqual([
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
    ]);
    expect(getColWidths('14.7', 'initial')).toEqual([
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
    ]);
  });

  it('should correctly get column width breakpoint values from an array', () => {
    expect(getColWidths([1], 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
    expect(getColWidths([1, 2], 'initial')).toEqual(['100%', '50%', '50%', '50%', '50%']);
    expect(getColWidths([1, 2, 4], 'initial')).toEqual(['100%', '50%', '25%', '25%', '25%']);
    expect(getColWidths([1, 2, 4, 6], 'initial')).toEqual([
      '100%',
      '50%',
      '25%',
      '16.666666666666664%',
      '16.666666666666664%',
    ]);
    expect(getColWidths([1, 2, 4, 6, 12], 'initial')).toEqual([
      '100%',
      '50%',
      '25%',
      '16.666666666666664%',
      '8.333333333333332%',
    ]);
    expect(getColWidths([-1, 2, 15], 'initial')).toEqual([
      '0%',
      '50%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
    ]);
    expect(getColWidths([-1.4, 2, 15.8], 'initial')).toEqual([
      '0%',
      '50%',
      '8.333333333333332%',
      '8.333333333333332%',
      '8.333333333333332%',
    ]);
  });

  it('should correctly get column width breakpoint values from other values', () => {
    expect(getColWidths(null, 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getColWidths(undefined, 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getColWidths([null], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getColWidths([undefined], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getColWidths([undefined, null], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getColWidths([null, 2, 4, null], 'initial')).toEqual([
      'initial',
      '50%',
      '25%',
      '25%',
      '25%',
    ]);
    expect(getColWidths([1, null, 4, null, null], 'initial')).toEqual([
      '100%',
      '100%',
      '25%',
      '25%',
      '25%',
    ]);
    expect(getColWidths([undefined, 2, 4, null], 'initial')).toEqual([
      'initial',
      '50%',
      '25%',
      '25%',
      '25%',
    ]);
    expect(getColWidths([1, undefined, 4, null, undefined], 'initial')).toEqual([
      '100%',
      '100%',
      '25%',
      '25%',
      '25%',
    ]);
    expect(getColWidths(['', undefined, 4, null, undefined], 'initial')).toEqual([
      'initial',
      'initial',
      '25%',
      '25%',
      '25%',
    ]);
    expect(getColWidths(['a string', undefined, 4, null, undefined], 'initial')).toEqual([
      'initial',
      'initial',
      '25%',
      '25%',
      '25%',
    ]);
    expect(getColWidths(['1', undefined, 4, 'a string', undefined], 'initial')).toEqual([
      '100%',
      '100%',
      '25%',
      'initial',
      'initial',
    ]);
    expect(getColWidths([null, '2', 4, 'a string', undefined], 'initial')).toEqual([
      'initial',
      '50%',
      '25%',
      'initial',
      'initial',
    ]);
    expect(getColWidths([null, 0, '4', '', undefined], 'initial')).toEqual([
      'initial',
      '0%',
      '25%',
      'initial',
      'initial',
    ]);
  });
});

describe('getColWidths in components/Grid/Grid', () => {
  it('should correctly get space value from a key', () => {
    expect(getSpaceValue('xxxs')).toBe(2);
    expect(getSpaceValue('xl')).toBe(32);
    expect(getSpaceValue(5)).toBe(0); // 5 is not a valid key
    expect(getSpaceValue('')).toBe(0);
    expect(getSpaceValue('a key')).toBe(0);
  });

  it('should correctly get space value from other values', () => {
    expect(getSpaceValue(['xl', 'xxl'])).toBe(0);
    expect(getSpaceValue([2, 3])).toBe(0);
    expect(getSpaceValue(null)).toBe(0);
    expect(getSpaceValue(undefined)).toBe(0);
  });
});

describe('getGutters in components/Grid/Grid', () => {
  it('should correctly get gutter breakpoint values from a key', () => {
    expect(getGutters('xxxs', 0)).toEqual([2, 2, 2, 2, 2]);
    expect(getGutters('xl', 0)).toEqual([32, 32, 32, 32, 32]);
    expect(getGutters(5, 0)).toEqual([0, 0, 0, 0, 0]); // 5 is not a valid key
    expect(getGutters('', 0)).toEqual([0, 0, 0, 0, 0]);
    expect(getGutters('a key', 0)).toEqual([0, 0, 0, 0, 0]);
  });

  it('should correctly get gutter breakpoint values from an array', () => {
    expect(getGutters(['xxxs'], 0)).toEqual([2, 2, 2, 2, 2]);
    expect(getGutters(['xxxs', 'sm'], 0)).toEqual([2, 12, 12, 12, 12]);
    expect(getGutters(['xxxs', 'sm', 'xl'], 0)).toEqual([2, 12, 32, 32, 32]);
    expect(getGutters(['xxxs', 'sm', 'xl', 'xxl'], 0)).toEqual([2, 12, 32, 48, 48]);
    expect(getGutters(['xxxs', 'sm', 'xl', 'xxl', 'xxxl'], 0)).toEqual([2, 12, 32, 48, 64]);
    expect(getGutters([1, 2, 3, 4, 5], 0)).toEqual([0, 0, 0, 0, 0]);
    expect(getGutters(['xxxs', 'sm', 'xl', 0], 0)).toEqual([2, 12, 32, 0, 0]);
    expect(getGutters(['a key', 'sm', 'xl', 0], 0)).toEqual([0, 12, 32, 0, 0]);
    expect(getGutters(['a key', '', 'xl', 0], 0)).toEqual([0, 0, 32, 0, 0]);
  });

  it('should correctly get gutter breakpoint values from other values', () => {
    expect(getGutters(null, 0)).toEqual([0, 0, 0, 0, 0]);
    expect(getGutters([null], 0)).toEqual([0, 0, 0, 0, 0]);
    expect(getGutters([undefined, null], 0)).toEqual([0, 0, 0, 0, 0]);
    expect(getGutters([null, 'sm', 'xl', null], 0)).toEqual([0, 12, 32, 32, 32]);
    expect(getGutters(['xxxs', null, 'xl', null, null], 0)).toEqual([2, 2, 32, 32, 32]);
    expect(getGutters([undefined, 'xxxs', 'sm', null], 0)).toEqual([0, 2, 12, 12, 12]);
    expect(getGutters(['xxxs', undefined, 'xl', null, undefined], 0)).toEqual([2, 2, 32, 32, 32]);
  });
});

describe('getSizesValue in components/Grid/Grid', () => {
  it('should correctly get sizes value from a key', () => {
    expect(getSizesValue('xxxs')).toBe('12px');
    expect(getSizesValue('vW')).toBe('100vw');
    expect(getSizesValue(5)).toBe('initial'); // 5 is not a valid key
    expect(getSizesValue('')).toBe('initial');
    expect(getSizesValue('a key')).toBe('initial');
  });

  it('should correctly get sizes value from other values', () => {
    expect(getSizesValue(['xl', 'xxl'])).toBe('initial');
    expect(getSizesValue([2, 3])).toBe('initial');
    expect(getSizesValue(null)).toBe('initial');
    expect(getSizesValue(undefined)).toBe('initial');
  });
});

describe('getContainerWidths in components/Grid/Grid', () => {
  it('should correctly get container width breakpoint values from a key', () => {
    expect(getContainerWidths('full', 'initial')).toEqual(['100%', '100%', '100%', '100%', '100%']);
    expect(getContainerWidths('xxxs', 'initial')).toEqual(['12px', '12px', '12px', '12px', '12px']);
    expect(getContainerWidths(5, 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]); // 5 is not a valid key
    expect(getContainerWidths('', 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getContainerWidths('a key', 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
  });

  it('should correctly get container width breakpoint values from an array', () => {
    expect(getContainerWidths(['quarter', 'half', 'full'], 'initial')).toEqual([
      '25%',
      '50%',
      '100%',
      '100%',
      '100%',
    ]);

    expect(getContainerWidths(['xxxs'], 'initial')).toEqual([
      '12px',
      '12px',
      '12px',
      '12px',
      '12px',
    ]);
    expect(getContainerWidths(['quarter', 'half'], 'initial')).toEqual([
      '25%',
      '50%',
      '50%',
      '50%',
      '50%',
    ]);
    expect(getContainerWidths(['quarter', 'half', 'twoThird'], 'initial')).toEqual([
      '25%',
      '50%',
      '66.66%',
      '66.66%',
      '66.66%',
    ]);
    expect(getContainerWidths(['quarter', 'half', 'twoThird', 'full'], 'initial')).toEqual([
      '25%',
      '50%',
      '66.66%',
      '100%',
      '100%',
    ]);
    expect(getContainerWidths(['quarter', 'half', 'twoThird', 'full', 'vW'], 'initial')).toEqual([
      '25%',
      '50%',
      '66.66%',
      '100%',
      '100vw',
    ]);
    expect(getContainerWidths([1, 2, 3, 4], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getContainerWidths(['quarter', 'half', 'twoThird', 0], 'initial')).toEqual([
      '25%',
      '50%',
      '66.66%',
      'initial',
      'initial',
    ]);
    expect(getContainerWidths(['a key', 'quarter', 'half', 0], 'initial')).toEqual([
      'initial',
      '25%',
      '50%',
      'initial',
      'initial',
    ]);
    expect(getContainerWidths(['a key', '', 'full', 0], 'initial')).toEqual([
      'initial',
      'initial',
      '100%',
      'initial',
      'initial',
    ]);
  });

  it('should correctly get container width breakpoint values from other values', () => {
    expect(getContainerWidths(null, 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getContainerWidths([null], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getContainerWidths([undefined, null], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getContainerWidths([null, 'half', 'full', null], 'initial')).toEqual([
      'initial',
      '50%',
      '100%',
      '100%',
      '100%',
    ]);
    expect(getContainerWidths(['quarter', null, 'half', null, null], 'initial')).toEqual([
      '25%',
      '25%',
      '50%',
      '50%',
      '50%',
    ]);
    expect(getContainerWidths([undefined, 'half', 'full', null], 'initial')).toEqual([
      'initial',
      '50%',
      '100%',
      '100%',
      '100%',
    ]);
    expect(getContainerWidths(['quarter', undefined, 'half', null, undefined], 'initial')).toEqual([
      '25%',
      '25%',
      '50%',
      '50%',
      '50%',
    ]);
  });
});
