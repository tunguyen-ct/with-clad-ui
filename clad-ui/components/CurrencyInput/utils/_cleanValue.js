import escapeRegExp from 'lodash/escapeRegExp';

/**
 * Remove group separator from value eg. 1,000 > 1000
 */
const removeSeparators = (value, separator = ',') => {
  const reg = new RegExp(escapeRegExp(separator), 'g');
  return value ? value.replace(reg, '') : '';
};

/**
 * Remove invalid characters
 */
const removeInvalidChars = (value, validChars) => {
  const chars = escapeRegExp(validChars.join(''));
  const reg = new RegExp(`[^\\d${chars}]`, 'gi');
  return value.replace(reg, '');
};

/**
 * Remove prefix, separators and extra decimals from value
 */
const cleanValue = ({
  value,
  separator = ',',
  decimalSeparator = '.',
  decimalsLimit = 0,
  allowNegativeValue = false,
}) => {
  if (value === '-') {
    return value;
  }

  const reg = new RegExp(`((^|\\D)-\\d)|(-${escapeRegExp('')})`);
  const isNegative = reg.test(value);

  const withoutSeparators = removeSeparators(value, separator);
  const withoutInvalidChars = removeInvalidChars(withoutSeparators, [separator, decimalSeparator]);

  const valueOnly = withoutInvalidChars;

  const includeNegative = isNegative && allowNegativeValue ? '-' : '';

  if (decimalSeparator && valueOnly.includes(decimalSeparator)) {
    const [int, decimals] = withoutInvalidChars.split(decimalSeparator);
    const trimmedDecimals = decimalsLimit && decimals ? decimals.slice(0, decimalsLimit) : decimals;
    const includeDecimals = decimalsLimit !== 0 ? `${decimalSeparator}${trimmedDecimals}` : '';

    return `${includeNegative}${int}${includeDecimals}`;
  }

  return `${includeNegative}${valueOnly}`;
};

export default cleanValue;
