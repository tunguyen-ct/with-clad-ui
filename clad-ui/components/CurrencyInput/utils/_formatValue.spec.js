import formatValue from './_formatValue';

const formatValueOptions = {
  decimalSeparator: ',',
  separator: '.',
};

describe('Currency Input: test _formatValue', () => {
  test('format value correctly', () => {
    expect(formatValue({ ...formatValueOptions, value: '2000000' })).toEqual('2.000.000');
  });
  test('format value with separator and decimal separator correctly', () => {
    expect(
      formatValue({
        ...formatValueOptions,
        decimalSeparator: '.',
        separator: ',',
        value: '2000000.5',
      })
    ).toEqual('2,000,000.5');
  });
  test('format value with negative value correctly', () => {
    expect(
      formatValue({
        ...formatValueOptions,
        decimalSeparator: '.',
        separator: ',',
        value: '-2000000.5',
      })
    ).toEqual('-2,000,000.5');
  });
});
