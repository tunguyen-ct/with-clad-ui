import { css } from 'linaria';
import theme from '@clad-ui/theme';

const { colors, space, fontSizes, fonts, fontWeights, lineHeights, radii } = theme;

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
const baselineStyles = css`
  /* stylelint-disable selector-pseudo-class-no-unknown, property-no-vendor-prefix, no-descending-specificity, declaration-no-important */
  :global() {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    :root {
      font-size: 100%;
    }

    body {
      margin: 0;
      font-family: ${fonts.body};
      font-size: ${fontSizes.body};
      font-weight: ${fontWeights.normal};
      line-height: ${lineHeights.md};
      color: ${colors.text};
      text-align: left;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    [tabindex='-1']:focus:not(:focus-visible) {
      outline: 0 !important;
    }

    hr {
      margin: ${space.xs} 0;
      color: ${colors.line};
      background-color: currentColor;
      border: 0;
      opacity: 1;
    }

    hr:not([size]) {
      height: 1px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
      margin-bottom: ${space.xs};
      font-family: ${fonts.heading};
      font-style: normal;
      font-weight: ${fontWeights.bold};
      line-height: ${lineHeights.md};
      color: ${colors.text};
    }

    h1 {
      font-size: ${fontSizes.h1};
    }

    h2 {
      font-size: ${fontSizes.h2};
    }

    h3 {
      font-size: ${fontSizes.h3};
    }

    h4 {
      font-size: ${fontSizes.h4};
    }

    h5 {
      font-size: ${fontSizes.h5};
    }

    h6 {
      font-size: ${fontSizes.h6};
    }

    p {
      margin-top: 0;
      margin-bottom: ${space.xs};
    }

    abbr[title],
    abbr[data-original-title] {
      text-decoration: underline;
      text-decoration: underline dotted;
      cursor: help;
      text-decoration-skip-ink: none;
    }

    address {
      margin-bottom: 1rem;
      font-style: normal;
      line-height: inherit;
    }

    ol,
    ul {
      padding-left: 2rem;
    }

    ol,
    ul,
    dl {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
      margin-bottom: 0;
    }

    dt {
      font-weight: ${fontWeights.bold};
    }

    dd {
      margin-bottom: 0.5rem;
      margin-left: 0;
    }

    blockquote {
      margin: 0 0 1rem;
    }

    b,
    strong {
      font-weight: ${fontWeights.bold};
    }

    small {
      font-size: ${fontSizes.xs};
    }

    sub,
    sup {
      position: relative;
      font-size: ${fontSizes.xxs};
      line-height: 0;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }

    a {
      color: ${colors.link};
      text-decoration: none;

      &:visited,
      &:active {
        color: ${colors.linkActive};
      }

      &:hover {
        color: ${colors.linkHover};
      }
    }

    a:not([href]) {
      &,
      &:hover {
        color: inherit;
        text-decoration: none;
      }
    }

    pre,
    code,
    kbd,
    samp {
      font-family: ${fonts.monospace};
      font-size: ${fontSizes.xs};
    }

    code {
      font-family: ${fonts.monospace};
      color: ${colors.text};
      word-wrap: break-word;

      a > & {
        color: inherit;
      }
    }

    pre {
      display: block;
      margin-top: 0;
      margin-bottom: 1rem;
      overflow: auto;
      font-size: ${fontSizes.xs};
      color: ${colors.text};

      code {
        font-size: inherit;
        color: inherit;
        word-break: normal;
      }
    }

    kbd {
      padding: ${space.xxxs} ${space.xxxs};
      font-size: ${fontSizes.sm};
      color: ${colors.text};
      background-color: ${colors.orange3};
      border-radius: ${radii.xs};

      kbd {
        padding: 0;
        font-size: 1em;
        font-weight: regular;
      }
    }

    figure {
      margin: 0 0 1rem;
    }

    img {
      vertical-align: middle;
    }

    /*svg {
      overflow: hidden;
      vertical-align: middle;
    }*/

    table {
      border-collapse: collapse;
    }

    caption {
      padding-top: ${space.xxxs};
      padding-bottom: ${space.xxxs};
      color: ${colors.text};
      text-align: left;
      caption-side: bottom;
    }

    th {
      text-align: inherit;
    }

    label {
      display: inline-block;
      margin-bottom: ${space.xs};
    }

    button {
      border-radius: ${radii.xs};
    }

    input,
    button,
    select,
    optgroup,
    textarea {
      margin: 0;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    button,
    input {
      overflow: visible;
    }

    button,
    select {
      text-transform: none;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
      -webkit-appearance: button;
      border-width: 0;
      /* normalize button horizontal paddings */
      padding-left: ${space.xs};
      padding-right: ${space.xs};

      &:not(:disabled) {
        cursor: pointer;
      }
    }

    button:focus {
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }

    select {
      word-wrap: normal;
    }

    [list]::-webkit-calendar-picker-indicator {
      display: none;
    }

    ::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }

    input[type='date'],
    input[type='time'],
    input[type='datetime-local'],
    input[type='month'] {
      -webkit-appearance: textfield;
    }

    textarea {
      overflow: auto;
      resize: vertical;
    }

    fieldset {
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }

    legend {
      float: left;
      width: 100%;
      padding: 0;
      margin-bottom: ${space.xs};
      font-size: ${fontSizes.xs};
      font-weight: ${fontWeights.normal};
      line-height: inherit;
      color: inherit;
      white-space: normal;
    }

    mark {
      padding: ${space.xxxs};
      background-color: ${colors.orange3};
    }

    progress {
      vertical-align: baseline;
    }

    ::-webkit-datetime-edit {
      overflow: visible;
      line-height: 0;
    }

    [type='search'] {
      outline-offset: -2px;
      -webkit-appearance: textfield;
    }

    ::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    ::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    ::-webkit-file-upload-button {
      font: inherit;
      -webkit-appearance: button;
    }

    output {
      display: inline-block;
    }

    summary {
      display: list-item;
      cursor: pointer;
    }

    template {
      display: none;
    }

    main {
      display: block;
    }

    [hidden] {
      display: none !important;
    }
  }
`;

export default baselineStyles;
