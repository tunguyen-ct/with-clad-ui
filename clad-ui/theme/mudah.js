/**
 * mudah.my theme
 * NOTE: currently it's just for experiment
 */
// utilities

/**
 * Map numeric values to CSS px values
 * @param {*} v
 */
const px = (v) => `${v}px`;

/**
 * @breakpoints
 *
 * When used with `sx` helper, 0 index means for all viewports (mobile first):
 *
 * ```
 * sx({
 *   // applies font size small to all viewport widths,
 *   // font size medium above the first breakpoint,
 *   // font size large above the next breakpoint
 *   fontSize: [ 'small', 'medium', 'large' ]
 * })
 * ```
 */
const breakpoints = ['576px', '768px', '992px', '1200px', '1400px'];
// index in sx:         1,       2,       3,       4,        5  (not a mistake, 0 is smallest viewport)

/**
 * @mediaQueries
 *
 * Example:
 * @media ${theme.mediaQueries.tablet} {
 *   font-size: ${theme.fontSize.small}
 * }
 */
const mediaQueries = {
  tablet: `screen and (min-width: ${breakpoints[1]})`,
  desktop: `screen and (min-width: ${breakpoints[2]})`,
};

/**
 * @space
 */
// idx: 0, 1, 2,  3,  4,  5,  6,  7,  8,  9,  10
const space = [2, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128].map(px);

/**
 * @sizes
 */
// index:              0,  1,  2,  3,  4,  5,  6,  7,  8,   9,
const iconSizeScale = [16, 20, 22, 24, 32, 40, 50, 75, 100, 105].map(px);

const sizes = {
  icons: iconSizeScale,
  vW: '100vw',
  vH: '100vh',
  [1 / 4]: '25%',
  [1 / 3]: '33.33%',
  [1 / 2]: '50%',
  [2 / 3]: '66.66%',
  [3 / 4]: '75%',
  1: '100%',
};

/**
 * @fonts
 */
const fonts = {
  body: 'Roboto, sans-serif',
  heading: 'inherit',
  monospace: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
};

/**
 * @fontSizes
 */
// index:               0,  1,  2,  3,  4,  5,  6,  7,  8,  9,
const fontSizeScale = [11, 12, 13, 14, 15, 16, 18, 20, 24, 32].map(px);

const fontSizes = {
  ...fontSizeScale,
  h1: fontSizeScale[9],
  h2: fontSizeScale[8],
  h3: fontSizeScale[7],
};

/**
 * @lineHeights
 */
// index:            0,   1,   2,   3,   4,   5
const lineHeights = [1, 1.25, 1.5, 1.75, 2, 2.5];

/**
 * @fontWeights
 */
const fontWeights = {
  regular: 400,
  bold: 700,
  body: 400, // regular
  heading: 700, // bold
};

/**
 * @colors
 */

const neutrals = {
  black: '#222222',
  gray1: '#9B9B9B',
  gray2: '#CACACA',
  gray3: '#E8E8E8',
  gray4: '#F4F4F4',
  white: '#FFFFFF',
};

const reds = {
  red1: '#A20214',
  red2: '#D0021B',
  red3: '#FD213B',
  red4: '#FFD7DB',
};

const oranges = {
  orange1: '#CC7A00',
  orange2: '#FE9900',
  orange3: '#FFB647',
  orange4: '#FFEFD6',
};

const yellows = {
  yellow1: '#CC9600',
  yellow2: '#FFBA00',
  yellow3: '#FFCE47',
  yellow4: '#FFF4D6',
};

const greens = {
  green1: '#42782B',
  green2: '#589F39',
  green3: '#7AC45A',
  green4: '#E7F4E1',
};

const teals = {
  teal1: '#005C66',
  teal2: '#0094A3',
  teal3: '#00CAE0',
  teal4: '#D6FBFF',
};

const blues = {
  blue1: '#2275D3',
  blue2: '#4A90E2',
  blue3: '#84B4EB',
  blue4: '#DCEAF9',
  darkblue1: '#2A5079',
  darkblue2: '#38699F',
  darkblue3: '#598DC5',
  darkblue4: '#E1EAF4',
};

const semantics = {
  /**
   * Main body text color
   * @type {string}
   */
  text: neutrals.black,
  /**
   * De-emphasized / footer text color
   * @type {string}
   */
  textLighter: neutrals.gray1,
  /**
   * Regular hyperlinks color
   * @type {string}
   */
  link: blues.darkblue2, // #38699F
  /**
   * Regular hyperlinks hover / active color
   * @type {string}
   */
  linkActive: blues.blue2, // #4A90E2
  /**
   * Color for lines, borders
   * @type {string}
   */
  line: neutrals.gray2, // #CACACA
  /**
   * Body background color
   * @type {string}
   */
  background: neutrals.gray4,
  /**
   * Primary brand color for links, buttons, etc.
   * @type {string}
   */
  primary: blues.blue1, // #2275D3
  /**
   * A secondary brand color for alternative styling
   * @type {string}
   */
  secondary: greens.green3,
  /**
   * A contrast color for emphasizing UI
   * @type {string}
   */
  accent: blues.blue3, // #84B4EB
  /**
   * A background color for highlighting text
   * @type {string}
   */
  highlight: yellows.yellow4,
  /**
   * A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
   * @type {string}
   */
  muted: neutrals.gray3,
  /**
   * Subtle information or details historic in nature. Often already actioned & in the past. No priority required due to the lack of importance or change.
   * @type {string}
   */
  neutral: neutrals.gray1,
  /**
   * Super important, high urgency, high risk, errors...
   * @type {string}
   */
  critical: reds.red2, // #D0021B
  /**
   * Guidance & advice. Generally from the UI or business. Functional, calm and non urgent.
   * @type {string}
   */
  info: blues.blue1, // #2275D3
  /**
   * Good vibes & new things! Wants to get the user to act on something or be aware something good happened.
   * @type {string}
   */
  positive: greens.green3, // #7AC45A
  /**
   * You should be aware something is happening or mid-way through a process. Could be a risk or an item that needs to be acted upon.
   * @type {string}
   */
  caution: yellows.yellow3, // #FFCE47
};

const colors = {
  ...semantics,
  ...neutrals,
  ...reds,
  ...oranges,
  ...yellows,
  ...greens,
  ...teals,
  ...blues,
};

/**
 * @borders
 */
const borders = {
  cardBorder: '1px solid',
};

/**
 * @borderWidths
 */
const borderWidths = [];

/**
 * @borderStyles
 */
const borderStyles = [];

/**
 * @radii
 * border radius
 */
// index:             0, 1, 2, 3,  4,  5
const radii = [0, 3, 4, 6, 12, 20].map(px);

/**
 * @shadows
 * box-shadow, text-shadow
 */
// index:                0,      1
const shadows = ['none', '0 1px 7px rgba(0,0,0,.3)'];

/**
 * @letterSpacings
 */
const letterSpacings = [];

/**
 * @zIndices
 * z-index
 */
const zIndices = [];

/**
 * @gradients This key is NOT standard styled-system's theme specs
 * background-image
 * TODO: to apply to real use case and revise
 */
const gradients = {
  toDark: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 3%, #101426 100%)',
  toLight: 'linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0.00) 100%)',
};

/**
 * Whole theme object
 */
const theme = Object.freeze({
  breakpoints,
  mediaQueries,
  space,
  sizes,
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  colors,
  borders,
  borderWidths,
  borderStyles,
  radii,
  shadows,
  letterSpacings,
  zIndices,
  gradients,
});

export default theme;
