export default normalizeArrowKey;
/**
 * Shamelessly copied from https://github.com/downshift-js/downshift/blob/ce6c4e1a434bb483cf1f0386937cb9aa313220ab/src/utils.js
 *
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
 * @param {Object} event a keyboardEvent object
 * @return {String} keyboard key
 */
declare function normalizeArrowKey(event: any): string;
