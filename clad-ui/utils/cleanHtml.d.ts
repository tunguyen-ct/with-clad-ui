export default cleanHtml;
/**
 * Remove from `dangerousHtml` all URL with javascript: scheme and unwanted tags, including tags with closing tag and self-closed tags
 *
 * @param {string} dangerousHtml unsanitized HTML string
 * @returns {string} clean HTML string
 */
declare function cleanHtml(dangerousHtml?: string): string;
