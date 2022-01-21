import getBreakpointsValues from './getBreakpointsValues';

describe('test getBreakpointsValues', () => {
  test('get breakpoints values from a value', () => {
    expect(getBreakpointsValues(4, 'initial')).toEqual([4, 4, 4, 4, 4]);
    expect(getBreakpointsValues(0, 'initial')).toEqual([0, 0, 0, 0, 0]);
    expect(getBreakpointsValues('', 'initial')).toEqual(['', '', '', '', '']);
    expect(getBreakpointsValues('0', 'initial')).toEqual(['0', '0', '0', '0', '0']);
    expect(getBreakpointsValues('initial', 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
  });

  test('get breakpoints values from a array', () => {
    expect(getBreakpointsValues([], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getBreakpointsValues([], 0)).toEqual([0, 0, 0, 0, 0]);
    expect(getBreakpointsValues([4], 'initial')).toEqual([4, 4, 4, 4, 4]);
    expect(getBreakpointsValues([1, 4], 'initial')).toEqual([1, 4, 4, 4, 4]);
    expect(getBreakpointsValues([1, 2, 4], 'initial')).toEqual([1, 2, 4, 4, 4]);
    expect(getBreakpointsValues([1, 2, 3, 4], 'initial')).toEqual([1, 2, 3, 4, 4]);
    expect(getBreakpointsValues([1, 2, 3, 4, 5], 'initial')).toEqual([1, 2, 3, 4, 5]);

    expect(getBreakpointsValues([0, 1, 2, 0], 'initial')).toEqual([0, 1, 2, 0, 0]);
    expect(getBreakpointsValues([4, 5, 0, ''], 'initial')).toEqual([4, 5, 0, '', '']);
    expect(getBreakpointsValues(['', 0, 1, '', 4], 'initial')).toEqual(['', 0, 1, '', 4]);
    expect(getBreakpointsValues(['', 0, 1, '', 4], 'initial')).toEqual(['', 0, 1, '', 4]);
    expect(getBreakpointsValues([0, '', 1, '', 4], 'initial')).toEqual([0, '', 1, '', 4]);
  });

  test('get breakpoints values from other values', () => {
    expect(getBreakpointsValues(null, 0)).toEqual([0, 0, 0, 0, 0]);
    expect(getBreakpointsValues(undefined, 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getBreakpointsValues([undefined], 0)).toEqual([0, 0, 0, 0, 0]);
    expect(getBreakpointsValues([undefined, null], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getBreakpointsValues([undefined, null, undefined], 0)).toEqual([0, 0, 0, 0, 0]);
    expect(getBreakpointsValues([undefined, null, undefined, null], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getBreakpointsValues([undefined, null, undefined, null, undefined], 0)).toEqual([
      0,
      0,
      0,
      0,
      0,
    ]);
    expect(getBreakpointsValues([null, 2, 3, null], 'initial')).toEqual(['initial', 2, 3, 3, 3]);
    expect(getBreakpointsValues([1, null, 3, null, null], 'initial')).toEqual([1, 1, 3, 3, 3]);
    expect(getBreakpointsValues([undefined, 2, 3, null], 'initial')).toEqual([
      'initial',
      2,
      3,
      3,
      3,
    ]);
    expect(getBreakpointsValues([1, undefined, 3, null, undefined], 'initial')).toEqual([
      1,
      1,
      3,
      3,
      3,
    ]);
  });
});
