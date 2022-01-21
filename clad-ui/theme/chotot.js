/**
 * chotot.com theme
 * @author Thanh Tran
 */

/**
 * theme.breakpoints
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
 *
 * @type {{
 *   0: '576px'
 *   1: '768px'
 *   2: '992px'
 *   3: '1200px'
 *   4: '1400px'
 *   sm: '576px'
 *   md: '768px'
 *   lg: '992px'
 *   xl: '1200px'
 *   xxl: '1400px'
 * }}
 */
// @ts-ignore breakpoints must be array, but we want to use sm, md keys for easier reference
const breakpoints = ['576px', '768px', '992px', '1200px', '1400px'];
// index in sx:         1,       2,       3,       4,        5  (not a mistake, 0 is smallest viewport)

// @ts-ignore
[breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl, breakpoints.xxl] = breakpoints;

/**
 * theme.mediaQueries
 *
 * Example:
 * ```
 * @media ${theme.mediaQueries.tablet} {
 *   font-size: ${theme.fontSize.small}
 * }
 * ```
 */
const mediaQueries = {
  /**
   * Special media query for occational iPhone 5 (320px) edge casess
   * @type {`screen and (max-width: 320px)` | string}
   */
  ip5: 'screen and (max-width: 320px)',
  /**
   * @type {`screen and (min-width: {breakpoints.md})` | string}
   */
  tablet: `screen and (min-width: ${breakpoints.md})`,
  /**
   * @type {`screen and (min-width: {breakpoints.lg})` | string}
   */
  desktop: `screen and (min-width: ${breakpoints.lg})`,
};

/**
 * Note: We use tuple to define string literal type in each element.
 * This will help to expose the value of the theme key with it's actual value.
 * The only caveat is that we have to duplicate the array into this JSDoc at-type
 *
 * @type {[
  '0px',
  '2px',
  '4px',
  '8px',
  '12px',
  '16px',
  '24px',
  '32px',
  '48px',
  '64px',
  '96px',
  '128px',
]}
 */
const spaceScale = [
  '0px', // 0
  '2px', // 1
  '4px', // 2
  '8px', // 3
  '12px', // 4
  '16px', // 5
  '24px', // 6
  '32px', // 7
  '48px', // 8
  '64px', // 9
  '96px', // 10
  '128px', // 11
];

/**
 * theme.space
 *
 * margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right,
 * padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap
 */
const space = {
  // ...spaceScale,
  none: spaceScale[0],
  xxxs: spaceScale[1],
  xxs: spaceScale[2],
  xs: spaceScale[3],
  sm: spaceScale[4],
  md: spaceScale[5],
  lg: spaceScale[6],
  xl: spaceScale[7],
  xxl: spaceScale[8],
  xxxl: spaceScale[9],
  xxxxl: spaceScale[10],
  xxxxxl: spaceScale[11],
};

/**
 * @type {[
  '12px',
  '16px',
  '20px',
  '24px',
  '28px',
  '32px',
  '48px',
  '64px',
  '80px',
  '96px',
  '128px',
  '236px',
  '352px',
  '480px',
  '636px',
  '864px',
]}
 */
const sizesScale = [
  '12px', // 0
  '16px', // 1
  '20px', // 2
  '24px', // 3
  '28px', // 4
  '32px', // 5
  '48px', // 6
  '64px', // 7
  '80px', // 8
  '96px', // 9
  '128px', // 10
  '236px', // 11
  '352px', // 12
  '480px', // 13
  '636px', // 14
  '864px', // 15
];

/**
 * @type {{
  vW: '100vw',
  vH: '100vh',
  quarter: '25%',
  third: '33.33%',
  half: '50%',
  twoThird: '66.66%',
  threeQuarter: '75%',
  full: '100%',
}}
 */
const sizePct = {
  vW: '100vw',
  vH: '100vh',
  quarter: '25%',
  third: '33.33%',
  half: '50%',
  twoThird: '66.66%',
  threeQuarter: '75%',
  full: '100%',
};

/**
 * theme.sizes
 *
 * width, height, min-width, max-width, min-height, max-height
 */
const sizes = {
  // ...sizesScale,
  ...sizePct,
  xxxs: sizesScale[0],
  xxs: sizesScale[1],
  xs: sizesScale[2],
  sm: sizesScale[3],
  md: sizesScale[4],
  lg: sizesScale[5],
  xl: sizesScale[6],
  xxl: sizesScale[7],
  xxxl: sizesScale[8],
  xxxxl: sizesScale[9],
  xxxxxl: sizesScale[10],
  buttonMaxWidth: sizesScale[12],
  $sm: sizesScale[11],
  $md: sizesScale[13],
  $lg: sizesScale[14],
  $xl: sizesScale[15],
};

/**
 * theme.fonts
 *
 * font-family
 */
const fonts = {
  body: 'Helvetica, Arial, Roboto, sans-serif',
  heading: 'Helvetica, Arial, Roboto, sans-serif',
  monospace: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
  // Allow design system consumers to access font settings but control how and where they load the font.
  urls: {
    body:
      'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap',
  },
};

/**
 * Map px values to rem values with assumption root's font size of 16px
 * @template {number} T
 * @param {T} v
 * @return {`${T}px`}
 */
// @ts-ignore we only need the @return to match with tuple below
const rem = (v) => `${v / 16}rem`;

/**
 * Note: because we convert pixel to rem, we need an augmented tuple type
 * without the rem() function
 */
/**
 * @type {[
  '10px',
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '24px',
  '32px',
]}
 */
const fszScale = [
  rem(10), // 0
  rem(12), // 1
  rem(14), // 2
  rem(16), // 3
  rem(18), // 4
  rem(20), // 5
  rem(24), // 6
  rem(32), // 7
];

/**
 * theme.fontSizes
 *
 * font-size
 */
const fontSizes = {
  // ...fszScale,
  h1: fszScale[7],
  h2: fszScale[6],
  h3: fszScale[5],
  h4: fszScale[4],
  h5: fszScale[3],
  h6: fszScale[2],
  body: fszScale[2],
  xxs: fszScale[0],
  xs: fszScale[1],
  sm: fszScale[2],
  md: fszScale[3],
  lg: fszScale[4],
  xl: fszScale[5],
  xxl: fszScale[6],
  xxxl: fszScale[7],
};

/**
 * @type {[
  1,
  1.25,
  1.5,
  1.75,
  2,
  2.5,
]}
 */
const lh = [
  1, // 0
  1.25, // 1
  1.5, // 2
  1.75, // 3
  2, // 4
  2.5, // 5
];

/**
 * theme.lineHeights
 *
 * line-height
 */
const lineHeights = {
  ...lh,
  xs: lh[0],
  sm: lh[1],
  md: lh[2],
  lg: lh[3],
  xl: lh[4],
  xxl: lh[5],
};

/**
 * theme.fontWeights
 *
 * font-weight
 * @type {{
  body: 400,
  heading: 700,
  normal: 400,
  bold: 700,
}}
 */
const fontWeights = {
  body: 400,
  heading: 700,
  normal: 400,
  bold: 700,
};

/**
 * @type {{
  black: '#222222',
  darkgray1: '',
  darkgray2: '',
  darkgray3: '#777777',
  darkgray4: '',
  gray1: '#9B9B9B',
  gray2: '#CACACA',
  gray3: '#E8E8E8',
  gray4: '#F4F4F4',
  gray5: '#F8F8F8',
  white: '#FFFFFF',
}}
 */
const neutrals = {
  black: '#222222',
  darkgray1: '',
  darkgray2: '',
  darkgray3: '#777777',
  darkgray4: '',
  gray1: '#9B9B9B',
  gray2: '#CACACA',
  gray3: '#E8E8E8',
  gray4: '#F4F4F4',
  gray5: '#F8F8F8',
  white: '#FFFFFF',
};

/**
 * @type {{
  red1: '#A20214',
  red2: '#D0021B',
  red3: '#FD213B',
  red4: '#FFD7DB',
  red5: '#FFEFF1',
}}
 */
const reds = {
  red1: '#A20214',
  red2: '#D0021B',
  red3: '#FD213B',
  red4: '#FFD7DB',
  red5: '#FFEFF1',
};

/**
 * @type {{
  orange1: '#CC7A00',
  orange2: '#FE9900',
  orange3: '#FFB647',
  orange4: '#FFEFD6',
  orange5: '#FFF7EA',
}}
 */
const oranges = {
  orange1: '#CC7A00',
  orange2: '#FE9900',
  orange3: '#FFB647',
  orange4: '#FFEFD6',
  orange5: '#FFF7EA',
};

/**
 * @type {{
  yellow1: '#CC9600',
  yellow2: '#FFBA00',
  yellow3: '#FFCE47',
  yellow4: '#FFF4D6',
  yellow5: '#FFF9EA',
}}
 */
const yellows = {
  yellow1: '#CC9600',
  yellow2: '#FFBA00',
  yellow3: '#FFCE47',
  yellow4: '#FFF4D6',
  yellow5: '#FFF9EA',
};

/**
 * @type {{
  green1: '#42782B',
  green2: '#589F39',
  green3: '#7AC45A',
  green4: '#E4F1DE',
  green5: '#F1F8EE',
}}
 */
const greens = {
  green1: '#42782B',
  green2: '#589F39',
  green3: '#7AC45A',
  green4: '#E4F1DE',
  green5: '#F1F8EE',
};

/**
 * @type {{
  teal1: '#005C66',
  teal2: '#0094A3',
  teal3: '#00CAE0',
  teal4: '#E1F5F7',
}}
 */
const teals = {
  teal1: '#005C66',
  teal2: '#0094A3',
  teal3: '#00CAE0',
  teal4: '#E1F5F7',
};

/**
 * @type {{
  blue1: '#2275D3',
  blue2: '#4A90E2',
  blue3: '#84B4EB',
  blue4: '#E0EFFF',
  blue5: '#EFF6FF',
  darkblue1: '#2A5079',
  darkblue2: '#38699F',
  darkblue3: '#598DC5',
  darkblue4: '#E1EAF4',
}}
 */
const blues = {
  blue1: '#2275D3',
  blue2: '#4A90E2',
  blue3: '#84B4EB',
  blue4: '#E0EFFF',
  blue5: '#EFF6FF',
  darkblue1: '#2A5079',
  darkblue2: '#38699F',
  darkblue3: '#598DC5',
  darkblue4: '#E1EAF4',
};

const semantics = {
  /**
   * Main body text color
   */
  text: neutrals.black,
  /**
   * De-emphasized / footer text color
   */
  textLighter: neutrals.gray1,
  /**
   * Regular hyperlinks color
   */
  link: blues.darkblue2,
  /**
   * Regular hyperlinks hover color
   */
  linkHover: blues.darkblue3,
  /**
   * Regular hyperlinks active color
   */
  linkActive: blues.darkblue1,
  /**
   * Color for borders
   */
  border: neutrals.gray2,
  /**
   * Color for lines, visual separators
   */
  line: neutrals.gray3,
  /**
   * Body background color
   */
  background: neutrals.gray4,
  /**
   * A background color for highlighting text
   */
  highlight: yellows.yellow4,
  /**
   * A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
   */
  muted: neutrals.gray2,
  /**
   * Primary brand color for links, buttons, etc.
   */
  primary: yellows.yellow2,
  /**
   * Primary brand color for links, buttons, etc.
   */
  primaryDark: yellows.yellow1,
  /**
   * Primary brand color for links, buttons, etc.
   */
  primaryLight: yellows.yellow3,
  /**
   * Background color. Primary brand color for links, buttons, etc.
   */
  primaryBG: yellows.yellow4,
  /**
   * Alternative lighter background color to primaryBG.
   */
  primaryBGLight: yellows.yellow5,
  /**
   * A secondary brand color for alternative styling
   */
  secondary: greens.green2,
  /**
   * A secondary brand color for alternative styling
   */
  secondaryDark: greens.green1,
  /**
   * A secondary brand color for alternative styling
   */
  secondaryLight: greens.green3,
  /**
   * Background color. A secondary brand color for alternative styling
   */
  secondaryBG: greens.green4,
  /**
   * Alternative lighter background color to secondaryBG.
   */
  secondaryBGLight: greens.green5,
  /**
   * A contrast color for emphasizing UI
   */
  accent: oranges.orange2,
  /**
   * A contrast color for emphasizing UI
   */
  accentDark: oranges.orange1,
  /**
   * A contrast color for emphasizing UI
   */
  accentLight: oranges.orange3,
  /**
   * Background color. A contrast color for emphasizing UI
   */
  accentBG: oranges.orange4,
  /**
   * Alternative lighter background color to accentBG.
   */
  accentBGLight: oranges.orange5,
  /**
   * Subtle information or details historic in nature. Often already actioned & in the past. No priority required due to the lack of importance or change.
   */
  neutral: neutrals.gray2,
  /**
   * Subtle information or details historic in nature. Often already actioned & in the past. No priority required due to the lack of importance or change.
   */
  neutralDark: neutrals.gray1,
  /**
   * Subtle information or details historic in nature. Often already actioned & in the past. No priority required due to the lack of importance or change.
   */
  neutralLight: neutrals.gray3,
  /**
   * Background color. Subtle information or details historic in nature. Often already actioned & in the past. No priority required due to the lack of importance or change.
   */
  neutralBG: neutrals.gray4,
  /**
   * Alternative lighter background color to neutralBG.
   */
  neutralBGLight: neutrals.gray5,
  /**
   * Super important, high urgency, high risk, errors...
   */
  critical: reds.red2,
  /**
   * Super important, high urgency, high risk, errors...
   */
  criticalDark: reds.red1,
  /**
   * Super important, high urgency, high risk, errors...
   */
  criticalLight: reds.red3,
  /**
   * Background color. Super important, high urgency, high risk, errors...
   */
  criticalBG: reds.red4,
  /**
   * Alternative lighter background color to criticalBG.
   */
  criticalBGLight: reds.red5,
  /**
   * Guidance & advice. Generally from the UI or business. Functional, calm and non urgent.
   */
  info: blues.blue2,
  /**
   * Guidance & advice. Generally from the UI or business. Functional, calm and non urgent.
   */
  infoDark: blues.blue1,
  /**
   * Guidance & advice. Generally from the UI or business. Functional, calm and non urgent.
   */
  infoLight: blues.blue3,
  /**
   * Background color. Guidance & advice. Generally from the UI or business. Functional, calm and non urgent.
   */
  infoBG: blues.blue4,
  /**
   * Alternative lighter background  to infoBG.
   */
  infoBGLight: blues.blue5,
  /**
   * Good vibes & new things! Wants to get the user to act on something or be aware something good happened.
   */
  positive: greens.green2,
  /**
   * Good vibes & new things! Wants to get the user to act on something or be aware something good happened.
   */
  positiveDark: greens.green1,
  /**
   * Good vibes & new things! Wants to get the user to act on something or be aware something good happened.
   */
  positiveLight: greens.green3,
  /**
   * Background color. Good vibes & new things! Wants to get the user to act on something or be aware something good happened.
   */
  positiveBG: greens.green4,
  /**
   * Alternative lighter background color to positiveBG.
   */
  positiveBGLight: greens.green5,
  /**
   * You should be aware something is happening or mid-way through a process. Could be a risk or an item that needs to be acted upon.
   */
  caution: yellows.yellow2,
  /**
   * You should be aware something is happening or mid-way through a process. Could be a risk or an item that needs to be acted upon.
   */
  cautionDark: yellows.yellow1,
  /**
   * You should be aware something is happening or mid-way through a process. Could be a risk or an item that needs to be acted upon.
   */
  cautionLight: yellows.yellow3,
  /**
   * Background color. You should be aware something is happening or mid-way through a process. Could be a risk or an item that needs to be acted upon.
   */
  cautionBG: yellows.yellow4,
  /**
   * Alternative lighter background color to cautionBG.
   */
  cautionBGLight: yellows.yellow5,
};

/**
 * theme.colors
 *
 * color, background-color, border-color
 */
const colors = {
  ...neutrals,
  ...reds,
  ...oranges,
  ...yellows,
  ...greens,
  ...teals,
  ...blues,
  ...semantics,
};

/**
 * @type {[
  '0px',
  '1px',
  '2px',
  '3px',
  '4px',
]}
 */
const bw = [
  '0px', // 0
  '1px', // 1
  '2px', // 2
  '3px', // 3
  '4px', // 4
];

/**
 * theme.borderWidths
 *
 * border-width
 */
const borderWidths = {
  ...bw,
  none: bw[0],
  sm: bw[1],
  md: bw[2],
  lg: bw[3],
  xl: bw[4],
};

/**
 * theme.borderStyles
 *
 * border-style
 */
const borderStyles = {
  none: 'none',
  solid: 'solid',
};

/**
 * theme.borders
 *
 * border, border-top, border-right, border-bottom, border-left
 */
const borders = {
  none: '0',
  sm: `${borderWidths.sm} ${borderStyles.solid} ${colors.line}`,
};

/**
 * @type {[
  '0',
  '2px',
  '4px',
  '8px',
  '14px',
  '20px',
]}
 */
const radiusScales = [
  '0', // 0
  '2px', // 1
  '4px', // 2
  '8px', // 3
  '14px', // 4
  '20px', // 5
];
/**
 * theme.radii
 *
 * border-radius
 */
const radii = {
  // ...radiusScales,
  /**
   * No border radius
   */
  none: radiusScales[0],
  /**
   * Used for images, thumbnails
   */
  xs: radiusScales[1],
  /**
   * Used for buttons
   */
  sm: radiusScales[2],
  /**
   * Unused
   */
  md: radiusScales[3],
  /**
   * Unused
   */
  lg: radiusScales[4],
  /**
   * Used for c2c home page thumbnails
   */
  xl: radiusScales[5],
  /**
   * Used for pill buttons
   *
   * '9999px'
   */
  pill: '9999px',
  /**
   * Used for icons frames
   *
   * '100%'
   */
  circle: '100%',
};

/**
 * theme.shadows
 *
 * box-shadow, text-shadow
 * @type {{
  none: 'none',
  sm: '0px 2px 4px rgba(0,0,0,.5)',
  md: '0px 0px 8px rgba(0,0,0,.3)',
  lg: '2px 2px 14px rgba(0,0,0,.3)',
}}
 */
const shadows = {
  none: 'none',
  sm: '0px 2px 4px rgba(0,0,0,.5)',
  md: '0px 0px 8px rgba(0,0,0,.3)',
  lg: '2px 2px 14px rgba(0,0,0,.3)',
};

/**
 * theme.letterSpacings
 *
 * letter-spacing
 */
const letterSpacings = [];

/**
 * theme.zIndices
 *
 * z-index
 * @type {{
  initial: 'auto',
  neutral: 0,
  up: 1,
  down: -1,
  notification: 1900,
  tooltip: 1800,
  modal: 1700,
  dropdown: 1600,
}}
 */
const zIndices = {
  initial: 'auto',
  neutral: 0,
  up: 1,
  down: -1,
  notification: 1900,
  tooltip: 1800,
  modal: 1700,
  dropdown: 1600,
};

/**
 * theme.gradients
 *
 * background-image
 *
 * @beta This key is NOT standard styled-system's theme specs (hence not applicable for `sx()`)
 * @type {{
  toDark: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 3%, #101426 100%)',
  toLight: 'linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0.00) 100%)',
}}
 */
const gradients = {
  toDark: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 3%, #101426 100%)',
  toLight: 'linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0.00) 100%)',
};

/**
 * theme.durations
 *
 * transition-duration, animation-duration, (js) setTimeout, setInterval
 *
 * Unit-less value in ms
 *
 * @beta This key is NOT standard styled-system's theme specs (hence not applicable for `sx()`).
 *
 * @type {{
  xxxs: 100,
  xxs: 150,
  xs: 300,
  sm: 500,
  md: 1000,
  lg: 2000,
  xl: 4000,
  xxl: 6000,
  xxxl: 8000,
  xxxxl: 10000,
}}
 */
const durations = {
  xxxs: 100,
  xxs: 150,
  xs: 300,
  sm: 500,
  md: 1000,
  lg: 2000,
  xl: 4000,
  xxl: 6000,
  xxxl: 8000,
  xxxxl: 10000,
};

/**
 * The theme object
 *
 * Keys are sorted in alphabetically order
 */
const theme = Object.freeze({
  borders,
  borderStyles,
  borderWidths,
  breakpoints,
  colors,
  durations,
  fonts,
  fontSizes,
  fontWeights,
  gradients,
  letterSpacings,
  lineHeights,
  mediaQueries,
  radii,
  shadows,
  sizes,
  space,
  zIndices,
});

export default theme;
