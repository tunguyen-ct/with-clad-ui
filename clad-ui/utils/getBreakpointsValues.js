/**
 * Helper function that generates an array with 5 elements from a number
 * or another array with less than 5 elements
 *
 * @param {number | string | number[] | string[]} value
 * @param {number | string} defaultValue
 * @returns {Array}
 */
const getBreakpointsValues = (value, defaultValue) => {
  // if value is undefined, null or value is an empty array, return an array of default values
  if (value == null || (Array.isArray(value) && value.length === 0)) {
    return [defaultValue, defaultValue, defaultValue, defaultValue, defaultValue];
  } else {
    const result = Array.isArray(value) ? [...value] : [value, value, value, value, value];
    if (result[0] == null) result[0] = defaultValue; // in case the first element is undefined or null
    for (let i = 1; i < 5; i++) {
      // not only to fill in the blanks, but also to replace undefined and null values mixed in
      result[i] = result[i] != null ? result[i] : result[i - 1];
    }
    return result;
  }
};

export default getBreakpointsValues;
