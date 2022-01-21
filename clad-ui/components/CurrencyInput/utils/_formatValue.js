import escapeRegExp from 'lodash/escapeRegExp';

/**
 * Before converting to Number, decimal separator has to be .
 */
const replaceDecimalSeparator = (value, decimalSeparator, isNegative) => {
  let newValue = value;
  if (decimalSeparator && decimalSeparator !== '.') {
    newValue = newValue.replace(RegExp(escapeRegExp(decimalSeparator), 'g'), '.');
    if (isNegative && decimalSeparator === '-') {
      newValue = `-${newValue.slice(1)}`;
    }
  }
  return newValue;
};

const replaceParts = (
  parts,
  { separator, decimalSeparator, decimalScale, disableSeparators = false }
) =>
  parts
    .reduce(
      (prev, { type, value }) => {
        if (type === 'currency') {
          return [...prev, value];
        }

        if (type === 'group') {
          return !disableSeparators ? [...prev, separator !== undefined ? separator : value] : prev;
        }

        if (type === 'decimal') {
          if (decimalScale !== undefined && decimalScale === 0) {
            return prev;
          }

          return [...prev, decimalSeparator !== undefined ? decimalSeparator : value];
        }

        if (type === 'fraction') {
          return [...prev, decimalScale !== undefined ? value.slice(0, decimalScale) : value];
        }

        return [...prev, value];
      },
      ['']
    )
    .join('');

/**
 * Format value with decimal separator, group separator and prefix
 */
const formatValue = (options) => {
  const { value: _value, decimalSeparator, decimalScale } = options;

  if (_value === '' || _value === undefined) {
    return '';
  }

  if (_value === '-') {
    return '-';
  }

  const isNegative = new RegExp('^\\d?-\\d').test(_value);
  const value =
    decimalSeparator !== '.'
      ? replaceDecimalSeparator(_value, decimalSeparator, isNegative)
      : _value;

  const numberFormatter = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimalScale || 0,
    maximumFractionDigits: 20,
  });

  const parts = numberFormatter.formatToParts(Number(value));

  let formatted = replaceParts(parts, options);

  // Include decimal separator if user input ends with decimal separator
  const includeDecimalSeparator = _value.slice(-1) === decimalSeparator ? decimalSeparator : '';

  const [, decimals] = value.match(RegExp('\\d+\\.(\\d+)')) || [];

  // Keep original decimal padding if no decimalScale
  if (decimalScale === undefined && decimals && decimalSeparator) {
    if (formatted.includes(decimalSeparator)) {
      formatted = formatted.replace(
        RegExp(`(\\d+)(${escapeRegExp(decimalSeparator)})(\\d+)`, 'g'),
        `$1$2${decimals}`
      );
    } else {
      formatted = `${formatted}${decimalSeparator}${decimals}`;
    }
  }

  return [formatted, includeDecimalSeparator].join('');
};

export default formatValue;
