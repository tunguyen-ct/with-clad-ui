import { valueFilter, chipActiveValuesHandler } from './TagCloudMultiActive';

describe('valueFilter in patterns/TagCloud', () => {
  it('should correctly filter a single value', () => {
    expect(valueFilter('car', ['car', 'bike', 'truck'])).toEqual('car');
    expect(valueFilter('wrong value', ['car', 'bike', 'truck'])).toEqual(null);
    expect(valueFilter(null, ['car', 'bike', 'truck'])).toEqual(null);
    expect(valueFilter(undefined, ['car', 'bike', 'truck'])).toEqual(null);
  });
  it('should correctly filter an array of values', () => {
    expect(valueFilter(['car'], ['car', 'bike', 'truck'])).toEqual(['car']);
    expect(valueFilter(['bike', 'car'], ['car', 'bike', 'truck'])).toEqual(['bike', 'car']);
    expect(valueFilter(['car', 'truck', 'bike'], ['car', 'bike', 'truck'])).toEqual([
      'car',
      'truck',
      'bike',
    ]);
    expect(valueFilter(['wrong value'], ['car', 'bike', 'truck'])).toEqual([]);
    expect(valueFilter(['wrong value', 'bike'], ['car', 'bike', 'truck'])).toEqual(['bike']);
    expect(valueFilter(['truck', 'wrong value', 'car'], ['car', 'bike', 'truck'])).toEqual([
      'truck',
      'car',
    ]);
    expect(valueFilter(['car', 'wrong value', 'truck', 'bike'], ['car', 'bike', 'truck'])).toEqual([
      'car',
      'truck',
      'bike',
    ]);
    expect(valueFilter([null], ['car', 'bike', 'truck'])).toEqual([]);
    expect(valueFilter([undefined], ['car', 'bike', 'truck'])).toEqual([]);
    expect(valueFilter(['wrong value', null], ['car', 'bike', 'truck'])).toEqual([]);
    expect(
      valueFilter(['wrong value', 'bike', 'truck', undefined], ['car', 'bike', 'truck'])
    ).toEqual(['bike', 'truck']);
  });
});

describe('chipActiveValuesHandler in patterns/TagCloud', () => {
  it('should correctly get tag cloud chip active values without maxSelection', () => {
    expect(chipActiveValuesHandler('car', 'car')).toEqual([]);
    expect(chipActiveValuesHandler('car', 'bike')).toEqual(['bike', 'car']);
    expect(chipActiveValuesHandler('car', ['car'])).toEqual([]);
    expect(chipActiveValuesHandler('car', ['car', 'bike'])).toEqual(['bike']);
    expect(chipActiveValuesHandler('car', ['car', 'bike', 'truck'])).toEqual(['bike', 'truck']);
    expect(chipActiveValuesHandler('car', ['car', 'bike', 'truck', 'bus'])).toEqual([
      'bike',
      'truck',
      'bus',
    ]);
    expect(chipActiveValuesHandler('car', ['car', 'bike', 'truck', 'bus', 'van'])).toEqual([
      'bike',
      'truck',
      'bus',
      'van',
    ]);
    expect(chipActiveValuesHandler('car', [])).toEqual(['car']);
    expect(chipActiveValuesHandler('car', ['bike'])).toEqual(['bike', 'car']);
    expect(chipActiveValuesHandler('car', ['bike', 'truck'])).toEqual(['bike', 'truck', 'car']);
    expect(chipActiveValuesHandler('car', ['bike', 'truck', 'bus'])).toEqual([
      'bike',
      'truck',
      'bus',
      'car',
    ]);
    expect(chipActiveValuesHandler('car', ['bike', 'truck', 'bus', 'van'])).toEqual([
      'bike',
      'truck',
      'bus',
      'van',
      'car',
    ]);
    expect(chipActiveValuesHandler(null, [])).toEqual([]);
    expect(chipActiveValuesHandler(undefined, [])).toEqual([]);
    expect(chipActiveValuesHandler(null, ['car'])).toEqual(['car']);
    expect(chipActiveValuesHandler(undefined, ['car'])).toEqual(['car']);
    expect(chipActiveValuesHandler(null, ['car', 'bike'])).toEqual(['car', 'bike']);
    expect(chipActiveValuesHandler(undefined, ['car', 'bike'])).toEqual(['car', 'bike']);
  });

  it('should correctly get tag cloud chip active values with maxSelection', () => {
    expect(chipActiveValuesHandler('car', 'car', 0)).toEqual([]);
    expect(chipActiveValuesHandler('car', 'bike', 0)).toEqual(['bike', 'car']);
    expect(chipActiveValuesHandler('car', 'car', 1)).toEqual([]);
    expect(chipActiveValuesHandler('car', 'bike', 1)).toEqual(['bike', 'car']);
    expect(chipActiveValuesHandler('car', 'car', 2)).toEqual([]);
    expect(chipActiveValuesHandler('car', 'bike', 2)).toEqual(['bike', 'car']);
    expect(chipActiveValuesHandler('car', ['car'], 0)).toEqual([]);
    expect(chipActiveValuesHandler('car', ['car'], 1)).toEqual([]);
    expect(chipActiveValuesHandler('car', ['car'], 2)).toEqual([]);
    expect(chipActiveValuesHandler('car', [], 0)).toEqual(['car']);
    expect(chipActiveValuesHandler('car', [], 1)).toEqual(['car']);
    expect(chipActiveValuesHandler('car', [], 2)).toEqual(['car']);
    expect(chipActiveValuesHandler('car', ['bike'], 0)).toEqual(['bike', 'car']);
    expect(chipActiveValuesHandler('car', ['bike'], 1)).toEqual(['bike']);
    expect(chipActiveValuesHandler('car', ['bike'], 2)).toEqual(['bike', 'car']);
    expect(chipActiveValuesHandler('car', ['bike', 'truck'], 0)).toEqual(['bike', 'truck', 'car']);
    expect(chipActiveValuesHandler('car', ['bike', 'truck'], 2)).toEqual(['bike', 'truck']);
    expect(chipActiveValuesHandler('car', ['bike', 'truck'], 5)).toEqual(['bike', 'truck', 'car']);
    expect(chipActiveValuesHandler('car', ['bike', 'truck', 'bus'], 0)).toEqual([
      'bike',
      'truck',
      'bus',
      'car',
    ]);
    expect(chipActiveValuesHandler('car', ['bike', 'truck', 'bus'], 3)).toEqual([
      'bike',
      'truck',
      'bus',
    ]);
    expect(chipActiveValuesHandler('car', ['bike', 'truck', 'bus'], 5)).toEqual([
      'bike',
      'truck',
      'bus',
      'car',
    ]);
    expect(chipActiveValuesHandler('car', ['bike', 'truck', 'bus', 'van'], 0)).toEqual([
      'bike',
      'truck',
      'bus',
      'van',
      'car',
    ]);
    expect(chipActiveValuesHandler('car', ['bike', 'truck', 'bus', 'van'], 4)).toEqual([
      'bike',
      'truck',
      'bus',
      'van',
    ]);
    expect(chipActiveValuesHandler('car', ['bike', 'truck', 'bus', 'van'], 5)).toEqual([
      'bike',
      'truck',
      'bus',
      'van',
      'car',
    ]);
    expect(chipActiveValuesHandler(null, [], 0)).toEqual([]);
    expect(chipActiveValuesHandler(null, [], 1)).toEqual([]);
    expect(chipActiveValuesHandler(null, [], 2)).toEqual([]);
    expect(chipActiveValuesHandler(undefined, [], 0)).toEqual([]);
    expect(chipActiveValuesHandler(undefined, [], 1)).toEqual([]);
    expect(chipActiveValuesHandler(undefined, [], 2)).toEqual([]);
    expect(chipActiveValuesHandler(null, ['car'], 0)).toEqual(['car']);
    expect(chipActiveValuesHandler(null, ['car'], 1)).toEqual(['car']);
    expect(chipActiveValuesHandler(null, ['car'], 2)).toEqual(['car']);
    expect(chipActiveValuesHandler(undefined, ['car'], 0)).toEqual(['car']);
    expect(chipActiveValuesHandler(undefined, ['car'], 1)).toEqual(['car']);
    expect(chipActiveValuesHandler(undefined, ['car'], 2)).toEqual(['car']);
    expect(chipActiveValuesHandler(null, ['car', 'bike'], 0)).toEqual(['car', 'bike']);
    expect(chipActiveValuesHandler(null, ['car', 'bike'], 2)).toEqual(['car', 'bike']);
    expect(chipActiveValuesHandler(null, ['car', 'bike'], 5)).toEqual(['car', 'bike']);
    expect(chipActiveValuesHandler(undefined, ['car', 'bike'], 0)).toEqual(['car', 'bike']);
    expect(chipActiveValuesHandler(undefined, ['car', 'bike'], 2)).toEqual(['car', 'bike']);
    expect(chipActiveValuesHandler(undefined, ['car', 'bike'], 5)).toEqual(['car', 'bike']);
  });
  it('should correctly get tag cloud chip active values with null or undefined value', () => {
    expect(chipActiveValuesHandler(null, null)).toEqual([]);
    expect(chipActiveValuesHandler(undefined, null)).toEqual([]);
    expect(chipActiveValuesHandler(null, undefined)).toEqual([]);
    expect(chipActiveValuesHandler(undefined, undefined)).toEqual([]);
    expect(chipActiveValuesHandler('car', null)).toEqual(['car']);
    expect(chipActiveValuesHandler('car', undefined)).toEqual(['car']);
  });
});
