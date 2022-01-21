import { getSpaces, getSizes, getBorderWidth, getRadiis, getShadows } from './Box';

describe('getSpaces in components/Box', () => {
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

describe('getSizes in components/Box', () => {
  it('should correctly get sizes from 1 value', () => {
    expect(getSizes('sm', 'initial')).toEqual(['24px', '24px', '24px', '24px', '24px']);
    expect(getSizes(5, 'initial')).toEqual(['initial', 'initial', 'initial', 'initial', 'initial']);
    expect(getSizes('wrong key', 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSizes('', 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
  });

  it('should correctly get sizes from an array', () => {
    expect(getSizes([], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSizes(['sm'], 'initial')).toEqual(['24px', '24px', '24px', '24px', '24px']);
    expect(getSizes(['sm', 'md'], 'initial')).toEqual(['24px', '28px', '28px', '28px', '28px']);
    expect(getSizes(['sm', 'md', 'lg'], 'initial')).toEqual([
      '24px',
      '28px',
      '32px',
      '32px',
      '32px',
    ]);
    expect(getSizes(['sm', 'md', 'lg', 'xl'], 'initial')).toEqual([
      '24px',
      '28px',
      '32px',
      '48px',
      '48px',
    ]);
    expect(getSizes(['sm', 'md', 'lg', 'xl', 'xxl'], 'initial')).toEqual([
      '24px',
      '28px',
      '32px',
      '48px',
      '64px',
    ]);
  });

  it('should correctly get sizes from other values', () => {
    expect(getSizes(null, 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSizes(undefined, 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSizes([null], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSizes([undefined], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSizes([undefined, null], 'initial')).toEqual([
      'initial',
      'initial',
      'initial',
      'initial',
      'initial',
    ]);
    expect(getSizes([undefined, 'sm', 'md', null], 'initial')).toEqual([
      'initial',
      '24px',
      '28px',
      '28px',
      '28px',
    ]);
    expect(getSizes(['sm', undefined, 'md', null, undefined], 'initial')).toEqual([
      '24px',
      '24px',
      '28px',
      '28px',
      '28px',
    ]);
    expect(getSizes(['', undefined, 'md', null, undefined], 'initial')).toEqual([
      'initial',
      'initial',
      '28px',
      '28px',
      '28px',
    ]);
    expect(getSizes(['wrong key', undefined, 'md', 'wrong key', undefined], 'initial')).toEqual([
      'initial',
      'initial',
      '28px',
      'initial',
      'initial',
    ]);
  });
});

describe('getBorder in components/Box', () => {
  it('should correctly get border from 1 value', () => {
    expect(getBorderWidth('sm', 'initial')).toEqual(['1px', '1px', '1px', '1px', '1px']);
    expect(getBorderWidth(5, 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getBorderWidth('none', 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getBorderWidth('wrong key', 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getBorderWidth('', 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
  });

  it('should correctly get border from an array', () => {
    expect(getBorderWidth([], 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getBorderWidth(['sm'], 'initial')).toEqual(['1px', '1px', '1px', '1px', '1px']);
    expect(getBorderWidth(['sm', 'md'], 'initial')).toEqual(['1px', '2px', '2px', '2px', '2px']);
    expect(getBorderWidth(['sm', 'md', 'lg'], 'initial')).toEqual([
      '1px',
      '2px',
      '3px',
      '3px',
      '3px',
    ]);
    expect(getBorderWidth(['sm', 'md', 'lg', 'xl'], 'initial')).toEqual([
      '1px',
      '2px',
      '3px',
      '4px',
      '4px',
    ]);
    expect(getBorderWidth(['none', 'sm', 'md', 'lg', 'xl'], 'initial')).toEqual([
      '0px',
      '1px',
      '2px',
      '3px',
      '4px',
    ]);
  });

  it('should correctly get border from other values', () => {
    expect(getBorderWidth(null, 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getBorderWidth(undefined, 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getBorderWidth([null], 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getBorderWidth([undefined], 'initial')).toEqual(['0px', '0px', '0px', '0px', '0px']);
    expect(getBorderWidth([undefined, null], 'initial')).toEqual([
      '0px',
      '0px',
      '0px',
      '0px',
      '0px',
    ]);
    expect(getBorderWidth([undefined, 'sm', 'md', null], 'initial')).toEqual([
      '0px',
      '1px',
      '2px',
      '2px',
      '2px',
    ]);
    expect(getBorderWidth(['sm', undefined, 'md', null, undefined], 'initial')).toEqual([
      '1px',
      '1px',
      '2px',
      '2px',
      '2px',
    ]);
    expect(getBorderWidth(['', undefined, 'md', null, undefined], 'initial')).toEqual([
      '0px',
      '0px',
      '2px',
      '2px',
      '2px',
    ]);
    expect(
      getBorderWidth(['wrong key', undefined, 'md', 'wrong key', undefined], 'initial')
    ).toEqual(['0px', '0px', '2px', '0px', '0px']);
  });
});

describe('getRadiis in components/Box', () => {
  it('should correctly get radii from 1 value', () => {
    expect(getRadiis('xs', 'initial')).toEqual(['2px', '2px', '2px', '2px', '2px']);
    expect(getRadiis(5, 'initial')).toEqual(['0', '0', '0', '0', '0']);
    expect(getRadiis('none', 'initial')).toEqual(['0', '0', '0', '0', '0']);
    expect(getRadiis('wrong key', 'initial')).toEqual(['0', '0', '0', '0', '0']);
    expect(getRadiis('', 'initial')).toEqual(['0', '0', '0', '0', '0']);
  });

  it('should correctly get radii from an array', () => {
    expect(getRadiis([], 'initial')).toEqual(['0', '0', '0', '0', '0']);
    expect(getRadiis(['xs'], 'initial')).toEqual(['2px', '2px', '2px', '2px', '2px']);
    expect(getRadiis(['xs', 'sm'], 'initial')).toEqual(['2px', '4px', '4px', '4px', '4px']);
    expect(getRadiis(['xs', 'sm', 'md'], 'initial')).toEqual(['2px', '4px', '8px', '8px', '8px']);
    expect(getRadiis(['xs', 'sm', 'md', 'lg'], 'initial')).toEqual([
      '2px',
      '4px',
      '8px',
      '14px',
      '14px',
    ]);
    expect(getRadiis(['xs', 'sm', 'md', 'lg', 'xl'], 'initial')).toEqual([
      '2px',
      '4px',
      '8px',
      '14px',
      '20px',
    ]);
  });

  it('should correctly get radii from other values', () => {
    expect(getRadiis(null, 'initial')).toEqual(['0', '0', '0', '0', '0']);
    expect(getRadiis(undefined, 'initial')).toEqual(['0', '0', '0', '0', '0']);
    expect(getRadiis([null], 'initial')).toEqual(['0', '0', '0', '0', '0']);
    expect(getRadiis([undefined], 'initial')).toEqual(['0', '0', '0', '0', '0']);
    expect(getRadiis([undefined, null], 'initial')).toEqual(['0', '0', '0', '0', '0']);
    expect(getRadiis([undefined, 'sm', 'md', null], 'initial')).toEqual([
      '0',
      '4px',
      '8px',
      '8px',
      '8px',
    ]);
    expect(getRadiis(['sm', undefined, 'md', null, undefined], 'initial')).toEqual([
      '4px',
      '4px',
      '8px',
      '8px',
      '8px',
    ]);
    expect(getRadiis(['', undefined, 'md', null, undefined], 'initial')).toEqual([
      '0',
      '0',
      '8px',
      '8px',
      '8px',
    ]);
    expect(getRadiis(['wrong key', undefined, 'md', 'wrong key', undefined], 'initial')).toEqual([
      '0',
      '0',
      '8px',
      '0',
      '0',
    ]);
  });
});

describe('getShadows in components/Box', () => {
  it('should correctly get shadow from 1 value', () => {
    expect(getShadows('md', 'initial')).toEqual([
      '0px 0px 8px rgba(0,0,0,.3)',
      '0px 0px 8px rgba(0,0,0,.3)',
      '0px 0px 8px rgba(0,0,0,.3)',
      '0px 0px 8px rgba(0,0,0,.3)',
      '0px 0px 8px rgba(0,0,0,.3)',
    ]);
    expect(getShadows(5, 'initial')).toEqual(['none', 'none', 'none', 'none', 'none']);
    expect(getShadows('wrong key', 'initial')).toEqual(['none', 'none', 'none', 'none', 'none']);
    expect(getShadows('', 'initial')).toEqual(['none', 'none', 'none', 'none', 'none']);
  });

  it('should correctly get shadow from an array', () => {
    expect(getShadows([], 'initial')).toEqual(['none', 'none', 'none', 'none', 'none']);
    expect(getShadows(['md'], 'initial')).toEqual([
      '0px 0px 8px rgba(0,0,0,.3)',
      '0px 0px 8px rgba(0,0,0,.3)',
      '0px 0px 8px rgba(0,0,0,.3)',
      '0px 0px 8px rgba(0,0,0,.3)',
      '0px 0px 8px rgba(0,0,0,.3)',
    ]);
    expect(getShadows(['md', 'lg'], 'initial')).toEqual([
      '0px 0px 8px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
    ]);
    expect(getShadows(['none', 'md', 'lg'], 'initial')).toEqual([
      'none',
      '0px 0px 8px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
    ]);
    expect(getShadows(['none', 'md', 'lg', 'lg'], 'initial')).toEqual([
      'none',
      '0px 0px 8px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
    ]);
  });

  it('should correctly get shadow from other values', () => {
    expect(getShadows(null, 'initial')).toEqual(['none', 'none', 'none', 'none', 'none']);
    expect(getShadows(undefined, 'initial')).toEqual(['none', 'none', 'none', 'none', 'none']);
    expect(getShadows([null], 'initial')).toEqual(['none', 'none', 'none', 'none', 'none']);
    expect(getShadows([undefined], 'initial')).toEqual(['none', 'none', 'none', 'none', 'none']);
    expect(getShadows([undefined, null], 'initial')).toEqual([
      'none',
      'none',
      'none',
      'none',
      'none',
    ]);
    expect(getShadows([undefined, 'md', 'lg', null], 'initial')).toEqual([
      'none',
      '0px 0px 8px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
    ]);
    expect(getShadows(['md', undefined, 'lg', null, undefined], 'initial')).toEqual([
      '0px 0px 8px rgba(0,0,0,.3)',
      '0px 0px 8px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
      '2px 2px 14px rgba(0,0,0,.3)',
    ]);
    expect(getShadows(['', undefined, 'md', null, undefined], 'initial')).toEqual([
      'none',
      'none',
      '0px 0px 8px rgba(0,0,0,.3)',
      '0px 0px 8px rgba(0,0,0,.3)',
      '0px 0px 8px rgba(0,0,0,.3)',
    ]);
    expect(getShadows(['wrong key', undefined, 'md', 'wrong key', undefined], 'initial')).toEqual([
      'none',
      'none',
      '0px 0px 8px rgba(0,0,0,.3)',
      'none',
      'none',
    ]);
  });
});
