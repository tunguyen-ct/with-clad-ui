import cleanValue from './_cleanValue';

const cleanValueOptions = {
  decimalSeparator: ',',
  separator: '.',
  decimalsLimit: 3,
  allowNegativeValue: true,
};

describe('Currency Input: test _cleanValue', () => {
  test('clean value correctly with "."', () => {
    expect(cleanValue({ value: '12.222.222', ...cleanValueOptions })).toEqual('12222222');
  });
  test('clean value correctly with ","', () => {
    expect(cleanValue({ value: '12.222.222,555', ...cleanValueOptions })).toEqual('12222222,555');
  });
  test('clean value correctly with negative', () => {
    expect(cleanValue({ value: '-12.222.222,555', ...cleanValueOptions })).toEqual('-12222222,555');
  });
});
