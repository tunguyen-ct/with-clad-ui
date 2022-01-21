/**
 * Remove from `dangerousHtml` all URL with javascript: scheme and unwanted tags, including tags with closing tag and self-closed tags
 *
 * @param {string} dangerousHtml unsanitized HTML string
 * @returns {string} clean HTML string
 */
const cleanHtml = (dangerousHtml = '') => {
  // NOTE: The regexp below is unsafe from catatrophic exponential times, but consider it runs only at client side, the worst case is it will only crash user's browser
  // eslint-disable-next-line chotot/no-unsafe-regex
  const cleanHtmlRegex = /(<(?<t>script|object|applet|embed|frameset|iframe|form|textarea|map)(\s+.*?)?>.*?<\/\k<t>>)|(<(script|object|applet|embed|frameset|iframe|form|textarea|input|button|map)(\s+.*?)?\/?>)|(=.*".*javascript:.*?")/g;
  return dangerousHtml.replace(cleanHtmlRegex, '');
};

export default cleanHtml;
