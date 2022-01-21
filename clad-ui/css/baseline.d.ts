export default baselineStyles;
/**
 * These global styles should be comprised of element and attribute selectors only
 * which are used as normalize and scalffoding CSS
 *
 * Some notable defaults:
 *
 * - The box-sizing is globally set on every element—including *::before and *::after, to border-box. This ensures that the declared width of element is never exceeded due to padding or border
 * - The &lt;body&gt; also sets a global font-family, font-weight, line-height, and color. This is inherited later by some form elements to prevent font inconsistencies
 * - Colors for hyperlinks' :link, :active and :hover from theme
 * - Headings' font sizes scale from theme
 * - Other normalization that are based from normalize.css
 */
declare const baselineStyles: string;
