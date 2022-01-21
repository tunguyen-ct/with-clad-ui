export default cleanValue;
/**
 * Remove prefix, separators and extra decimals from value
 */
declare function cleanValue({ value, separator, decimalSeparator, decimalsLimit, allowNegativeValue, }: {
    value: any;
    separator?: string;
    decimalSeparator?: string;
    decimalsLimit?: number;
    allowNegativeValue?: boolean;
}): any;
