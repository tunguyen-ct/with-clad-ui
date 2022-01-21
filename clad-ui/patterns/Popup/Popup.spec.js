import { getSpaces } from './Popup';

describe('getSpaces in components/Popup', () => {
  it('should correctly get space from 1 value', () => {
    expect(getSpaces('sm', 'initial')).toEqual(['12px', '12px', '12px', '12px', '12px']);
    expect(getSpaces(5, 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getSpaces('none', 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getSpaces('wrong key', 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getSpaces('', 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
  });

  it('should correctly get space from an array', () => {
    expect(getSpaces([], 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getSpaces(['sm'], 'initial')).toEqual(['12px', '12px', '12px', '12px', '12px']);
    expect(getSpaces(['sm', 'md'], 'initial')).toEqual(['12px', '16px', '16px', '16px', '16px']);
    expect(getSpaces(['sm', 'md', 'lg'], 'initial')).toEqual([
      '12px',
      '16px',
      '24px',
      '24px',
      '24px',
    ]);
    expect(getSpaces(['sm', 'md', 'lg', 'xl'], 'initial')).toEqual([
      '12px',
      '16px',
      '24px',
      '32px',
      '32px',
    ]);
    expect(getSpaces(['sm', 'md', 'lg', 'xl', 'xxl'], 'initial')).toEqual([
      '12px',
      '16px',
      '24px',
      '32px',
      '48px',
    ]);
  });

  it('should correctly get space from other values', () => {
    expect(getSpaces(null, 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getSpaces(undefined, 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getSpaces([null], 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getSpaces([undefined], 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getSpaces([undefined, null], 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getSpaces([undefined, 'sm', 'md', null], 'initial')).toEqual([
      '0px',
      '12px',
      '16px',
      '16px',
      '16px',
    ]);
    expect(getSpaces(['sm', undefined, 'md', null, undefined], 'initial')).toEqual([
      '12px',
      '12px',
      '16px',
      '16px',
      '16px',
    ]);
    expect(getSpaces(['', undefined, 'md', null, undefined], 'initial')).toEqual([
      '0px',
      '0px',
      '16px',
      '16px',
      '16px',
    ]);
    expect(getSpaces(['wrong key', undefined, 'md', 'wrong key', undefined], 'initial')).toEqual([
      '0px',
      '0px',
      '16px',
      '0px',
      '0px',
    ]);
  });
});
