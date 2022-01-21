import css from '@styled-system/css';
import theme from '@clad-ui/theme';
/**
 * @typedef {import('styled-system__css').CSSProperties} CSSProperties
 * @typedef {import('styled-system__css').SystemStyleObject} SystemStyleObject
 */
/**
 * @typedef { keyof theme['colors'] } Colors
 * @typedef { keyof theme['fonts'] } Fonts
 * @typedef { keyof theme['fontWeights'] } FontWeights
 * @typedef { keyof theme['gradients'] } Gradients
 * @typedef { keyof theme['space'] } Space
 * @typedef { keyof theme['fontSizes'] } FontSizes
 * @typedef { keyof theme['shadows']  } Shadows
 * @typedef { keyof theme['borderWidths']} BorderWidths
 * @typedef { keyof theme['radii'] } Radii
 * @typedef { keyof theme['sizes'] } Sizes
 */

/**
 * @typedef {object} ThemableStyle - Themeable style object
 * @property {Fonts | Fonts[]}                 [fontFamily]
 * @property {FontSizes | FontSizes[]}         [fontSize]
 * @property {FontWeights | FontWeights[]}     [fontWeight]
 * @property {string | string[]}               [lineHeight]
 * @property {string | string[]}               [letterSpacing]
 * @property {Colors | Colors[]}               [color]
 * @property {Colors | Colors[]}               [backgroundColor]
 * @property {Colors | Colors[]}               [bg] short hand for background color
 * @property {Space | Space[]}                 [margin]
 * @property {Space | Space[]}                 [m]
 * @property {Space | Space[]}                 [marginTop]
 * @property {Space | Space[]}                 [mt]
 * @property {Space | Space[]}                 [marginRight]
 * @property {Space | Space[]}                 [mr]
 * @property {Space | Space[]}                 [marginBottom]
 * @property {Space | Space[]}                 [mb]
 * @property {Space | Space[]}                 [marginLeft]
 * @property {Space | Space[]}                 [ml]
 * @property {Space | Space[]}                 [marginX]
 * @property {Space | Space[]}                 [mx]
 * @property {Space | Space[]}                 [marginY]
 * @property {Space | Space[]}                 [my]
 * @property {Space | Space[]}                 [padding]
 * @property {Space | Space[]}                 [p]
 * @property {Space | Space[]}                 [paddingTop]
 * @property {Space | Space[]}                 [pt]
 * @property {Space | Space[]}                 [paddingRight]
 * @property {Space | Space[]}                 [pr]
 * @property {Space | Space[]}                 [paddingBottom]
 * @property {Space | Space[]}                 [pb]
 * @property {Space | Space[]}                 [paddingLeft]
 * @property {Space | Space[]}                 [pl]
 * @property {Space | Space[]}                 [paddingX]
 * @property {Space | Space[]}                 [px]
 * @property {Space | Space[]}                 [paddingY]
 * @property {Space | Space[]}                 [py]
 * @property {Space | Space[]}                 [top]
 * @property {Space | Space[]}                 [bottom]
 * @property {Space | Space[]}                 [left]
 * @property {Space | Space[]}                 [right]
 * @property {string | string[]}               [border]
 * @property {string | string[]}               [borderTop]
 * @property {string | string[]}               [borderRight]
 * @property {string | string[]}               [borderBottom]
 * @property {string | string[]}               [borderLeft]
 * @property {Colors | Colors[]}               [borderColor]
 * @property { BorderWidths | BorderWidths[]}  [borderWidth]
 * @property {string|string[]}                 [borderStyle]
 * @property {Radii | Radii[] }                [borderRadius]
 * @property {Shadows | Shadows[]}             [boxShadow]
 * @property {Shadows | Shadows[]}             [textShadow]
 * @property {number | number[]}               [zIndex]
 * @property {Sizes | Sizes[]}                 [width]
 * @property {Sizes | Sizes[]}                 [minWidth]
 * @property {Sizes | Sizes[]}                 [maxWidth]
 * @property {Sizes | Sizes[]}                 [height]
 * @property {Sizes | Sizes[]}                 [minHeight]
 * @property {Sizes | Sizes[]}                 [maxHeight]
 * @property {Sizes | Sizes[]}                 [size]
 */

/**
 * @typedef {Omit<CSSProperties, keyof ThemableStyle>} StandardCSSProperties All standard CSS properties as regular object, except those from ThemableStyle
 */

/**
 * Helper get CSS from theme-aware style object and theme
 * @param {ThemableStyle | StandardCSSProperties} styles
 * @return {import('styled-system__css').CSSObject}
 */
export default function sx(styles = {}) {
  // @ts-ignore ThemableStyle is not compatible with SystemStyleObject
  return css(styles)(theme);
}
